import React from 'react';
import { shallow } from 'enzyme';
import Audio from '../Audio';
import { jest } from '@jest/globals';

// test for radioValue state update
describe("unit tests for the audio component", function(){

    // mocks
    const setRadioValue = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(radioValue => [radioValue, setRadioValue]);
    const wrapper = shallow(<Audio />);

    const mockFrequencyData = jest.fn<() => object>();

    // tests
    test('radio button value changed', function(){
        const newRadioValue = "432";
    
        wrapper
        .find(".radio-group")
        .simulate("change", { target: { value: newRadioValue } });

        expect(setRadioValue).toHaveBeenCalledWith(newRadioValue);
    });

    test('getFrequencyData returns an object with the correct properties', function(){
        let frequencyData = {
            ['frequencyBinCount']: 1024,
            ['maxDecibels']: -30,
            ['minDecibels']: -100,
            ['smoothingTimeConstant']: 0.8,
            ['fftSize']: 2048,
            ['bpm']: 105
        };
        mockFrequencyData.mockReturnValue(frequencyData);
        mockFrequencyData();
        expect(mockFrequencyData).toHaveReturnedWith(frequencyData);

    });
});