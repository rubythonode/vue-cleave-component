import {shallow} from 'vue-test-utils'

import Component from '../src/component.vue';

describe('Cleave component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      attachToDocument: true,
      propsData: {
        value: null,
        options: {
          creditCard: true
        }
      }
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  });

  test('renders input field', () => {
    expect(wrapper.is('input')).toBe(true);
  });


  test('clean up on destroy', () => {
    wrapper.vm.$destroy();
    expect(wrapper.isEmpty()).toBe(true);
    expect(wrapper.vm.$data.cleave).toBe(null);
  });

});
