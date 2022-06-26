import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import client from "./api/client";
import AnimeDetail from "./pages/AnimeDetail";
import AnimeCollectionList from "./pages/AnimeCollectionList";
import AnimeCollectionDetail from "./pages/AnimeCollectionDetail";

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<AnimeDetail />} />
        <Route path="/list" element={<AnimeCollectionList />} />
        <Route path="/collection" element={<AnimeCollectionDetail />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
