import React, { useContext } from 'react'
import '../css/Category.css'
import { AppContext } from './ItemList';

export default function Category() {

    const { state, dispatch } = useContext(AppContext)

    const loadForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className='button'>

            <form onSubmit={loadForm}>
                <button onClick={() => {dispatch({type:''})}}>Electronics</button>
                <button>Jewelery</button>
                <button onClick={() => { dispatch({ type: 'MALEFILTER' }) }}
                >Men's Clothing</button>
                <button onClick={() => {dispatch({type: 'FEMALEFILTER'})}}>Women's Clothing</button>
            </form>
        </div>
    )
}
