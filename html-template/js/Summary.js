function Summary({ data }) {
  return (
    <div className="summary">
      <ul>
        <li>
          Subtotal <span>${data.subTotal.toFixed(3)}</span>
        </li>
        {data.tax ? <li>
          Tax <span>${data.tax}</span>
        </li> : null}
        <li className="total">
          Total <span>${data.total.toFixed(3)}</span>
        </li>
      </ul>
    </div>
  );
}
