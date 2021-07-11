import React from 'react';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        return(<div className='shop-page'>
            {
                this.state.collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
        )
    }
}

export default ShopPage;