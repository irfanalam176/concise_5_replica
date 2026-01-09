import { View, Text, DimensionValue } from 'react-native'
import React from 'react'

type SpacerProps = {
  mt?:DimensionValue|undefined
  mb?:DimensionValue|undefined
}

const Spacer:React.FC<SpacerProps> = ({mt,mb}) => {
  return (
   <View style={{marginTop:mt,marginBottom:mb}}/>
  )
}

export default Spacer