import {createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";
import {sendRequest} from "../helpers/sendRequest.js";

export const fetchProducts = createAsyncThunk('items/fetchProducts', async () => {
    const response = await sendRequest('./public/products.json');
    return response;
});

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        products: [],
        categoryOneProducts: [],
        categoryTwoProducts: null,
        categorySaleProducts: null,
        favoritesItems: JSON.parse(localStorage.getItem("favoritesItems")) || [],
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
        currentProduct: null,
        modalCart: false,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        addCart: (state, action) => {
            state.cart.push(action.payload);
        },
        // ... define other actions here ...
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.categoryOneProducts = action.payload.filter(product => product.gender.includes('male')).slice(0, 8);
            state.categoryTwoProducts = action.payload.filter(product => product.gender.includes('female')).slice(0, 4);
            state.categorySaleProducts = action.payload.filter(product => product.sale === true).slice(0, 4);
        });
    }
});



export const {addProduct, addFavorite, addCart} = itemSlice.actions;

const store = configureStore({
    reducer: itemSlice.reducer,
});

export default store;