import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/app.store';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for App Component
 */
describe('App Component should', () => {

      it('be created without crash', () => {
        const store = configureStore();
        const component = mount(< App store = {store}/>);
        expect(component.find(App).length).toBe(1);
      });
});