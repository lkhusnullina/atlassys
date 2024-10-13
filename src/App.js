import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import "./styles.scss";

function App() {
  return (
    <div className="container">
      <div className="leftBlock">
        <NavBar />
      </div>
      <div className="rightBlock">
          <Header />
          <Profile />
      </div>
    </div>
  );
}

export default App;
