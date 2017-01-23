import React from 'react';
import { View } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Actions } from 'react-native-router-flux';

const Login = ({ form: { getFieldProps } }) => (
  <View>
    <InputItem
      {...getFieldProps('phone')}
      type="phone"
      clear
    >
      用户名
    </InputItem>
    <InputItem
      {...getFieldProps('password')}
      type="password"
      clear
    >
      密码
    </InputItem>
    <WhiteSpace />
    <WingBlank>
      <Button
        type="primary"
        onClick={() => {
          Actions.IndexContainer({ text: 'Hello World!' });
        }
        }
      >
        登录
      </Button>
      <WhiteSpace />
    </WingBlank>
  </View>
);

Login.propTypes = {
  form: React.PropTypes.object.isRequired,
};

export default createForm()(Login);
