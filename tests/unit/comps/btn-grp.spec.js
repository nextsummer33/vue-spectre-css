import { shallowMount, mount } from '@vue/test-utils';
import { SBtn as Btn, SBtnGrp as Group } from '@/components/elements';

describe('s-btn-grp', () => {
  test('should render correctly', () => {
    const w = shallowMount(Group, {
      slots: {
        default: [Btn, Btn, Btn]
      }
    });
    expect(w.classes('btn-group')).toBeTruthy();
    expect(w.findAll(Btn).wrappers.length).toBe(3);

    const w2 = shallowMount(Group, {
      propsData: {
        block: true
      }
    });
    expect(w2.classes()).toEqual(['btn-group', 'btn-group-block']);
  });

  test('should render children by assigning items', () => {
    const w = shallowMount(Group, {
      propsData: {
        items: ['item 1', 'item 2', 'item 3', 'item 4']
      }
    });
    expect(w.findAll(Btn).wrappers.length).toBe(4);

    w.setProps({ items: ['item a', 'item b'] });
    expect(
      w
        .findAll(Btn)
        .at(0)
        .text()
    ).toBe('item a');
    expect(w.findAll(Btn).wrappers.length).toBe(2);
  });

  test('should set primary, sm, lg to buttons', () => {
    const w = mount(Group, {
      propsData: {
        items: ['item 1', 'item 2'],
        primary: true,
        sm: true,
        lg: true
      }
    });

    w.findAll(Btn).wrappers.forEach(s => {
      expect(s.classes()).toEqual(
        expect.arrayContaining(['btn-primary', 'btn-sm', 'btn-lg'])
      );
    });
  });

  test('should change the current select by v-model', () => {
    let mv = 0;
    const w = mount(Group, {
      propsData: {
        items: ['item a', 'item b'],
        value: mv
      },
      listeners: { input: v => (mv = v) }
    });
    const btns = w.findAll(Btn);
    expect(btns.at(0).classes()).toEqual(['btn', 'active']);

    w.setProps({
      value: 1
    });
    expect(btns.at(0).classes('active')).toBeFalsy();
    expect(btns.at(1).classes('active')).toBeTruthy();

    w.find(Btn).trigger('click');
    expect(mv).toBe(0);
  });
});
