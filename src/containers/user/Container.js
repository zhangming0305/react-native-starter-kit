import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export class Container extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ margin: 50 }}>1123</Text>
        <Text style={{ margin: 50 }}>asdd</Text>
      </View>
    );
  }
}


export default (Container);
