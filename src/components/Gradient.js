import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Svg, {
  LinearGradient,  
  Ellipse,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';

class Gradients extends Component{
    render(){
        return(
            <>
            <View>
                    <Svg height="150" width="300">
                        <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad-1-bug)" />
                        <Defs>
                        <LinearGradient
                            id="grad-1-bug"
                            x1="65"
                            y1="0"
                            x2="235"
                            y2="0"
                            gradientUnits="userSpaceOnUse">
                            <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
                            <Stop offset="1" stopColor="blue" />
                        </LinearGradient>
                        </Defs>
                    </Svg>
                </View>
            </>
        );
    }
}
export default Gradients;