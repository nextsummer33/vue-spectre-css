import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import { contains } from '@/utils/array';
import CardImg from './card-img';
import CardHeader from './card-header';
import CardBody from './card-body';
import CardFooter from './card-footer';

const cardLayout = {
  img: CardImg,
  header: CardHeader,
  body: CardBody,
  footer: CardFooter
};

export default {
  functional: true,
  props: {
    tag: strType('div'),
    layout: strType('img,header,body,footer', v =>
      contains(Object.keys(cardLayout), ...v.split(','))
    )
  },
  render(h, { props, data, slots }) {
    const slotEls = slots();
    const ch =
      slotEls.default ||
      props.layout.split(',').map(v => h(cardLayout[v], slotEls[v]));

    return h(props.tag, mergeData(data, { staticClass: 'card' }), ch);
  }
};
