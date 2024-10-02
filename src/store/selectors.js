export const selectorCategoryOne = (state) =>  state?.categoryOneProducts || [];
export const selectorCategoryTwo = (state) =>  state?.categoryTwoProducts || [];
export const selectorCategorySale = (state) =>  state?.categorySaleProducts || [];
export const selectorFavorites = (state) => state?.favoritesItems || [];
export const selectorCart = (state) => state?.cartItems || [];
export const selectorCurrentModal = (state) => state?.currentModal || false;
export const selectorCurrentProduct = (state) => state?.currentProduct || null;