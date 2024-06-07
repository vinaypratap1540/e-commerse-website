import React from "react";
import "./product.scss";
import Card from "../card/Card";
import { Grid } from "react-loader-spinner";

const Product = ({products}) => {
  console.log(products)
  return (
    <div className="product">
      <div className="head">
        <h2>Shopping Everyday</h2>
        <span
          style={{
            height: "3px",
            backgroundColor: "black",
            border: "2px solid black",
            width: "100px",
            marginTop: "20px",
          }}
        >
          <hr />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          dolores nulla ipsum amet nemo commodi nostrum numquam quasi dolorum?
          Vel autem aspernatur deserunt perferendis deleniti optio alias facilis
          eos fugit eaque. Tempore, tenetur officiis. Laudantium impedit magni
          doloribus eaque delectus.jai shree Ram.
        </p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto ",gap:'10px',padding:'10px'}}>
        {products.map((item)=>(
         <Card key={item._id} product={item}/>
        )
        )}
      </div>
    </div>
  );
};

export default Product;
