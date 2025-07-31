/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import TabScreen from './src/components/TabScreen/TabScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
   // <Router />
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: "#020d26",
    paddingTop: 170,
    paddingBottom: 230,
    position: "relative",
  },
  bubbleImg: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  logoArea: {
    marginBottom: 55,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#002f3f",
    borderRadius: 50,
    backgroundColor: "#ffffff",
    width: 320,
    height: 50,
    color: "#000000",
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#e68422',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  carBox: {
    position: "absolute",
    left: 50,
    bottom: 30,
  }
});

export default App;
