import { shallowMount } from '@vue/test-utils';
import Icon from '@/components/elements/icon';

describe('s-icon', () => {
  test('should render a basic icon', () => {
    const w = shallowMount(Icon, {
      propsData: {
        icon: 'arrow-up'
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('i');
    expect(w.classes()).toEqual(['icon', 'icon-arrow-up']);
  });

  test('set icon size', () => {
    const w = shallowMount(Icon, {
      propsData: {
        '2x': true,
        '3x': true,
        '4x': true,
        icon: 'arrow-up'
      }
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(['icon-2x', 'icon-3x', 'icon-4x'])
    );
  });

  test('set custom font size', () => {
    const w = shallowMount(Icon, {
      propsData: {
        font: '20',
        icon: 'arrow-up'
      }
    });
    expect(w.attributes('style')).toBe('font-size: 20px;');
  });
});
