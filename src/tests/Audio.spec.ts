import React from 'react';
import Audio from '../Audio';

const mockAudio: React.FC = Audio;

// TODO: test for Audio component existing on the page

// TODO: test for the Deezer API call

// TODO: test for getFrequencyData()

// test for radioValue state update
test('radio button value changed', function(){
    // TODO: 
        // import audio component (DONE)
        // mock setradioValue()
        const radioValue = "440";
        const setRadioValue = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation((radioValue: string) => {[radioValue, setRadioValue]})
});