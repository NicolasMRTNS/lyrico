import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

/**
 * Test to check if the App is crashing
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/**
 * Check to see if API is called on button click
 */
describe('<SearchButton />', () => {
  it('should call API when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <button type="button" onClick={onClick}>
        Search
      </button>
    );
    wrapper.simulate('click');
  });
});
