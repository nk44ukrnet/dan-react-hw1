import React from 'react';
import {createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";
import {sendRequest} from "../helpers/sendRequest.js";
import {storageMiddleware} from "./StorageMiddleware.js";


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
        currentModal: false,
    },
    reducers: {
        toggleFavorite: (state, action) => {  // Create reducer here
            const existingIndex = state.favoritesItems.findIndex(item => item.code === action.payload.code);
            if (existingIndex >= 0) {
                // The item is already in favorites. Remove it.
                state.favoritesItems.splice(existingIndex, 1);
            } else {
                // The item is not in favorites. Add it.
                state.favoritesItems.push(action.payload);
            }
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
        },
        clearCurrentProduct: (state) => {
            state.currentProduct = null;
        },
        toggleCurrentModal: (state) => {
            state.currentModal = !state.currentModal;
        },
        toggleCartProduct: (state, action) => {
            const existingIndex = state.cartItems.findIndex(item => item.code === action.payload.code);
            if (existingIndex >= 0) {
                // The item is already in favorites. Remove it.
                state.cartItems.splice(existingIndex, 1);
            } else {
                // The item is not in favorites. Add it.
                state.cartItems.push(action.payload);
            }
        },
        setCurrentProductAndToggleModal: (state, action) => {
            state.currentProduct = action.payload;
            state.currentModal = !state.currentModal;
        },
        clearCurrentProductAndResetModal: (state) => {
            state.currentProduct = null;
            state.currentModal = false;
        },
        emptyCart: (state) => {
            state.cartItems = [];
        }
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


export const {
    toggleFavorite,
    setCurrentProduct,
    clearCurrentProduct,
    toggleCurrentModal,
    toggleCartProduct,
    setCurrentProductAndToggleModal,
    clearCurrentProductAndResetModal,
    emptyCart
} = itemSlice.actions;

const store = configureStore({
    reducer: itemSlice.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
});

export const itemReducer = itemSlice.reducer;
export default store;
