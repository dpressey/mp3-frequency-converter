import React from 'react';
import Audio from '../Audio';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// TODO: test for getFrequencyData()

// test for radioValue state update
test('radio button value changed', function(){
    const radioValue = "440";
    const newRadioValue = "432";

    const setRadioValue = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(radioValue => [radioValue, setRadioValue]);

    // TODO: import react-testing-library (DONE)
    // TODO: write assertion
});