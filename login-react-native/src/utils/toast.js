import Toast from 'react-native-simple-toast';

export function toastTop(text) {
  Toast.showWithGravity(text,Toast.SHORT,Toast.CENTER);
}