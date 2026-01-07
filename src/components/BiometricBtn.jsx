import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { Fonts } from '../assets/fonts'
import { images } from '../assets/images'
import { heightDP, widthDP } from '../utils/Responsive'

const BiometricBtn = () => {
  return (
    <TouchableOpacity style={styles.biometricBtn}>
      <Text 
      style={styles.biometricBtnText}
      >Login with face/touch ID</Text>

      <View style={{
          flexDirection:"row",
          gap:10,
          position:"relative",
          alignItems:"center",
          justifyContent:"center",
          paddingLeft:15
        }}>
          <View style={styles.divider}/>
        <Image source={images.face1} style={styles.biometricIcon}/>
        <Image source={images.TouchID} style={styles.biometricIcon}/>
      </View>
    </TouchableOpacity>
  )
}

export default BiometricBtn

const styles = StyleSheet.create({
    biometricBtn:{
        borderWidth:1,
        borderColor:colors.yellow10,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    biometricBtnText:{
        paddingVertical:15,
        textTransform:"capitalize",
            fontSize:18,
            fontFamily:Fonts.Inter_Bold,
            color:colors.white,
    },
    biometricIcon:{
        width:widthDP(30),
        height:heightDP(30),
        resizeMode:"contain"
    },
    divider:{
        width:2,
        height:"95%",
        backgroundColor:colors.white,
        position:"absolute",
        left:0,
        top:"2.5%",
    }
})