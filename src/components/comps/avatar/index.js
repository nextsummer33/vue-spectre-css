import AvatarIcon from './avatar-icon';
import AvatarPresence from './avatar-presence';
import Avatar from './avatar';

export const SAvatarIcon = AvatarIcon;
export const SAvatarPresence = AvatarPresence;
export const SAvatar = Avatar;

export default {
  install(Vue) {
    Vue.component('s-avatar-icon', AvatarIcon);
    Vue.component('s-avatar-presence', AvatarPresence);
    Vue.component('s-avatar', Avatar);
  }
};
