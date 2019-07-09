import { shallowMount, mount } from '@vue/test-utils';
import Btn from '@/components/elements/btn';
import Vue from 'vue';

describe('s-hero', () => {
  test('should render correctly', () => {
    const w = shallowMount(Btn);
    expect(w.classes('btn')).toBeTruthy();
  });

  test('set color when color props is set', () => {
    const w = shallowMount(Btn, {
      propsData: {
        primary: true,
        success: true,
        error: true,
        link: true,
        action: true,
        clear: true,
        block: true,
        sm: true,
        lg: true,
        loading: true,
        active: true,
        disabled: true
      }
    });

    expect(w.classes()).toEqual(
      expect.arrayContaining([
        'btn',
        'btn-primary',
        'btn-success',
        'btn-error',
        'btn-link',
        'btn-action',
        'btn-clear',
        'btn-block',
        'btn-sm',
        'btn-lg',
        'loading',
        'active',
        'disabled'
      ])
    );
  });

  test('set circle shape when action and circle is true', () => {
    const w = shallowMount(Btn, {
      propsData: {
        actionCircle: true
      }
    });

    expect(w.classes()).toEqual(
      expect.arrayContaining(['btn', 'btn-action', 's-circle'])
    );

    const w2 = shallowMount(Btn, {
      propsData: {
        action: false,
        actionCircle: true
      }
    });

    expect(w2.classes()).toEqual(
      expect.arrayContaining(['btn', 'btn-action', 's-circle'])
    );
  });
});
