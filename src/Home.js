import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote10S/Teaser/Set2/D23007216_WLD_Xiaomi_RedmiNote10S_NewLaunch_tallhero_1500x600._CB669093425_.jpg" 
                alt=""/>

            <div className="home_row">
                <Product 
                    id="5465111"
                    title="Acer Aspire 3 Intel Core i3-10th Gen 15.6 - inch (39.62 cms) 1920 x 1080 Thin and Light Laptop"
                    price={31450}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81YUWJOwMDL._AC_SX522_.jpg"
                />

                <Product 
                    id="5465466"
                    title="Samsung 198 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2WCB/HL, Camellia Black, Base Stand with Drawer)"
                    price={17190}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71OBdqqSxCL._AC_SY741_.jpg"
                />

                <Product 
                    id="5465565"
                    title="Amazon Brand - Solimo XXXL Bean Bag Cover Without Beans (Brown and Tan)"
                    price={759}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71xtsh5feXL._AC_SX522_.jpg"
                />

            </div>

            <div className="home_row">
                <Product 
                    id="5465122"
                    title="Bosch GDC 121 Marble Cutter 5 Inch GDC 121"
                    price={3614}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bM%2BWSv5YL._SX522_.jpg"
                />

                <Product 
                    id="5465446"
                    title="Hershey's Spreads Cocoa with Almond, 350g"
                    price={245}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61W35Bc5IUL._AC_SX679_.jpg"
                />

                <Product 
                    id="5435565"
                    title="Samsung Galaxy Watch (Bluetooth + LTE, 46 mm) - Silver"
                    price={759}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71oNPZKNTfL._AC_SL1500_.jpg"
                />

                <Product 
                    id="5465765"
                    title="MeRaYo Metal Mesh Pen and Pencil Stationary Storage Tidy Desk Organizer Box"
                    price={749}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51dT1m433vL._AC_.jpg"
                />

            </div>

            <div className="home_row">
                <Product 
                    id="5465122"
                    title="Fogg Xtremo Scent For Men, 100ml"
                    price={290}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61u-MgTAjpL._AC_SL1500_.jpg"
                />

                <Product 
                    id="5865446"
                    title="Nurturing Green Lucky Bamboo (Small:2 Layer Bamboo,Glass Pot)"
                    price={349}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61DR0LUIaqL._AC_SL1500_.jpg"
                />

                <Product 
                    id="5445565"
                    title="Gala e-Quick Spin Mop with Easy Wheels and Bucket with Free Refill"
                    price={1623}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61TtV638UAL._AC_SL1273_.jpg"
                />

                <Product 
                    id="5466765"
                    title="Sasimo 3 Tier Mesh Metal Desk Organizer File Rack Letter Tray"
                    price={699}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51FXKnxaeSL._AC_.jpg"
                />

            </div>
            
        </div>
    )
}

export default Home;
