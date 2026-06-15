import { useEffect } from "react";

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Animated, controllable smooth-scroll for in-page anchor links (`<a href="#id">`).
 * Works regardless of the OS "reduce motion" setting (which disables CSS smooth scroll),
 * accounts for the sticky navbar via `offset`, and lets us tune the `duration`.
 */
export function useSmoothScroll(offset = 84, duration = 750) {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      // leave modifier / non-primary clicks to the browser
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
        return;
      if (!(e.target instanceof Element)) return;

      const link = e.target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const el = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!el) return;

      e.preventDefault();

      const startY = window.scrollY;
      const targetY = Math.max(0, el.getBoundingClientRect().top + startY - offset);
      const dist = targetY - startY;
      if (Math.abs(dist) < 2) return;

      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        window.scrollTo(0, startY + dist * easeInOutCubic(p));
        if (p < 1) requestAnimationFrame(step);
        else history.replaceState(null, "", href);
      };
      requestAnimationFrame(step);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [offset, duration]);
}
