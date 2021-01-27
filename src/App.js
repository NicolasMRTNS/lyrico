import React, { useState } from 'react';
import './App.css';
import SearchButton from './Components/SearchButton';
import GetStarted from './Components/GetStarted';
import Header from './Components/Header';
import axios from 'axios';

const customAxios = axios.create({
  baseURL: `https://api.lyrics.ovh/v1/`,
});

function App() {
  const [artistValue, setArtistValue] = useState('');
  const [songValue, setSongValue] = useState('');

  const getArtistName = () => {
    setArtistValue(artistValue);
  };

  const getSongName = () => {
    setSongValue(songValue);
  };

  const APICall = () => {
    customAxios
      .get(`/${artistValue}/${songValue}`)
      .then((response) => console.log(JSON.stringify(response.data)));
  };

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

export default App;
