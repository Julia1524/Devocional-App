import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import Img from "../assets/images/ImagemBackground.png";
import { Colors } from "../constants/colors";
import CustomText from "./Text";

export  default function ComponentCardFavorites({ 
    iconRight,
    iconLeft,
    title,
    textColor = Colors.yellow,
}) {
    return (
        <View style={styles.container}>
        <ImageBackground
                source={Img}
                style={styles.subContainer}
                imageStyle={styles.backgroundImage}
            >

            <View style={styles.side}>
            {iconLeft && (
                typeof iconLeft === "function"
                ? React.createElement(iconLeft, {
                    width: 80,
                    height: 80,
                    fill: "#fff",
                    })
                : <Image source={iconLeft} style={styles.iconBig} resizeMode="contain" />
            )}
    </View>

            <View style={styles.center}>
                <CustomText
                    weight="medieval_sharp"
                    type="large"
                    style={{
                    color: textColor,
                    textAlign: 'center',
                }}>
                    {title}
                </CustomText>
            </View>

        <View style={styles.sideRight}>
            {iconRight && (
                typeof iconRight === "function"
                ? React.createElement(iconRight, {
                    width: 20,
                    height: 20,
                    fill: "#fff",
                    })
                : <Image source={iconRight} style={styles.iconSmall} resizeMode="contain" />
            )}
            </View>
        </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginBottom: 20,
    padding: 3,                 // espessura da borda dourada
    marginHorizontal: 6,
    borderRadius: 26,
    backgroundColor: Colors.yellow, // cor da moldura
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 24,          // um pouco menor que o container
    overflow: "hidden",
  },

  backgroundImage: {
    resizeMode: "cover",
  },
  center: {
  position: "absolute",
  left: 0,
  right: 0,
  alignItems: "center",
},

   side: {
    width: 90,
    alignItems: "flex-start",
    marginRight: 15,
    },

    sideRight: {
        width: 30,
        alignItems: "flex-end", 
        marginLeft: 15,
        marginRight: 5,
        marginTop: -50
    },

    iconBig: {
        width: 80,
        height: 80,
    },

    iconSmall: {
        width: 30,
        height: 30,
        marginLeft: 30,
   },

});