import { writeFileSync } from 'node:fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

(() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputDir = join(__dirname, '../../', 'dist/packages/core');
  const colors = {
    branding: {
      background: {
        o75: '#587bb3bf',
        o30: '#587bb34d',
        o24: '#587bb33d',
        o16: '#587bb329',
        50: '#d6deec',
        100: '#c8d3e6',
        200: '#acbdd9',
        300: '#90a7cc',
        400: '#7491c0',
        500: '#587bb3',
        600: '#47679b',
        700: '#3a557f',
        800: '#2d4263',
        900: '#1b283c',
      },
      foreground: {
        o75: '#cdd5dfbf',
        o30: '#cdd5df4d',
        o24: '#cdd5df3d',
        o16: '#cdd5df29',
        50: '#ffffff',
        100: '#fcfcfd',
        200: '#f8fafc',
        300: '#eef2f6',
        400: '#e3e8ef',
        500: '#cdd5df',
        600: '#9aa4b2',
        700: '#697586',
        800: '#4b5565',
        900: '#364152',
      },
      primary: {
        o75: '#6172f3bf',
        o30: '#6172f34d',
        o24: '#6172f33d',
        o16: '#6172f329',
        50: '#f5f8ff',
        100: '#eef4ff',
        200: '#e0eaff',
        300: '#c7d7fe',
        400: '#a4bcfd',
        500: '#8098f9',
        600: '#6172f3',
        700: '#444ce7',
        800: '#3538cd',
        900: '#2d31a6',
      },
      warning: {
        o75: '#fdb022bf',
        o30: '#fdb0224d',
        o24: '#fdb0223d',
        o16: '#fdb02229',
        50: '#fffcf5',
        100: '#fffaeb',
        200: '#fef0c7',
        300: '#fedf89',
        400: '#fec84b',
        500: '#fdb022',
        600: '#f79009',
        700: '#dc6803',
        800: '#b54708',
        900: '#93370d',
      },
      error: {
        o75: '#f97066bf',
        o30: '#f970664d',
        o24: '#f970663d',
        o16: '#f9706629',
        50: '#fffbfa',
        100: '#fef3f2',
        200: '#fee4e2',
        300: '#fecdca',
        400: '#fda29b',
        500: '#f97066',
        600: '#f04438',
        700: '#d92d20',
        800: '#b42318',
        900: '#912018',
      },
      success: {
        o75: '#56daaabf',
        o30: '#56daaa4d',
        o24: '#56daaa3d',
        o16: '#56daaa29',
        50: '#ecfbf6',
        100: '#dcf7ed',
        200: '#baf0dc',
        300: '#99e9cc',
        400: '#77e2bb',
        500: '#56daaa',
        600: '#34d399',
        700: '#25aa79',
        800: '#1b7c59',
        900: '#114e38',
      },
    },
    global: {
      blue: {
        24: '#2563eb3d',
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      cyan: {
        24: '#07b6d53d',
        50: '#ebfeff',
        100: '#cdfafe',
        200: '#a6f4fc',
        300: '#67e8f9',
        400: '#20d3ee',
        500: '#20d3ee',
        600: '#088eaf',
        700: '#0e7490',
        800: '#155f75',
        900: '#164f64',
      },
      teal: {
        24: '#0d968b3d',
        50: '#f2fdfa',
        100: '#cbfbf0',
        200: '#98f6e3',
        300: '#5dead5',
        400: '#2bd4bd',
        500: '#14b8a5',
        600: '#0d968b',
        700: '#0f756d',
        800: '#115f5a',
        900: '#134e4a',
      },
      lime: {
        24: '#82cb153d',
        50: '#f7fee7',
        100: '#ebfcca',
        200: '#d9f99f',
        300: '#bef263',
        400: '#a1e633',
        500: '#82cb15',
        600: '#66a50d',
        700: '#4c7b0f',
        800: '#406312',
        900: '#355214',
      },
      yellow: {
        24: '#c88a043d',
        50: '#fefce7',
        100: '#fef9c3',
        200: '#fef08b',
        300: '#fddf49',
        400: '#facc14',
        500: '#e7b008',
        600: '#c88a04',
        700: '#a26107',
        800: '#864e0e',
        900: '#733f12',
      },
      rose: {
        24: '#f43e5c3d',
        50: '#fff0f1',
        100: '#ffe5e7',
        200: '#fecdd3',
        300: '#fda5af',
        400: '#fb6f84',
        500: '#f43e5c',
        600: '#e21d48',
        700: '#bf123d',
        800: '#a1123a',
        900: '#861336',
      },
      pink: {
        24: '#ec46993d',
        50: '#fdf2f8',
        100: '#fce8f4',
        200: '#fbd0e8',
        300: '#f9a9d5',
        400: '#f471b5',
        500: '#ec4699',
        600: '#db2979',
        700: '#bf185d',
        800: '#9b174c',
        900: '#811842',
      },
      purple: {
        24: '#9234ea3d',
        50: '#faf5ff',
        100: '#f2e5ff',
        200: '#ead6ff',
        300: '#d8b4fe',
        400: '#bf83fc',
        500: '#a855f7',
        600: '#9234ea',
        700: '#7e22ce',
        800: '#6a21a6',
        900: '#591c87',
      },
      gray: {
        24: '#5252523d',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
    },
  };
  const images = {
    gradient: {
      primary: {
        100: 'linear-gradient(90deg, #4776e6 0%, #7b54e9 100%)',
        200: 'linear-gradient(90deg, #7b54e9 0%, #4776e6 100%)',
      },
    },
  };
  const shadows = {
    xs: '0 1px 2px 0 #1018280d',
    sm: '0 1px 3px 0 #1018281a',
    md: '0 4px 8px -2px #1018281a',
    lg: '0 12px 16px -4px #10182814',
    xl: '0 20 24px -4px #10182814',
    '2xl': '0 24px 48px -12px #1018282e',
    '3xl': '0 32px 64px -12px #10182824',
  };
  const hexToRgb = hex => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };
  const resolver = (object, prefix, ignoreRgbTransform = false) => {
    Object.keys(object).forEach(key => {
      if (typeof object[key] === 'object') {
        resolver(object[key], `${prefix}-${key}`, ignoreRgbTransform);
      } else {
        css += `  --${prefix}-${key}: ${object[key]};\n`;
        if (!ignoreRgbTransform) {
          css += `  --${prefix}-${key}-rgb: ${hexToRgb(object[key])};\n`;
        }
      }
    });
  };

  let css = '';
  resolver(colors, 'sao-palette-color');
  resolver(images, 'sao-palette-image', true);
  resolver(shadows, 'sao-palette-shadow', true);
  const root = `:root {
${css}}`;
  const mixins = `@mixin sao-setup-palette() {
${css}}`;

  writeFileSync(join(outputDir, 'index.css'), root);
  writeFileSync(join(outputDir, 'index.scss'), root);
  writeFileSync(join(outputDir, 'mixins.scss'), mixins);
})();
