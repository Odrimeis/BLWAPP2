import React from 'react';
import { View, StyleSheet } from 'react-native';
import ElementList from '../components/IntroducedFoods/ElementList';

export default function IntroducedFoods() {
  return (
    <View style={styles.container}>
      <ElementList />
      <ElementList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
});
