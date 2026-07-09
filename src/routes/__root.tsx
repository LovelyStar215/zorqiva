import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Layout } from "@/components/site/Layout";
import { brand, brandAssets } from "@/lib/brand";
import { defaultDescription, organizationJsonLd, pageTitle, siteIconLinks } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center px-4 nav-clearance">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-7xl text-(--ink)">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center px-4 nav-clearance">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            This page didn't load
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong on our end. You can try refreshing or head back home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Try again
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: pageTitle("Tek4Real", "Premium IT Agency") },
      { name: "description", content: defaultDescription },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: brand.legalName },
      { name: "theme-color", content: "#1a3d32" },
      { property: "og:site_name", content: brand.name },
      { property: "og:title", content: pageTitle("Tek4Real", "IT Agency") },
      {
        property: "og:description",
        content: "Build. Ship. Scale. With a partner you can trust.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: brand.siteUrl },
      { property: "og:image", content: `${brand.siteUrl}${brandAssets.logoSquare}` },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd()),
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      ...siteIconLinks(),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
