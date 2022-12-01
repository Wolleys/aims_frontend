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
        return total + (item.sp_in_foreign * item.quantity_on_hand);
    }, 0).toFixed(2);
};

export const totalSalesValue = (data) => {
    return data?.reduce((total, item) => {
        return total + (item.sp_in_foreign * item.qty_issued);
    }, 0).toFixed(2);
};

export const totalPurchaseValue = (data) => {
    return data?.reduce((total, item) => {
        return total + (item.bp_in_foreign * item.quantity_received);
    }, 0).toFixed(2);
};

export const totalQtyReceived = (data) => {
    return data?.reduce((total, item) => {
        return total + item.quantity_received;
    }, 0);
}

export const totalQtyIssued = (data) => {
    return data?.reduce((total, item) => {
        return total + item.qty_issued;
    }, 0);
}
