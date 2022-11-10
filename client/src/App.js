import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Route exact path={"/"} render={() => <LandingPage />} />
      <Route path={"/home"} render={() => <NavBar />} />
    </>
  );
}

export default App;
