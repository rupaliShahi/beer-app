import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Home from "./Views/Home";
import Beer from "./Views/Beer";
import Favourite from "./Components/Favourite/Favourite";
import FavProvider from "./store/FavProvider";

const App = () => {
  const [favIsShown, setFavIsShown] = useState(false);

  const showFavHandler = () => {
    setFavIsShown(true);
  };

  const hideFavHandler = () => {
    setFavIsShown(false);
  };

  return (
    <Router>
      <FavProvider>
        {favIsShown && <Favourite onClose={hideFavHandler} />}
        <Header onShowFav={showFavHandler} />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/beers/:id" element={<Beer />}></Route>
          </Routes>
        </main>
      </FavProvider>
    </Router>
  );
};

export default App;
