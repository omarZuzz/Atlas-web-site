import type { ReactNode } from 'react';

/** Antetítulo dorado en mayúsculas (Biryani Bold 18–20, #CC9B54) */
export function Eyebrow({
  children,
  size = 18,
  className = '',
}: {
  children: ReactNode;
  size?: 18 | 20;
  className?: string;
}) {
  return (
    <p className={className} style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: size, lineHeight: 1.6 }}>
      {children}
    </p>
  );
}
