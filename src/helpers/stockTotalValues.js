export const totalBuyingPrice = (data) => {
    return data?.reduce((total, item) => {
        return total + item.bp_in_foreign;
    }, 0).toFixed(2);
}

export const totalSelingPrice = (data) => {
    return data?.reduce((total, item) => {
        return total + item.sp_in_foreign;
    }, 0).toFixed(2);
}

export const totalStockValue = (data) => {
    return data?.reduce((total, item) => {
        return total + (item.sp_in_foreign * (item.qty_issued || item.quantity_on_hand) );
    }, 0).toFixed(2);
};
