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
             title="I Can Make You Rich by Paul McKenna and Richard Branson"
            
             price={20.7}
             image="https://m.media-amazon.com/images/I/81dyIEtkIPL._AC_UY218_.jpg"
           rating={4}
           />
           <Product
           id='2'
           title='KitchenAid KSM150PSAQ Artisan Series 5-Qt. Stand Mixer with Pouring Shield - Aqua Sky'
           price={399}
           image="https://mobileimages.lowes.com/productimages/5131eb67-3f40-45aa-bfe2-f648161402ba/10161283.jpg?size=pdhism"
           
                        rating={5}
                        />
                        <Product 
                        id='3'
                        title="Apple Watch Series 3 (GPS, 38MM) - Silver Aluminum Case with White Sport Band (Renewed)"
                        
                        price={159.99}
                        image="https://m.media-amazon.com/images/I/71UJtA8cFJL._AC_UY218_.jpg"
                      rating={5}
                      />
                  </div>
                     <div className="home_row">
          
                      
                     <Product 
                        id='4'
                        title="JBL Charge 4 Waterproof Wireless Bluetooth Speaker Bundle with Portable Hard Case - Blue"

                              
                        price={118.79}
                        image="https://m.media-amazon.com/images/I/81IoRGCyfgL._AC_UY218_.jpg" 
                        rating={4}
                    />
                     <Product 
                        id='5'
                        title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)"
                        price={299}
                        image="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg" 
                        rating={3}
                    />
                    </div>
                    <div className="home_row">
                    <Product 
                        id='6'
                        title="Samsung Odyssey 49-in Gaming G9 Computer Monitor LC49G97TSSNXDC"
                        price={1099.9}
                        image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY218_.jpg" 
                        rating={5}
                    />
                    </div>
          

                       
     </div>
      </div>
     

    );
}

export default Home;
