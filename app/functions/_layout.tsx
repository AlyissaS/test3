import { Stack} from "expo-router";

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="list" options={{ headerShown: false }} />
    </Stack>
  );
}