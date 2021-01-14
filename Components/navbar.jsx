class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li><Link to="/">To Home</Link></li>
          {/*<li><Link to="/route">To Route</Link></li>*/}
        </ul>
      </div>
    )
  }
}