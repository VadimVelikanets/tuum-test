import React from 'react';
import './App.scss';
import ContactForm from "./components/ContactForm/ContactForm";
import Contacts from "./components/Contacts/Contacts";
import useBreakpoint from "./hooks/useBreakpoint";

const App = () => {

  const breakpoint = useBreakpoint();

  return (
    <div className="layout relative">
        <div className="container">
            <div className="flex md:flex-row flex-col justify-center pt-20">
                {breakpoint.width > 767 && (
                    <Contacts/>
                )}
                <div>
                    <h4 className="mb-4 text-5xl">Contact us</h4>
                    {breakpoint.width <= 767 && (
                        <Contacts/>
                    )}
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
