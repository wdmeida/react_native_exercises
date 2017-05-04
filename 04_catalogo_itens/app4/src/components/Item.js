import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class Item extends Component {
    render() {
        return (
            <View style={styles.containerItem}>
                
                <View style={styles.containerImg}>
                    <Image style={styles.img} source={{ uri: this.props.item.foto }} />
                </View>

                <View style={styles.detailsItems}>
                    <Text style={styles.title}>{ this.props.item.titulo }</Text>
                    <Text style={styles.value}>R$ { this.props.item.valor }</Text>
                    <Text style={styles.text}>Local: { this.props.item.local_anuncio }</Text>
                    <Text style={styles.text}>
                        Data publicação: { this.props.item.data_publicacao }
                    </Text>                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    containerImg: {
        height: 102,
        width: 102
    },
    img: {
        height: 100,
        width: 100
    },
    detailsItems: {
        marginLeft: 20,
        flex: 1
    },
    title: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 15
    }
});
