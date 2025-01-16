import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const VoiceSearch = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleSearch = () => {
    console.log("Voice Search Query:", transcript);
    // Send the query to an API or perform a search
    resetTranscript();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="voice-search">
      <h2>Voice Search</h2>
      <button onClick={SpeechRecognition.startListening}>
        {listening ? "Listening..." : "Start Listening"}
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>Transcript: {transcript}</p>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default VoiceSearch;
