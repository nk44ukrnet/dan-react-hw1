import {
    toggleFavorite,
    setCurrentProduct,
    clearCurrentProduct,
    toggleCurrentModal,
    toggleCartProduct,
    setCurrentProductAndToggleModal,
    clearCurrentProductAndResetModal,
    emptyCart,
    fetchProducts,
    itemReducer
} from './index.js';

describe('Initial testing', () => {

    it('toggle favorites', () => {
        const initialState = {
            favoritesItems: [{'code': '321'}]
        }
        const state = itemReducer(initialState, toggleFavorite({code: '123'}));
        expect(state.favoritesItems).toHaveLength(2);
        expect(state.favoritesItems[1].code).toBe('123');
        const stateToggle = itemReducer(initialState, toggleFavorite({code: '321'}));
        expect(stateToggle.favoritesItems).toHaveLength(0);
    })

    it('set current product test', () => {
        const initialState = {
            currentProduct: null,
        }
        const state = itemReducer(initialState, setCurrentProduct({name: 'Test Product'}));
        expect(state.currentProduct).toEqual({name: 'Test Product'});
    })

    it('clearCurrentProduct test', ()=>{
        const initialState = {
            currentProduct: {name: 'Test Product'},
        }
        const state = itemReducer(initialState, clearCurrentProduct());
        expect(state.currentProduct).toBeNull();
    })

    it('toggleCurrentModal test', ()=>{
        const initialState = {
            currentModal: false,
        }
        const state = itemReducer(initialState, toggleCurrentModal())
        expect(state.currentModal).toBe(true);
    })

    it('toggleCartProduct test', ()=>{
        const initialState = {
            cartItems: [{'code': '321'}]
        }
        const state = itemReducer(initialState, toggleCartProduct({code: '123'}));
        expect(state.cartItems).toHaveLength(2);
        expect(state.cartItems[1].code).toBe('123');
        const stateToggle = itemReducer(initialState, toggleCartProduct({code: '321'}));
        expect(stateToggle.cartItems).toHaveLength(0);
    })

    it('setCurrentProductAndToggleModal test', ()=>{
        const initialState = {
            currentProduct: null,
            currentModal: false,
        }
        const state = itemReducer(initialState, setCurrentProductAndToggleModal({name: 'Test Product'}));
        expect(state.currentProduct).toEqual({name: 'Test Product'});
        expect(state.currentModal).toBe(true);
    })

    it('clearCurrentProductAndResetModal test', ()=>{
        const initialState = {
            currentProduct: {name: 'Test Product'},
            currentModal: true,
        }
        const state = itemReducer(initialState, clearCurrentProductAndResetModal());
        expect(state.currentProduct).toBeNull();
        expect(state.currentModal).toBe(false);
    })

    it('emptyCart test', ()=>{
        const initialState = {
            cartItems: [{'code': '321'}]
        }
        const state = itemReducer(initialState, emptyCart());
        expect(state.cartItems).toHaveLength(0);
    })
});