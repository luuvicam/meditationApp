import { View, Text } from 'react-native';
import styles from './About.style';
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

const About = ({ info, title, isDarkMode }) => {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.headText, themeStyles.headText]}>About {title}:</Text>

      <View style={[styles.contentBox, themeStyles.contentBox]}>
        <Text style={[styles.contextText, themeStyles.contextText]}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
