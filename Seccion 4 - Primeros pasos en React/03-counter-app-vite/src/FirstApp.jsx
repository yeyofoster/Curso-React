const getResult = (a, b) => {
    return a + b;
};

export const FirstApp = () => {
    return (
        <>
            <h1>{getResult(5, 10)}</h1>
            <p>Soy un subtitulo</p>
        </>
    )
};