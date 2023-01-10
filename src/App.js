import Home from "./pages/Home";
import Support from "./pages/Support";
import {Routes, Route, BrowserRouter} from  "react-router-dom";
import WeatherApp from "./pages/Weather";
import Settings from "./pages/Settings";
import WeatherMain from "./pages/WeatherMain";
import "./autoload";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element = {<Home/>} />
              <Route index element = {<Home/>} />
              <Route path= "support" element = {<Support/>} />
              <Route path="weather" element={<WeatherApp/>}/>
              <Route path="settings" element = {<Settings/>}/>
              <Route path="weathermain" element={<WeatherMain/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
