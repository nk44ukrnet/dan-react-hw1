export const storageMiddleware = store => next => action => {
    let result = next(action);
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cartItems));
    localStorage.setItem('favoritesItems', JSON.stringify(store.getState().favoritesItems));
    return result;
};