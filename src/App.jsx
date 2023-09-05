import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import MediaCard from './Comp/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonAppBar from './Comp/Nav';

function GetNews(){

const [getNews , setGetNews] = useState([])

var arr = []

useEffect(()=>{

  axios.get("https://dummyjson.com/products").then((res)=>{
  arr.push(res.data.products)
  setGetNews(arr)

  })

},[])



return(
  getNews[0].map((data)=>{
    console.log("data",data);
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
    <Row>
      <Col style={{display : "flex" , flexWrap : "wrap",justifyContent : "space-evenly"}}>
     <GetNews/>
      
      </Col>
    </Row>
      
    </div>
  );
}

export default App;
