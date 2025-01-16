import "regenerator-runtime/runtime";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ImageSearch from "./components/ImageSearch";
import VoiceSearch from "./components/VoiceSearch";
import Messenger from "./components/Messenger";
import SearchResults from "./pages/SearchResults";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-search" element={<ImageSearch />} />
        <Route path="/voice-search" element={<VoiceSearch />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;





// // App.jsx
// import "regenerator-runtime/runtime";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import ImageSearch from "./components/ImageSearch";
// import VoiceSearch from "./components/VoiceSearch";
// import Messenger from "./components/Messenger";
// import SearchResults from "./pages/SearchResults";
// import "./styles/App.css";

// const App = () => {
//   return (
//     <div className="app-container">
//       <header className="header">
//         <h1>HotelEase</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/image-search">Image Search</Link>
//           <Link to="/voice-search">Voice Search</Link>
//           <Link to="/messenger">Messenger</Link>
//         </nav>
//       </header>
//       <main className="main-content">
//         <h2>Welcome to HotelEase</h2>
//         <div className="buttons-container">
//           <Link to="/image-search" className="button">
//             Image Search
//           </Link>
//           <Link to="/voice-search" className="button">
//             Voice Search
//           </Link>
//           <Link to="/messenger" className="button">
//             Messenger
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;
