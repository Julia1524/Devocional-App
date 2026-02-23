import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';
import CustomText from './Text';
export function ComponentButton({
  title,
  onPress,
  backgroundColor = Colors.yellow,
  textColor = Colors.black,
  style,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }, style]}>
       <CustomText weight="medieval_sharp" type="medium" style={{ color: textColor, textAlign: 'center' }}>
          {title} 
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
  },

});
