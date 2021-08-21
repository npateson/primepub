import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from "./globalStyle";
import Hero from './components/Hero'
import Products from './components/Products'
import {productData, productDataTwo} from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer'


function App(){
 return (
	 <Router>
		 <GlobalStyle />
         <Hero />
		 <Products heading="Our Delicacies" data={productData}/>
		 <Products heading="Our Sumptuous Traditional Meals" data={productDataTwo}/>
		 <Feature />
		 <Footer />
	 </Router>
 )
}


export default App
