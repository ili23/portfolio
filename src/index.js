import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Navigation from './components/navbar.js'
import Home from './components/home.js'
import About from './components/about.js'
import Projects from "./components/projects.js"
import ContactForm from './components/contactform';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Home />
    <About />
    <Projects />
    <ContactForm />
    
  </React.StrictMode>
);
