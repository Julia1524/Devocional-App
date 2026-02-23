import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import imgBeginig from "../../assets/images/imgBeginig.png";
import { ComponentButton } from "../../components/Button";
import { ComponentCardInformation } from "../../components/componnetCardInformation";
import { Colors } from "../../constants/colors";
export default function ScreenInitialGame() {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                source={imgBeginig}
                style={styles.background}
                resizeMode="cover"
            >

            <View style={styles.card}>
                <ComponentCardInformation
                    title={"Queime os barcos!"}
                    description={"Sua jornada começa agora - e não há caminho de volta."}  
                    textColor={Colors.yellow}
                />
             </View>

             <ComponentButton
                title={"Vamos lá!"}
                onPress={() => console.log("Iniciar jogo")}    
             />

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
        padding: 10,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
