import { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const LSKey = "ItemsInCart";
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getDataFromLS());
    }, [])

    function writeFavsToLocalStorage(state) {
        localStorage.setItem(LSKey, JSON.stringify(state));
    }
    function readFavsFromLocalStorage() {
        return JSON.parse(localStorage.getItem(LSKey));
    }
    function getDataFromLS() {
        if (readFavsFromLocalStorage()) {
            return readFavsFromLocalStorage();
        } else {
            return cart;
        }
    }
    const addItem = (item) => {
        setCart([...cart, item])
        writeFavsToLocalStorage([...cart, item])
    };


    const removeItem = (item) => {
        const remainingItems = cart.filter((i) => i.id !== item.id)
        setCart(remainingItems);
        writeFavsToLocalStorage(remainingItems)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}