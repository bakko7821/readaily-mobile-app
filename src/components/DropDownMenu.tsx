import { View, Pressable, StyleSheet, Dimensions } from 'react-native';
import { ReactNode } from 'react';
import { useTheme } from '../theme/useTheme';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function DropdownMenu({ visible, onClose, children }: Props) {
    const { width, height } = Dimensions.get('window');

    const colors = useTheme();
    if (!visible) return null;

    return (
    <>
        <Pressable
            style={[styles.overlay, {width, height}]}
            onPress={onClose}
        />
        <View style={[styles.menu, {height, backgroundColor: colors.surface}]}>
            {children}
        </View>
    </>
    );
}

const styles = StyleSheet.create({
overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
},

menu: {
    width: 200,
    position: 'absolute',
    paddingVertical: 8,
    zIndex: 11,
    elevation: 6,
},
});
