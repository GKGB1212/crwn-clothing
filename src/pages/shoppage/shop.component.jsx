import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


//để ý cái match trong prop nha
const ShopPage = ({match}) => (
    <div className='shop-page'>
        {
          <div className="shop-page">
          <Route exact path={`${match.path}`} component={CollectionOverview}/>
          <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
          </div>
        }
    </div>
)
export default ShopPage;