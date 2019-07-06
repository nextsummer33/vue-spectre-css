import Vue from 'vue';
import { shallowMount, mount } from '@vue/test-utils';
import navbar, {
  SNavbar as Navbar,
  SNavbarItem as Item
} from '@/components/comps/navbar';

Vue.use(navbar);

describe('s-navbar', () => {
  test('default tag should be header and has static class', () => {
    const w = shallowMount(Navbar);
    expect(w.element.tagName.toLowerCase()).toBe('header');
    expect(w.classes()).toEqual(expect.arrayContaining(['navbar']));
  });

  test('customize using default slot', () => {
    const w = shallowMount(Navbar, {
      slots: {
        default: '<div><p>Hello World</p></div>'
      }
    });
    expect(w.find('div').exists()).toBeTruthy();
    expect(w.find('p').exists()).toBeTruthy();
    expect(w.find('p').text()).toBe('Hello World');
  });

  test('using left, center, right slots to create a navbar', () => {
    const w = shallowMount(Navbar, {
      slots: {
        left: 'hello',
        center: 'world',
        right: 'myfriend'
      }
    });
    const items = w.findAll(Item);
    expect(items.length).toBe(3);
    expect(items.at(0).text()).toBe('hello');
    expect(items.at(1).text()).toBe('world');
    expect(items.at(1).classes()).toEqual(
      expect.arrayContaining(['navbar-center'])
    );
    expect(items.at(2).text()).toBe('myfriend');
  });
});

describe('s-navbar-item', () => {
  test('default tag should be header and has static class', () => {
    const w = shallowMount(Item);
    expect(w.element.tagName.toLowerCase()).toBe('section');
    expect(w.classes()).toEqual(expect.arrayContaining(['navbar-section']));
  });

  test('should has center class when center prop is set', () => {
    const w = shallowMount(Item, {
      propsData: {
        center: true
      }
    });
    expect(w.classes()).toEqual(expect.arrayContaining(['navbar-center']));
  });
});
