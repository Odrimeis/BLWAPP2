import { View, StyleSheet, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, IconButton } from 'react-native-paper';
import Button from '../components/commons/Button';
import FoodCard from '../components/commons/FoodCard';
import IntroducedFoodCard from '../components/commons/IntroducedFoodCard';
import { White_color, Teal_color_20, TextColor } from '../styles/constants';

export default function Index() {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    Alert.alert('You pressed a button.');
  };

  const handleNavigateToIntroducedFoods = () => {
    navigation.navigate('IntroducedFoods' as never);
  };

  const handleNavigateToFoods = () => {
    navigation.navigate('Foods' as never); // Ensure correct route name
  };

  const handlePressToFoodScreen = () => {
    navigation.navigate('FoodScreen' as never);
  };

  return (
    <View style={styles.container}>

      <Pressable style={styles.cardContainerFoods} onPress={handleNavigateToIntroducedFoods}>
        <View style={styles.headerContainer} >
          <Text style={styles.headerText}>Alimentos introducidos</Text>
          <IconButton icon="chevron-right" size={32} style={styles.iconButton} />
        </View>
        <View style={styles.cardContainer}>
          <IntroducedFoodCard />
          <IntroducedFoodCard />
          <IntroducedFoodCard />
        </View>
      </Pressable>

      <Pressable style={styles.cardContainerFoods} onPress={handleNavigateToFoods}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>¿Cómo ofrecer?</Text>
          <IconButton icon="chevron-right" size={32} style={styles.iconButton} />
        </View>
        <View style={styles.cardContainer}>
          <FoodCard onPress={handlePressToFoodScreen} />
          <FoodCard onPress={handlePressToFoodScreen} />
          <FoodCard onPress={handlePressToFoodScreen} />
        </View>
      </Pressable>

      <View style={styles.shareContainer}>
        <Text style={styles.shareText}>Comparte con tu familia los alimentos ya introducidos</Text>
        <Button theme="primary" label="Compartir" fullWidth={true} onPress={handleButtonClick} icon="share-alt" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    gap: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    fontSize: 18,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainerFoods: {
    display: 'flex',
    gap: 8,
    width: '100%',
    backgroundColor: White_color,
    padding: 16,
    paddingTop: 8,
    borderRadius: 8,
  },
  shareContainer: {
    display: 'flex',
    gap: 8,
    width: '100%',
    backgroundColor: Teal_color_20,
    padding: 16,
    borderRadius: 8,
  },
  shareText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TextColor,
  },
  iconButton: {
    margin: 0,
  },
});
