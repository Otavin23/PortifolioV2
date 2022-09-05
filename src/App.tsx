import { CreateGlobalStyles } from "./styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Error from "./page/Error";

const App = () => {
  return (
    <BrowserRouter>
      <CreateGlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
