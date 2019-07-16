import { shallowMount, mount } from '@vue/test-utils';
import Radio from '@/components/elements/radio';
import Vue from 'vue';

describe('s-radio', () => {
  test('render as a radio input', () => {
    const w = shallowMount(Radio, {
      propsData: {
        label: 'Male'
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('label');
    expect(w.classes('form-radio')).toBeTruthy();
    expect(w.find('input').attributes('type')).toBe('radio');
    expect(w.text().trim()).toBe('Male');
  });

  test('received value from radio by v-model', () => {
    const w = mount(
      Vue.extend({
        template: '<s-radio value="One" v-model="v" />',
        components: {
          SRadio: Radio
        },
        data() {
          return {
            v: ''
          };
        }
      })
    );

    w.find('input').trigger('change');
    expect(w.vm.$data.v).toBe('One');

    w.setData({
      v: ''
    });
    expect(w.find(Radio).element.checked).toBeFalsy();
  });

  test('received "on" value when value attribute was not set', () => {
    let v = '';
    const w = mount(Radio, {
      listeners: { change: ev => (v = ev.target.value) }
    });
    w.find('input').trigger('change');
    expect(v).toBe('on');
  });

  test('should show success, warning, error', () => {
    const colors = ['success', 'warning', 'error'];
    const w = shallowMount(Radio, {
      propsData: colors.reduce((p, v) => (p[v] = true) && p, {})
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(colors.map(v => 'is-' + v))
    );
  });

  test('should be resized by setting sm, lg', () => {
    const sizes = ['sm', 'lg'];
    const w = shallowMount(Radio, {
      propsData: sizes.reduce((p, v) => (p[v] = true) && p, {})
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(sizes.map(v => 'input-' + v))
    );
  });
});
