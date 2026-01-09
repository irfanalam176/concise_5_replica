import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Fonts } from '../../assets/fonts';
import { images } from '../../assets/images';
import { heightDP, widthDP } from '../../utils/Responsive';
import CustomText from '../../components/CustomText';
import CustomHeader from '../../components/CustomHeader';
import InfoCard from '../../components/InfoCard';
import { colors } from '../../utils/colors';
import CustomInput from '../../components/CustomInput';
import CustomDropdown from '../../components/CustomDropdown';
import EmployeeCard from '../../components/EmployeeCard';
import Spacer from '../../components/Spacer';
import { StackProps } from '../../types/navigations';

const YourTeam:React.FC<StackProps> = ({ navigation }) => {
  const infoCardData = [
    {
      id: 1,
      count: 2,
      title: 'Tutorials Taken By Your Employees',
      subTitle: 'This Week',
      subTitleColor: colors.blue33,
      active: true,
    },
    {
      id: 2,
      icon: images.review,
      title: 'Reviews From Your',
      subTitle: 'Employees',
    },
    {
      id: 3,
      icon: images.growing1,
      title: 'How Your Employees Are Growing',
      subTitle: 'Professionally?',
      subTitleColor: colors.yellow10,
    },
    {
      id: 4,
      icon: images.growing1,
      title: 'How Your Employees Are Growing',
      subTitle: 'Personally?',
      subTitleColor: colors.blue33,
    },
    {
      id: 5,
      count: 2,
      title: 'Overall Tutorials Taken By',
      subTitle: 'Your Employees',
    },
  ];

  const usersList = [
    {
      id: 1,
      name: 'Manager5 Test',
      email: 'manager111@gmail.com',
    },
    {
      id: 2,
      name: 'Manager6 Test',
      email: 'manager61@gmail.com',
    },
    {
      id: 3,
      name: 'Manager6 Test',
      email: 'manager61@gmail.com',
    },
    {
      id: 4,
      name: 'Manager6 Test',
      email: 'manager61@gmail.com',
    },
  ];

  return (
    <ScreenWrapper isGradien={true} withHeader={true}>
      <CustomHeader />

      <View style={{ paddingHorizontal: 10 }}>
        <Spacer mt={10} />
        <Image
          source={images.resizeLogo}
          style={{
            width: widthDP(160),
            height: heightDP(130),
            resizeMode: 'cover',
            alignSelf: 'center',
          }}
        />

        <CustomText
          text={'Your Employees Activity'}
          textColor={colors.yellow10}
          align={'center'}
          family={Fonts.Inter_Medium}
          size={18}
          mt={20}
          mb={20}
        />

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
              active={item?.active}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />

        <CustomInput
          placeholder={'Search By Name'}
          bordercolor={colors.gradientYellow}
          search={true}
          bgColor={colors.black1}
          mt={30}
          mb={30}
        />
        <CustomDropdown />

        <FlatList
        showsVerticalScrollIndicator={false}
          data={usersList}
          renderItem={({ item }) => (
            <EmployeeCard
              mt={20}
              name={item.name}
              email={item.email}
              onPress={() => navigation.navigate('viewUser')}
            />
          )}
          keyExtractor={item => item.id.toString()}
           style={{height:heightDP(400)}}
          contentContainerStyle={{paddingBottom:50}}
        />
      </View>
    </ScreenWrapper>
  );
};

export default YourTeam;
