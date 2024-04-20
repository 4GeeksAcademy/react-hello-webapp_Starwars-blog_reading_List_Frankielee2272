import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/Home";
import { Demo } from "./views/Demo";
import { Single } from "./views/Single";
import { Person } from "./views/SinglePerson";
import { StarshipDetails } from "./views/StarshipDetails"; // Assuming you've created this
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

export const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/single/:theid" element={<Single />} />
          <Route path="/person/:theid" element={<Person />} />
          <Route path="/starship/:starshipId" element={<StarshipDetails />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
