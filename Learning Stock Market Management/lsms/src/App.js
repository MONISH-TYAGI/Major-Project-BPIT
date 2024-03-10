import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main.js';
import Courses from './components/courses.js';
import News from "./components/News.js";
import Navbar from "./components/navbar.js";
import Sidebar from "./components/sidebar.js";
import Predict from "./components/Predict.js";


function App() {
  return (
   <div className="w-screen h-screen  flex justify-end h-[23%] overflow-x-hidden">
    <BrowserRouter>
      <Sidebar></Sidebar>
      <div className=" w-[85%]">
     <Navbar></Navbar>
   
    <Routes>
    <Route path="courses" element={<Courses />} />
    <Route path="news" element={<News />} />
      <Route path="predict" element={<Predict />}/>
      <Route path="/" element={<Main />}>
   
      </Route>
    </Routes>
    </div>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
