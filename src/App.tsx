  import {Routes,Route} from "react-router-dom"
  import Home from "./components/Home";

  function App() {
    return (
      <div className="App w-full">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    );
  }

  export default App;
