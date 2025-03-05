import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton, TextInput } from 'react-native-paper';
import RecipeCardXL from '../components/Recipes/RecipeCardXL';
import Button from '../components/commons/Button';
import { Primary_color } from '../styles/constants';
//import FoodsFilters from '../components/Foods/FoodsFilters';

export default function Recipes() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const searchInputRef = useRef(null);

    const handlePressToRecipeScreen = () => {
        navigation.navigate('RecipeScreen' as never);
    };

    const handleFilterClick = () => {
        setShowFilters(!showFilters);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerSearchContainer}>
                <View style={[styles.searchContainer, isFocused && styles.searchContainerFocused]}>
                    <IconButton icon="magnify" size={24} style={styles.searchIcon} />
                    <TextInput
                        ref={searchInputRef}
                        style={styles.searchInput}
                        placeholder="Buscar..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        mode="flat"
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                    />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
                <RecipeCardXL onPress={handlePressToRecipeScreen} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        padding: 16,
    },
    headerSearchContainer: {
        display: 'flex',
        gap: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 8,
        flexGrow: 1,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    searchContainerFocused: {
        borderColor: Primary_color, // Change this to your desired border color
    },
    searchIcon: {
        margin: 0,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 0,
    },
    scrollContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'center',
        gap: 16,
    },
});
