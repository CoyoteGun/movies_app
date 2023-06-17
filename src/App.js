import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts/MainLayout";
import {Popular} from "./components/Popular/Popular";
import {TopRated} from "./components/Top_Rated/TopRated";
import {Upcoming} from "./components/Upcoming/Upcoming";
import {HomePage} from "./pages/HomePage/HomePage";
import {MovieDetails} from "./pages/MovieDetails/MovieDetails";
import {Genres} from "./components/Genres/Genres";

function App() {
  return (
    <div className="App">
          <Routes>
              <Route path={'/'} element={<MainLayout/> }>
                  <Route index element={<HomePage/>} />
                  <Route path={'genres'} element={<Genres/>} />
                  <Route path={'movie/:id'} element={<MovieDetails/>} />
                  <Route path={'popular'} element={<Popular/>} />
                  <Route path={'top_rated'} element={<TopRated/>} />
                  <Route path={'upcoming'} element={<Upcoming/>} />
              </Route>
          </Routes>
    </div>
  );
}

export default App;
