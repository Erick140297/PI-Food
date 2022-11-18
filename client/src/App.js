import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import Home from "./components/Home/Home";
import RecipeName from "./components/RecipeName/RecipeName";
import RecipeId from "./components/RecipeId/RecipeId";
import Success from "./components/Success/Success";

function App() {
  return (
    <>
      <Route exact path={"/"} render={() => <LandingPage />} />
      <Route path={"/home"} render={() => <NavBar />} />
      <Route exact path={"/home/recipes"} render={() => <Home />} />
      <Route exact path={"/home/create"} render={() => <CreateRecipe />} />
      <Route exact path={"/home/name/:name"} render={() => <RecipeName />} />
      <Route exact path={"/home/recipes/:id"} render={() => <RecipeId />} />
      <Route exact path={"/home/success/:name"} render={() => <Success />} />
    </>
  );
}

export default App;
