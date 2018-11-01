import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Board from './components/Board';
import { createStore } from 'redux';


export default class App extends React.Component {
  constructor() {
    super();

    this.onNewGamePressed = this.onNewGamePressed.bind(this);
  }

  onNewGamePressed() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Minesweeper</Text>
          <Button title='New Game' onPress={this.onNewGamePressed}></Button>
        </View>
        <Board style={styles.board} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  titleContainer: {
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignContent: 'center'
  },
  title: {
    fontSize: 24,
    paddingTop: 4,
    paddingLeft: 5,
    flex: 1
  },
  board: {
    flex: 1,
    backgroundColor: 'gray',
  }
});
