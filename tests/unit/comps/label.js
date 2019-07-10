import { shallowMount } from '@vue/test-utils';
import Label from '@/components/elements/label';

describe('s-label', () => {
  test('should render a basic label', () => {
    const w = shallowMount(Label, {
      slots: {
        default: 'hello'
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('span');
    expect(w.text()).toBe('hello');
  });

  test('set label color', () => {
    const w = shallowMount(Label, {
      propsData: {
        primary: true,
        secondary: true,
        success: true,
        warning: true,
        error: true
      }
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining([
        'label-primary',
        'label-secondary',
        'label-success',
        'label-warning',
        'label-error'
      ])
    );
  });

  test('set label shape shape', () => {
    const w = shallowMount(Label, {
      propsData: {
        rounded: true
      }
    });
    expect(w.classes('label-rounded')).toBeTruthy();
  });
});
