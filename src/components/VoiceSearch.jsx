// import React, { useState } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// const VoiceSearch = () => {
//   const { transcript, resetTranscript, listening } = useSpeechRecognition();
//   const [query, setQuery] = useState("");

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <div>Your browser does not support speech recognition.</div>;
//   }

//   const handleSearch = () => {
//     setQuery(transcript);
//     console.log("Voice Search Query:", query);
//     // Implement logic to use the search query (e.g., API call or navigation)
//     resetTranscript();
//   };

//   return (
//     <div style={{ textAlign: "center", margin: "20px" }}>
//       <h2>Voice Search</h2>
//       <button
//         onClick={SpeechRecognition.startListening}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: listening ? "red" : "green",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           margin: "10px",
//         }}
//       >
//         {listening ? "Listening..." : "Start Voice Search"}
//       </button>
//       <button
//         onClick={SpeechRecognition.stopListening}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           margin: "10px",
//         }}
//       >
//         Stop
//       </button>
//       <button
//         onClick={resetTranscript}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "orange",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           margin: "10px",
//         }}
//       >
//         Reset
//       </button>
//       <p>Transcript: {transcript}</p>
//       <button
//         onClick={handleSearch}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "purple",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           margin: "10px",
//         }}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default VoiceSearch;




import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "../styles/App.css";

const VoiceSearch = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [query, setQuery] = useState("");

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  const handleSearch = () => {
    setQuery(transcript);
    console.log("Voice Search Query:", query);
    resetTranscript();
  };

  return (
    <div className="voice-search">
      <h2>Voice Search</h2>
      <button onClick={SpeechRecognition.startListening} className={listening ? "listening-btn" : "start-btn"}>
        {listening ? "Listening..." : "Start Voice Search"}
      </button>
      <button onClick={SpeechRecognition.stopListening} className="stop-btn">Stop</button>
      <button onClick={resetTranscript} className="reset-btn">Reset</button>
      <p>Transcript: {transcript}</p>
      <button onClick={handleSearch} className="search-btn">Search</button>
    </div>
  );
};

export default VoiceSearch;