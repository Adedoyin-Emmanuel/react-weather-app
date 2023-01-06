import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Routes, Route, BrowserRouter} from  "react-router-dom";
import WeatherApp from "./pages/Weather";
import "./autoload";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element = {<Home/>} />
              <Route index element = {<Home/>} />
              <Route path= "contact" element = {<Contact/>} />
              <Route path="about" element = {<About/>}/>
              <Route path="weather" element={<WeatherApp/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
