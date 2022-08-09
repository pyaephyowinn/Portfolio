import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/Home";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default App;
