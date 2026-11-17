import type { SVGProps } from 'react';

/** Iconos de trazo simple (los decorativos/de marca se exportaron del Figma a src/assets/icons). */
export type IconName =
  | 'plus'
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-right'
  | 'arrow-up-right'
  | 'check-circle'
  | 'heart'
  | 'clock'
  | 'star'
  | 'search';

const PATHS: Record<IconName, JSX.Element> = {
  plus: <path d="M12 5v14M5 12h14" strokeWidth={3} strokeLinecap="round" />,
  'arrow-left': <path d="M19 12H5m0 0 6-6m-6 6 6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />,
  'arrow-right': <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />,
  'chevron-right': <path d="m9 5 7 7-7 7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />,
  'arrow-up-right': <path d="M7 17 17 7m0 0H8m9 0v9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />,
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <path d="m8 12.5 2.6 2.5L16 9.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" fill="currentColor" stroke="none" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
      <path d="M12 7v5l3 2" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
    </>
  ),
  star: (
    <path
      d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" strokeWidth={2.4} />
      <path d="m20 20-3.5-3.5" strokeWidth={2.4} strokeLinecap="round" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
