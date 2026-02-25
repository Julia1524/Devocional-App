import { StyleSheet, View } from "react-native";
import IconBird from "../assets/icons/IconBird.svg";
import { Colors } from "../constants/colors";
import CustomText from "./Text";

export  default function ComponentFavoritesTopics({ 
    title,
    textColor = Colors.white,
    backgroundColor = Colors.brown,
}) {
    return (
        <View style={styles.container}>
        <View 
            style={[styles.subContainer, { backgroundColor: backgroundColor }]}
        >
            <View style={styles.textContainer}>
                <CustomText
                    weight="medieval_sharp"
                    type="medium"
                    style={{
                    color: textColor,
                    textAlign: 'justify',
                }}>
                    {title}
                </CustomText>
            </View>

        </View>

          <View style={styles.iconContainer}>
                <IconBird width={90} height={90} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    width: '88%',
    marginBottom: 20,
    padding: 3,
    marginHorizontal: 10,
    borderRadius: 26,
    backgroundColor: Colors.yellow,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    position: 'relative', // IMPORTANTE para o absolute funcionar
  },

  subContainer: {
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 22,
    overflow: "hidden",
  },

  iconContainer: {
    position: 'absolute',
    top: -35,     
    left: -22,    
  },
  textContainer: {
    flex: 1,
    padding: 17,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
  