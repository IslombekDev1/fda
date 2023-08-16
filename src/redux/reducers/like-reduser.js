const initialState = {
  likedProducts: []
}

//                                         dispatch qilinayotgan ma'lumot
const likedReduser =(state = initialState, action) => {

  switch(action.type){
    case "LIKE_PRODUCT":
      return {
        likedProducts: [...state.likedProducts, action.product]
      }
    case "REMOVE_FROM_LIKED":
      let removedProductIndex = state.likedProducts.findIndex(f => f?.id === action?.id)
      console.log(removedProductIndex);
      state.likedProducts.splice(removedProductIndex, 1)
      return {
        likedProducts: [...state.likedProducts]
      }
    case "REMOVE_FROM_LIKE":
      let searchItemIndexRemove = state.likedProducts.findIndex(f => f.id ===action.id)
      console.log(searchItemIndexRemove);
      state.likedProducts.splice(searchItemIndexRemove, 1);
      return {
        likedProducts: [...state.likedProducts]
      }
    default:
      return state
  }
}

export default likedReduser;