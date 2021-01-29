class Component extends React.Component {
	document.title = "Your Project - Component"
	
  render() {
    return (
      <div className="Component">
        Component
      </div>
    )
  }
}

//or

function Component() {
	document.title = "Your Project - Component"
  
  return (
    <div className="Component">
      Component
    </div>
  )
}