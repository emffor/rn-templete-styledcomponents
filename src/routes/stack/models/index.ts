import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
      Splash: undefined
      SignIn: undefined
      Home: undefined
      ForgotPassword: undefined
      ForgotCongrats: undefined
      /* ScheduleService: {
          product?: ProductDTO;
      } */

}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;