import Header from './accordion-header';
import Body from './accordion-body';
import Accordion from './accordion';

export const SAccordionHeader = Header;
export const SAccordionBody = Body;
export const SAccordion = Accordion;

export default {
  install(vue) {
    vue.component('s-accordion-header', Header);
    vue.component('s-accordion-body', Body);
    vue.component('s-accordion', Accordion);
  }
};
