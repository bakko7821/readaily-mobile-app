import { View, StyleSheet, Text} from 'react-native';
import { useTheme } from '../theme/useTheme';

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  const colors = useTheme();

  return (
    <View style={[styles.header, {backgroundColor: colors.surface}]}>
      <Text style={[styles.titleText, {color: colors.text}]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
    borderRadius: 0,
    padding: 16,
    width: '100%'
  },

  titleText: {
    fontSize: 24,
    fontWeight: 500
  }
});
