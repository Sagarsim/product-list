import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products : [],
      pageno: 0
    }
  }

  componentDidMount(){
    console.log("this.state.pageno", this.state.pageno)
    axios.get(`http://localhost:3005/get-products?pageno=${this.state.pageno}`)
        .then(data => {
          console.log(data);
          this.setState({products: data.data});
        })
  }
  getData = () => {
     axios.get(`http://localhost:3005/get-products?pageno=${this.state.pageno}`)
        .then(data => {
          console.log(data);
          this.setState({products: data.data});
        })
  }
  changePage = (no) => {
    console.log("called", no)
      this.setState({pageno: no}, () => {this.getData()});
  }
  render() {
    return <>
       
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Products</a></li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            
            <div class="col">
                <div class="row">
                {this.state.products ? this.state.products.map(prod => <Products products={prod} />) : []}
                    
                    <div class="col-12">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class={"page-item"+ (this.state.pageno+1 == 1 ? " active" : "")}><a class="page-link" href="#" onClick={() => this.changePage(0)}>1</a></li>
                                <li class={"page-item"+ (this.state.pageno+1 == 2 ? " active" : "")}>
                                    <a class="page-link" href="#" onClick={() => this.changePage(1)}>2 </a>
                                </li>
                               
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
    </>
  }
}

export default App;
