import { shallowMount } from '@vue/test-utils';
import { SChip } from '@/components/comps/chip';

describe('s-tile', () => {
  test('should render correctly', () => {
    const w = shallowMount(SChip);
    expect(w.element.tagName.toLocaleLowerCase()).toBe('span');
    expect(w.classes('chip')).toBeTruthy();
  });

  test('should show an clear button and receive an click event', () => {
    let clicked = false;
    const w = shallowMount(SChip, {
      propsData: {
        clear: true
      },
      listeners: {
        click: ev => {
          clicked = true;
        }
      }
    });
    expect(w.find('a[role="button"]')).toBeTruthy();
    w.find('a').trigger('click');
    expect(clicked).toBeTruthy();
  });
});
