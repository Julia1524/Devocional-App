import { FlatList, ImageBackground, Pressable, StatusBar, StyleSheet, View } from "react-native";
import IconFavorites from "../../assets/icons/IconFavorites.svg";
import imgEbneserF from "../../assets/images/imgEbneserF.png";
import { ComponentButton } from "../../components/Button";
import ComponentFavoritesTopics from "../../components/componentFavoritesTopics";
import ComponentHeaderScreens from "../../components/componentHeaderScreens";
import { Colors } from "../../constants/colors";
export default function ScreebEbneserFavorites() {

    const ActionCardsData = [
            {        
                title: "Ouve, Senhor, a minha oração, dá ouvidos à minha súplica; responde-me por tua fidelidade e por tua justiça...",
                backgroundColor: Colors.brown,
                textColor: Colors.white,
                onPress: () => console.log("Ébnser"),
            },
            {
                title: "Ouve, Senhor, a minha oração, dá ouvidos à minha súplica; responde-me por tua fidelidade e por tua justiça...",
                backgroundColor: Colors.brown,
                textColor: Colors.white,
                onPress: () => console.log("Bloco de Fogo"),
            },
        ];

    const renderCard = ({ item, index }) => {
        return (
            <View style={styles.cardWrapper}>
                <Pressable onPress={item.onPress}>
                    <ComponentFavoritesTopics
                        title={item.title}
                        backgroundColor={item.backgroundColor}
                        textColor={item.textColor}
                    />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
             <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
               source={imgEbneserF}
                style={styles.background}
                resizeMode="cover"
            >

              <View style={styles.header}>
            <ComponentHeaderScreens
                title={"Ébneser"}
                iconRight={IconFavorites}
                textColor={Colors.white}
                borderColor={Colors.yellow}
            />
        </View>

        <FlatList
            data={ActionCardsData}
            renderItem={renderCard}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
        />

        <View style={styles.Button}>
            <ComponentButton
            title={"Voltar"}
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
        justifyContent: "space-between",
    },
      header: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
     Button: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },
    cardWrapper: {
        marginTop: 26,
        justifyContent: "center",
        alignItems: "center",
    },
});