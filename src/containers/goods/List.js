import React from 'react';
import { View, Text, TouchableHighlight, Image, RefreshControl, Dimensions, StyleSheet } from 'react-native';
import { ListView } from 'antd-mobile';
import textStyle from '../../style/text';

const { width } = Dimensions.get('window');

const separator = (sectionID, rowID) => (<View
  key={`${sectionID}-${rowID}`}
  style={{
    marginLeft: 120,
    backgroundColor: '#F5F5F9',
    height: 1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECED',
  }}
/>
);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 120,
  },
  img: {
    height: 120,
    width: 120,
  },
  content: {
    width: width - 120,
    padding: 8,
  },
});

export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource: this.dataSource.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        dataSource: this.dataSource.cloneWithRows(nextProps.data),
      });
    }
  }

  render() {
    const row = (obj, sectionID, rowID, highlightRow = (_sId, _rId) => {}) => (
      <View key={rowID}>
        <TouchableHighlight
          underlayColor={'rgba(100,100,100,0.2)'}
          style={[{ backgroundColor: 'white' }]}
          onPress={() => { highlightRow(sectionID, rowID); }}
        >
          <View style={styles.row}>
            <Image
              style={styles.img}
              source={{ uri: obj.imgPath }}
            />
            <View
              style={styles.content}
            >
              <Text
                numberOfLines={2}
                style={textStyle.subHead}
              >{obj.goodsName}</Text>
              <Text
                numberOfLines={2}
                style={[textStyle.help, { marginTop: 4 }]}
              >规格：{obj.goodsSpecProperty.trim()}</Text>
              <Text
                numberOfLines={1}
                style={[textStyle.help, { marginTop: 4 }]}
              >编码：{obj.goodsMerchantCode}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
      );

    const { loading, fetchList } = this.props;
    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchList}
          />
        }
        renderSeparator={separator}
        dataSource={this.state.dataSource}
        renderRow={row}
        pageSize={20}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onEndReached={fetchList}
        onEndReachedThreshold={10}
        enableEmptySections
      />
    );
  }
}


List.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  fetchList: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired,
};
