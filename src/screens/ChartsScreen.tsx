import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Navigate } from '../components/Navigate';

export default function ChartsScreen() {
  return (
    <View style={[styles.screen]}>
      <Header title="Статистика" />
      <Navigate />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    position: 'relative',
  }
})