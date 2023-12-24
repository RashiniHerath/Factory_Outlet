import React,{createContext} from "react";
import { all_product_img1, all_product_img2, all_product_img3, all_product_img4,all_product_img5,all_product_img6,all_product_img7,all_product_img8} from "../Components/Assets/all_product";


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = {
    all_product: {
      all_product_img1,
      all_product_img2,
      all_product_img3,
      all_product_img4,
      all_product_img5,
      all_product_img6,
      all_product_img7,
      all_product_img8,
    },
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;