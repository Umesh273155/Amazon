import React from 'react';
import './css/Home.css';
import Product from "../components/Product";
function Home(){
    return (
      <div className="home" >
        <div className="home_container">
        <img className="home_image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
                    alt="Banner"/> 
        
      
        <div className="home_row">

           <Product
             id="1"
             title="Apple iPhone 14 Pro Max 1TB Gold.."
            
             price={183990}
             image="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UY218_.jpg"
           rating={4}
           />
           <Product
           id='2'
           title='Dell Allienware 6GB Geforce RTX2060 core i7'
           price={124500}
           image="https://m.media-amazon.com/images/I/610sreKWXlL._AC_UY218_.jpg"
           
                        rating={5}
                        />
                        <Product 
                        id='3'
                        title="boAt Rockerz 370 On Ear Bluetooth Headphones 
                         Upto 24 Hours Playtime.."
                        price={998}
                        image="https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY218_.jpg"
                      rating={4}
                      />
                  </div>
                     <div className="home_row">
          
                      
                     <Product 
                        id='4'
                        title="Fire-Boltt Visionary 1.78 AMOLED Bluetooth Calling Smartwatch.. "
                        price={999}
                        image="https://m.media-amazon.com/images/I/61Fj5wTOQiL._AC_UL320_.jpg" 
                        rating={5}
                    />
                     <Product 
                        id='5'
                        title="Philips Multi Grooming Kit MG3760/33, 11-in-1 (New Model), Face,..."
                        price={2140}
                        image="https://m.media-amazon.com/images/I/71Ac6lcrSFL._AC_UL320_.jpg" 
                        rating={3}
                    />
                    </div>
                    <div className="home_row">
                    <Product 
                        id='6'
                        title="Samsung 49inch' Curved LED Gaming Monitor = Super Ultra Wide.."
                        price={35000}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
                        rating={4}
                    />
                    </div>
          

                       
     </div>
      </div>
     

    );
}

export default Home;
