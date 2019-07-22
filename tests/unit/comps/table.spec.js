import { shallowMount } from '@vue/test-utils';
import { STable } from '@/components/elements';

describe('s-table', () => {
  test('should show specified classes', () => {
    const w = shallowMount(STable, {
      propsData: {
        striped: true,
        hover: true,
        scroll: true
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('table');
    expect(w.classes()).toEqual(
      expect.arrayContaining([
        'table',
        'table-striped',
        'table-hover',
        'table-scroll'
      ])
    );
  });

  test('show data and header', () => {
    const w = shallowMount(STable, {
      propsData: {
        headers: ['col a', 'col b', 'col c'],
        data: [['a', 'b', 'c'], ['d', 'e', 'f']]
      }
    });
    expect(w.findAll('th').wrappers.length).toEqual(3);
    expect(w.find('th').text()).toBe('col a');
    expect(w.findAll('td').wrappers.length).toEqual(6);
    expect(w.find('td').text()).toBe('a');
  });

  test('show custom template', () => {
    const w = shallowMount(STable, {
      slots: {
        thead: ['<tr />'],
        tbody: ['<tr />']
      }
    });

    expect(w.findAll('tr').wrappers.length).toBe(2);
  });
});
