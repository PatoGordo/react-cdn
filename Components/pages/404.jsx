function Page404() {
	document.title = '404 - Page not found'
	
  return (
    <div className="Page404">
      <h2>404 - Page not found</h2>
      <Link to="/">Return to home</Link>
    </div>
  )
}