import Home from "./Routes/Home/Home.component.jsx";
import Navigation from "./Routes/Navigation/Navigation.js";
import SignIn from "./Routes/sign-in/SignIn.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
