
import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown.png';
import Item from '../Components/Items/Item';
import {
  all_product_img1,
  all_product_img2,
  all_product_img3,
  all_product_img4,
  all_product_img5,
  all_product_img6,
  all_product_img7,
  all_product_img8
} from '../Components/Assets/all_product'; 
const productData = [
  all_product_img1,
  all_product_img2,
  all_product_img3,
  all_product_img4,
  all_product_img5,
  all_product_img6,
  all_product_img7,
  all_product_img8
];

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexshort">
        <p>
          <span>Showing 1-8</span> out of 20 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_products && all_products.map((item, i) => {
          if (props.category === item.category) {
            const productDetails = productData.find(product => product.id === item.id);

            return (
              <Item
                key={i}
                id={item.id}
                name={productDetails.name}
                image={productDetails.image}
                new_price={productDetails.new_price}
                old_price={productDetails.old_price}
              
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
