import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />


                <div className="home_row">
                    <Product
                        id="1223333"
                        title="Goodthreads Men's Slim-Fit Long-Sleeve Plaid Poplin Shirt"
                        price={7.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51gQUn2dA4L._AC_UL520_SR400,520_QL65_.jpg"
                        rating={5} />



                    <Product
                        id="12277733"
                        title="The lean product"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5} />
                </div>

                <div className="home_row">
                    <Product
                        id="12235453"
                        title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones"
                        price={299.99}
                        image="https://m.media-amazon.com/images/I/31LgXJl2QoL._AC_SY322_.jpg"
                        rating={5} />

                    <Product
                        id="1773333"
                        title="ASUS ZenBook 13 Ultra-Slim Laptop- 13.3” Full HD "
                        price={798.24}
                        image="https://m.media-amazon.com/images/I/41ghg8I9DVL._AC_SY322_.jpg"
                        rating={4} />
                    <Product
                        id="12279733"
                        title="Amazon Brand - Lark & Ro Women's Florence Ruffle Short Sleeve"
                        price={28.99}
                        image="https://m.media-amazon.com/images/I/91ppNwCBzML._AC_UL640_QL65_.jpg"
                        rating={4} />
                </div>

                <div className="home_row">
                    <Product
                        id="12455453"
                        title="Salt and Pepper Grinder Wooden SET "
                        price={18.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41JR9OYu+gL._AC_US320_QL65_.jpg"
                        rating={5} />
                </div>
            </div>

        </div>
    )
}
export default Home;