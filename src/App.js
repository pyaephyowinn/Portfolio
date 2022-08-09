import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/Home";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/portfolio/" element={<HomePage />} />
      <Route path="/portfolio/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
    </Routes>
  );
};
export default App;
