import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomText from "./Text";

export default function ComponentHeaderScreens({ 
    title,
    iconRight,
    iconLeft, 
    textColor = "#FFFFFF",
    borderColor = "#FFFFFF",
 }) {
    return (
        <View style={styles.container}>
            <View>
                {iconLeft &&
                    (typeof iconLeft === "function"
                        ? React.createElement(iconLeft, {
                            width: 30,
                            height: 30,
                            fill: "#fff",
                            style: styles.icon,
                        })
                        : <Image source={iconLeft} style={styles.icon} resizeMode="contain" />)
                    }
            </View>

           <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <CustomText
                weight="medieval_sharp"
                type="large"
                style={{
                position: 'absolute',
                color: borderColor,
                textShadowColor: borderColor,
                textShadowOffset: { width: -1, height: -1 },
                textShadowRadius: 2,
                }}
            >
                {title}
            </CustomText>

            <CustomText
                weight="medieval_sharp"
                type="large"
                style={{
                position: 'absolute',
                color: borderColor,
                textShadowColor: borderColor,
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
                }}
            >
                {title}
            </CustomText>

            <CustomText
                weight="medieval_sharp"
                type="large"
                style={{
                color: textColor,
                textAlign: 'center',
                }}
            >
                {title}
            </CustomText>
            </View>

            <View>
                 {iconRight &&
                    (typeof iconRight === "function"
                        ? React.createElement(iconRight, {
                            width: 30,
                            height: 30,
                            fill: "#fff",
                            style: styles.icon,
                        })
                        : <Image source={iconRight} style={styles.icon} resizeMode="contain" />)
                    }
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        padding: 5,
        marginRight: 8,
        marginLeft: 8,
  },
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        textAlign: 'center',
    },
})