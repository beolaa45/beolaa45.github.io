function Summary({ data }) {
  return (
    <div className="summary">
      <ul>
        <li>
          Subtotal <span>${data.subTotal}</span>
        </li>
        <li>
          Tax <span>${data.tax}</span>
        </li>
        <li className="total">
          Total <span>${data.total}</span>
        </li>
      </ul>
    </div>
  );
}
