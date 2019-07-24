import { shallowMount, mount } from '@vue/test-utils';
import {
  SAvatar,
  SAvatarIcon,
  SAvatarPresence
} from '@/components/comps/avatar';

describe('s-avatar', () => {
  test('should render correctly', () => {
    const w = shallowMount(SAvatar);
    expect(w.element.tagName.toLowerCase()).toBe('figure');
    expect(w.classes('avatar')).toBeTruthy();
    expect(w.find('img').exists()).toBeFalsy();
  });

  test('show initial', () => {
    const w = shallowMount(SAvatar, {
      propsData: {
        initial: 'XY'
      }
    });
    expect(w.attributes('data-initial')).toBe('XY');
  });

  test('show avatar image', () => {
    const w = shallowMount(SAvatar, {
      attrs: {
        src: 'image.png'
      }
    });

    expect(w.find('img').exists()).toBeTruthy();
    expect(w.find('img').attributes('src')).toBe('image.png');
  });

  test('show icon', () => {
    const w = shallowMount(SAvatar, {
      propsData: {
        iconSrc: 'icon.png'
      }
    });
    expect(w.find(SAvatarIcon).classes('avatar-icon')).toBeTruthy();
    expect(w.find(SAvatarIcon).attributes('src')).toBe('icon.png');
  });

  test('show presence', () => {
    const w = shallowMount(SAvatar, {
      propsData: {
        presence: 'busy'
      }
    });
    expect(w.find(SAvatarPresence).classes()).toEqual(
      expect.arrayContaining(['avatar-presence', 'busy'])
    );

    const w1 = shallowMount(SAvatar, {
      propsData: {
        presence: ''
      }
    });
    expect(w1.find(SAvatarPresence).classes()).toEqual(['avatar-presence']);
  });

  test('set size for avatar', () => {
    const w = shallowMount(SAvatar, {
      propsData: {
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true
      }
    });
    expect(w.classes()).toEqual(
      expect.arrayContaining(
        ['xs', 'sm', 'md', 'lg', 'xl'].map(v => 'avatar-' + v)
      )
    );
  });

  test('set background color', () => {
    const w = shallowMount(SAvatar, {
      propsData: {
        bgColor: '#cc33ee'
      }
    });

    expect(w.attributes('style')).toBe('background-color: rgb(204, 51, 238);');
  });
});
