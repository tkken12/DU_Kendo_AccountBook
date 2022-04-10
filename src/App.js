import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "views/Login"
import Main from "views/Main"
function App() {

  useEffect(() => {

  },[])

  console.log( " in")
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />   
      </Switch>
    </BrowserRouter>
  );
}

export default App;