/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import { View, Text, Alert } from 'react-native';
import { Button, WhiteSpace, WingBlank, List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Actions } from 'react-native-router-flux';

/* tslint:disable:no-console */
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

export default createForm()(Login);
