import { shallowMount } from '@vue/test-utils';
import { SVideo as Video } from '@/components/elements';

describe('s-video', () => {
  test('should render as a video dom', () => {
    const w = shallowMount(Video, {
      attrs: {
        src: 'video.mp4'
      },
      slots: {
        default: ['<source src="movie.mp4" type="video/mp4" />']
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('video');
    expect(w.classes()).toEqual(['video-responsive']);
    expect(w.attributes('src')).toBe('video.mp4');
    expect(w.findAll('source').wrappers.length).toBe(1);
  });

  test('should render as a iframe wrapper', () => {
    const w = shallowMount(Video, {
      propsData: {
        iframe: true
      },
      attrs: {
        src: 'video.mp4'
      }
    });

    expect(w.element.tagName.toLowerCase()).toBe('div');
    expect(w.find('iframe').isVisible()).toBeTruthy();
    expect(w.find('iframe').attributes('src')).toBe('video.mp4');
  });

  test('set ratio of the video', () => {
    const w = shallowMount(Video, {
      propsData: {
        ratio: '1-1'
      }
    });
    expect(w.classes('video-responsive-1-1')).toBeTruthy();

    const w1 = shallowMount(Video, {
      propsData: {
        ratio: '4-3'
      }
    });
    expect(w1.classes('video-responsive-4-3')).toBeTruthy();

    const w2 = shallowMount(Video, {
      propsData: {
        ratio: '12-9'
      }
    });
    expect(w2.classes('video-responsive-12-9')).toBeFalsy();
  });
});
