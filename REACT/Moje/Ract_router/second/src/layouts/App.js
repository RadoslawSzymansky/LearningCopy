import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Page from "../components/Page"

function App() {
  return (
    <Router>
      <div className="app">
        <header><Header></Header></header>
        <main>
          <aside>{<Navigation></Navigation>}</aside>
          <section className="page">
            <Page></Page>
          </section>
        </main>
        <footer>{<Footer></Footer>}</footer>
      </div>

    </Router>
  );
}

export default App;
