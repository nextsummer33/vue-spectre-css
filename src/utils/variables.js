export default {
  layout: {
    viewports: ['xs', 'sm', 'md', 'lg', 'xl'],
    offsets: ['mx', 'ml', 'mr']
  },
  colors: [
    'primary',
    'secondary',
    'gray',
    'dark',
    'light',
    'success',
    'warning',
    'error'
  ],
  button: {
    colors: ['primary', 'success', 'error'],
    types: ['link', 'action', 'clear'],
    sizes: ['sm', 'lg', 'block'],
    states: ['loading', 'active', 'disabled']
  },
  icon: {
    sizes: ['2x', '3x', '4x']
  },
  label: {
    colors: ['primary', 'secondary', 'success', 'warning', 'error'],
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
    sizes: ['sm', 'lg'],
    colors: ['success', 'warning', 'error'],
    states: ['loading']
  },
  form: {
    types: ['textarea', 'checkbox', 'radio', 'select']
  }
};
