/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Alert, Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';

const Home = () => {
  const {authorize, clearSession, user, getCredentials, error, isLoading} = useAuth0();

  const onLogin = async () => {
    await authorize({}, {});
    const credentials = await getCredentials();
    Alert.alert('AccessToken: ' + credentials?.accessToken);
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    await clearSession({}, {});
  };


  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Image 
      style={{width: 300, height: 200}}
      source={require('./assets/images/Logo.png')}
      />
      <Text style={styles.title}>Nutrição</Text>
      <Text style={styles.header}> Criação de planos alimentares, gerenciamento e anotações - Tudo em um aplicativo! </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      <TouchableOpacity style={styles.button} onPress={loggedIn ? onLogout : onLogin}>
        <Text style={styles.texto}>{loggedIn ? 'Log Out' : 'Login'}</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={loggedIn ? onLogout : onLogin}>
        <Text style={styles.texto}>{loggedIn ? 'Log Out' : 'Registrar'}</Text>
        </TouchableOpacity>
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

const App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Home />
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  style: {
    backgroundColor: '#B9E8CF'
  },
  texto: {
    fontSize: 20
  },
  button: {
    backgroundColor: '#2A4973',
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 12,
    paddingBottom: 12,
    margin: 20,
    borderRadius: 10,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B9E8CF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 200,
    marginLeft: 40,
    marginRight: 40,
    color: "black",
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C'
  },
  title: {
    fontSize: 60,
    color: "black",
    fontFamily: "Playfair-Variable",
    marginBottom: 50
  }
});

export default App;