import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Checkbox } from 'react-native-paper';
import { Border_radius, CardBackgroundColor, Primary_color, White_color } from '../../styles/constants';

const PlaceholderImage = require("@/assets/images/background-image.png");

interface FoodCardXLProps {
  onPress: () => void;
}

const FoodCardXL: React.FC<FoodCardXLProps> = ({ onPress }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
            color={Primary_color}
          />
        </View>
      </View>
      <Text style={styles.textBold}>Nombreo</Text>
      <Text style={styles.textAge}>+6 meses</Text>
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
    width:'46%',
  },
  imageContainer: {
    position: 'relative',
    height: 164,
    width:'100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: Border_radius,
  },
  checkboxContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textAge: {
    fontSize: 12,
  },
});

export default FoodCardXL;
