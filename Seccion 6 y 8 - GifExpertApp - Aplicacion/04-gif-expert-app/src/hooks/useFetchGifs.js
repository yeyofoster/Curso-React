import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setTimeout(() => {
            setImages(newImages);
            setIsLoading(false);
        }, 1000);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    };
};