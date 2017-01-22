/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabBar } from 'antd-mobile';


const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页',
    };
  }

  renderContent(pageText) {
    return (
      <View >
        <Text >
          {pageText}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={require('../images/life.png')}
            selectedIcon={require('../images/selected_life.png')}
            selected={this.state.selectedTab === '首页'}
            onPress={() => {
              this.setState({
                selectedTab: '首页',
              });
            }}
          >
            {this.renderContent('首页')}
          </TabBar.Item>
          <TabBar.Item
            title="商品"
            key="商品"
            icon={require('../images/life.png')}
            selectedIcon={require('../images/selected_life.png')}
            selected={this.state.selectedTab === '商品'}
            onPress={() => {
              this.setState({
                selectedTab: '商品',
              });
            }}
          >
            {this.renderContent('商品')}
          </TabBar.Item>
          <TabBar.Item
            title="订单"
            key="订单"
            icon={require('../images/life.png')}
            selectedIcon={require('../images/selected_life.png')}
            selected={this.state.selectedTab === '订单'}
            onPress={() => {
              this.setState({
                selectedTab: '订单',
              });
            }}
          >
            {this.renderContent('订单')}
          </TabBar.Item>
        </TabBar>
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
