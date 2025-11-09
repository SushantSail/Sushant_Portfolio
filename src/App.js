import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Routes/AllRoutes";
import { ScrollToTop } from "./Components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop must be inside Router */}
      <ScrollToTop />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
