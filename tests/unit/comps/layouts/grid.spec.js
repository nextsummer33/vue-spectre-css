import { shallowMount } from '@vue/test-utils';
import SGrid from '@/components/layouts/grid';

describe('s-container', () => {
  test('should render correctly', () => {
    const w = shallowMount(SGrid, {
      slots: ['Hello']
    });

    expect(w.element.tagName.toLowerCase()).toBe('div');
    expect(w.classes()).toEqual(expect.arrayContaining(['container']));
    expect(w.text()).toBe('Hello');
  });

  test('added class name when grid prop is set', () => {
    const w = shallowMount(SGrid, {
      propsData: {
        gridXs: true,
        gridSm: true,
        gridMd: true,
        gridLg: true,
        gridXl: true
      }
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining([
        'container',
        'grid-xs',
        'grid-sm',
        'grid-md',
        'grid-lg',
        'grid-xl'
      ])
    );
  });
});
