import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Fonts } from '../assets/fonts'
import { colors } from '../utils/colors'

const CustomButton = ({title,color,textColor,borderColor,mt,mb}) => {
  return (
   <TouchableOpacity style={[styles.mainBtn,styles.btncolor(color),styles.borderColor(),{
    marginTop:mt,marginBottom:mb
   }]}>
    <Text style={[styles.mainBtnText,styles.btnTextColor(textColor)]}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton
const styles = StyleSheet.create({
  mainBtn:{
    paddingVertical:15,
    borderRadius:10,
    borderWidth:1
  },
  borderColor:(borderColor)=>({
    borderColor:borderColor||colors.purple10
  }),
  btncolor:(color)=>({
    backgroundColor:color||colors.yellow10,
  }),
  mainBtnText:{
    textTransform:"uppercase",
    fontSize:18,
    fontFamily:Fonts.Inter_Bold,
    textAlign:"center"
  },
  btnTextColor:(textColor)=>({
      color:textColor
  })
})