import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { colors } from '../utils/colors'
import Icons from './Icons'
import { heightDP } from '../utils/Responsive'

const EmployeeCard = ({name,email,mt,mb,onPress}) => {
  return (
   <View style={[styles.container,{marginTop:mt,marginBottom:mb}]}>
    <TouchableOpacity style={styles.empCart} onPress={onPress}>
        <View>
            <CustomText text={name} size={18} textColor={colors.white} mb={5}/>
        <CustomText text={email} size={14} textColor={colors.gray1}/>
        </View>

        <Icons name={"open-outline"} size={24} color={colors.yellow10}/>
        <View style={styles.before}/>
   </TouchableOpacity>
   </View>
  )
}

export default EmployeeCard
const styles = StyleSheet.create({
    container:{
        position:"relative",
        overflow:"hidden",
        borderRadius:10,
    },
    empCart:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:colors.black1,
        padding:15,
        paddingLeft:20
    },
    before:{
        width:7,
        backgroundColor:colors.black,
        height:heightDP(100),
        position:"absolute"
    }
})