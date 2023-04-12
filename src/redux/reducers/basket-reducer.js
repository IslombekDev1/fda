const initialState = {
    purchasedProducts: []
}

const basketReduser = (state = initialState, action) => {

    switch(action.type){
        case "BASKET_PRODUCT":
            return{
                purchasedProducts: [...state.purchasedProducts, action]
            }
        default:
            return state
    }
}

export default basketReduser;