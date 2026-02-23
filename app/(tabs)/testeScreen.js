import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WorldInfoCard from "../../components/componentCardName";
import DayCircles from "../../components/componentCircDay";
export default function TesteScreen() {
    return (
        <SafeAreaView style={styles.safe}>
      
            <View style={styles.container}>
                <DayCircles 
                    totalDays={31} />
             </View>
             <View>
              <WorldInfoCard />
             </View>
             
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