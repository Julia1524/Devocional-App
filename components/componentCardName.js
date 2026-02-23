import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';
import CustomText from "./Text";

export default function WorldInfoCard({
  description = 'O “Jardim da Fé” representa o crescimento espiritual.\nCada dia é uma semente plantada com fé, amor e sabedoria.',
  currentDay = 1,
  totalDays = 30,
}) {
  const progress = currentDay / totalDays;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
         <CustomText
            weight="medieval_sharp"
            type="titleCard"
            style={styles.title}
        >
            {"Por que esse mundo?" }
        </CustomText>

          <CustomText
            weight="medieval_sharp"
            type="medium"
            style={styles.description}
        >
            {description }
        </CustomText>


        <View style={styles.dayBadge}>
         <CustomText
            weight="medieval_sharp"
            type="small"
            style={styles.dayText}
        >
            {"Dia " + currentDay}
        </CustomText>
        </View>

      </View>

      <View style={styles.progressCard}>
        <CustomText
            weight="medieval_sharp"
            type="medium"
            style={styles.progressTitle}
        >
            {"Seu Progresso "}
        </CustomText>

        <View style={styles.progressRow}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>

          <View style={styles.daysBadge}>
             <CustomText
                weight="medieval_sharp"
                type="small"
                style={styles.daysText}
            >
                {currentDay + " dias"}
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  card: {
    backgroundColor: '#1A0F08',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: Colors.yellow,
    marginBottom: 12,
  },

  title: {
    fontWeight: 'bold',
    color: Colors.yellow,
    marginBottom: 8,
  },


  description: {
    color: '#E7E0D8',
    fontSize: 14,
    lineHeight: 20,
  },

  dayBadge: {
    alignSelf: 'flex-end',
    marginTop: 12,
    backgroundColor: Colors.yellow,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  dayText: {
    color: '#2E1C0E',
    fontWeight: 'bold',
  },

  progressCard: {
    backgroundColor: '#1A0F08',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.yellow,
  },

  progressTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#3A2A1A',
    borderRadius: 999,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: Colors.yellow,
  },

  daysBadge: {
    backgroundColor: '#2E1C0E',
    borderWidth: 1,
    borderColor: Colors.yellow,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },

  daysText: {
    color: '#F4B740',
    fontWeight: 'bold',
  },
});