"use client";
import { useRef } from "react";

/**
 * Wraps a card and renders a soft radial glow that follows the
 * user's cursor, positioned via CSS custom properties updated
 * on pointer move. Pure CSS paint — no state, no re-renders.
 */
export default function Spotlight({ children, className = "", color = "15,191,146" }) {
  const ref = useRef(null);

  function handleMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    node.style.setProperty("--spot-x", `${x}px`);
    node.style.setProperty("--spot-y", `${y}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative ${className}`}
      style={{ "--spot-color": color }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(${color}, 0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
