const PRODUCTS = [
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
    price: 15,
    quantity: 2,
  },
];

let SUMMARY = 0;
for (const value of PRODUCTS) {
  SUMMARY += value.price * value.quantity;
}
console.log(SUMMARY);

const App = (props) => {
const onChange = (e, id) => {
  console.log(e.target.value, id)
  
}

 return (
  <main>
    <CartHeader header="Shopping Cart" title="Home" />
    <section className="container">
      <Product products={PRODUCTS} handleChange={onChange} />
    </section>
    <section className="container">
      <Promotion />
      <Summary data={SUMMARY} />
      <div className="checkout">
        <Button />
      </div>
    </section>
  </main>
);
} 

ReactDOM.render(<App />, document.getElementById("root"));
