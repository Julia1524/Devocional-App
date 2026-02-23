import { StyleSheet, Text, View } from "react-native";
import IconBird from "../assets/icons/IconBird.svg";
import IconFavorites from "../assets/icons/IconFavorites.svg";
import CustomText from "./Text";
export function ComponentCardInformation({
    title, 
    description, 
    subDescription, 
    color = "#000000",
    textColor = "#FFFFFF",
    icon = false
  }) {

    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.iconContainer}>
                <IconBird width={110} height={110} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    <CustomText weight="medieval_sharp" type="large" style={{ color: textColor, textAlign: 'center' }}>
                        {title} 
                    </CustomText>
                </Text>
                <Text style={styles.description}>
                    <CustomText weight="medieval_sharp" type="medium" style={{ color: textColor, textAlign: 'center' }}>
                        {description} 
                    </CustomText>
                </Text>
                <Text style={styles.subDescription}>
                   <CustomText weight="medieval_sharp" type="small" style={{ color: textColor }}>
                        {subDescription} 
                    </CustomText>
                </Text>
        </View>
        {icon && (
          <View style={styles.iconFavorites}>
            <IconFavorites width={30} height={30} />
          </View>
      )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '88%',
        flexDirection: 'row',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    iconContainer: {
        marginTop: -53,
        marginLeft: -40,
        flexWrap: 'wrap',
        flexShrink: 1,
  },
  textContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -50,

  },
  description: {
    marginVertical: 30,
    alignSelf: 'flex-start',
    marginLeft: -20,
  },
  subDescription: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  title: {
    marginBottom: 8,
  },
  iconFavorites : {
    marginTop: 10,
    marginRight: 15,
  }
});