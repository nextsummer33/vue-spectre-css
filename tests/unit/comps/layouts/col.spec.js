import { shallowMount, mount } from '@vue/test-utils';
import SCol from '@/components/layouts/col';

describe('s-column', () => {
  test('default tag should be DIV and has static class "column"', () => {
    const wrapper = shallowMount(SCol);
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['column']));
  });

  test('set col width in different viewport', () => {
    const wrapper = shallowMount(SCol, {
      propsData: {
        col: 1,
        xsCol: 10,
        smCol: 2,
        mdCol: 4,
        lgCol: 5,
        xlCol: 'auto'
      }
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        'column',
        'col-1',
        'col-xs-10',
        'col-sm-2',
        'col-md-4',
        'col-lg-5',
        'col-xl-auto'
      ])
    );

    const wrapper2 = shallowMount(SCol, {
      propsData: {
        col: '6',
        xsCol: '10',
        smCol: '2',
        mdCol: '4',
        lgCol: '5',
        xlCol: 'auto'
      }
    });

    expect(wrapper2.classes()).toEqual(
      expect.arrayContaining([
        'column',
        'col-6',
        'col-xs-10',
        'col-sm-2',
        'col-md-4',
        'col-lg-5',
        'col-xl-auto'
      ])
    );
  });

  test('num string validator should reject 0 value', () => {
    const col = SCol.props.col;

    expect(col.validator).toBeInstanceOf(Function);
    expect(col.validator(1)).toBeTruthy();
    expect(col.validator('1')).toBeTruthy();
    expect(col.validator('')).toBeTruthy();
    expect(col.validator(0)).toBeFalsy();
  });

  test('set column offset', () => {
    const wrapper = shallowMount(SCol, {
      propsData: {
        mxAuto: true
      }
    });

    expect(wrapper.classes('col-mx-auto')).toBeTruthy();

    const wrapper2 = shallowMount(SCol, {
      propsData: {
        mlAuto: true
      }
    });
    expect(wrapper2.classes('col-ml-auto')).toBeTruthy();

    const wrapper3 = shallowMount(SCol, {
      propsData: {
        mrAuto: true
      }
    });
    expect(wrapper3.classes('col-mr-auto')).toBeTruthy();

    const wrapper4 = shallowMount(SCol, {
      propsData: {
        mrAuto: true,
        mlAuto: true
      }
    });
    expect(wrapper4.classes('col-mx-auto')).toBeTruthy();

    const wrapper5 = shallowMount(SCol, {
      propsData: {
        mxAuto: true,
        mlAuto: true,
        mrAuto: true
      }
    });
    expect(wrapper5.classes()).toEqual(['column', 'col-mx-auto']);
  });

  test('set hide or show in different viewports', () => {
    const wrapper = shallowMount(SCol, {
      propsData: {
        xsShow: true,
        smShow: true,
        mdShow: true,
        lgShow: true,
        xlShow: true,
        xsHide: true,
        smHide: true,
        mdHide: true,
        lgHide: true,
        xlHide: true
      }
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        'show-xs',
        'show-sm',
        'show-md',
        'show-lg',
        'show-xl',
        'hide-xs',
        'hide-sm',
        'hide-md',
        'hide-lg',
        'hide-xl'
      ])
    );
  });
});
