import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  /** Distance to travel on the Y axis before settling */
  y?: number;
  /** Render as a different element (e.g. "li", "section") */
  as?: ElementType;
  /** Re-hide when scrolled out of view so it replays on scroll up */
  once?: boolean;
  className?: string;
};

/**
 * Scroll-reveal wrapper built on IntersectionObserver.
 * Elements start hidden (opacity 0, translated down) and animate in
 * exactly when they enter the viewport. GPU-friendly: only
 * `opacity` + `transform` are animated.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  as: Tag = "div",
  once = true,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "opacity-0",
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? undefined : `translate3d(0, ${y}px, 0)`,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
