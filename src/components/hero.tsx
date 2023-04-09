import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Hero = {
  name: string;
};

export function Hero() {
  const [hero, setHero] = useState({} as Hero);
  const { heroId } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${heroId}`)
      .then((response) => response.json())
      .then((data) => setHero(data));
  }, [setHero, heroId]);

  return (
    <article>
      <h3 className="p-5 text-center text-lg uppercase text-blue-900">
        {hero.name}
      </h3>
      <pre className="p-5 text-sm">{JSON.stringify(hero, null, 2)}</pre>
    </article>
  );
}

export default Hero;
