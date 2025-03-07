import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }}/>
      <Stack.Screen name="FoodScreen" options={{ headerShown: false }}/>
      <Stack.Screen name="RecipeScreen" options={{ headerShown: false }}/>
      <Stack.Screen name="Login" options={{ headerShown: false }}/>
    </Stack>
  );
}
