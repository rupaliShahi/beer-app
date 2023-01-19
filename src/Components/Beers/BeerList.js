import { useContext } from "react";

import { Link } from "react-router-dom";

import Card from "./../UI/Card";

import classes from "./BeerList.module.css";

import FavContext from "../../store/fav-context";

const BeerList = (props) => {
  const favCtx = useContext(FavContext);

  const addToFavHandler = () => {
    favCtx.addItem({
      id: props.id,
      name: props.name,
    });
  };

  return (
    <li key={props.id}>
      <Card className={classes.cardWrapper}>
        <Link to={`/beers/${props.id}`}>
          <div className={classes.image}>
            <img alt={props.name} src={props.image_url} />
          </div>
        </Link>
        <div>
          <h3>{props.name}</h3>
          <p className={classes.description}>{props.tagline}</p>
          <button onClick={addToFavHandler}>Add to Favourites</button>
        </div>
      </Card>
    </li>
  );
};

export default BeerList;
