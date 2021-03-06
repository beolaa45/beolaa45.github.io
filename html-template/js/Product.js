function Product(props) {
  let jsx = props.products.map((value) => (
    <li key={value.id} className="row">
      <div className="col left">
        <div className="thumbnail">
          <a href="#">
            <img src={value.image} alt="" />
          </a>
        </div>
        <div className="detail">
          <div className="name">
            <a href="#">{value.name}</a>
          </div>
          <div className="description">{value.description}</div>
          <div className="price">${value.price}</div>
        </div>
      </div>
      <div className="col right">
        <div className="quantity">
          <input
            type="number"
            className="quantity"
            step={1}
            value={value.quantity}
            onChange={(e) => props.handleChange(e, value.id)}
          />
        </div>
        <div onClick={() => props.delete(value.id)} className="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </li>
  ));

  return <ul className="products">{props.products.length > 0 ? jsx : <p style={{fontSize: "20px", color: "red", textAlign: "center"}}>Không có sản phẩm trong giỏ</p>}</ul>;
}
