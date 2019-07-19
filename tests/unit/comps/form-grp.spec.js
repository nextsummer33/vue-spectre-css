import elements, {
  SInput,
  SSelect,
  SRadio,
  SCheckbox,
  SFormGrp,
  SFormLabel,
  SFormHint
} from '@/components/elements';
import { SCol } from '@/components/layouts';
import { shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';

Vue.use(elements);

describe('s-form-grp', () => {
  test('render Dom element correctly with a default input Dom', () => {
    const w = shallowMount(SFormGrp);

    expect(w.element.tagName.toLowerCase()).toBe('div');
    expect(w.classes()).toEqual(expect.arrayContaining(['form-group']));
    expect(w.find(SInput).exists()).toBeTruthy();
    expect(w.find(SFormLabel).exists()).toBeFalsy();
    expect(w.find(SFormHint).exists()).toBeFalsy();
  });

  test('added title and hint for the form-group', () => {
    const w = shallowMount(SFormGrp, {
      propsData: {
        title: 'Form Group Label',
        hint: 'Form Group Hint',
        value: '400'
      }
    });

    expect(w.find(SFormLabel).classes('form-label')).toBeTruthy();
    expect(w.find(SFormLabel).text()).toBe('Form Group Label');
    expect(w.find(SFormHint).classes('form-input-hint')).toBeTruthy();
    expect(w.find(SFormHint).text()).toBe('Form Group Hint');
    expect(w.find(SInput).element.value).toBe('400');
  });

  test('display specified input dom element', () => {
    const w = shallowMount(SFormGrp, {
      propsData: { select: true }
    });
    expect(w.find(SSelect).exists()).toBeTruthy();

    const w1 = shallowMount(SFormGrp, {
      propsData: { checkbox: true }
    });
    expect(w1.find(SCheckbox).exists()).toBeTruthy();

    const w2 = shallowMount(SFormGrp, {
      propsData: { radio: true }
    });
    expect(w2.find(SRadio).exists()).toBeTruthy();

    const w3 = shallowMount(SFormGrp, {
      propsData: {
        switch: true
      }
    });
    expect(w3.find(SCheckbox).exists()).toBeTruthy();
    expect(w3.find(SCheckbox).classes('form-switch')).toBeTruthy();

    const w4 = shallowMount(SFormGrp, {
      propsData: {
        textarea: true
      }
    });
    expect(w4.find(SInput).element.tagName.toLowerCase()).toBe('textarea');
  });

  test('change default input type', () => {
    const w = shallowMount(SFormGrp, {
      attrs: { type: 'number' }
    });
    expect(w.find(SInput).attributes('type')).toBe('number');
  });

  test('set a input dom in input slot', () => {
    const w = shallowMount(SFormGrp, {
      propsData: {
        title: 'test label',
        hint: 'hint is here'
      },
      slots: {
        input: [SSelect]
      }
    });
    expect(w.find(SSelect).exists).toBeTruthy();
  });

  test('set select dom items', () => {
    const w = mount(SFormGrp, {
      propsData: {
        select: true,
        items: [{ text: 'Two', value: '1' }, { text: 'Two', value: '2' }]
      }
    });

    expect(w.findAll('option').wrappers.length).toBe(2);
    expect(w.findAll('option').at(0).element.value).toBe('1');
  });

  test('added option dom into select form group by slot', () => {
    const w = mount(SFormGrp, {
      propsData: {
        select: true
      },
      slots: {
        select: ['<option value="1" />', '<option value="2" />']
      }
    });
    expect(w.findAll('option').wrappers.length).toBe(2);
  });

  test('set label and input size', () => {
    const w = shallowMount(SFormGrp, {
      propsData: {
        title: 'label',
        sm: true,
        lg: true
      }
    });
    expect(w.find(SFormLabel).classes()).toEqual(
      expect.arrayContaining(['label-sm', 'label-lg'])
    );
    expect(w.find(SInput).classes()).toEqual(
      expect.arrayContaining(['input-sm', 'input-lg'])
    );
  });

  test('set col width to label and input for horizontal layout', () => {
    const w = shallowMount(SFormGrp, {
      propsData: {
        lhs: 3,
        rhs: 9
      }
    });

    const cols = w.findAll(SCol);
    expect(cols.at(0).classes('col-3')).toBeTruthy();
    expect(cols.at(0).classes('column')).toBeFalsy();

    expect(cols.at(1).classes('col-9')).toBeTruthy();
    expect(cols.at(1).classes('column')).toBeFalsy();
  });

  test('set form group color', () => {
    const w = shallowMount(SFormGrp, {
      propsData: {
        success: true,
        warning: true,
        error: true
      }
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(['has-warning', 'has-error', 'has-success'])
    );
  });
});
