import { ImageSourcePropType } from 'react-native';

import MESSAGE_IMAGE from '@assets/images/Message_image.png';
import MESSAGE_SECURITY_IMAGE from '@assets/images/Message_security_image.png';
import PHONE_IMAGE from '@assets/images/Phone_image.png';
import SCHEDULED_IMAGE from '@assets/images/Scheduled_image.png';

export interface ICarouselProps {
  image: ImageSourcePropType;
  title: string;
  contents: string;
}

export const carouselItems = [
  {
    image: PHONE_IMAGE,
    title: 'A new dawn in remote parent care',
    contents: 'Sunrise enables you to stay involved in managing the health journey of your parents or any loved elderly member of your family',
  },
  {
    image: MESSAGE_IMAGE,
    title: 'Assistance from professional health coaches',
    contents: 'Health Coach provides personalized coordination to your elderly beloved ones with you in the same group',
  },
  {
    image: SCHEDULED_IMAGE,
    title: 'Weekly Check-in with health coach',
    contents: 'Weekly Check-in ensure preventative and pro-active care for your family member. Weekly meeting with the Health Coach includes: Sleep, Metal Health, Memory, Balance and so on.',
  },
  {
    image: MESSAGE_SECURITY_IMAGE,
    title: 'Security at the core of everything',
    contents: 'We know that health data is some of the most personal information about you so we want to safeguard that data. Privacy and security is built into Sunrise.',
  },
];
