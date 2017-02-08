import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabBar } from 'antd-mobile';

import UserContainer from '../user/Container';

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

export default class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      notifCount: 0,
      presses: 0,
    };
  }

  renderContent(pageText, num) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
        <Text style={{ margin: 50 }}>{num} re-renders of the {pageText}</Text>
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
        >
          <TabBar.Item
            title="生活"
            icon={require('../../../images/alipay.png')}
            selectedIcon={require('../../../images/alipay_sel.png')}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            {this.renderContent('生活 Tab')}
          </TabBar.Item>
          <TabBar.Item
            icon={require('../../../images/koubei.png')}
            selectedIcon={require('../../../images/koubei_sel.png')}
            title="口碑"
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
                notifCount: this.state.notifCount + 1,
              });
            }}
          >
            {this.renderContent('口碑 Tab', this.state.notifCount)}
          </TabBar.Item>
          <TabBar.Item
            icon={require('../../../images/friend.png')}
            selectedIcon={require('../../../images/friend_sel.png')}
            title="朋友"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
                presses: this.state.presses + 1,
              });
            }}
          >
            {this.renderContent('朋友 Tab', this.state.presses)}
          </TabBar.Item>
          <TabBar.Item
            icon={require('../../../images/busi.png')}
            selectedIcon={require('../../../images/busi_sel.png')}
            title="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
                presses: this.state.presses + 1,
              });
            }}
          >
            <UserContainer />
          </TabBar.Item>
        </TabBar>
      </View>
    );
  }
}

