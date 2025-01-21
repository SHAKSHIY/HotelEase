import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { searchHotels } from '../api/api';

const VoiceSearch = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await searchHotels(transcript); // Call backend API
      setResults(data.hotels); // Adjust based on backend response
      setError('');
    } catch (err) {
      setError('Failed to fetch hotel results. Try again.');
    }
    resetTranscript();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="voice-search">
      <h2>Voice Search</h2>
      <button onClick={SpeechRecognition.startListening}>
        {listening ? 'Listening...' : 'Start Listening'}
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>Transcript: {transcript}</p>
      <button onClick={handleSearch} disabled={!transcript}>
        Search
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {results.map((hotel) => (
          <li key={hotel.id}>
            <strong>{hotel.name}</strong> - {hotel.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoiceSearch;
