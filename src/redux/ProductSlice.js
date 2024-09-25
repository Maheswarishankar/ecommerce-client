import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
            state.filteredItems = action.payload
        },
        filterByCategory: (state, action) => {
            const category = action.payload;
            state.filteredItems = category ? state.items.filter((product) => product.category === category) : state.items
        },
        searchProducts: (state, action) => {
            const query = action.payload.toLowerCase();
            state.filteredItems = state.items.filter((product) => product.name.toLowerCase().includes(query))
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    }
});

export const { setProducts, filterByCategory, searchProducts, setLoading, setError } = productSlice.actions;

export default productSlice.reducer;
