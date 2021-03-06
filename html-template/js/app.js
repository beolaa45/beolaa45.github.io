var PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 10.4,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 20,
    quantity: 2,
  },
];

var SUMMARY = {
  subTotal: 0,
  tax: 0,
  total: 0,
};
var code = "Techmaster";
SUMMARY = { ...SUMMARY, total: SUMMARY.subTotal * (1 - SUMMARY.tax) };
console.log(SUMMARY);
for (const value of PRODUCTS) {
  SUMMARY.subTotal += value.price * value.quantity;
}
SUMMARY.total = SUMMARY.subTotal * (1 - SUMMARY.tax);
const App = () => {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [summary, setSummary] = React.useState(SUMMARY);
  const [promo, setPromo] = React.useState("");
  const [modal, setModal] = React.useState(false)

  console.log(products);
  const onChange = (e, id) => {
    let quant = parseInt(e.target.value);
    if (quant > 99 || quant <= 0) {
      alert("quantity 0 - 99");
      return;
    }
    if (Number.isNaN(quant)) quant = "";
    console.log(e.target.value, id);
    let newProduct = [...products];
    let index = newProduct.findIndex((obj) => obj.id == id);
    console.log(index);
    let newItem = { ...newProduct[index], quantity: quant };
    newProduct[index] = newItem;
    setProducts(newProduct);

    let newSummary = { ...summary };
    newSummary.subTotal = 0;
    newSummary.total = 0;

    for (const value of newProduct) {
      newSummary.subTotal += value.price * value.quantity;
    }
    newSummary.total = newSummary.subTotal * (1 - newSummary.tax);
    setSummary(newSummary);
  };
  ///////////////////////delete
  const handleDelete = (id) => {
    let txt;
      let r = confirm("Bạn muốn xóa không!");
      if (r == true) {
        
        console.log(id);
        let newProduct = products.filter((product) => product.id !== id);
        setProducts(newProduct);
    
        let newSummary = { ...summary };
        newSummary.subTotal = 0;
        newSummary.total = 0;
        for (const value of newProduct) {
          newSummary.subTotal += value.price * value.quantity;
        }
        newSummary.total = newSummary.subTotal * (1 - newSummary.tax);
        setSummary(newSummary);
      } else {
        
      }
    
 
  };

  ///////////////////add
  const handleAdd = () => {
    let newProduct = [...products];
    newProduct.push({
      id: new Date().getTime(),
      name: "Product 2",
      description: "Description 2",
      image: "https://via.placeholder.com/200x150",
      price: 20,
      quantity: 2,
    });

    setProducts(newProduct);

    let newSummary = { ...summary };
    newSummary.subTotal = 0;
    newSummary.total = 0;
    for (const value of newProduct) {
      newSummary.subTotal += value.price * value.quantity;
    }
    newSummary.total = newSummary.subTotal * (1 - newSummary.tax);
    setSummary(newSummary);
  };

  /////////////////promo-code

  const handlePromoCode = (e) => {
    let code = e.target.value;
    setPromo(code);
    console.log(code);
  };

  const onClickPromo = () => {
    if (promo === code) {
      let newSummary = { ...summary };
      newSummary.tax = 0.1;
      newSummary.total =(1 - newSummary.tax) * newSummary.subTotal;
      setSummary(newSummary);
    }else{
      alert("Code hết hạn hoặc sai")
    }
  };
  return (
    <main>
      <Modal show={modal}>
        <Comfrim />
      </Modal>
      <CartHeader item={products} header="Shopping Cart" title="Home" />
      <section className="container">
        <Product
          products={products}
          delete={handleDelete}
          handleChange={onChange}
        />
      </section>
      {products.length > 0 ? <section className="container">
        <Promotion
          onChange={handlePromoCode}
          value={promo}
          onClick={onClickPromo}
        />
        <Summary data={summary} />
        <div className="checkout">
          <Button />
        </div>
      </section> : null}
      <div onClick={handleAdd} className="add-products">
        ADD PRODUCTS
      </div>
     
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
