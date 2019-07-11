import { shallowMount } from '@vue/test-utils';
import Lang from '@/components/elements/lang';

describe('s-video', () => {
  test('should render as a video dom', () => {
    const w = shallowMount(Lang, {
      propsData: {
        zh: true,
        zhHans: true,
        zhHant: true,
        ja: true,
        ko: true,
        cjk: true
      },
      slots: {
        default: ['hello world']
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('p');
    expect(w.classes()).toEqual(
      expect.arrayContaining([
        'lang-zh',
        'lang-zh-hans',
        'lang-zh-hant',
        'lang-ja',
        'lang-ko',
        'lang-cjk'
      ])
    );
  });
});
