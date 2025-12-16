import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../theme/useTheme';
import { BurgerIcon } from '../icons/icons';
import { DropdownMenu } from './DropDownMenu';

export function Header() {
  const colors = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={[styles.header, {backgroundColor: colors.surface}]}>
      <Pressable onPress={() => setMenuOpen(prev => !prev)}>
        <BurgerIcon width={36} height={36} stroke={colors.text} />
      </Pressable>

      <DropdownMenu
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}>
          <Pressable style={{ padding: 12 }}>
            <Text style={{ color: colors.text }}>Профиль</Text>
          </Pressable>

          <Pressable style={{ padding: 12 }}>
            <Text style={{ color: colors.text }}>Настройки</Text>
          </Pressable>

          <Pressable style={{ padding: 12 }}>
            <Text style={{ color: colors.text }}>Выйти</Text>
          </Pressable>
      </DropdownMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    zIndex: 10,
    // paddingTop: 40,
    padding: 8,
  }
});
