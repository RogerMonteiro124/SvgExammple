import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Svg, {
  Circle,
} from 'react-native-svg';

class Circulo extends Component{
    render(){
        return(
            <>
            <View
                style={[
                StyleSheet.absoluteFill,
                { alignItems: 'center', justifyContent: 'center' },
                ]}>
                    <Svg height="25%" width="75%" viewBox="0 0 100 100">
                        <Text>{this.props.nome}</Text>
                        <Circle
                            cx="50"
                            cy="50"
                            r="45"
                            strokeWidth="2.5"
                            fill={this.props.cor}
                        />          
                    </Svg>
                </View>
            </>
        );
    }
}
export default Circulo;