import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from "./globalStyle";
import Hero from './components/Hero'
import Products from './components/Products'
import {productData, productDataTwo} from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import YoutubeEmbed from './components/YoutubeEmbed';
import BookUs from './components/BookUs'


function App(){
    const StoredArray = "";
	const StoredProduct = ""
	const [cartArray, setCartArray] = useState([]);
	const [isThank, setIsThank] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

   

    useEffect(()=>{
		let retrievedArray = JSON.parse(localStorage.getItem(StoredArray));
		setCartArray(retrievedArray);
	}, []);
 
	useEffect(()=>{
		localStorage.setItem(StoredArray, JSON.stringify(cartArray));
	}, [cartArray]);

	//  useEffect(()=>{
	// 	let retrievedProduct = JSON.parse(localStorage.getItem(StoredProduct));
	// 	setProductD(retrievedProduct);
	// }, []);
 
	// useEffect(()=>{
	// 	localStorage.setItem(StoredProduct, JSON.stringify(productD));
	// }, [productD]);

 return (
	 <Router>
		 <GlobalStyle />		 
         <Hero cartArray={cartArray} setCartArray={setCartArray} isThank={isThank} setIsThank={setIsThank} isBooked={isBooked} setIsBooked={setIsBooked}/>
		 <Products heading="Our Delicacies" data={productData} cartArray={cartArray} setCartArray={setCartArray}/>
		 <Products heading="Our Sumptuous Traditional Meals" data={productDataTwo} cartArray={cartArray} setCartArray={setCartArray}/>
		 <ImageSlider />
		 <YoutubeEmbed />
		 <Feature isThank={isThank} setIsThank={setIsThank} isBooked={isBooked} setIsBooked={setIsBooked}/>
		 <Footer />
	 </Router>
 )
}


export default App
