import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';



export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white bt-10">

      <Text >Aora</Text>

      <Link href="/profile">Go to profile</Link>



      <StatusBar style="auto" />
    </View>
  );
}


