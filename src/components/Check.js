import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/check';

export default class Check extends React.Component {
  render() {
    let checkDom = null;
    if (this.props.checked) {
      checkDom = (<View style={styles.imgDom}>
        <Image
          style={styles.img}
          source={require('../../node_modules/antd-mobile/lib/style/images/check_w.png')}
        />
      </View>);
    }
    return (
      <View style={styles.wrap}>
        {this.props.children}
        {checkDom}
      </View>
    );
  }
}
Check.propTypes = {
  children: React.PropTypes.any.isRequired,
  checked: React.PropTypes.bool.isRequired,
};
Check.defaultProps = {
  checked: false,
};
