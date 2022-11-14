import "./App.css";
import Comments from "./components/Comments/Comments";
import Photos from "./components/Photos/Photos";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Users></Users>
      <Photos></Photos>
      <Comments></Comments>
    </div>
  );
}

export default App;
