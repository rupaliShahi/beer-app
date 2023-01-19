import useFetchGet from "../../Helpers/Hooks/HttpRequest";

import BeerList from "./BeerList";

import classes from "./BeerList.module.css";

const Beers = () => {
  const url = "https://api.punkapi.com/v2/beers/";

  let beers = useFetchGet(url);

  const beersList = beers ? beers.map((beer) => {
    return (
      <BeerList
        key={beer.id}
        id={beer.id}
        name={beer.name}
        image_url={beer.image_url}
        tagline={beer.tagline}
      />
    );
  }) : null;

  return (
    <section className={classes.beer}>
      <ul>{beersList}</ul>
    </section>
  );
};

export default Beers;
