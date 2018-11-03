import React from 'react';
import { StyleSheet, View, Button, Switch } from 'react-native';
import { observer } from 'mobx-react';

@observer class FooterBar extends React.Component {
   constructor() {
      super();

      this.onNewGamePressed = this.onNewGamePressed.bind(this);
      this.onSettingsPressed = this.onSettingsPressed.bind(this);
   }

   onNewGamePressed() {
      this.props.store.createBoard();
   }

   onSettingsPressed() {
      this.props.store.createBoard();
   }

   render() {
      return (
         <View style={styles.titleContainer}>
            <Button
               title='New Game'
               onPress={this.onNewGamePressed}
               style={styles.newGameButton} />
            <Button
               title='Settings'
               onPress={this.onSettingsPressed}
               style={styles.settingsButton} />
            <Switch style={{ alignSelf: 'flex-end' }} value={this.props.store.isSettingFlag} />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   titleContainer: {
      marginBottom: 40,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignContent: 'center'
   },
   title: {
      fontSize: 24,
      fontFamily: 'Chalkduster',
      paddingTop: 4,
      paddingLeft: 5,
      flex: 1
   },
   newGameButton: {
   },
   settingsButton: {
      flex: 1
   }
});

export default FooterBar;