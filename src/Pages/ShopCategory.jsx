import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown.png';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
    const { all_products } = useContext(ShopContext);

    const productCount = Array.isArray(all_products) ? all_products.length : 0;

    return (
        <div>
            {all_products && (
                <div className='Shop-category'>
                    <img src={props.banner} alt="" />
                    <div className='shopcategory-indexSort'>
                        <p>
                            <span>showing 1-{productCount}</span> out of {productCount} products
                        </p>
                    </div>
                    <div className='shopcategory-sort'>
                        Sort by <img src={dropdown} alt="" />
                    </div>
                </div>
            )}
            {all_products && (
                <div className='shopcategory-products'>
                    {all_products.map((item, i) => {
                        if (props.category === item.category) {
                            return (
                                <Item
                                    key={i}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            )}
        </div>
    );
}

export default ShopCategory;

