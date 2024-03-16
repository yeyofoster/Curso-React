import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory))
            return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

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