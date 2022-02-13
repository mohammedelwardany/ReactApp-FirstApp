import React, { Component } from "react";
import Item from "./item";

function Cart(props) {
const {products,OnIncrease,OnDecrease,OnDelete,OnReset}=props;
console.log(props);
  return (
    <div>
      {products.map((prdct) => (
        <Item
          key={prdct.id}
          product={prdct}
          OnIncrease={OnIncrease}
          OnDecrease={OnDecrease}
          OnDelete={OnDelete}
        />
      ))}
  
      <button className="btn btn-secondary m-2" onClick={OnReset}>
        reset
      </button>
    </div>
  );
  
}

// class Cart extends Component {

//   render() {
//   }
// }

export default Cart;
