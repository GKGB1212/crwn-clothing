//Trang này chứa toàn bộ sản phẩm cho từng loại hàng
import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss'

//CÁI CŨ
// const CollectionPage=({match})=>{
//     console.log(match.params.collectionId);
//     return(
//     <div className="collection-page">
//         <h2>CATEGORY</h2>
//     </div>)
// }
  
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item=><CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>)
}

//ownProps là cái props có trong component này
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
