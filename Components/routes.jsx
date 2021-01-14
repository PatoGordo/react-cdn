const Link = ReactRouterDOM.Link,
  Route = ReactRouterDOM.Route,
  Switch = ReactRouterDOM.Switch;

const home = props => <Home />
//const component = props => <component />
const _404 = props => <Page404 />

const Main = props => (
  <ReactRouterDOM.HashRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={home} />
      {/*<Route path="/route" exact component={component} />*/}
      <Route component={_404} />
    </Switch>
  </ReactRouterDOM.HashRouter>
)

document.addEventListener("DOMContentLoaded", Main)
ReactDOM.render(<Main/>, document.querySelector("#app"))