import { Text } from 'react-native';

const FONTS_WEIGHTS = {
  poppins_regular: 'Poppins-Regular',
  poppins_medium: 'Poppins-Medium',
  poppins_semibold: 'Poppins-SemiBold',
  medieval_sharp: 'MedievalSharp',
};

const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 30,
  xlarge: 40,
};

export default function CustomText({
  children,
  weight = 'poppins_regular',
  type = 'small',
  style,
  ...props
}) {
  return (
    <Text
      style={[
        {
          fontFamily: FONTS_WEIGHTS[weight],
          fontSize: FONT_SIZES[type],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
