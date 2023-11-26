// Popular.jsx
import React from "react";
import './Popular.css';
import { data_product1, data_product2, data_product3, data_product7 } from "../Assets/data.js";
import Item from "../Items/Item";

const Popular = () => {
    return (
        <div className='Popular'>
            <h1>Popular in Women</h1>
            <hr />
            <div className="Popular-item">
                {[data_product1, data_product2, data_product3, data_product7].map((item, i) => (
                    <div key={i} className="product-wrapper">
                        <div className="product-details">
                            <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                                Code={item.Code}  
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popular;
