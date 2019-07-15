import { shallowMount, mount } from '@vue/test-utils';
import Select from '@/components/elements/select';
import Vue from 'vue';

describe('s-select', () => {
  const items = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 }
  ];
  test('should render as a select dom', () => {
    const w = shallowMount(Select, {
      slots: {
        default: [
          '<option value="1">One</option>',
          '<option value="2">Two</option>',
          '<option value="3">Three</option>'
        ]
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('select');
    expect(w.classes()).toEqual(['form-select']);
    expect(w.findAll('option').length).toBe(3);
  });

  test('render by items prop', () => {
    const w = shallowMount(Select, {
      propsData: {
        items
      }
    });
    expect(w.findAll('option').length).toBe(3);
    expect(w.findAll('option').at(0).element.value).toBe('1');
  });

  test('placeholder option should be added', () => {
    const w = shallowMount(Select, {
      propsData: {
        placeholder: 'Select a value'
      }
    });
    expect(w.find('option').text()).toBe('Select a value');
    expect(w.find('option').attributes('value')).toBe('');
  });

  test('v-model should work', () => {
    const w = mount(
      Vue.extend({
        template: '<s-select v-model="v" :items="items" />',
        components: {
          SSelect: Select
        },
        data() {
          return {
            v: '',
            items
          };
        }
      })
    );

    expect(w.find(Select).element.value).toBe('1');
    w.setData({
      v: '2'
    });
    expect(w.element.value).toBe('2');
    w.findAll('option')
      .at(2)
      .trigger('change');
    expect(w.vm.$data.v).toBe('3');
  });

  test('should receive array value for selecting multiple options', () => {
    const w = mount(
      Vue.extend({
        template: '<s-select v-model="v" :items="items" multiple />',
        components: {
          SSelect: Select
        },
        data() {
          return {
            v: [],
            items
          };
        }
      })
    );

    w.findAll('option')
      .at(0)
      .trigger('click');
    w.findAll('option')
      .at(2)
      .trigger('click');

    w.find(Select).trigger('change');
    // expect(w.vm.$data.v).toEqual(['1', '3']);
  });

  test('listen on input event and update the value', () => {
    let v = '';
    const w = shallowMount(Select, {
      propsData: {
        items
      },
      listeners: {
        change: ev => {
          v = ev.target.value;
        }
      }
    });

    w.findAll('option')
      .at(1)
      .trigger('change');

    expect(v).toBe('2');
  });

  test('show success, warning, erorr', () => {
    const w = shallowMount(Select, {
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

  test('allow to resize select input', () => {
    const w = shallowMount(Select, {
      propsData: {
        sm: true,
        lg: true
      }
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(['select-sm', 'select-lg'])
    );
  });
});
