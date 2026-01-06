import React from 'react';
import './App.css';
import RefLayout from './components/RefLayout';
import DidYouKnow from './components/DidYouKnow';
import TailoredCMS from './components/TailoredCMS';
import EcommerceSection from './components/EcommerceSection';
import FAQTestimonials from './components/FAQTestimonials';
import FinalCTA from './components/FinalCTA';
import Component2 from './components/Component2';

function App() {
  return (
    <div className="App">
      <RefLayout />
      <Component2 />
      <DidYouKnow />
      <TailoredCMS />
      <EcommerceSection />
      <FAQTestimonials />
      <FinalCTA />
    </div>
  );
}

export default App;


