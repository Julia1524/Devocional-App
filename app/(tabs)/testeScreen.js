import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconBack from "../../assets/icons/IconBack.svg";
import IconFavorites from "../../assets/icons/IconFavorites.svg";
import IconFire from "../../assets/icons/IconFire.svg";
import { ComponentButton } from "../../components/Button";
import CustomText from "../../components/Text";
import ComponentCardFavorites from "../../components/componentCardFavorites";
import { ComponentPageHeader } from "../../components/componentPageHeader";
import { ComponentCardInformation } from "../../components/componnetCardInformation";
import { Colors } from "../../constants/colors";
export default function TesteScreen() {
    return (
        <SafeAreaView style={styles.safe}>
        <ScrollView>


        <View style={styles.container}>
            <CustomText weight="medieval_sharp" type="xlarge" style={{ marginBottom: 20 }}>
                Teste Screen 
            </CustomText>

            <ComponentButton 
                title={<CustomText weight="medieval_sharp" type="large">Press Me</CustomText>}
                onPress={() => Alert.alert('Button Pressed!')} 
                style={{ paddingHorizontal: 30 }} 
                textStyle={{ fontSize: 18 }} 
            />
            <View>
                <ComponentCardInformation
                    title="Queime os barcos!"
                    description="Sua jornada começa agora - e não há caminho de volta."
                    subDescription="Additional info here."
                    color= {Colors.blue}
                    textColor={Colors.white}
                    />
            </View>

            <View>
                    <ComponentPageHeader
                    title="Ébneser!"
                    iconLeft={IconBack}
                    iconRight={null}
                    textColor={Colors.white}
                    borderColor={Colors.yellow}
                />
            </View>
            <View>
                <ComponentCardFavorites
                    title="Ébnser"
                    iconLeft={IconFire}
                    iconRight={IconFavorites}
                />
            </View>
            
        </View>
    </ScrollView>
      </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
      safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
});