import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import hero, { SHero, SHeroBody } from '@/components/comps/hero';

Vue.use(hero);

describe('s-hero', () => {
  test('should render correctly', () => {
    const w = shallowMount(SHero, {
      slots: {
        default: 'hello world'
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('div');
    expect(w.classes()).toEqual(expect.arrayContaining(['hero']));
    expect(w.find(SHeroBody).exists()).toBeTruthy();
    expect(w.find(SHeroBody).classes()).toEqual(
      expect.arrayContaining(['hero-body'])
    );
    expect(w.find(SHeroBody).text()).toBe('hello world');
  });

  test('should change the size of hero', () => {
    const w = shallowMount(SHero, {
      propsData: {
        sm: true
      }
    });

    expect(w.classes()).toEqual(expect.arrayContaining(['hero', 'hero-sm']));

    const w2 = shallowMount(SHero, {
      propsData: {
        lg: true
      }
    });

    expect(w2.classes()).toEqual(expect.arrayContaining(['hero', 'hero-lg']));
  });
});
