export const totalBuyingPrice = (data) => {
    return data?.reduce((total, item) => {
        return total + item.bp_in_foreign;
    }, 0);
}

export const totalSelingPrice = (data) => {
    return data?.reduce((total, item) => {
        return total + item.sp_in_foreign;
    }, 0);
}

export const totalStockValue = (data) => {
    return data?.reduce((total, item) => {
        return total + item.sp_in_foreign * item.qty_issued;
    }, 0);
};
