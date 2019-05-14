import React from 'react';
import ColorPicker from './ColorPicker';
import { shallow } from 'enzyme';


describe('ColorPicker component', () => {
  it('matches the colorpicker snapshot', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles the red button', () => {
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');
    expect(console.log).toHaveBeenCalledWith('red');
  });

  it('handles the green button', () => {
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(1).simulate('click');
    expect(console.log).toHaveBeenCalledWith('green');
  });

  it('handles the blue button', () => {
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(2).simulate('click');
    expect(console.log).toHaveBeenCalledWith('blue');
  });
});
