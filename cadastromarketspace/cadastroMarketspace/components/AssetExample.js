import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../assets/logoMarketspace.png')} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  logo: {
    height: 40,
    width: 50,
  },

});
