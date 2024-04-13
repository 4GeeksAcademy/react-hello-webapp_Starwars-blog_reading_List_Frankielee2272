import { FaVoicemail } from "react-icons/fa";
import { FaV } from "react-icons/fa6";

const getState = ({ getStore, setStore }) => {
    return {
        store: {
            // ... existing store properties
            Favorites: []
        },
        actions: {
            // ... existing actions
            addFavorites: (name) => {
                const store = getStore();
                const newFavorites = [...store.Favorites, name];
                setStore({ Favorites: newFavorites });
            },
            deleteFavorites: (itemName) => {
                const store = getStore();
                const newFavorites = store.Favorites.filter((favorite) => favorite !== itemName);
                setStore({ Favorites: newFavorites });
            }
            // ... any other actions
        }
    };
};

export default getState;
