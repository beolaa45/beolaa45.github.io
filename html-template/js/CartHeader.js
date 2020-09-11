function CartHeader(props) {
    return (
        <header className="container">
        <h1>{props.header}</h1>
        <ul className="breadcrumb">
          <li>{props.title}</li>
          <li>{props.header}</li>
        </ul>
        <span className="count">3 items in the bag</span>
      </header>
    )
}