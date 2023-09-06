import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import MediaCard from './Comp/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonAppBar from './Comp/Nav';
import DarkVariantExample from './Comp/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Comp/Footer';



function GetNews(){

const [getNews , setGetNews] = useState([])



useEffect(()=>{


  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{

console.log(data);

setGetNews(data.products)
})
  // axios.get("https://dummyjson.com/products")
  // .then((res)=>{


  // })

},[])



return(
  getNews.map((data)=>{
    // console.log("data",data);
    return(
 

<MediaCard
thumbnail={data.thumbnail}
title={data.title}
description={data.description}
price={data.price}

/>

  
    )
  })
)



}


function App() {
  return (
    <div className="App">
    
    <ButtonAppBar/>
    <DarkVariantExample/>
    <br />
    <h3>Products</h3>
    <br />
    <Row>
      <Col style={{display : "flex" , flexWrap : "wrap",justifyContent : "space-evenly"}}>
     <GetNews/>
      
      </Col>
    </Row>
    <Footer/>
    </div>
  );
}

export default App;
