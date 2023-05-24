import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet2, Button, TouchableOpacity, TextInput} from 'react-native';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View> 
        <AssetExample />
        
        <Text style={styles.titulo}> marketspace </Text>
        <Text style={styles.text}> Seu espaço de compra e venda </Text>
        <Text style={styles.text5}> Acesse sua conta </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="email-address"
        />

        <View style={styles.container2}>
          <TouchableOpacity
          style={styles.button}>
            <Text style={styles.text2}> Entrar </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
            <Text style={styles.text3}> Ainda não tem acesso? </Text>
        </TouchableOpacity>

        <View style={styles.container2}>
          <TouchableOpacity
          style={styles.button2}>
            <Text style={styles.text4}> Criar uma conta </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#edecee',
    padding: 8,
    marginTop:0,
  },

  titulo: {
    fontSize: 32,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 15,
    color: '#B5B5B5',
    textAlign: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    marginLeft: 35,
    padding: 8,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#ffffff',
    color: '#B5B5B5',
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
  },

  button: {
    backgroundColor: '#647ac6',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
  },

  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  text3: {
    fontSize: 14,
    color: '#4f4b51',
    textAlign: 'center',
    marginTop: 100,
  },

    button2: {
    backgroundColor: '#d9d8da',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
  },

  text4: {
    fontSize: 14,
    color: '#161417',
    textAlign: 'center',
  },

    text5: {
    fontSize: 14,
    color: '#030303',
    textAlign: 'center',
    marginTop: 100,
  },
});