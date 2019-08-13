const STATE_COLORS = ['success', 'warning', 'error'];
const ACCENT_COLORS = ['primary', 'secondary'];
const TEXT_COLORS = ['gray', 'dark', 'light'];
const COMP_SIZES = ['sm', 'lg'];

export default Object.freeze({
  directions: ['left', 'right', 'top', 'bottom'],
  layout: {
    viewports: ['xs', 'sm', 'md', 'lg', 'xl'],
    offsets: ['mx', 'ml', 'mr']
  },
  colors: ACCENT_COLORS.concat(STATE_COLORS, TEXT_COLORS),
  button: {
    colors: [].concat(STATE_COLORS),
    types: ['link', 'action', 'clear'],
    sizes: COMP_SIZES.concat(['block']),
    states: ['loading', 'active', 'disabled']
  },
  icon: {
    sizes: ['2x', '3x', '4x']
  },
  label: {
    colors: ACCENT_COLORS.concat(STATE_COLORS),
    shapes: ['rounded']
  },
  image: {
    fits: ['contain', 'cover'],
    aligns: ['left', 'center', 'right']
  },
  video: {
    ratios: ['1-1', '4-3']
  },
  lang: {
    kinds: ['zh', 'zhHans', 'zhHant', 'ja', 'ko']
  },
  input: {
    sizes: [].concat(COMP_SIZES),
    colors: STATE_COLORS
  },
  form: {
    types: ['textarea', 'checkbox', 'radio', 'select']
  },
  avatar: {
    presences: ['online', 'busy', 'away']
  },
  toast: {
    colors: STATE_COLORS.concat([ACCENT_COLORS[0]])
  },
  modal: {
    sizes: [].concat(COMP_SIZES)
  }
});
