import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Colors } from "../constants/colors";

const { width } = Dimensions.get('window');

const NUM_COLUMNS = 4;       
const SPACING = 16;          
const PADDING = 16 * 2;     

const ITEM_SIZE = (width - PADDING - SPACING * NUM_COLUMNS) / NUM_COLUMNS;

export default function DayCircles({
     totalDays = 30,
     color = Colors.blue,
     textColor = Colors.white,
    }) {
  const navigation = useNavigation();

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
     <FlatList
        data={days}
        numColumns={NUM_COLUMNS}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.row}  
        renderItem={({ item }) => (
            <TouchableOpacity
            style={[styles.circle, { backgroundColor: color }]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DayScreen', { day: item })}
            >
            <Text style={[styles.text, { color: textColor }]}>{item}</Text>
            </TouchableOpacity>
        )}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
  },
  circle: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: ITEM_SIZE / 2,
    backgroundColor: '#F4B740',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E1C0E',
  },
  row: {
    justifyContent: 'flex-start',
},
});