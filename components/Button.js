import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';
export function ComponentButton({
  title,
  onPress,
  backgroundColor = Colors.yellow,
  textColor = Colors.black,
  style,
  textStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }, style]}>
      <Text style={[styles.text, { color: textColor }, textStyle]}>
         {title}  
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});
