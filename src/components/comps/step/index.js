import Step from './step';
import StepItem from './step-item';

export const SStep = Step;
export const SStepItem = StepItem;

export default {
  install(Vue) {
    Vue.component('s-step', Step);
    Vue.component('s-step-item', StepItem);
  }
};
