import React, { Component } from "react";
import {Link} from "react-router-dom";

function Item({product,OnDecrease,OnIncrease,OnDelete}) {
  
  return (



    <div className="order">
                <span>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </span>
      <span>{product.name}</span>
      <button
        onClick={() => OnDecrease(product)}
        className="btn btn-primary btn-sm m-2"
      >
        -
      </button>
      <span className="badge bg-warning m-2">{product.count}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => OnIncrease(product)}
      >
        +
      </button>
  
      <button
        onClick={() => {
          OnDelete(product);
        }}
        className="btn btn-danger btn-sm m-2"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );

}

// class Item extends Component {
//   render() {
//   }
// }

export default Item;
