import React from 'react';
import { ScrollView, View } from 'react-native';
import Tile from './Tile';
import { observer } from 'mobx-react';

@observer class Board extends React.Component {

   getRow(row, index) {
      return (
         <View key={'row-' + index} style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            {row.map((el, i) => {
               return <Tile key={index + '-' + i} store={this.props.store} tile={el} />;
            })}
         </View>
      );
   }

   render() {
      return (
         <ScrollView style={{ flex: 1 }} bounces={false}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ backgroundColor: 'blue', alignContent: 'center', justifyContent: 'center' }} horizontal={true} bounces={false}>
               <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
                  {this.props.store.board.map((row, index) => {
                     return this.getRow(row, index);
                  })}
               </View>
            </ScrollView>
         </ScrollView>
      );
   }
}

export default Board;