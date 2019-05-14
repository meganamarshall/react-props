import React from 'react';
import ColorPicker from './ColorPicker';
import { shallow } from 'enzyme';


describe('ColorPicker component', () => {
  it('matches the colorpicker snapshot', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
