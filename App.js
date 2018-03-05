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
const Array = [4,10,8,3,5,1,2,6,7,9]
const instructions = Platform.select({
  ios: 'HelloWorld!',
  android: 'HelloWorld!',
});

type Props = {};


export default class App extends Component<Props> {

  componentDidMount() {
    
  }

  network() {
    // 网络请求
    fetch(DEFAULT_URL).then((result)=> (result.json)).then((result)=> {
      console.log(result);
    })
  JSON.parse()
  data.a
  }

  sort=() =>{
    // 排序
    let arr=Array.slice()
    console.log(arr.sort((a,b)=>{ return a-b }))
  }

  fuzzbuzz() {
    // 被3 整除输出"fuzz" 被5整除输出"buzz" 同时被3和5整除输出"fuzzbuzz"
    for(var i=0 ;i<100 ;i++ ){
      if(i%3){

      }
      if(i%5){

      }
      if(i%3&&i%5){

      }
    }
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
