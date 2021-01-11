class Component extends React.Component {
  render() {
    return (
      <div className="Component">
        {document.getElementsByTagName("title")[0].innerHTML = "Your Project - Title"}
        Component
      </div>
    )
  }
}

//or

function Component() {
  document.getElementsByTagName("title")[0].innerHTML = "Your Project - Title"
  return (
    <div className="Component">
      Component
    </div>
  )
}