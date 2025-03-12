import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Checkbox, IconButton } from 'react-native-paper';
import Button from '../components/commons/Button';
import { Border_radius, White_color } from '../styles/constants';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function RecipeScreen() {
  //const [checked, setChecked] = useState(false);
  const [expandedHow, setExpandedHow] = useState(true);
  const [expandedSteps, setExpandedSteps] = useState(true);

  const handleButtonClick = () => {
    Alert.alert('You pressed a button.');
  };

  const toggleExpandHow = () => {
    setExpandedHow(!expandedHow);
  };
  const toggleExpandSteps = () => {
    setExpandedSteps(!expandedSteps);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nombre de la receta</Text>
        <Button theme="primary" label={""} fullWidth={false} onPress={handleButtonClick} icon="pencil" />
      </View>
      <Image source={PlaceholderImage} style={styles.image} />

      <View style={styles.collapsibleContainer}>
        <Pressable style={styles.collapsibleHeader} onPress={toggleExpandHow}>
          <Text style={styles.collapsibleTitle}>Ingredientes</Text>
          <IconButton icon={expandedHow ? "chevron-up" : "chevron-down"} size={24} />
        </Pressable>
        {expandedHow && (
          <Text style={styles.collapsibleContent}>
            Para introducir el huevo a un bebé de 6 meses, comienza cocinando el huevo de manera segura, ya sea hervido o revuelto, y asegúrate de que esté bien cocido para evitar el riesgo de salmonela. Puedes ofrecer pequeñas piezas de huevo cocido o trocitos suaves, permitiendo que el bebé lo agarre y lo lleve a su boca por sí mismo. Observa por si hubiera alguna reacción alérgica, como erupciones en la piel o problemas digestivos. Además, recuerda que el huevo es una gran fuente de proteínas y nutrientes que ayudarán en el crecimiento de tu bebé.
          </Text>
        )}
      </View>

      <View style={styles.collapsibleContainer}>
        <Pressable style={styles.collapsibleHeader} onPress={toggleExpandSteps}>
          <Text style={styles.collapsibleTitle}>Paso a paso</Text>
          <IconButton icon={expandedSteps ? "chevron-up" : "chevron-down"} size={24} />
        </Pressable>
        {expandedSteps && (
          <Text style={styles.collapsibleContent}>
            Para introducir el huevo a un bebé de 6 meses, comienza cocinando el huevo de manera segura, ya sea hervido o revuelto, y asegúrate de que esté bien cocido para evitar el riesgo de salmonela. Puedes ofrecer pequeñas piezas de huevo cocido o trocitos suaves, permitiendo que el bebé lo agarre y lo lleve a su boca por sí mismo. Observa por si hubiera alguna reacción alérgica, como erupciones en la piel o problemas digestivos. Además, recuerda que el huevo es una gran fuente de proteínas y nutrientes que ayudarán en el crecimiento de tu bebé.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    gap: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 0,
  },
  title: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 138,
  },
  collapsibleContainer: {
    width: '100%',
    backgroundColor: White_color,
    padding: 16,
    borderRadius: Border_radius
  },
  collapsibleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  collapsibleTitle: {
    fontSize: 18,
  },
  collapsibleContent: {
    marginTop: 8,
    fontSize: 16,
  },
});
