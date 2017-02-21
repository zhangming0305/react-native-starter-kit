import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import { List, Grid, Flex } from 'antd-mobile';

import Check from '../../components/Check';
import entries from './entries';
import variables from '../../styles/default';

const styles = StyleSheet.create({
  grayBorderBox: {
    borderColor: variables.border_color_base,
  },
  icon: {
    width: variables.icon_size_md,
    height: variables.icon_size_md,
  },
  text: {
    fontSize: variables.font_size_caption_sm,
    color: variables.color_text_base,
    marginTop: variables.v_spacing_md,
  },
});


export default class EntriesList extends React.Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(dataItem, index) {
    return (
      <Flex
        direction="column"
        justify="center"
        style={{ flex: 1 }}
        onPress={() => {
          this.props.onEntryCheck(dataItem.key);
        }}
      >
        <Check checked={this.props.checkedEntries.indexOf(dataItem.key) > -1}>
          <Image source={{ uri: dataItem.icon }} style={styles.icon} />
        </Check>
        <Text style={styles.text}>{dataItem.text}</Text>
      </Flex>
    );
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {
    entries.map(data => <List key={data.groupname} renderHeader={() => (data.groupname)}>
      <Grid
        data={data.entries}
        hasLine={false}
        renderItem={this.renderItem}
      />
    </List>)
  }
      </ScrollView>
    );
  }
}

EntriesList.propTypes = {
  checkedEntries: React.PropTypes.array.isRequired,
  onEntryCheck: React.PropTypes.func.isRequired,
};

