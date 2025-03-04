import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Border_radius, CardBackgroundColor } from '../../styles/constants';

const PlaceholderImage = require("@/assets/images/background-image.png");

const IntroducedFoodCard: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>Nombreo</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: CardBackgroundColor,
    padding: 8,
    borderRadius: Border_radius,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: Border_radius,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default IntroducedFoodCard;
