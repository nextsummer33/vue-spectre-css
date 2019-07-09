import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { fcomp } from '@/utils/factory';

const comp = fcomp('section', props => {
  return props.center ? 'navbar-center' : 'navbar-section';
});

export default {
  ...comp,
  name: 'SNvbItem',
  props: {
    tag: strType('section'),
    center: boolType(false)
  }
};
