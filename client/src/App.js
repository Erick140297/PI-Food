import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <>
      <Route exact path={"/"} render={() => <LandingPage />} />
      <Route path={"/home"} render={() => <NavBar />} />
      <Route exact path={"/home/recipes"} render={() => <Recipes />} />
      <Route exact path={"/home/create"} render={() => <CreateRecipe />} />
    </>
  );
}

export default App;
