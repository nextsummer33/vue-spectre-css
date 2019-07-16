import { shallowMount, mount } from '@vue/test-utils';
import Checkbox from '@/components/elements/checkbox';
import Vue from 'vue';

describe('s-checkbox', () => {
  test('render as a checkbox input', () => {
    const w = shallowMount(Checkbox);
    expect(w.element.tagName.toLowerCase()).toBe('label');
    expect(w.find('input').attributes('type')).toBe('checkbox');
  });

  test('render as a switch', () => {
    const w = shallowMount(Checkbox, { propsData: { switch: true } });
    expect(w.classes('form-switch')).toBeTruthy();
  });

  test('received value from radio by v-model', () => {
    const w = mount(
      Vue.extend({
        template: '<s-checkbox value="One" v-model="v" />',
        components: {
          SCheckbox: Checkbox
        },
        data() {
          return {
            v: ''
          };
        }
      })
    );

    w.find('input').element.checked = true;
    w.find('input').trigger('change');
    expect(w.vm.$data.v).toBe('One');

    w.setData({ v: '' });
    expect(w.find('input').element.checked).toBeFalsy();
  });

  test('received true value when checked and false value when unchecked', () => {
    const w = mount(
      Vue.extend({
        template: `<s-checkbox true-value="yes" false-value="no" v-model="v" />`,
        components: {
          SCheckbox: Checkbox
        },
        data() {
          return {
            v: ''
          };
        }
      })
    );

    w.find('input').element.checked = true;
    w.find('input').trigger('change');
    expect(w.vm.$data.v).toBe('yes');

    w.find('input').element.checked = false;
    w.find('input').trigger('change');
    expect(w.vm.$data.v).toBe('no');
  });

  test('added value into the array when checkbox is checked', () => {
    const w = mount(
      Vue.extend({
        template: `
        <div>
          <s-checkbox id="ace" value="Ace" v-model="values" />
          <s-checkbox id="king" value="King" v-model="values" />
          <s-checkbox id="queen" value="Queen" v-model="values" />
        </div>
      `,
        components: { SCheckbox: Checkbox },
        data() {
          return {
            values: []
          };
        }
      })
    );

    const ace = w.find('input#ace');
    const king = w.find('input#king');
    const queen = w.find('input#queen');
    ace.element.checked = true;
    ace.trigger('change');
    queen.element.checked = true;
    queen.trigger('change');
    expect(w.vm.$data.values).toEqual(expect.arrayContaining(['Ace', 'Queen']));
    queen.element.checked = false;
    queen.trigger('change');
    expect(w.vm.$data.values).toEqual(expect.arrayContaining(['Ace']));
  });

  test('received true value when value attribute was not set', () => {
    let v = false;
    const w = shallowMount(Checkbox, {
      listeners: {
        change: ev => (v = ev.target.checked)
      }
    });

    w.find('input').element.checked = true;
    w.find('input').trigger('change');
    expect(v).toBe(true);
    w.find('input').element.checked = false;
    w.find('input').trigger('change');
    expect(v).toBe(false);
  });

  test('should show success, warning, error', () => {
    const colors = ['success', 'warning', 'error'];
    const w = shallowMount(Checkbox, {
      propsData: colors.reduce((p, v) => (p[v] = true) && p, {})
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(colors.map(v => 'is-' + v))
    );
  });

  test('should be resized by setting sm, lg', () => {
    const sizes = ['sm', 'lg'];
    const w = shallowMount(Checkbox, {
      propsData: sizes.reduce((p, v) => (p[v] = true) && p, {})
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(sizes.map(v => 'input-' + v))
    );
  });
});
