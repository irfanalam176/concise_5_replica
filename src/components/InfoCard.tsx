import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import { heightDP, widthDP } from '../utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../assets/fonts';

type InfoCardProps = {
  title?: string;
  subTitle?: string;
  count?: number;
  icon: any;
  subTitleColor?: string;
  active?: boolean;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subTitle,
  count,
  icon,
  subTitleColor,
  active,
}) => {
  return (
    <LinearGradient
      colors={
        active
          ? [colors.gradientYellow, colors.parent]
          : [colors.brown, colors.parent]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card}
      locations={[0, 1]}
    >
      <TouchableOpacity>
        <View style={{ marginBottom: 10 }}>
          {count ? (
            <CustomText
              text={count}
              align={'center'}
              size={30}
              textColor={colors.yellow10}
            />
          ) : (
            <Image
              source={icon}
              style={{
                width: widthDP(37),
                height: heightDP(37),
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
          )}
        </View>

        <Text style={[styles.cardText]}>
          {title}{' '}
          <Text style={[styles.cardText, { color: subTitleColor }]}>
            {subTitle}
          </Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    width: widthDP(180),
    height: heightDP(115),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.yellow10,
    marginTop: 10,
    paddingHorizontal: 5,
  },

  cardText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: Fonts.Inter_Regular,
    textAlign: 'center',
  },
});
