import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Navigate } from '../components/Navigate';

export default function LibraryScreen() {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={[styles.screen]}>
            <Header title="Библиотека" />
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