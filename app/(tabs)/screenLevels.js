import { FlatList, ImageBackground, Pressable, StatusBar, StyleSheet, View } from "react-native";
import IconBird from "../../assets/icons/IconBird.svg";
import IconEbnese from "../../assets/icons/IconEbnese.svg";
import IconFireBlock from "../../assets/icons/IconFireBlock.svg";
import IconPortalBlock from "../../assets/icons/IconPortalBlock.svg";
import imgBackgroundLevels from "../../assets/images/imgBackgroundLevels.png";
import { ComponentButton } from "../../components/Button";
import ComponentCarrosselWorlds from "../../components/componentCarrosselWorlds";
import { ComponentPageHeader } from "../../components/componentPageHeader";
import { Colors } from "../../constants/colors";

export default function ScreenLevels() {

    const ActionCardsData = [
    {        
        icon: IconEbnese,
        title: "Ébnser",
        onPress: () => console.log("Vídeos"),
    },
    {        
        icon: IconFireBlock,
        onPress: () => console.log("Notícias"),
    },
    {        
        icon: IconPortalBlock,
        onPress: () => console.log("Ciência"),
    }
];
  
  const renderCard = ({ item, index }) => {
  return (
    <View style={styles.cardWrapper}>
      <Pressable onPress={item.onPress}>
        <ComponentCarrosselWorlds
          icon={item.icon}
          title={item.title}
        />
      </Pressable>
    </View>
  );
};
  
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                source={imgBackgroundLevels}
                style={styles.background}
                resizeMode="cover"
            >
                
                <View style={styles.header}>
                    <ComponentPageHeader
                        title={"Escolha seu mundo"}
                        iconLeft={IconBird}
                        textColor={Colors.yellow}
                />
                </View>
                
                 <FlatList
                    data={ActionCardsData}
                    renderItem={renderCard}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    />

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
    },
    header: {
        flex: 1,
        justifyContent: "fl",
        alignItems: "center",
        marginTop: 50,
    },
   list: {
    alignSelf: "center",
    },
    listContent: {
        alignItems: "center",
        justifyContent: "center",
    }
})