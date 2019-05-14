import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('matches the snapshot', () => {
    const testColorName = 'blue';
    const rgb = {
      red: 0,
      green: 0,
      blue: 255
    };
    const wrapper = shallow(<Color name={testColorName} rgb={rgb} />);
    expect(wrapper).toMatchSnapshot();

  });
});
