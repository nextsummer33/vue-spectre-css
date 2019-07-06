import { shallowMount } from '@vue/test-utils';
import SRow from '@/components/layouts/row';

describe('s-column', () => {
  test('default tag should be DIV and has static class "column"', () => {
    const wrapper = shallowMount(SRow);
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['columns']));
  });

  test('added gapless, oneline class if prop has been set', () => {
    const w1 = shallowMount(SRow, {
      propsData: {
        gapless: true
      }
    });
    expect(w1.classes()).toEqual(expect.arrayContaining(['col-gapless']));

    const w2 = shallowMount(SRow, {
      propsData: {
        oneline: true
      }
    });
    expect(w2.classes()).toEqual(expect.arrayContaining(['col-oneline']));
  });
});
