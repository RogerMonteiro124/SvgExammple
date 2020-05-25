import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Circulo from './components/Circulo';
import Gradients from './components/Gradient';

const App= () => {
  return (
    <>
      <Circulo nome="Circulo" cor="Green" />  
      <Gradients/> 
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
