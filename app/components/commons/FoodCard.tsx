import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Border_radius, CardBackgroundColor } from '../../styles/constants';

const PlaceholderImage = require("@/assets/images/background-image.png");

interface FoodCardProps {
  onPress: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ onPress }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={styles.textBold}>Nombreo</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: CardBackgroundColor,
    padding: 8,
    borderRadius: Border_radius,
    gap: 8,
  },
  imageContainer: {
    position: 'relative',
    width: 84,
    height: 84,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: Border_radius,
  },
  checkboxContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textAge: {
    fontSize: 12,
  },
});

export default FoodCard;
