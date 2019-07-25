import { shallowMount } from '@vue/test-utils';
import {
  STile,
  STileAction,
  STileContent,
  STileIcon,
  STileText
} from '@/components/comps/tile';
import { SAvatar } from '@/components/comps/avatar';

describe('s-tile', () => {
  test('should has a base layout', () => {
    const w = shallowMount(STile, {
      slots: {
        icon: ['hello'],
        content: ['world'],
        action: ['say hi']
      }
    });
    expect(w.element.tagName.toLocaleLowerCase()).toBe('div');
    expect(w.classes()).toEqual(['tile']);
    expect(w.find(STileIcon).exists()).toBeTruthy();
    expect(w.find(STileContent).exists()).toBeTruthy();
    expect(w.find(STileAction).exists()).toBeTruthy();

    const w1 = shallowMount(STile, {
      propsData: {
        centered: true
      }
    });
    expect(w1.classes('tile-centered')).toBeTruthy();
  });
});

describe('s-tile-icon', () => {
  test('render correctly', () => {
    const w = shallowMount(STileIcon);
    expect(w.element.tagName.toLowerCase()).toBe('div');
    expect(w.classes('tile-icon')).toBeTruthy();
    expect(w.find('div>div').attributes('style')).toBe(
      'display: flex; align-items: center; align-content: space-around; width: 32px; height: 32px;'
    );
  });

  test('show an avatar', () => {
    const w = shallowMount(STileIcon, {
      propsData: {
        avatar: true
      },
      attrs: {
        src: 'image.png'
      }
    });
    expect(w.find(SAvatar).exists()).toBeTruthy();
    expect(
      w
        .find(SAvatar)
        .find('img')
        .attributes('src')
    ).toBe('image.png');
  });
});

describe('s-tile-text', () => {
  test('render correctly', () => {
    const w = shallowMount(STileText, {
      propsData: {
        title: true
      }
    });
    expect(w.element.tagName.toLowerCase()).toBe('p');
    expect(w.classes('tile-title')).toBeTruthy();

    const w1 = shallowMount(STileText, {
      propsData: {
        subtitle: true
      }
    });
    expect(w1.classes('tile-subtitle')).toBeTruthy();
  });

  test('show an avatar', () => {
    const w = shallowMount(STileIcon, {
      propsData: {
        avatar: true
      },
      attrs: {
        src: 'image.png'
      }
    });
    expect(w.find(SAvatar).exists()).toBeTruthy();
    expect(
      w
        .find(SAvatar)
        .find('img')
        .attributes('src')
    ).toBe('image.png');
  });
});
