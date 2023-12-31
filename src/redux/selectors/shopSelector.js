import { createSelector } from '@reduxjs/toolkit';
export const listShopSelector = state => state.listShop.data;
export const shopSelectStatus = state => state.listShop.status;

export const selectShops = createSelector(
    listShopSelector,
    (shops) => {
        return shops;
    },
);