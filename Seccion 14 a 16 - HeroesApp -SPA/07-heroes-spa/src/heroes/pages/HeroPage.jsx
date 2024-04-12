import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { HeroCard } from "../components";

export const HeroPage = () => {
    const { heroId } = useParams();
    const hero = getHeroById(heroId);

    if (!hero) {
        return <Navigate to='/' />
    }

    return (
        <HeroCard {...hero} />
    );
};