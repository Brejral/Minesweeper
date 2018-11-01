import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Board extends React.Component {
    constructor(tile) {
        super();
        
        this.state = {
            isFlag: false,
            isQuestion: false,
            isSettingFlag: false,
            isRevealed: false,
            tile: tile,
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}