class Navbar extends React.Component {
  state = {
    clicked: false
  }

  handleCLick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  handleCLick2 = () => {
    window.location.href='/'
  }

  render() {
    return (
      <div className="Navbar">
        <h1 className="navbar-logo" onClick={this.handleCLick2}>Project</h1>
        <div className="menu-icon" onClick={this.handleCLick}>
          <i className={ this.state.clicked ? 'fal fa-times' : 'fal fa-bars' }></i>
        </div>
        <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' } onClick={this.handleCLick}>
          <li><Link className="nav-links" to="/">Home</Link></li>
        </ul>
        </div>
    )
  }
}
