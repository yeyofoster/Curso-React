import React, { useState } from 'react'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Yeyo Foster']);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

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
