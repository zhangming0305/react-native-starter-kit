import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabBar } from 'antd-mobile';

import SettingContainer from '../setting/Container';

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

const renderContent = (pageText, num) => (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ margin: 50 }}>{pageText}</Text>
    <Text style={{ margin: 50 }}>{num} re-renders of the {pageText}</Text>
  </View>
    );


const Login = ({ currentTab, changeCurrentTab }) => (
  <View style={styles.container}>
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
    >
      <TabBar.Item
        title="首页"
        icon={require('../../../images/alipay.png')}
        selectedIcon={require('../../../images/alipay_sel.png')}
        selected={currentTab === 'index'}
        onPress={() => {
          changeCurrentTab('index');
        }}
      >
        <SettingContainer />
      </TabBar.Item>
      <TabBar.Item
        title="销售"
        icon={require('../../../images/koubei.png')}
        selectedIcon={require('../../../images/koubei_sel.png')}
        selected={currentTab === 'sell'}
        onPress={() => {
          changeCurrentTab('sell');
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
      <TabBar.Item
        title="库存"
        icon={require('../../../images/friend.png')}
        selectedIcon={require('../../../images/friend_sel.png')}
        selected={currentTab === 'wh'}
        onPress={() => {
          changeCurrentTab('wh');
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={require('../../../images/busi.png')}
        selectedIcon={require('../../../images/busi_sel.png')}
        title="报表"
        selected={currentTab === 'sheet'}
        onPress={() => {
          changeCurrentTab('sheet');
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
      <TabBar.Item
        title="财务"
        icon={require('../../../images/alipay.png')}
        selectedIcon={require('../../../images/alipay_sel.png')}
        selected={currentTab === 'fan'}
        onPress={() => {
          changeCurrentTab('fan');
        }}
      >
        {renderContent('生活 Tab')}
      </TabBar.Item>
    </TabBar>
  </View>
);


export default (Login);
