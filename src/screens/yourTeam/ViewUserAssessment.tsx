import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Fonts } from '../../assets/fonts';
import { images } from '../../assets/images';
import { heightDP, widthDP } from '../../utils/Responsive';
import CustomText from '../../components/CustomText';
import CustomHeader from '../../components/CustomHeader';
import InfoCard from '../../components/InfoCard';
import { colors } from '../../utils/colors';
import CategoryCard from '../../components/CategoryCard';
import CustomInput from '../../components/CustomInput';
import CustomDropdown from '../../components/CustomDropdown';
import EmployeeCard from '../../components/EmployeeCard';
import Spacer from '../../components/Spacer';
import TaskCompletionCard from '../../components/TaskCompletionCard';
import { StackProps } from '../../types/navigations';

const ViewUserAssessment:React.FC<StackProps> = ({navigation}) => {
  const [expanded, setExpended] = useState<number[]>([]);
  const tasks = [
    {
      id: 1,
      title: 'Leadership',
      color: colors.lightPurple,
    },
    {
      id: 2,
      title: 'Communication',
      color: colors.green,
    },
  ];
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

  return (
    <ScreenWrapper isGradien={true} withHeader={true}>
      <CustomHeader withBackBtn={true} />

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
        text={`Manager5's personal libarary of tutorials taken`}
        textColor={colors.yellow10}
        align={'center'}
        family={Fonts.Inter_Medium}
        size={17}
        mt={20}
        mb={20}
        caseType={'capitalize'}
      />
      <View style={{ paddingHorizontal: 10 }}>
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

        <Spacer mt={20} />

        <CustomDropdown />
        <FlatList
        showsVerticalScrollIndicator={false}
          data={tasks}
          renderItem={({item})=>  
          <View >
              <CategoryCard
                mt={10}
                color={item.color}
                title={item.title}
                withIcon={true}
                bordercolor={colors.gradientYellow}
                onPress={() => {
                  setExpended(prev =>
                    prev.includes(item.id)
                      ? prev.filter(id => id != item.id)
                      : [...prev, item.id],
                  );
                }}
              />
              {expanded.includes(item.id) && <TaskCompletionCard />}
            </View>}
            
            keyExtractor={(item)=>item.id.toString()}
            style={{height:heightDP(400)}}
            contentContainerStyle={{paddingBottom:60}}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ViewUserAssessment;
