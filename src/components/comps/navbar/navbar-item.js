import { mergeData } from 'vue-functional-data-merge';
import { stringType, boolType } from '@/utils/proptypes';
import { fcomp } from '@/utils/factory';

const comp = fcomp('section', props => {
  return props.center ? 'navbar-center' : 'navbar-section';
});

export default {
  ...comp,
  name: 'SNvbItem',
  props: {
    tag: stringType('section'),
    center: boolType(false)
  }
};
