import Modal from './modal';
import ModalContainer from './modal-container';
import ModalHeader from './modal-header';
import ModalBody from './modal-body';
import ModalFooter from './modal-footer';
import ModalTitle from './modal-title';
import ModalOverlay from './modal-overlay';

export const SModal = Modal;
export const SModalContainer = ModalContainer;
export const SModalHeader = ModalHeader;
export const SModalBody = ModalBody;
export const SModalFooter = ModalFooter;
export const SModalTitle = ModalTitle;
export const SModalOverlay = ModalOverlay;

export default {
  install(Vue) {
    Vue.component('s-modal-title', ModalTitle);
    Vue.component('s-modal-header', ModalHeader);
    Vue.component('s-modal-body', ModalBody);
    Vue.component('s-modal-footer', ModalFooter);
    Vue.component('s-modal-container', ModalContainer);
    Vue.component('s-modal-overlay', ModalOverlay);
    Vue.component('s-modal', Modal);
  }
};
