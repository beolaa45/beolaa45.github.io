function CartHeader(props) {
  let sum = 0;
  for(let product of props.item){
    if(!product.quantity) continue
    sum += parseInt(product.quantity) 
  }
  console.log(props.item)
    return (
        <header className="container">
        <h1>{props.header}</h1>
        <ul className="breadcrumb">
          <li>{props.title}</li>
          <li>{props.header}</li>
        </ul>
        <span className="count">{sum} items in the bag</span>
      </header>
    )
}