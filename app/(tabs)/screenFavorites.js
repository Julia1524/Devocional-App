import { FlatList, ImageBackground, Pressable, StatusBar, StyleSheet, View } from "react-native";
import IconBack from "../../assets/icons/IconBack.svg";
import IconEbnese from "../../assets/icons/IconEbnese.svg";
import IconFavorites from "../../assets/icons/IconFavorites.svg";
import IconFire from "../../assets/icons/IconFire.svg";
import IconPortal from "../../assets/icons/IconPortal.svg";
import imgBackgroundLevels from "../../assets/images/imgBackgroundLevels.png";
import ComponentCardFavorites from "../../components/componentCardFavorites";
import ComponentHeaderScreens from "../../components/componentHeaderScreens";
import { Colors } from "../../constants/colors";

export default function ScreenFavorites() {
     const ActionCardsData = [
        {        
            iconRight: IconFavorites,
            iconLeft: IconEbnese,
            title: "Ébnser",
            onPress: () => console.log("Ébnser"),
        },
        {
            iconRight: IconFavorites,
            iconLeft: IconFire,
            title: "Fogo",
            onPress: () => console.log("Bloco de Fogo"),
        },
        {
            iconRight: IconFavorites,
            iconLeft: IconPortal,
            title: "Portal",
            onPress: () => console.log("Bloco Portal"),
        }
    ];

    const renderCard = ({ item, index }) => {
        return (
            <View style={styles.cardWrapper}>
                <Pressable onPress={item.onPress}>
                    <ComponentCardFavorites
                        iconRight={item.iconRight}
                        iconLeft={item.iconLeft}
                        title={item.title}
                    />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                source={imgBackgroundLevels}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.header}>
                    <ComponentHeaderScreens
                        title={"Favoritos"}
                        iconLeft={IconBack}
                        iconRight={IconFavorites}
                        textColor={Colors.white}
                        borderColor={Colors.yellow}
                    />
                </View>

                <FlatList
                    data={ActionCardsData}
                    renderItem={renderCard}
                    style={styles.list}
                    keyExtractor={(item, index) => index.toString()}
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
    },
    header: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    cardWrapper: {
        marginBottom: 20,
    },
    list: {
       alignSelf: "center",
       width: "90%"
    },
})