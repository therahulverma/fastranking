import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";

function App() {
  const [isHoveredServices, setIsHoveredServices] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              isHoveredServices={isHoveredServices}
              setIsHoveredServices={setIsHoveredServices}
            />
          }
        />
        <Route
          exact
          path="/content-marketing-services"
          element={
            <Service
              isHoveredServices={isHoveredServices}
              setIsHoveredServices={setIsHoveredServices}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
