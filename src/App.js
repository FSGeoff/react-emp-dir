import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Directory from "./Components/Directory/Directory.jsx";
import Search from "./Components/Search/Search.jsx";

function App() {
  return (
    <Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/directory" component={Directory} />
			<Route exact path="/search" component={Search} />
		</Router>
  );
}

export default App;
