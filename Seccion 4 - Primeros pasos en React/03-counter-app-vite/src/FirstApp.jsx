export const FirstApp = ({
    title = 'Titulo por default',
    subTitle = 'Soy un subtitulo'
}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    );
};