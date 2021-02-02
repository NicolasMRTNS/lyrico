import React, { useState, lazy, Suspense } from 'react';
import axios from 'axios';
const Header = lazy(() => import('./Components/Header'));
const GetStarted = lazy(() => import('./Components/GetStarted'));
const SearchButton = lazy(() => import('./Components/SearchButton'));
const LyricsSection = lazy(() => import('./Components/LyricsSection'));
const Footer = lazy(() => import('./Components/Footer'));

/**
 * Loader for Suspense as we are using Reeact.lazy
 */
const renderLoader = () => <p>Loading...</p>;

/**
 * Using axios to call the API, using baseURL
 */
const customAxios = axios.create({
  baseURL: `https://api.lyrics.ovh/v1/`,
});

const App = () => {
  /**
   * State for the values needed
   */
  const [artistValue, setArtistValue] = useState('');
  const [songValue, setSongValue] = useState('');
  const [lyricsValue, setLyricsValue] = useState('');

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
   * Using method split and map on response
   */
  const APICall = () => {
    customAxios.get(`/${artistValue}/${songValue}`).then((response) =>
      setLyricsValue(
        response.data.lyrics.split('\n').map((newDiv) => (
          <div key={Math.random()}>
            {newDiv}
            <br />
          </div>
        ))
      )
    );
  };

  /**
   * Rendered JSX
   */
  return (
    <>
      <Suspense fallback={renderLoader()}>
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
        <LyricsSection songLyrics={lyricsValue} />
        <Footer />
      </Suspense>
    </>
  );
};

/**
 * Export
 */
export default App;
