import classes from "./Favourite.module.css";

const Favourite = (props) => {
  return (
    <li className={classes['fav-items']}>
        <div>
            <h2>{props.name}</h2>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onRemove}>-</button>
        </div>
    </li>
  );
};

export default Favourite;
