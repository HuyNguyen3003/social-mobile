import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Link } from 'expo-router';

const PlaceholderImage = require('../assets/martin-katler-94lAQc7ipNg-unsplash.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>Aora</Text>
        <Image source={PlaceholderImage} style={styles.image} />
        <Link href="/profile">Go to profile</Link>

      </View>
      
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
