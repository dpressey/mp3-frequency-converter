// React
import React, { ChangeEvent, Fragment } from "react";
import { useState, useEffect } from "react";

// Material UI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// Interfaces
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
    
    // TODO: set/get radio button value
    // const [radioButtonValue, setradioButtonValue] = useState(false);

    const [ mp3FileAudioStream, setmp3FileAudioStream] = useState("");
    const [ mp3FileImage, setMp3FileImage ] = useState("");

    const deezerURLBase = 'https://deezerdevs-deezer.p.rapidapi.com/track/'
    const deezerURLRandomTrackId = Math.floor(100000 + Math.random() * 9000000);
    
    const deezerURLPrince = 'https://deezerdevs-deezer.p.rapidapi.com/track/2794654'
    const deezerURLRandom = deezerURLBase + deezerURLRandomTrackId;

    let frequencyData = {};

    useEffect( () => {
        fetch(`${deezerURLRandom}`, {
            headers: {
                'X-RapidAPI-Key': '8e1e61b826msh6cdd1443542d711p18ed23jsndd6836d50ea0',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setmp3FileAudioStream(data.preview);
                setMp3FileImage(data.album.cover_big);
                getFrequencyData(data);
            });
    }, []);

    function onChangeValue(event: ChangeEvent<HTMLInputElement>): void {    
        // TODO:    
    }

    // TODO: import this helper method from a file that exports this function
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
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
            <div id="mp3">
                <div className="mp3-body">
                    <div className="mp3-image">
                        <img alt="An image of the album cover for this mp3 file" src={mp3FileImage}></img>
                    </div>
                    <div className="mp3-controls">
                        <FormControl>
                            <FormLabel id="frequency-controlled-radio-buttons-group">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                // value={radioButtonValue}
                                onChange={onChangeValue}
                            >
                                <FormControlLabel value="440hz Frequency" control={<Radio />} label="440hz Frequency" />
                                <FormControlLabel value="432hz Frequency" control={<Radio />} label="432hz Frequency" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="mp3-source">
                        <audio controls autoPlay src={mp3FileAudioStream}>This Plays From the Deezer API</audio>
                    </div>
                </div>
            </div>
            </Container>
        </React.Fragment>
    )
}

export default Audio;