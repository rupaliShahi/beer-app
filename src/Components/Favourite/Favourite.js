import { useContext } from "react";
import FavContext from "../../store/fav-context";

import FavouriteItem from "../Favourite/FavouriteItem";
import Modal from "../UI/Modal";
import classes from "./Favourite.module.css";

const Favourite = (props) => {
  const favCtx = useContext(FavContext);

  const favItemRemoveHandler = (id) => {
    favCtx.removeItem(id);
  };

  const favItems =
    favCtx.items.length > 0 ? (
      <ul className={classes['cart-items']}>
        {favCtx.items.map((item, i) => {
          return <FavouriteItem key={item.id} name={item.name} onRemove={favItemRemoveHandler.bind(null, item.id)} />;
        })}
      </ul>
    ) : (
      <div>No Favourite Added.</div>
    );

  return (
    <Modal>
      {favItems}
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Favourite;
