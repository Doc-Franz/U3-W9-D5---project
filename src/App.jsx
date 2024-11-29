import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import MyMovies from "./components/MyMovies";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <MyHero />
      <MyMovies movie="Star Wars" />
      <MyMovies movie="Harry Potter" />
      <MyMovies movie="The lord of the rings" />
      <MyFooter />
    </>
  );
}

export default App;
