import React from 'react';
import { shallow, mount } from 'enzyme';
import DelayedList from '../DelayedList';

describe('DelayedList', () => {

  it ('renders 3 child components after a delay then 5 with 10 ms delay', (done) => {
    const rendered = mount(
      <DelayedList delay={10}>
        <p>Test String</p>
        <p>Test String</p>
        <p>Test String</p>
        <p>Test String</p>
        <p>Test String</p>
      </DelayedList>
    );

    setTimeout(() => {
      expect(rendered.find('p').length).toBe(3);
      done();
    }, 35);

    setTimeout(() => {
      expect(rendered.find('p').length).toBe(5);
      done();
    }, 55);

  });

  it ('renders 1 child component if only one is supplied', (done) => {
    const rendered = mount(
      <DelayedList delay={10}>
        <p>Test String</p>
      </DelayedList>
    );

    setTimeout(() => {
      expect(rendered.find('p').length).toBe(1);
      done();
    }, 15);

  });

});
