import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type StackScreens={
    login:undefined
    tabs:undefined
    team:undefined,
    viewUser:undefined
}

export type StackProps = NativeStackScreenProps<StackScreens>