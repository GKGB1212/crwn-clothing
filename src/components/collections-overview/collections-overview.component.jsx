//trang đầu tiên của router /shop hiển thị tổng quan các sản phẩm
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../preview-collection/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionOverview=({ collections }) => (
    <div className='collections-overview'>
        {
            //mỗi lần map ;à 1 lần duyệt
            collections.map(({ id, ...otherCollectionProps }) => (
               <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
