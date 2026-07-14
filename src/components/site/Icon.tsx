/**
 * SSR-safe Iconify wrapper.
 * Uses the web component so icon SVGs aren't managed by React's DOM
 * reconciler (avoids intermittent insertBefore / hydration crashes).
 */
export { Icon } from "@iconify-icon/react";
