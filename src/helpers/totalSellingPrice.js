export function totalSelingPrice(details) {
    const qty = details.map((item) => item.qty_issued);
    const value = details.map((item) => item.usp_usd);
    var purchaseValue = 0;

    for (var i = 0; i < qty.length; i++) {
        purchaseValue += qty[i] * value[i];
    }
    return purchaseValue.toFixed(2);
}
