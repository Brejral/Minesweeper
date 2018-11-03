import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { observer } from 'mobx-react';

@observer class TitleBar extends React.Component {
    render() {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Minesweeper</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 40,
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
});

export default TitleBar;