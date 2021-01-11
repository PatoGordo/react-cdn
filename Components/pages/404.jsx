function Page404() {
  document.getElementsByTagName("title")[0].innerHTML = "404 - Page not found";
  return (
    <div className="Page404">
      <h2>404 - Page not found</h2>
      <Link to="/">Return to home</Link>
    </div>
  )
}