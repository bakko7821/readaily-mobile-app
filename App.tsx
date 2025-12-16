import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { useTheme } from './src/theme/useTheme';

export default function App() {
  const colors = useTheme();
  const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.body, { width, height, backgroundColor: colors.background }]}>
      <StatusBar style={'auto'} />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 40,
    flex: 1,
  }
});
