var PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 10,
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
  tax: 0.2,
  total: 0,
};

SUMMARY = { ...SUMMARY, total: SUMMARY.subTotal * (1 - SUMMARY.tax) };
console.log(SUMMARY);

const App = (props) => {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [summary, setSummary] = React.useState(SUMMARY);

  for (const value of products) {
    SUMMARY.subTotal += value.price * value.quantity;
  }
  SUMMARY.total = SUMMARY.subTotal * (1 - SUMMARY.tax);

  console.log(products);
  const onChange = (e, id) => {
    console.log(e.target.value, id);
    let newProduct = [...products];
    let index = newProduct.findIndex((obj) => obj.id == id);
    console.log(index);
    let newItem = { ...newProduct[index], quantity: e.target.value };
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


  };

  ///////////////////add
  const handleAdd = () => {
    let newProduct = [...products]
    newProduct.push({
        id: new Date().getTime,
        name: "Product 2",
        description: "Description 2",
        image: "https://via.placeholder.com/200x150",
        price: 20,
        quantity: 2,
    })

    setProducts(newProduct)

    let newSummary = { ...summary };
    newSummary.subTotal = 0;
    newSummary.total = 0;
    for (const value of newProduct) {
      newSummary.subTotal += value.price * value.quantity;
    }
    newSummary.total = newSummary.subTotal * (1 - newSummary.tax);
    setSummary(newSummary);
  }
  return (
    <main>
      <CartHeader header="Shopping Cart" title="Home" />
      <section className="container">
        <Product
          products={products}
          delete={handleDelete}
          handleChange={onChange}
        />
      </section>
      <section className="container">
        <Promotion />
        <Summary data={summary} />
        <div className="checkout">
          <Button />
        </div>
      </section>
      <div onClick={handleAdd} className="add-products">
        ADD PRODUCTS
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
