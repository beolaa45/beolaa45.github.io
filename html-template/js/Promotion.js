function Promotion({ onChange, value, onClick }) {
  return (
    <div className="promotion">
      <label htmlFor="promo-code">Have A Promo Code?</label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        id="promo-code"
      />{" "}
      <button onClick={onClick} type="button" />
    </div>
  );
}
