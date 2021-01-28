import React, { useState } from 'react';
import './App.css';
import SearchButton from './Components/SearchButton';
import GetStarted from './Components/GetStarted';
import Header from './Components/Header';
import axios from 'axios';

/**
 * Using axios to call the API, using baseURL
 */
const customAxios = axios.create({
  baseURL: `https://api.lyrics.ovh/v1/`,
});

function App() {
  /**
   * State for the values needed
   */
  const [artistValue, setArtistValue] = useState('');
  const [songValue, setSongValue] = useState('');

  /**
   * HandleChange on both inputs
   */
  const getArtistName = (event) => {
    setArtistValue(event.target.value);
  };

  const getSongName = (event) => {
    setSongValue(event.target.value);
  };

  /**
   * Call to the API on button click
   */
  const APICall = () => {
    customAxios
      .get(`/${artistValue}/${songValue}`)
      .then((response) => console.log(JSON.stringify(response.data)));
  };

  /**
   * Rendered JSX
   */
  return (
    <>
      <Header />
      <GetStarted
        forValue="artistName"
        inputName="Artist"
        nameValue="artistName"
        idValue="artistName"
        handleChange={getArtistName}
        value={artistValue}
      />
      <GetStarted
        forValue="songName"
        inputName="Song"
        nameValue="songName"
        idValue="songName"
        handleChange={getSongName}
        value={songValue}
      />
      <SearchButton handleClick={APICall} />
    </>
  );
}

/**
 * Export
 */
export default App;
