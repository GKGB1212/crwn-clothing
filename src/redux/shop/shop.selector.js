import { createSelector } from "reselect";

//TẠO 1 VÙNG CHỨA CÁC GIÁ TRỊ ID CỦA CÁC LOẠI SẢN PHẨM

const selectShop=state=>state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections
)

//đổi object selectCollection thành 1 mảng
export const selectCollectionForPreview=createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key=> collections[key])
)

//lấy toàn bộ sản phẩm của 1 loại mặt hàng (mũ, áo, ...):
//collectionUrlParam là cái path truyền vào vd shop/hats thì collectionUrlParam=hats
export const selectCollection= (collectionUrlParam)=>
    createSelector([selectCollections],
        collections => collections[collectionUrlParam])