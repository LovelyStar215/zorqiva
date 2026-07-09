import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { INQUIRY_TYPES } from "@/lib/contact-options";

const inquiryTypes = INQUIRY_TYPES;

const schema = z.object({
  inquiry: z.enum(inquiryTypes),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid work email"),
  company: z.string().min(1, "Company is required"),
  teamSize: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (at least 10 characters)"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({
  title = "Send us a message",
  subtitle = "Our field team responds within one business day.",
  defaultInquiry = "New project",
}: {
  title?: string;
  subtitle?: string;
  defaultInquiry?: (typeof inquiryTypes)[number];
}) {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { inquiry: defaultInquiry },
  });

  const inquiry = watch("inquiry");

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);

    const payload = new FormData();
    payload.set("firstName", data.firstName);
    payload.set("lastName", data.lastName);
    payload.set("email", data.email);
    payload.set("company", data.company);
    payload.set("inquiry", data.inquiry);
    if (data.teamSize) payload.set("teamSize", data.teamSize);
    payload.set("message", data.message);
    payload.set("_hp", "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setSubmitError(result.error ?? "We couldn't send your message. Please try again.");
        return;
      }

      setSent(true);
    } catch {
      setSubmitError("We couldn't send your message. Please check your connection and try again.");
    }
  };

  if (sent) {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary grid place-items-center mx-auto">
          <Icon icon="solar:verified-check-bold" className="text-4xl" />
        </div>
        <h3 className="font-serif text-3xl text-(--ink) mt-6">Message received.</h3>
        <p className="mt-3 text-muted-foreground max-w-sm mx-auto leading-relaxed">
          A member of our team will reach out within one business day. We look forward to speaking
          with you.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-serif text-3xl text-(--ink)">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {inquiryTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setValue("inquiry", type, { shouldValidate: true })}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              inquiry === type
                ? "bg-primary text-primary-foreground shadow-(--shadow-soft)"
                : "border border-border bg-background text-foreground/65 hover:border-primary/30"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <input type="hidden" {...register("inquiry")} />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
        <input
          type="text"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {(
            [
              ["First name", "firstName", "text", "Jane"],
              ["Last name", "lastName", "text", "Smith"],
              ["Work email", "email", "email", "jane@company.com"],
              ["Company", "company", "text", "Acme Inc."],
            ] as const
          ).map(([label, name, type, placeholder]) => (
            <label key={name} className="block">
              <span className="text-xs font-medium text-foreground/70">{label}</span>
              <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
              />
              {errors[name] && (
                <p className="mt-1 text-xs text-destructive">{errors[name]?.message}</p>
              )}
            </label>
          ))}
        </div>

        <label className="block">
          <span className="text-xs font-medium text-foreground/70">Team size</span>
          <select
            {...register("teamSize")}
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
          >
            <option value="">Select range</option>
            <option value="1-25">1–25 employees</option>
            <option value="26-100">26–100 employees</option>
            <option value="101-500">101–500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-medium text-foreground/70">How can we help?</span>
          <textarea
            rows={4}
            placeholder="Tell us about your project, goals, and timeline…"
            {...register("message")}
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
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
          {isSubmitting ? "Sending…" : "Submit request"} <Icon icon="solar:arrow-right-linear" />
        </button>

        <p className="text-[11px] text-muted-foreground leading-relaxed">
          By submitting, you agree to our{" "}
          <Link to="/privacy" className="text-primary font-semibold hover:underline">
            Privacy Policy
          </Link>
          . We never share your information with third parties.
        </p>
      </form>
    </>
  );
}
