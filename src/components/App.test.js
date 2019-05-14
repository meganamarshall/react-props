import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('matches the app snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
