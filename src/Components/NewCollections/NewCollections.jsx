
import React from "react";
import './NewCollections.css';
import { new_collection_new1, new_collection_new2, new_collection_new4,new_collection_new5,new_collection_new10,new_collection_new6, new_collection_new11, new_collection_new8} from '../Assets/new_collections';
import Item from '../Items/Item';

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr/>
            <div className="collections">
                {[new_collection_new1, new_collection_new2, new_collection_new4,new_collection_new5,new_collection_new10,new_collection_new6,new_collection_new11,new_collection_new8].map((item, i) => (
                        <div key={1} className="collections-details">
                            <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                                Code={item.Code}  
                            />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
