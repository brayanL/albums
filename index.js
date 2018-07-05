//Import a library to help create a component
import React from 'react'; // Import from npm installed modules
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'; //Import from own module
import AlbumList from './src/components/AlbumList';

//Create a component
//component: is a javascript function that returns some amount of JSX
//App component have another component inside, this is called: nested component
const App = () => (
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
  );

//Render it to the device
console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent('albums', () => App);
