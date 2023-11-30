import React from 'react';
import { shallow } from 'enzyme';
import Audio from '../Audio';

// test for radioValue state update
describe("unit tests for the audio component", function(){

    // mocks
    const setRadioValue = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(radioValue => [radioValue, setRadioValue]);
    const wrapper = shallow(<Audio />);

    // tests
    test('radio button value changed', function(){
        const newRadioValue = "432";
    
        wrapper
        .find(".radio-group")
        .simulate("change", { target: { value: newRadioValue } });

        expect(setRadioValue).toHaveBeenCalledWith(newRadioValue);
    });

    // TODO: test for getFrequencyData()
});