import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import imgBackgroundLevels from "../../assets/images/imgBackgroundLevels.png";
import { ComponentButton } from "../../components/Button";

export default function ScreenLevels() {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                source={imgBackgroundLevels}
                style={styles.background}
                resizeMode="cover"
                >

                <View style={styles.Button}>
                 <ComponentButton
                    title={"Entrar"}
                    onPress={() => console.log("Iniciar nível 1")}
                />
                </View>
               
            </ImageBackground>

         

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Button: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10,
    }
})