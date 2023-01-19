import { useReducer } from "react";

import FavContext from "./fav-context";

const defaultFavState = {
    items: []
};

const favReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingFavItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
        const existingFavItem = state.items[existingFavItemIndex];
        let updatedItems;
    
        if (existingFavItem) {
          const updatedItem = {
            ...existingFavItem
          };
          updatedItems = [...state.items];
          updatedItems[existingFavItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }
    
        return {
          items: updatedItems
        };
      }
      if (action.type === 'REMOVE') {
        const existingFavItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingFavItemIndex];
        let updatedItems;
        if (existingItem) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem };
          updatedItems = [...state.items];
          updatedItems[existingFavItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems
        };
      }
    
      return defaultFavState;
}

const FavProvider = props => {
    const [favState, dispatchFavAction] = useReducer(favReducer, defaultFavState);

    const addItemToFavHandler = item => {
        dispatchFavAction({ type: "ADD", item: item });
    };

    const removeItemToFavHandler = id => {
        dispatchFavAction({ type: "REMOVE", id: id });
    };

    const favContext = {
        items: favState.items,
        addItem: addItemToFavHandler,
        removeItem: removeItemToFavHandler
    }
    return <FavContext.Provider value={favContext}>
        {props.children}
    </FavContext.Provider>
}

export default FavProvider;