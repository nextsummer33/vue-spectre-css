import 'spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import layouts from './components/layouts';
import comps from './components/comps';
import elems from './components/elements';

export const Layouts = layouts;
export const Comps = comps;
export const Elements = elems;

export default {
  install(vue) {
    vue.use(layouts);
    vue.use(comps);
    vue.use(elems);
  }
};
