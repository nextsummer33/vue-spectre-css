import { shallowMount, mount } from '@vue/test-utils';
import { SBtn as Btn, SIcon as Icon } from '@/components/elements';

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

  test('show icon when icon is set', () => {
    const w = shallowMount(Btn, {
      propsData: {
        iconLeft: 'arrow-up'
      }
    });

    expect(w.find(Icon).isVisible()).toBeTruthy();
    expect(w.html().indexOf('</i>')).toBeGreaterThan(-1);

    const w1 = shallowMount(Btn, {
      propsData: {
        iconRight: 'arrow-up'
      }
    });
    expect(w1.html().indexOf('<i')).toBeGreaterThan(-1);
  });
});
