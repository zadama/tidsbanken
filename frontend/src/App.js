import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import { LoginView } from "./views";
import Layout from "./layouts";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={LoginView} />

          <Route
            component={() => {
              return <div>Not Found</div>;
            }}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
