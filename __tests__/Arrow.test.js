import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Arrow from '../src/components/Arrow';

describe('<Arrow />', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<Arrow />);
    expect(wrapper.length).to.equal(1);
  });
});
