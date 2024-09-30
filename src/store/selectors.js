export const selectorCategoryOne = (state) => {
    return state.categoryOneProducts || [];
};

export const selectorFavorites = (state) => {
    return state.favoritesItems || [];
};
