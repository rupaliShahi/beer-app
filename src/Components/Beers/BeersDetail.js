import { useParams } from "react-router-dom";
import useFetchGet from "../../Helpers/Hooks/HttpRequest";

import Card from "./../UI/Card";

import classes from "./BeerList.module.css";

const BeersDetails = () => {
  const { id } = useParams();
  const url = `https://api.punkapi.com/v2/beers/${id}`;

  let selectedBeer = useFetchGet(url);

  return (
    <section className={classes.detailsWrap}>
      {selectedBeer ? (
        selectedBeer.map((beer) => {
          return (
            <Card className={classes.cardWrapper} key={beer.id}>
              <div className={classes.image}>
                <img alt={beer.name} src={beer.image_url} />
              </div>
              <div>
                <h3>{beer.name}</h3>
                <p className={classes.description}>{beer.tagline}</p>
              </div>
            </Card>
          );
        })
      ) : (
        <h3>Beer not found</h3>
      )}
    </section>
  );
};

export default BeersDetails;
