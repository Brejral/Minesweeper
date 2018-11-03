import React from 'react';
import { Text, Image, TouchableHighlight, View } from 'react-native';
import { observer } from 'mobx-react';
const bomb = require('../assets/bomb-icon-2.png');

@observer class Tile extends React.Component {
   constructor() {
      super();

      this.getStyle = this.getStyle.bind(this);
      this.onTilePressed = this.onTilePressed.bind(this);
      this.getFontColor = this.getFontColor.bind(this);
   }

   onTilePressed() {
      this.props.tile.isRevealed = true;
      if (this.props.tile.text === '') {
         this.props.store.revealTiles(this.props.tile);
      }
   }

   getFontColor() {
      switch (this.props.tile.text) {
         case 'B':
            return 'red';
         case '1':
            return 'blue';
         case '2':
            return 'green';
         case '3':
            return 'red';
         case '4':
            return 'purple';
         case '5':
            return 'maroon';
         case '6':
            return 'turquoise';
         case '7':
            return 'black';
         case '8':
            return 'gray';
      }
   }

   getStyle() {
      return {
         width: 32,
         height: 32,
         borderWidth: 1,
         borderColor: 'black',
         backgroundColor: this.props.tile.isRevealed ? (this.props.tile.isBomb ? 'red' : 'white') : '#aaa'
      };
   }

   getTextStyle() {
      return {
         textAlign: 'center',
         fontSize: 26,
         color: this.getFontColor(),
         fontWeight: 'bold',
      }
   }

   componentWillMount() {
      this.bombImage = (<Image style={{ width: 25, height: 25, paddingTop: 5 }} source={bomb} />);
   }

   render() {
      if (this.props.tile.isBomb) {
         return (
            <TouchableHighlight onPress={this.onTilePressed} >
               <View onPress={this.onTilePressed} style={this.getStyle()}>
                  {this.props.tile.isRevealed && this.bombImage}
               </View>
            </TouchableHighlight>
         );
      }
      return (
         <TouchableHighlight onPress={this.onTilePressed} >
            <View onPress={this.onTilePressed} style={this.getStyle()}>
               {this.props.tile.isRevealed && <Text style={this.getTextStyle()}>
                  {this.props.tile.text}
               </Text>}
            </View>
         </TouchableHighlight>
      );
   }
}

export default Tile;