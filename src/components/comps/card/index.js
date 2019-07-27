import CardImg from './card-img';
import CardText from './card-text';
import CardHeader from './card-header';
import CardBody from './card-body';
import CardFooter from './card-footer';
import Card from './card';

export const SCard = Card;
export const SCardHeader = CardHeader;
export const SCardBody = CardBody;
export const SCardFooter = CardFooter;
export const SCardText = CardText;
export const SCardImg = CardImg;

export default {
  install(Vue) {
    Vue.component('s-card-img', CardImg);
    Vue.component('s-card-header', CardHeader);
    Vue.component('s-card-body', CardBody);
    Vue.component('s-card-footer', CardFooter);
    Vue.component('s-card-text', CardText);
    Vue.component('s-card', Card);
  }
};
