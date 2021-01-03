const Link = ReactRouterDOM.Link,
    Route = ReactRouterDOM.Route;
 
const home = props => <Home />
    
const Main = props => (
    <ReactRouterDOM.HashRouter>
        <Navbar />
        <Route path="/" exact component={home} />
    </ReactRouterDOM.HashRouter>
)

document.addEventListener("DOMContentLoaded", Main)
ReactDOM.render(<Main/>, document.querySelector("#app"))
