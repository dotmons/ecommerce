import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from './ItemList'
import '../css/Item.css'
import '../css/Favorite.css'

export default function Item() {

    const { state, dispatch } = useContext(AppContext)


    useEffect(() => {

        if (state.filteredItems.length > 0) {
            state.filteredItems.forEach(item => {
            //console.log('State result: ' + item.src, item.name, item.favorite, item.gender);
            });
        }
        console.log('Size: ' + state.filteredItems.length);


    }, [state.filteredItems])

    const updateFavorite = (data) => {
        let value = { name: data };
        if (state.filteredItems.length > 0) {
            console.log('Value: ' + value.name);
            dispatch({ type: 'ADDFAVORITE', payload: { name: value.name } })
        }

    }

    return (


        // <div>
        //     <h2>Item List</h2>
        //     {itemListValue.length > 0 ? (
        //         itemListValue.map(([image, description], index) => (
        //             <span key={index}>
        //                 <img src={image} alt={image} style={{ width: '100px', height: '100px' }} />
        //                 <p>{description}</p>
        //             </span>
        //         ))
        //     ) : (
        //         <p>Loading items...</p>
        //     )}
        // </div>


        <div className='ecommerce-grid'>
            {
                    state.filteredItems.map(item => (
                        <div key={item.name}>
                            <img src={item.src} alt={item.name} ></img>
                            <p>{item.name}</p>
                            
                            <button className={item.favorite ? "favorite-button favorited" : "favorite-button"} aria-label="Toggle favorite" onClick={() => { updateFavorite(item.name) }}>
                                ★
                            </button>
                        </div>
                    ))
                
                // itemListValue.map(([src, name], index) => (
                //     <div key={name}>
                //         <img src={src} alt={name} ></img>
                //         <p>{name}</p>
                //     </div>
                // ))
            }

        </div>
    )
}
