import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import Icons from './Icons';
import { Fonts } from '../assets/fonts';
import { heightDP, widthDP } from '../utils/Responsive';

const TaskCompletionCard = () => {
  return (
   <View style={styles.container}>
      <View style={styles.before}/>
     <TouchableOpacity style={styles.btnContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CustomText
          text={'Completed on: January 06, 2026'}
          caseType={'capitalize'}
          textColor={colors.yellow10}
          size={15}
        />
        <Icons name={'open-outline'} size={24} color={colors.yellow10} />
      </View>
      <CustomText
        text={`How to lead when your team's\nconfidence is shaken:`}
        caseType={'capitalize'}
        textColor={colors.white}
        size={19}
        family={Fonts.Inter_SemiBold}
      />

      <View style={styles.commentContainer}>
        <Text style={styles.commentText}>
          <Text style={styles.commentHighlightText}>Manager5's Comment on This:</Text> I learned that be confident
        </Text>
        <Text style={styles.commentText}>
          <Text style={styles.commentHighlightText}>what did you learn:</Text> when team confidence is shaken,
          leaders must foster honesty and safety so trust can rebuild stronger
          than before.
        </Text>
      </View>
    </TouchableOpacity>
   </View>
  );
};

export default TaskCompletionCard;
const styles = StyleSheet.create({
  container:{
    borderRadius:20,
    position:"relative",
    overflow:"hidden"
  },
  btnContainer:{
    backgroundColor:colors.darkBlue,
    padding:15,
    paddingLeft:20,
    elevation:5,
  },
  commentContainer:{
    borderLeftWidth:5,
    paddingLeft:5,
    marginTop:5,
    borderLeftColor:colors.purple10
  },
  commentText:{
    color:colors.white,
    fontSize:14,
    textTransform:"capitalize",
    marginBottom:5,
    fontFamily:Fonts.Inter_Medium
  },
  commentHighlightText:{
    color:colors.yellow10
  },
  before:{
    width:widthDP(10),
    backgroundColor:colors.black,
    height:"100%",
    position:"absolute",
    top:0,
    left:0,
    zIndex:1
  }
})