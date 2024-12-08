import React, { useState, useMemo, useEffect, createContext, useReducer } from "react";
import Item from "./Item";
import Category from "./Category";

export const AppContext = createContext(null);

export default function ItemList() {

    const [itemListValue, setItemListValue] = useState([])

    //[] returns the state
    //{}
    const reducer = (state, action) => {

        switch (action.type) {
            case "ADDFAVORITE":
                return {
                    ...state,
                    filteredItems: state.filteredItems.map((item) => (
                        item.name === action.payload.name ? { ...item, favorite: !item.favorite } : item
                    )),
                    originalItems: state.originalItems.map((item) => (
                        item.name === action.payload.name ? { ...item, favorite: !item.favorite } : item
                    )),
                }
                // return state.filteredItems.map((item) => (
                //     item.name === action.payload.name ? { ...item, favorite: !item.favorite } : item
                // ))
            case "MALEFILTER":
                //return [...state.filter((item) => item.gender === 'Male')]
                return {
                    ...state,
                    filteredItems: state.originalItems.filter((item) => item.gender === "Male")
                };


            case "FEMALEFILTER":
                return {
                    ...state,
                    filteredItems: state.originalItems.filter((items) =>(items.gender==='Female'))
                }


            default:
                return {...state,
                    filteredItems: state.originalItems}
        }

    }

    const getItemValue = () => {
       const originalItems = [
            { src: '/img/blackwhitetop.jpg', name: 'BlueJacket', favorite: false, gender: 'Male' },
            { src: '/img/bluebag.jpg', name: 'BlueBag', favorite: false },
            { src: '/img/menscottonjacket.jpg', name: 'WeddingRing', favorite: false, gender: 'Male' },
            { src: '/img/womensblackjacket.jpg', name: 'WomenJacket', favorite: false, gender: 'Female' }
        ]
        return {
            originalItems,
            filteredItems: originalItems 
        };
    };


    const getMemoValue = useMemo(getItemValue, [itemListValue]);

    const [state, dispatch] = useReducer(reducer, getMemoValue)



    // const getItemValue = () =>{
    //     const myMap = new Map();
    //     myMap.set('/img/blackwhitetop.jpg', 'BlueJacket');
    //     myMap.set('/img/bluebag.jpg', 'Blue Bag');
    //     myMap.set('/img/menscottonjacket.jpg', 'Wedding Ring');
    //     myMap.set('/img/womensblackjacket.jpg', 'BlueJacket');
    //     return Array.from(myMap);
    // }




    useEffect(() => {
        setItemListValue(getMemoValue);
    }, [])






    return (
        <div>
            <AppContext.Provider value={{ itemListValue, setItemListValue, state, dispatch }}>
                <Category></Category>
                <Item ></Item>
            </AppContext.Provider>

        </div>
    )

}