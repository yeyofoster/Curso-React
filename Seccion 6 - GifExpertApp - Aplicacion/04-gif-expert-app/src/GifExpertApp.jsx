import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Yeyo Foster']);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            <AddCategory setCategories={setCategories} />

            <button onClick={onAddCategory}>Agregar</button>
            {/* Input */}
            <ol>
                {
                    categories.map(category =>
                        <li key={category}> {category} </li>
                    )
                }
            </ol>

            {/* Listado de Gif */}
            {/* Gif Item */}

        </>
    );
};
