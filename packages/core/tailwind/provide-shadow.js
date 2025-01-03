export function provideSAOTailwindBoxShadow() {
  const shadows = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

  return shadows.reduce(
    (acc, key) => ({
      ...acc,
      [key]: `var(--sao-palette-shadow-${key})`,
    }),
    {}
  );
}
