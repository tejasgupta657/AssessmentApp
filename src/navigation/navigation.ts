import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
};

export type StackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type StackRouteProps = RouteProp<RootStackParamList>;