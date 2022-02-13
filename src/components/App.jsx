import React, { Component, useState } from "react";
import Cart from "./cart";
import Navbar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Minu from "./minu";
import Item from "./item";
import NotFound from "./notfound";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger", count: 0, price: 30, isInCart: false },
    { id: 2, name: "Fries", count: 5, price: 50, isInCart: false },
    { id: 3, name: "Cola", count: 0, price: 20, isInCart: false },
  ]);

  // state = {
  //   products: [
  //     { id: 1, name: "Burger", count: 0 },
  //     { id: 2, name: "Fries", count: 5 },
  //     { id: 3, name: "Cola", count: 0 },
  //   ],
  // };

  //methods//
  //clone
  //edit
  //set state

  function increasetheitem(product) {
    const newproducts = [...products];
    const index = newproducts.findIndex((p) => p.id === product.id);
    newproducts[index] = { ...newproducts[index] };
    // edit
    newproducts[index].count++;
    // setProducts
    setProducts(newproducts);
  }

  function decreasetheitem(product) {
    const newproducts = [...products];
    const index = newproducts.findIndex((p) => p.id === product.id);
    newproducts[index] = { ...newproducts[index] };
    // edit
    newproducts[index].count--;

    if (newproducts[index].count < 0) {
      newproducts[index].count = 0;
    }
    // setProducts
    setProducts(newproducts);
  }

  function deleteitem(product) {
    const delitem = products.filter((p) => p.id !== product.id);
    setProducts(delitem);
  }

  function reset() {
    let res = [...products];
    res = res.map((p) => {
      return { ...p, count: 0 };
    });
    console.log(res);
    setProducts(res);
  }
  function isincart(product) {
    const produ = [...products];
    const index = produ.indexOf(product);
    produ[index] = { ...produ[index] };
    //Edit
    produ[index].isInCart = !products[index].isInCart;
    //Set State
    setProducts({ products });
  }

  return (
    <>
      <main>
        <React.Fragment>
          <Navbar Getcount={products.filter((p) => p.isInCart).length} />
          <main className="container">
            <Switch>
              <Route
                path="/products/:id/:name?"
                render={(props) => (
                  <Item products={products} {...products} />
                )}
              />

              <Route
                path="/cart"
                render={(products) => (
                  <Cart
                    products={products.filter((p) => p.isInCart)}
                    OnIncrease={increasetheitem}
                    OnDecrease={decreasetheitem}
                    OnDelete={deleteitem}
                    OnReset={reset}
                    {...products}
                  />
                )}
              />
              <Route path="/notfound" component={NotFound} />
              <Route
                path="/minu"
                render={(products) => (
                  <Minu
                    {...products}
                    products={products}
                    onClick={isincart}
                  />
                )}
              />
              <Route path="/home" exact component={Home} />
              <Redirect from="/" to="/home" />
              <Redirect to="/notfound" />
            </Switch>
            {/* <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
          </main>
        </React.Fragment>
        {/* <Cart
        products={products}
        OnIncrease={increasetheitem}
        OnDecrease={decreasetheitem}
        OnDelete={deleteitem}
        OnReset={reset}
      /> */}
      </main>
    </>
  );
}

// class App extends Component {

//   render() {

//     ////router
//   }
// }

export default App;
