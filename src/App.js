import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/Home";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
