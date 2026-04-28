import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="bg-gray-900 min-h-screen w-full text-white gap-3 ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>

<ToastContainer/>
    </div>
  );
}

export default App;
