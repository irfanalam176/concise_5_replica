import { View, Image, FlatList } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { images } from '../../assets/images';
import { heightDP, widthDP } from '../../utils/Responsive';
import CustomText from '../../components/CustomText';
import CustomHeader from '../../components/CustomHeader';
import InfoCard from '../../components/InfoCard';
import { colors } from '../../utils/colors';
import CategoryCard from '../../components/CategoryCard';
const Dashboard = () => {
  const infoCardData = [
    {
      id: 1,
      count: 2,
      title: 'Tutorials Taken By You',
      subTitle: 'This Week',
      subTitleColor: colors.blue33,
    },
    {
      id: 2,
      icon: images.review,
      title: 'Reviews',
      subTitle: 'You Did',
    },
    {
      id: 3,
      icon: images.growing1,
      title: 'How Are You Growing',
      subTitle: 'Professionally?',
      subTitleColor: colors.yellow10,
    },
    {
      id: 4,
      icon: images.growing1,
      title: 'How Are You Growing',
      subTitle: 'Personally?',
      subTitleColor: colors.blue33,
    },
    {
      id: 5,
      count: 2,
      title: 'Tutorials Taken By You',
      subTitle: 'Overall',
    },
  ];

  const categoryList = [
    {
      id: 1,
      color: colors.lightPurple,
      title: 'Leadership',
    },
    {
      id: 2,
      color: colors.blue,
      title: 'Communication',
    },
    {
      id: 3,
      color: colors.red,
      title: 'Problem Solving',
    },
    {
      id: 4,
      color: colors.green,
      title: 'Time Management',
    },
    {
      id: 5,
      color: colors.orange10,
      title: 'Personal Growth',
    },
  ];

  return (
    <ScreenWrapper isGradien={true} withHeader={true}>
      <CustomHeader isHome={true} />

      <View style={{ paddingHorizontal: 10 }}>
        <CustomText
          text={'Version 3.0'}
          size={12}
          align={'right'}
          textColor={colors.yellow10}
          mt={10}
        />
        <Image
          source={images.resizeLogo}
          style={{
            width: widthDP(160),
            height: heightDP(130),
            resizeMode: 'cover',
            alignSelf: 'center',
          }}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomText text={'Hello Manager5,'} size={18} />
          <CustomText text={'Manager'} textColor={colors.yellow10} size={18} />
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={infoCardData}
          renderItem={({ item }) => (
            <InfoCard
              count={item.count}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
              subTitleColor={item.subTitleColor}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />

        <CustomText
          text={'choose any category'}
          size={20}
          caseType={'capitalize'}
          align={'center'}
          mt={20}
          mb={20}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categoryList}
          renderItem={({ item }) => (
            <CategoryCard title={item.title} color={item.color} key={item.id} />
          )}
          keyExtractor={item => item.id.toString()}
          style={{ height: heightDP(400) }}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Dashboard;
