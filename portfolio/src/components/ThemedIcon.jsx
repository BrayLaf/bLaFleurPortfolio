import { Icon } from '@iconify/react';

// Some Iconify "logos" marks (Prisma, GitHub) render as solid near-black
// shapes, which disappear against the dark theme's background. Invert them
// to a light color when dark mode is active (the default, no `.light` class
// on <html>), and keep the original dark color in light mode.
export default function ThemedIcon({ icon, className = '' }) {
  return (
    <Icon icon={icon} className={`${className} [html:not(.light)_&]:invert`} />
  );
}
