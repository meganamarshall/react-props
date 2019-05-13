import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('matches the snapshot', () => {

    const wrapper = shallow(<Dog name="hello" weight="23 lbs" age={4} />);
    expect(wrapper).toMatchSnapshot();
  });
});
