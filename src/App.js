import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

function handsub (handleSubmit)
{
  return <Header
  handleSubmit={this.handleSubmit}
  history={props.history}/>
}

function handred(){
  return <Redirect to="/mountain" />
}

function handserc(item){
 return <Item searchTerm={item}/> 
}

function handsercT(){
  return <Search searchTerm={props.match.params.searchInput} />
}

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={handsub(this.handleSubmit)}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={handred}
              />

              <Route path="/mountain" render={handserc("mountain") }/>
              <Route path="/beach" render={handserc("beach") } />
              <Route path="/bird" render={handserc("bird") } />
              <Route path="/food" render={handserc("food") } />
              <Route
                path="/search/:searchInput"
                render={handsercT}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
