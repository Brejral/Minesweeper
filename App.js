import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';
import TitleBar from './components/TitleBar';
import Store from './stores/Store';
import FooterBar from './components/FooterBar';

let store = new Store();
window.store = store;

class App extends React.Component {

   render() {
      return (
         <View style={styles.container}>
            <TitleBar store={store} />
            <Board store={store} />
            <FooterBar style={{ flexDirection: 'row' }} store={store} />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   }
});

export default App;