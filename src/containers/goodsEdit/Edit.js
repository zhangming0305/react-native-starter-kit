import React from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem, Switch, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Actions } from 'react-native-router-flux';
import { userGoodsEdit } from '../../service/userService';


const formSubmit = (form) => {
  form.validateFields((err, values) => {
    if (!err) {
      // GoodsEdit(values);
      return;
    }
    const keys = Object.keys(err);
    Alert.alert('',
      `${err[keys[0]].errors[0].message}`, [{
        text: '确定',
        style: 'cancel',
      }], {
        cancelable: false,
      },
    );
  });
};

const GoodsEdit = ({ form, form: { getFieldProps } }) => (
  <ScrollView
    style={{ flex: 1, backgroundColor: '#f5f5f9' }}
    automaticallyAdjustContentInsets={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
  >

    <List>
      <InputItem
        {...getFieldProps('goodsName', {
          rules: [{
            required: true, message: '请填写用户名或手机号',
          }],
        })}
        clear
      >
        商品名称
      </InputItem>
      <InputItem
        {...getFieldProps('spec', {
          rules: [{
            required: true, message: '请填写密码',
          }],
        })}
        clear
      >
        货号
      </InputItem>
    </List>
    <WhiteSpace />
    <List>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch1', {
            initialValue: true,
            valuePropName: 'checked',
          })}
        />}
      >单规格</List.Item>
    </List>
  </ScrollView>
);

GoodsEdit.propTypes = {
  form: React.PropTypes.object.isRequired,
};

export default createForm({
  onFieldsChange: (props, fields) => {
    props.onFieldsChange(fields);
  },
  mapPropsToFields: props => props.edit,
})(GoodsEdit);
