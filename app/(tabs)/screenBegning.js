import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import IconBird from "../../assets/icons/IconBird.svg";
import imgBeginig from "../../assets/images/imgBeginig.png";
import CustomText from "../../components/Text";
import { Colors } from "../../constants/colors";
export default function ScreenBegining() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={imgBeginig}
        style={styles.background}
        resizeMode="cover"
      >

        <IconBird style={styles.icon} width={220} height={220} />

        <View style={styles.titleWrapper}>
        <CustomText
            weight="medieval_sharp"
            type="title"
            style={[styles.outlineText, { color: Colors.black }]}
        >
            SHALOM
        </CustomText>

        <CustomText
            weight="medieval_sharp"
            type="title"
            style={[styles.mainText, { color: Colors.yellow }]}
        >
            SHALOM
        </CustomText>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
     flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    },

    outlineText: {
        position: 'absolute',
        textAlign: 'center',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        },

    mainText: {
        textAlign: 'center',
    },
});