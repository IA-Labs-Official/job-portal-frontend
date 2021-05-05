import { Header } from "../components/Header";
import Jobs from "./addJobs";
import { Applications } from "./Applications";
import { Assesments } from "./Assessments";
import Home from "./Home";
import SavedJobs from "./SavedJobs";
const { Switch, Route } = require("react-router");

function App() {
  return (
    <div className="App"> 
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/saved" component={SavedJobs} />
        <Route path="/applications" component={Applications} />
        <Route path="/assesments" component={Assesments} />
      </Switch>
      
    </div>
  );
}

export default App;
