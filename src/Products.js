import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Product(props) {
    console.log("props ==>", props);
  return (
    <>
       
    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <img class="card-img-top" src={props.products.image ? props.products.image : "https://dummyimage.com/600x400/55595c/fff"} alt="Card image cap"/>
                            <div class="card-body">
                                <h4 class="card-title"><a href="product.html" title="View Product">{props.products.name}</a></h4>
                                <p class="card-text">{props.products.description}</p>
                                <div class="row">
                                    <div class="col">
                                        <p class="btn btn-danger btn-block">{props.products.price} $</p>
                                    </div>
                                    <div class="col">
                                        <a href="#" class="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  );
}

export default Product;
