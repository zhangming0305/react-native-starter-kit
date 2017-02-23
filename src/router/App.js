import React from 'react';
import { connect } from 'react-redux';
import { Platform, View, StatusBar, StyleSheet } from 'react-native';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

import WelcomeContainer from '../containers/welcome/Container';
import LoginContainer from '../containers/login/Container';
import IndexContainer from '../containers/tab/Container';
import GoodsContainer from '../containers/goodsList/Container';
import GoodsEditContainer from '../containers/goodsEdit/Container';
import GoodsBrandListContainer from '../containers/goodsBrandList/Container';
import GoodsBrandEditContainer from '../containers/goodsBrandEdit/Container';
import QuickEntriesContainer from '../containers/quickEntries/Container';

const RouterWithRedux = connect()(Router);

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    const deviceTop = Platform.OS === 'android' ? 54 : 64;
    style.marginTop = computedProps.hideNavBar ? 0 : deviceTop;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};


const styles = StyleSheet.create({
  content: {
    ...Platform.select({
      ios: {
        marginTop: 64,
      },
      android: {
        marginTop: 54,
      },
    }),
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigationBarStyle: {
    backgroundColor: '#2e2e2e',
  },
  titleStyle: {
    color: 'white',
  },
});

const App = () =>

  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" />
    <RouterWithRedux getSceneStyle={getSceneStyle}>
      <Scene
        key="root"
        navigationBarStyle={styles.navigationBarStyle}
        titleStyle={styles.titleStyle}
      >
        <Scene
          key="WelcomeContainer"
          component={WelcomeContainer}
          title="欢迎"
          hideNavBar
          hideTabBar
        />
        <Scene
          key="LoginContainer"
          component={LoginContainer}
          title="登录"
          type={ActionConst.REPLACE}
          hideTabBar
          initial
        />
        <Scene
          key="IndexContainer"
          component={IndexContainer}
          title="首页"
          type={ActionConst.REPLACE}
          hideTabBar
        />
        <Scene
          key="GoodsContainer"
          component={GoodsContainer}
          title="商品"
          onRight={() => { Actions.GoodsEditContainer({ title: '商品新增' }); }}
          rightTitle="新增"
          type={ActionConst.PUSH}
          hideTabBar
        />
        <Scene
          key="GoodsEditContainer"
          component={GoodsEditContainer}
          title="商品新增"
          type={ActionConst.PUSH}
          hideTabBar
        />
        <Scene
          key="GoodsBrandListContainer"
          component={GoodsBrandListContainer}
          title="商品品牌"
          type={ActionConst.PUSH}
          hideTabBar
        />
        <Scene
          key="GoodsBrandEditContainer"
          component={GoodsBrandEditContainer}
          title="品牌新增"
          type={ActionConst.PUSH}
          hideTabBar
        />
        <Scene
          key="QuickEntriesContainer"
          component={QuickEntriesContainer}
          title="快捷功能"
          type={ActionConst.PUSH}
          hideTabBar
        />
      </Scene>
    </RouterWithRedux>
  </View>;

export default App;
