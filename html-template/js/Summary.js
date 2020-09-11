
function Summary(props){
    return(
        <div className="summary">
        <ul>
          <li>Subtotal <span>${props.data}</span></li>
    <li>Tax <span>${}</span></li>
          <li className="total">Total <span>$26.97</span></li>
        </ul>
      </div>
    )
}