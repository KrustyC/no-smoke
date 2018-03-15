import React, { Component } from 'react';
import logo from './image.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
              <h1 className="title">
                Stop Smoking Forever
              </h1>
              <h2 className="subtitle">
                Smetti di fumare con il nuovo metodo <strong>Laziale</strong>, un metodo semplice ed efficace.
              </h2>
            </div>
          </div>
        </section>
        <section className="hero is-medium is-dark">
          <div className="hero-body">
            <div className="container">
              <p className="subtitle">
                Smettere di fumare non e' mai stato cosi' semplice! Grazie a questo metodo <i>innovativo</i> 
                creato dai nostri <i>esperti</i> e perfeionato dal <a className="has-text-link" href="https://www.facebook.com/alessandro.e.ricci.3">Laziale</a>.
                Tutto cio' che devi fare e' creare un gruppo motivazionale con amici intezionati a smettere di fumare e a salvare
                la propria vita, esattamente come te!
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container content">
              <blockquote>
                <h1 className="subtitlt"><i>Provalo, non te ne pentirai!</i></h1>
              </blockquote>
              <br />
              <p className="has-text-right"><b><i>Cit. Pala</i></b></p>
            </div>
          </div>
        </section>
        <section className="hero is-medium is-dark">
          <div className="hero-body">
            <div className="container content">
              <div className="columns">
                <div className="column">
                  <i className="fa fa-trash" style={{ fontSize: '70px', marginBottom: '10px' }} />
                  <br />
                  <span className="subtitle">Butta la sigaretta</span>
                </div>
                <div className="column">
                  <i className="fa fa-camera" style={{ fontSize: '70px', marginBottom: '10px' }} />
                  <br />
                  <span className="subtitle">Condividi la tua foto</span>
                </div>
                <div className="column">
                  <i className="fa fa-times" style={{ fontSize: '70px', marginBottom: '10px' }} />
                  <br />
                  <span className="subtitle">Smetti</span>
                </div>
          </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Stop Smoking Forever</strong> by <a>Santa Maria Care</a>.
                <br />
                &#169; Copyright Santa Maria 2018
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
