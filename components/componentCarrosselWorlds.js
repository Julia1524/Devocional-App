import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import CustomText from "./Text";
export default function ComponentCarrosselWorlds({
    title,
    textColor = Colors.yellow,
    icon,
}) {
    return (
        <View style={styles.container}>
             <View>
                {icon && (
                    typeof icon === "function"
                    ? React.createElement(icon, {
                        width: 200,
                        height: 200,
                        fill: "#fff",
                        })
                    : <Image source={icon} style={styles.icon} resizeMode="contain" />
                )}
        </View>

          <View>
            <CustomText
                weight="medieval_sharp"
                type="xlarge"
                style={{
                color: textColor,
                textAlign: 'center',
            }}>
                {title}
            </CustomText>
        </View>

        </View>
    )

}

const styles = StyleSheet.create({
    icon: {
     position: 'absolute',
    },
    container: {
        width: '88%',
        marginBottom: 20,
        padding: 3,                 
        marginHorizontal: 6,
        backfaceVisibility: 'hidden',
    }
});