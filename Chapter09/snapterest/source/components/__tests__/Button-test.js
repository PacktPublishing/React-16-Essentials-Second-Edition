import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  test('calls click handler function on click', () => {
    const handleClickMock = jest.fn();

    const wrapper = shallow(
      <Button handleClick={handleClickMock}/>
    );

    wrapper.find('button').simulate('click');

    expect(handleClickMock.mock.calls.length).toBe(1);
  });
});
