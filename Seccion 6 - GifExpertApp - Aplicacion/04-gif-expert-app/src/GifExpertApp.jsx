import React, { useState } from 'react'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <ol>
                {categories.map(category => {
                    return <li key={category}> {category} </li>;
                })}
            </ol>

            {/* Listado de Gif */}
            {/* Gif Item */}

        </>
    );
};
