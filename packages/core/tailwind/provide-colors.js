export function provideSAOTailwindColors() {
  const colors = [
    ...[
      'background',
      'foreground',
      'primary',
      'warning',
      'error',
      'success',
    ].map(group =>
      [
        'o75',
        'o30',
        'o24',
        'o16',
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ].map(opacity => `branding-${group}-${opacity}`)
    ),
    ...[
      'blue',
      'cyan',
      'teal',
      'lime',
      'yellow',
      'rose',
      'pink',
      'purple',
      'gray',
    ].map(group =>
      [
        '24',
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ].map(opacity => `global-${group}-${opacity}`)
    ),
    ...['primary'].map(group =>
      ['100', '200'].map(opacity => `gradient-${group}-${opacity}`)
    ),
  ];

  return colors.flat().reduce(
    (acc, key) => ({
      ...acc,
      [key]: `rgb(var(--sao-palette-color-${key}-rgb) / <alpha-value>)`,
    }),
    {}
  );
}
