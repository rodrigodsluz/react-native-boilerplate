import { GestureResponderEvent } from 'react-native';

export interface IButtonProps {
  title?: string;
  variant?: string;
  width?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined | (() => void);
  isEnabled?: boolean;
}
