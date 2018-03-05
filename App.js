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
  View,
  AsyncStorage
  
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

  async network() {
    // 网络请求
    fetch(DEFAULT_URL).then((result)=>{return result.json()}).then((result)=>{
       
      const result = console.log(result)    
    })

  }

  sort() {
    // 排序
    let arr= [4,10,8,3,5,1,2,6,7,9];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j>arr.length;j++){
            if(arr[i]>arr[j]){
                // [arr[i],arr[j]]=[arr[j],arr[i]]
                let tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }
    const sort1=()=>{
      let leftArr=[],rightArr=[];
      for(let i=0;i<arr.length;i++){
          if(arr[i]<arr[0]){
              leftArr.push(arr[i])
          }else{
            rightArr.push(arr[i])
          }
      }
        return [].concat(sort1(leftArr),arr[0],sort1(rightArr))
    }
  }

  fuzzbuzz() {
    // 被3 整除输出"fuzz" 被5整除输出"buzz" 同时被3和5整除输出"fuzzbuzz"
    const test=()=>{
      for(let i=0;i<100;i++){
        if(i%3==0&&i%5==0){
            console.log("fuzzbuzz")
            continue;
        }
        if(i%3==0){
            console.log("fuzz")
            continue;
        }else if(i%5==0){
            console.log("buzz")
            continue;
        }
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
