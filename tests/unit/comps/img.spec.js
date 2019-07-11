import { shallowMount } from '@vue/test-utils';
import Img from '@/components/elements/img';

describe('s-img', () => {
  test('should render a img', () => {
    const w = shallowMount(Img, {
      attrs: {
        src: 'image.png',
        alt: 'image 1'
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('img');
    expect(w.classes()).toEqual(['img-responsive']);
    expect(w.attributes('src')).toBe('image.png');
    expect(w.attributes('alt')).toBe('image 1');
  });

  test('as a figure', () => {
    const w = shallowMount(Img, {
      propsData: {
        figure: true
      },
      attrs: {
        alt: 'image 2'
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('figure');
    expect(w.classes('figure')).toBeTruthy();
    expect(w.find('img').attributes('alt')).toBe('image 2');

    const w1 = shallowMount(Img, {
      propsData: {
        figure: true,
        caption: 'image caption'
      }
    });
    expect(w1.find('figcaption').classes()).toEqual(['figure-caption']);
    expect(w1.find('figcaption').text()).toBe('image caption');
  });

  test('set image fit mode', () => {
    const w = shallowMount(Img, {
      propsData: {
        fitContain: true,
        fitCover: true
      }
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(['img-fit-contain', 'img-fit-cover'])
    );
  });

  test('caption text alignment', () => {
    const w = shallowMount(Img, {
      propsData: {
        figure: true,
        caption: 'image caption',
        textLeft: true,
        textCenter: true,
        textRight: true
      }
    });
    expect(w.find('figcaption').classes()).toEqual(
      expect.arrayContaining(['text-left', 'text-center', 'text-right'])
    );
  });
});
