import { View, Text, Image } from 'react-native';
import styles from './MeditationTopDisplay.style';
import { COLORS } from '../../constants';

const getThemeStyles = (isDark) => ({
  headText: {
    color: isDark ? COLORS.darkText : COLORS.lightText,
  },
  contextText: {
    color: isDark ? COLORS.darkText : COLORS.lightText,
  },
  container: {
    backgroundColor: isDark ? COLORS.darkBackground : COLORS.lightWhite,
  },
  contentBox: {
    backgroundColor: isDark ? COLORS.darkBackground : COLORS.lightWhite,
  },
});

const MeditationTopDisplay = ({
  meditationImage,
  meditationTitle,
  duration,
  target,
  isDarkMode,
}) => {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: meditationImage,
          }}
          resizeMode='cover'
          style={styles.logoImage}
        />
      </View>

      <View style={styles.meditationTitleBox}>
        <Text style={styles.meditationTitle}>{meditationTitle}</Text>
      </View>

      <View style={styles.meditationInfoBox}>
        <Text style={styles.meditationName}>{target} / </Text>
        <View style={styles.durationBox}>
          <Image
            source={'https://cdn-icons-png.flaticon.com/512/109/109613.png'}
            resizeMode='cover'
            style={styles.durationImage}
          />

          <Text style={styles.durationName}>{duration}</Text>
        </View>
      </View>
    </View>
  );
};

export default MeditationTopDisplay;
