import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import MyMovies from "./components/MyMovies";
import MyFooter from "./components/MyFooter";
// import MyAccount from "./components/MyAccount";

function App() {
  return (
    <>
      <MyNav />
      <MyHero />
      <MyMovies movie="Star Wars" />
      <MyMovies movie="Harry Potter" />
      <MyMovies movie="The lord of the rings" />
      <MyFooter />
      {/* <MyAccount /> */}
    </>
  );
}

export default App;
