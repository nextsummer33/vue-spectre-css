// import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';

export default {
  name: 'SLink',
  functional: true,
  props: {
    tag: strType('a')
  }
};
