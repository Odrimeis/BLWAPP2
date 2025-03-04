import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { Border_radius } from '../styles/constants';

type Props = {
  imgSource: ImageSource;
  width: number;
  height: number;
};

export default function ImageViewer({ imgSource, width, height }: Props) {
  return <Image source={imgSource} style={[styles.image, { width, height }]} />;
}

const styles = StyleSheet.create({
  image: {
    borderRadius: Border_radius,
  },
});
