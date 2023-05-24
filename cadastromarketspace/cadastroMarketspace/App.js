import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet2, Button, TouchableOpacity, TextInput, Image} from 'react-native';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View> 
        <AssetExample />
        
        <Text style={styles.titulo}> Boas vindas! </Text>
        <Text style={styles.text}> Crie sua conta e use o espaço para comprar itens variador e vender seus produtos </Text>

        <Image style={styles.logo} source={require('./assets/usuarioIcon.png')} />

        <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          keyboardType="email-address"
        />

        <View style={styles.container2}>
          <TouchableOpacity
          style={styles.button}>
            <Text style={styles.text2}> Criar </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
            <Text style={styles.text3}> Já tem uma conta? </Text>
        </TouchableOpacity>

        <View style={styles.container2}>
          <TouchableOpacity
          style={styles.button2}>
            <Text style={styles.text4}> Ir para o login </Text>
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
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 14,
    color: '#4d494f',
    textAlign: 'center',
    margin: 14,
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
    backgroundColor: '#1a181b',
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
    marginTop: 60,
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

  logo: {
    marginLeft: 120,
  }
});