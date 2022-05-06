import Menu from "./components/layout/Menu/Menu.js"
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import LearningStyle from "./pages/LearningStyle.js";
import OriginPlace from "./pages/OriginPlace.js";
import StudenGenre from "./pages/StudentGenre.js";
import ProfessorType from "./pages/ProfessorType.js";
import NetworkClass from "./pages/NetworkClass.js";
import GuessLearningStyle from "./pages/GuessLearningStyle.js";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Menu/>
          <Routes>
          <Route path="/" element={<LearningStyle />} />
            <Route path="/learning-style" element={<LearningStyle />} />
            <Route path="/origin-place" element={<OriginPlace />} />
            <Route path="/student-genre" element={<StudenGenre />} />
            <Route path="/professor-type" element={<ProfessorType />} />
            <Route path="/network-class" element={<NetworkClass />} />
            <Route path="/guess-learning-style" element={<GuessLearningStyle />} />
          </Routes>
          <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
