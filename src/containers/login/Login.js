import React from 'react';
import { View, Alert } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Actions } from 'react-native-router-flux';

const Login = ({ form, form: { getFieldProps }, login }) => (
  <View>
    <InputItem
      {...getFieldProps('phone', {
        rules: [{
          required: true, message: '请填写用户名或手机号',
        }],
      })}
      type="phone"
      clear
    >
      用户名
    </InputItem>
    <InputItem
      {...getFieldProps('password', {
        rules: [{
          required: true, message: '请填写密码',
        }],
      })}
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
          form.validateFields((err, values) => {
            if (!err) {
              Actions.IndexContainer({ text: 'Hello World!' });
              // login(values);
              return;
            }
            const keys = Object.keys(err);
            Alert.alert('', `${err[keys[0]].errors[0].message}`,
              [
                { text: '确定', style: 'cancel' },
              ],
              { cancelable: false },
              );
          });
        }}
      >
        登录
      </Button>
      <WhiteSpace />
    </WingBlank>
  </View>
);

Login.propTypes = {
  form: React.PropTypes.object.isRequired,
  login: React.PropTypes.func.isRequired,
};

export default createForm({
  onFieldsChange: (props, fields) => {
    props.onFieldsChange(fields);
  },
  mapPropsToFields: props => props.edit,
})(Login);
