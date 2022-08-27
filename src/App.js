import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import PropertyDetails from "./components/PropertyDetails";

const App = () => {

    return (
        <>
            <div className="max-[1440px] mx-auto bg-white">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/property/:id" element={<PropertyDetails />} />
                </Routes>
            </div>
        </>
    );
};

export default App;