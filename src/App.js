import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from "./globalStyle";
import Hero from './components/Hero'
import Products from './components/Products'
import {productData, productDataTwo} from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer'


function App(){

	const [cartArray, setCartArray] = useState([]);
    const StoredArray = ""

    useEffect(()=>{
		// let retrievedArray = localStorage.getItem(JSON.parse(StoredArray));
		// setCartArray(retrievedArray);
		// console.log(retrievedArray);
	}, []);
 
	useEffect(()=>{
		localStorage.setItem(StoredArray, JSON.stringify(cartArray));
		console.log(StoredArray)
	}, [cartArray]);

 return (
	 <Router>
		 <GlobalStyle />
		 
         <Hero cartArray={cartArray} setCartArray={setCartArray}/>
		 <Products heading="Our Delicacies" data={productData} cartArray={cartArray} setCartArray={setCartArray}/>
		 <Products heading="Our Sumptuous Traditional Meals" data={productDataTwo}cartArray={cartArray} setCartArray={setCartArray}/>
		 <Feature />
		 <Footer />
	 </Router>
 )
}


export default App
