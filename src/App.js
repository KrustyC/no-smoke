import React, { Component } from 'react';
import logo from './image.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-info is-fullheight">
          <div className="hero-body">
            <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
              <h1 className="title">
                Stop Smoking Forever
              </h1>
              <h2 className="subtitle">
                Smetti di fumare con il nuovo metodo <strong>Laziale</strong>, un metodo semplice ed efficace.
              </h2>
              <div>
                Smettere di fumare non e' mai stato cosi' semplice! Grazie a questo metodo <i>innovativo</i> 
                creato dai nostri <i>esperti</i> e perfeionato dal 
                <a className="">Laziale</a>.
                Tutto cio' che devi fare e' creare un gruppo motivazionale con amici intezionat a smettere di fumare e a salvare
                la propria vita, esattamente come te!
                <br />
                <br />
                <i><h1 className="subtitle">Provalo, non te ne pentirai!</h1></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
