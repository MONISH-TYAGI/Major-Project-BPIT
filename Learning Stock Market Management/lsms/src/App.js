import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main.js';
import Courses from './components/courses.js';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="courses" element={<Courses />} />
      <Route path="/" element={<Main />}>
   
      </Route>
    </Routes>
  </BrowserRouter>
      
  );
}

export default App;
