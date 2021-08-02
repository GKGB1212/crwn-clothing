const INIT_STATE={
    sections : [{
        title: 'hats',
        imageUrl: 'https://a.ipricegroup.com/media/Mai_Nguyen/m___l_____i_trai_nike.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://media.gq.com/photos/5dd8065b545c2100095a28ea/master/w_1600%2Cc_limit/01-Nike-MMW-Series-003-sneakers-gq-november-2019.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://static.nike.com/a/images/f_auto/dpr_1.6/w_1105,c_limit/858d69b9-2fe7-49f5-8dc3-83e834f8b9f2/nike-just-do-it.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://static.nike.com/a/images/f_auto/dpr_1.6/w_1105,c_limit/b0ccf42d-746b-4193-a337-1075829af70a/women-s-shoes-clothing-accessories.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://static.nike.com/a/images/f_auto/dpr_1.6/w_1105,c_limit/758bac29-3e4e-47d5-8588-d322e3ba4fa0/nike-just-do-it.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
};

const directoryReducer=(state=INIT_STATE, action)=>{
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;