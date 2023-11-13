import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";

/* UI STEPS */
    // 1. store frequency data from mp3 on page load in an array/object (DONE)
    // 2. add a method that listens for a change on the 432hz radio button
    // 3. create a frequency chart component 
        // input: {frequencyData}
        // output: returns the frequency chart using d3.js

        // to-do: import d3

/* SETUP*/
    // import react hook: useState (DONE)
    // import react hook: useEffect (DONE)
    // find deezer track ID and update express URL variable (DONE)
    // make HTTP get from hook to deezer API (DONE)
    // store audio file in state object (DONE)
    // render data inside of JSX (DONE)

interface AudioFile {
    bpm: number;
    album: {};
    artist: {};
    duration: number;
    link: string;
    streamPreviewAudio: string;
    title: string;
}

const Audio: React.FC<{}> = () => {
    
    const [radioButtonForFrecuency, setradioButtonForFrecuency] = useState(false);
    const [ mp3FileAudioStream, setmp3FileAudioStream] = useState("");
    const [ mp3FileImage, setMp3FileImage ] = useState("");

    const deezerURL = 'https://deezerdevs-deezer.p.rapidapi.com/track/2794654'

    let frequencyData = {};

    useEffect( () => {
        fetch(`${deezerURL}`, {
            headers: {
                'X-RapidAPI-Key': '8e1e61b826msh6cdd1443542d711p18ed23jsndd6836d50ea0',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setmp3FileAudioStream(data.preview);
                setMp3FileImage(data.album.cover_big);
                getFrequencyData(data);
            });
    }, []);

    function onChangeValue(event: ChangeEvent<HTMLInputElement>): void {    
        // ToDo:    
    }

    // ToDO: import this method from a helper file that exports this function
    function getFrequencyData(mp3File: AudioFile): void {
                
        // create analyser
        const audioCtx = new AudioContext();
        const analyser = audioCtx.createAnalyser();

        // set frequencyData by fetching relevant audio file metadata
        frequencyData = {
            ['frequencyBinCount']: analyser.frequencyBinCount,
            ['maxDecibels']: analyser.maxDecibels,
            ['minDecibels']: analyser.minDecibels,
            ['smoothingTimeConstant']: analyser.smoothingTimeConstant,
            ['fftSize']: analyser.fftSize,
            ['bpm']: mp3File?.bpm
        }
    }

    return(
       <div id="mp3">
            <div className="mp3-body">
                <div className="mp3-image">
                    <img alt="An image of the album cover for this mp3 file" src={mp3FileImage}></img>
                </div>
                <div className="mp3-controls">
                    <div id="frequency">
                        <label>
                            440hz Frequency
                            <input 
                                type="radio" 
                                id="frequency-440" 
                                name="frequency-440" 
                                value="440hz Frequency"
                                // onChange={onChangeValue}
                            >
                            </input>
                        </label>
                        
                        <label>
                            432hz Frequency
                            <input 
                                type="radio" 
                                id="frequency-432" 
                                name="frequency-432" 
                                value="432hz Frequency"
                                // onChange={onChangeValue}
                            >
                            </input>
                        </label>
                    </div>
                </div>

                <div className="mp3-source">
                    <audio controls autoPlay src={mp3FileAudioStream}>This Plays From the Deezer API</audio>
                </div>
            </div>
       </div>
    )
}

export default Audio;