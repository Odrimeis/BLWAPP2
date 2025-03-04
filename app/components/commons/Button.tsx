import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Border_radius, Primary_color, White_color } from '../../styles/constants';

type Props = {
  label?: string;
  theme?: 'primary';
  fullWidth?: boolean;
  onPress: () => void;
  icon?: keyof typeof FontAwesome.glyphMap;
};

export default function Button({ label, theme, fullWidth = true, onPress, icon }: Props) {
  const width = fullWidth ? '100%' : 'auto';

  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, { width }]}>
        <Pressable
          style={[styles.button, { backgroundColor: Primary_color, width }]}
          onPress={onPress}>
          {icon && <FontAwesome name={icon} size={18} color={White_color} style={styles.buttonIcon} />}
          <Text style={[styles.buttonLabel, { color: White_color }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.buttonContainer, { width }]}>
      <Pressable style={styles.button} onPress={onPress}>
        {icon && <FontAwesome name={icon} size={18} color={White_color} style={styles.buttonIcon} />}
        <Text style={[styles.buttonLabel, { color: White_color }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    borderRadius: Border_radius,
  },
  buttonIcon: {
    paddingRight: 0,
  },
  buttonLabel: {
    fontSize: 16,
  },
});
