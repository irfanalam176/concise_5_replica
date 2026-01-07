import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { Fonts } from '../assets/fonts'

const CustomText = ({text,mt,mb,family,textColor,size,caseType,align}) => {
  return (

      <Text
      style={{
        color:textColor?textColor:colors.white,
        fontSize:size?size:16,
        fontFamily:family?family:Fonts.Inter_Regular,
        marginTop:mt,
        marginBottom:mb,
        textTransform:caseType?caseType:"",
        textAlign:align||"auto"
      }}

      >{text}</Text>
  )
}

export default CustomText