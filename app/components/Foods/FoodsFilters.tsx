import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';
import { Black_color, Border_radius, CardBackgroundColor, Primary_color, White_color } from '../../styles/constants';

const screenHeight = Dimensions.get('window').height;

interface FilterItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ label, checked, onChange }) => (
  <View style={styles.filterItem}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={onChange}
      color={Primary_color}
    />
    <Text style={styles.filterText}>{label}</Text>
  </View>
);

const FoodsFilters: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [filtersAge, setFiltersAge] = useState(['+6 meses', '+9 meses', '+1 año'].map(() => false));
  const [filtersType, setFiltersType] = useState(['Verduras', 'Frutas', 'Carnes', 'Pescados', 'Frutos Secos', 'Legumbres'].map(() => false));
  const [filtersNutrition, setFiltersNutrition] = useState(['Proteina', 'Hierro', 'Magnesio'].map(() => false));

  const handleClearFilters = () => {
    setFiltersAge(filtersAge.map(() => false));
    setFiltersType(filtersType.map(() => false));
    setFiltersNutrition(filtersNutrition.map(() => false));
  };

  const hasActiveFilters = () => {
    return filtersAge.some(Boolean) || filtersType.some(Boolean) || filtersNutrition.some(Boolean);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.text}>Filtros</Text>
            <IconButton
              icon="close"
              size={24}
              onPress={onClose}
              style={styles.closeButton}
            />
          </View>
          {hasActiveFilters() && (
            <TouchableOpacity onPress={handleClearFilters}>
              <Text style={styles.clearFiltersText}>Limpiar filtros</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.containerFilter}>
          <Text style={styles.text}>Edad</Text>
          {['+6 meses', '+9 meses', '+1 año'].map((filter, index) => (
            <FilterItem key={index} label={filter} checked={filtersAge[index]} onChange={() => {
              const newFilters = [...filtersAge];
              newFilters[index] = !newFilters[index];
              setFiltersAge(newFilters);
            }} />
          ))}
        </View>

        <View style={styles.containerFilter}>
          <Text style={styles.text}>Tipo de alimento</Text>
          {['Verduras', 'Frutas', 'Carnes', 'Pescados', 'Frutos Secos', 'Legumbres'].map((filter, index) => (
            <FilterItem key={index} label={filter} checked={filtersType[index]} onChange={() => {
              const newFilters = [...filtersType];
              newFilters[index] = !newFilters[index];
              setFiltersType(newFilters);
            }} />
          ))}
        </View>

        <View style={styles.containerFilter}>
          <Text style={styles.text}>Valor nutricional</Text>
          {['Proteina', 'Hierro', 'Magnesio'].map((filter, index) => (
            <FilterItem key={index} label={filter} checked={filtersNutrition[index]} onChange={() => {
              const newFilters = [...filtersNutrition];
              newFilters[index] = !newFilters[index];
              setFiltersNutrition(newFilters);
            }} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: screenHeight,
    position: 'relative',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    zIndex: 1,
  },
  clearFiltersText: {
    textDecorationLine: 'underline',
    color: Primary_color,
  },
  container: {
    backgroundColor: White_color,
    borderRadius: Border_radius,
    padding: 16,
    display: 'flex',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 300,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  filterText: {
    fontSize: 16,
  },
  containerFilter: {
    borderBottomWidth: 1,
    borderColor: Black_color,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});

export default FoodsFilters;
