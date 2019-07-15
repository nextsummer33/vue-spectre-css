import { shallowMount, mount } from '@vue/test-utils';
import Input from '@/components/elements/input';
import Icon from '@/components/elements/icon';
import Vue from 'vue';

describe('s-input', () => {
  test('should render a input', () => {
    const w = shallowMount(Input, {
      attrs: {
        value: 'hello world'
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('input');
    expect(w.classes()).toEqual(['form-input']);
    expect(w.element.value).toBe('hello world');
  });

  test('set icon on left or right', () => {
    const w = shallowMount(Input, {
      propsData: {
        iconLeft: 'arrow-up'
      }
    });

    expect(w.element.tagName.toLowerCase()).toBe('div');
    expect(w.classes('has-icon-left')).toBeTruthy();
    expect(w.find(Icon).classes()).toEqual(
      expect.arrayContaining(['icon', 'icon-arrow-up', 'form-icon'])
    );

    const w1 = shallowMount(Input, {
      propsData: {
        iconRight: 'arrow-down'
      }
    });

    expect(w1.element.tagName.toLowerCase()).toBe('div');
    expect(w1.classes('has-icon-right')).toBeTruthy();
    expect(w1.find(Icon).classes()).toEqual(
      expect.arrayContaining(['icon', 'icon-arrow-down', 'form-icon'])
    );
  });

  test('show loading on the right', () => {
    const w = shallowMount(Input, {
      propsData: {
        loading: true
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('div');
    expect(w.classes('has-icon-right')).toBeTruthy();
    expect(w.find('i').classes()).toEqual(
      expect.arrayContaining(['form-icon', 'loading'])
    );
  });

  test('render as a textarea', () => {
    const w = shallowMount(Input, {
      propsData: {
        tag: 'textarea'
      },
      attrs: {
        rows: 5
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('textarea');
    expect(w.attributes('rows')).toBe('5');
  });

  test('v-model should work', () => {
    const w = mount(
      Vue.extend({
        template: '<s-input v-model="v" />',
        components: {
          SInput: Input
        },
        data() {
          return {
            v: 'hello'
          };
        }
      })
    );

    expect(w.find(Input).element.value).toBe('hello');
    w.setData({
      v: 'hello world'
    });
    expect(w.find(Input).element.value).toBe('hello world');

    w.find(Input).element.value = 'new value';
    expect(w.vm.$data.v).toBe('hello world');
    w.find(Input).trigger('input');
    expect(w.vm.$data.v).toBe('new value');
  });

  test('listen on input event and update the value', () => {
    let v = '';
    const w = shallowMount(Input, {
      listeners: {
        input: ev => {
          v = ev.target.value;
        }
      }
    });

    w.element.value = 'hello';
    w.trigger('input');
    expect(v).toBe('hello');
  });

  test('show success, warning, erorr', () => {
    const w = shallowMount(Input, {
      propsData: {
        success: true,
        warning: true,
        error: true
      }
    });

    expect(w.classes()).toEqual(
      expect.arrayContaining(['is-success', 'is-warning', 'is-error'])
    );
  });
});
