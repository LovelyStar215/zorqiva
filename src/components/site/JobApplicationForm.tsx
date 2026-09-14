import { Icon } from "@/components/site/Icon";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isAllowedResumeFile, MAX_RESUME_BYTES, RESUME_ACCEPT } from "@/lib/careers-form-options";
import { openRoles } from "@/lib/site-data";

const locationOptions = ["Alaska", "Hong Kong", "Remote (US)", "Flexible"] as const;
const remoteRoleOptions = ["Yes", "No"] as const;

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  linkedin: z.string().url("Enter a valid LinkedIn URL"),
  portfolio: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  location: z.enum(locationOptions, { message: "Select a location preference" }),
  remoteRole: z.enum(remoteRoleOptions, { message: "Select whether this is a remote role" }),
  workAuthorization: z.string().min(1, "Tell us your work authorization status"),
  loomVideoLink: z.string().url("Enter a valid Loom video URL"),
  experience: z.string().min(1, "Select your experience level"),
  availability: z.string().min(1, "Select your availability"),
  resume: z
    .custom<File>((val) => typeof File !== "undefined" && val instanceof File, {
      message: "Upload your resume (PDF or Word)",
    })
    .refine((file) => file.size > 0, "Upload your resume (PDF or Word)")
    .refine((file) => file.size <= MAX_RESUME_BYTES, "Resume must be 5MB or smaller")
    .refine(
      (file) => isAllowedResumeFile(file),
      "Upload a PDF or Word document (.pdf, .doc, .docx)",
    ),
  coverLetter: z.string().min(50, "Tell us more about your background (at least 50 characters)"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";

export function JobApplicationForm({
  title = "Apply to zorqiva",
  subtitle = "Our talent team reviews every application and responds within five business days.",
  selectedRoleId,
}: {
  title?: string;
  subtitle?: string;
  selectedRoleId?: string;
}) {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      location: "Flexible",
    },
  });

  const resumeFile = watch("resume");

  useEffect(() => {
    if (selectedRoleId) {
 //     setValue("role", selectedRoleId, { shouldValidate: true });
    }
  }, [selectedRoleId, setValue]);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);

    const payload = new FormData();
    payload.set("role", selectedRoleId ?? "general");
    payload.set("firstName", data.firstName);
    payload.set("lastName", data.lastName);
    payload.set("email", data.email);
    if (data.phone) payload.set("phone", data.phone);
    payload.set("linkedin", data.linkedin);
    if (data.portfolio) payload.set("portfolio", data.portfolio);
    payload.set("location", data.location);
    payload.set("remoteRole", data.remoteRole);
    payload.set("workAuthorization", data.workAuthorization);
    payload.set("loomVideoLink", data.loomVideoLink);
    payload.set("experience", data.experience);
    payload.set("availability", data.availability);
    payload.set("resume", data.resume);
    payload.set("coverLetter", data.coverLetter);
    payload.set("_hp", "");

    try {
      const response = await fetch("/api/job-application", {
        method: "POST",
        body: payload,
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setSubmitError(result.error ?? "We couldn't submit your application. Please try again.");
        return;
      }

      setSent(true);
    } catch {
      setSubmitError(
        "We couldn't submit your application. Please check your connection and try again.",
      );
    }
  };

  if (sent) {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary grid place-items-center mx-auto">
          <Icon icon="solar:verified-check-bold" className="text-4xl" />
        </div>
        <h3 className="font-serif text-3xl text-(--ink) mt-6">Application received.</h3>
        <p className="mt-3 text-muted-foreground max-w-sm mx-auto leading-relaxed">
          Thank you for your interest in Zorqiva. Our talent team will review your application and
          get back to you within five business days.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-serif text-3xl text-(--ink)">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
        <input
          type="text"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-2499.75 h-0 w-0 opacity-0"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {(
            [
              ["First name", "firstName", "text", "Jane"],
              ["Last name", "lastName", "text", "Smith"],
              ["Email", "email", "email", "jane@email.com"],
              ["Phone", "phone", "tel", "+1 (555) 000-0000"],
            ] as const
          ).map(([label, name, type, placeholder]) => (
            <label key={name} className="block">
              <span className="text-xs font-medium text-foreground/70">
                {label}
                {name === "phone" && (
                  <span className="text-muted-foreground font-normal"> (optional)</span>
                )}
              </span>
              <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className={inputClass}
              />
              {errors[name] && (
                <p className="mt-1 text-xs text-destructive">{errors[name]?.message}</p>
              )}
            </label>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-medium text-foreground/70">LinkedIn</span>
            <input
              type="url"
              placeholder="https://linkedin.com/in/you"
              {...register("linkedin")}
              className={inputClass}
            />
            {errors.linkedin && (
              <p className="mt-1 text-xs text-destructive">{errors.linkedin.message}</p>
            )}
          </label>
          <label className="block">
            <span className="text-xs font-medium text-foreground/70">
              Portfolio <span className="text-muted-foreground font-normal">(optional)</span>
            </span>
            <input
              type="url"
              placeholder="https://yoursite.com"
              {...register("portfolio")}
              className={inputClass}
            />
            {errors.portfolio && (
              <p className="mt-1 text-xs text-destructive">{errors.portfolio.message}</p>
            )}
          </label>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-xs font-medium text-foreground/70">Location preference</span>
            <select {...register("location")} className={inputClass}>
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="mt-1 text-xs text-destructive">{errors.location.message}</p>
            )}
          </label>
          <label className="block">
            <span className="text-xs font-medium text-foreground/70">Remote role</span>
            <select {...register("remoteRole")} className={inputClass}>
              <option value="">Select</option>
              {remoteRoleOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.remoteRole && (
              <p className="mt-1 text-xs text-destructive">{errors.remoteRole.message}</p>
            )}
          </label>
          <label className="block">
            <span className="text-xs font-medium text-foreground/70">Availability</span>
            <select {...register("availability")} className={inputClass}>
              <option value="">Select timeframe</option>
              <option value="immediate">Immediately</option>
              <option value="2-weeks">Within 2 weeks</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-months+">2+ months</option>
            </select>
            {errors.availability && (
              <p className="mt-1 text-xs text-destructive">{errors.availability.message}</p>
            )}
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-medium text-foreground/70">Work authorization</span>
            <input
              type="text"
              placeholder="U.S. citizen / work visa / sponsorship"
              {...register("workAuthorization")}
              className={inputClass}
            />
            {errors.workAuthorization && (
              <p className="mt-1 text-xs text-destructive">{errors.workAuthorization.message}</p>
            )}
          </label>
          <label className="block">
            <span className="text-xs font-medium text-foreground/70">Experience</span>
            <select {...register("experience")} className={inputClass}>
              <option value="">Select range</option>
              <option value="0-2">0–2 years</option>
              <option value="3-5">3–5 years</option>
              <option value="6-10">6–10 years</option>
              <option value="10+">10+ years</option>
            </select>
            {errors.experience && (
              <p className="mt-1 text-xs text-destructive">{errors.experience.message}</p>
            )}
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-medium text-foreground/70">Loom video link</span>
          <input
            type="url"
            placeholder="https://loom.com/share/..."
            {...register("loomVideoLink")}
            className={inputClass}
          />
          {errors.loomVideoLink && (
            <p className="mt-1 text-xs text-destructive">{errors.loomVideoLink.message}</p>
          )}
        </label>

        <label className="block">
          <span className="text-xs font-medium text-foreground/70">Resume / CV</span>
          <input
            type="file"
            accept={RESUME_ACCEPT}
            className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary`}
            onChange={(event) => {
              const file = event.target.files?.[0];
              setValue("resume", file as File, { shouldValidate: true, shouldDirty: true });
            }}
          />
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            PDF or Word · max 5MB
            {resumeFile?.name ? ` · Selected: ${resumeFile.name}` : ""}
          </p>
          {errors.resume && (
            <p className="mt-1 text-xs text-destructive">{errors.resume.message}</p>
          )}
        </label>

        <label className="block">
          <span className="text-xs font-medium text-foreground/70">
            Why Zorqiva? Tell us about your experience.
          </span>
          <textarea
            rows={5}
            placeholder="Share your background, what excites you about this role, and the kind of work you want to do…"
            {...register("coverLetter")}
            className={`${inputClass} resize-none`}
          />
          {errors.coverLetter && (
            <p className="mt-1 text-xs text-destructive">{errors.coverLetter.message}</p>
          )}
        </label>

        {submitError && (
          <p className="text-sm text-destructive" role="alert">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60"
        >
          {isSubmitting ? "Submitting…" : "Submit application"}{" "}
          <Icon icon="solar:arrow-right-linear" />
        </button>

        <p className="text-[11px] text-muted-foreground leading-relaxed">
          By submitting, you agree to our{" "}
          <Link to="/privacy" className="text-primary font-semibold hover:underline">
            Privacy Policy
          </Link>
          . We use your information only for recruiting purposes.
        </p>
      </form>
    </>
  );
}
