import { shallowMount } from '@vue/test-utils';
import { SInputGrp, SAddon } from '@/components/elements';

describe('s-input-grp', () => {
  test('should render an input-grp', () => {
    const w = shallowMount(SInputGrp, {
      slots: {
        default: 'hello'
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('div');
    expect(w.classes('input-group')).toBeTruthy();
  });

  test('show left addon label', () => {
    const w = shallowMount(SInputGrp, {
      propsData: {
        addonLeft: 'Email',
        slots: {
          default: ['<input type="text" />']
        }
      }
    });
    expect(w.find(SAddon).text('Email')).toBeTruthy();
  });

  test('set label and input size', () => {
    const w = shallowMount(SInputGrp, {
      propsData: {
        addonLeft: 'hello left',
        addonRight: 'hello right',
        sm: true,
        lg: true
      }
    });
    expect(
      w
        .findAll(SAddon)
        .at(0)
        .classes()
    ).toEqual(
      expect.arrayContaining(['input-group-addon', 'addon-sm', 'addon-lg'])
    );
    expect(
      w
        .findAll(SAddon)
        .at(1)
        .classes()
    ).toEqual(
      expect.arrayContaining(['input-group-addon', 'addon-sm', 'addon-lg'])
    );
  });
});
