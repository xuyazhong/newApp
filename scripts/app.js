/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
const DEFAULT_URL = 'http://www.weather.com.cn/data/cityinfo/101010100.html'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component<Props> {

  componentDidMount() {
    this.getApiAsync().then((success) => {
      console.log("success", success);
    }, (failure)=> {
      console.log("failure", failure);
    })
    console.log("====");
    this.sort();
    this.fuzzbuzz();
  }

  fuzzbuzz() {
    for(var i = 0; i<= 100; i++) {
      if(i%15===0) {
        console.log('fuzzbuzz', i);
      } else if(i%3 === 0) {
        console.log('fuzz', i);
      } else if (i%5 === 0) {
        console.log('buzz', i);
      }
    }
  }

  sort() {
    // console.log("array", Array);
    // var newArray = Array;
    // for(var i = 0; i < newArray.length; i++ ) {
    //   for(var j = i+1;j < newArray.length; j++) {
    //       if(newArray[i] < newArray[j]) {
    //         var temp = newArray[i];
    //         newArray[i] = newArray[j];
    //         newArray[j] = temp;
    //       }
    //   }
    // }
    // console.log('newArray', newArray);

    console.log('new');
    console.log("array", Array);
    var newArray = Array;
    for(var i = 0; i < newArray.length; i++ ) {
      for(var j = newArray.length;j > i; j--) {
          if(newArray[i] > newArray[j]) {
            var temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
          }
      }
    }
    console.log('newArray', newArray);
  }

  getApiAsync() {
    let option = {
      method: 'GET'
    }
    return fetch(DEFAULT_URL, option)
      .then((response) => response.json())
      .then((json) => {
        return json.weatherinfo;
      })
      .catch((error) => {
        console.error('eee',error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
