const initialState={
    addedItems:[
    ],
    itemCounter:0,
    checkout:false,
    Province:"",
}
const cartReducer=(state= initialState , action)=>{

    switch(action.type){
        case "AddToCart":
            if(!state.addedItems.find(item => item.id=== action.paylod.id)){
                state.addedItems.push({
                    ...action.paylod,
                    quntity:1,
                })
            }
            return { ...state , addedItems: [ ...state.addedItems] , itemCounter: state.itemCounter + 1 }
        case "removeItem":
            const newAddedItem=state.addedItems.filter(item => item.id !== action.paylod.id )
            return {...state , addedItems:[...newAddedItem], itemCounter: state.itemCounter - 1}
        case "AddOne":
            const indexAdd=state.addedItems.findIndex(item => item.id === action.paylod.id)
            state.addedItems[indexAdd].quntity++;
            return { ...state , itemCounter: state.itemCounter + 1}
        case "OddOne":
            const Indexodd=state.addedItems.findIndex(item => item.id === action.paylod.id)
            state.addedItems[Indexodd].quntity--;
            return { ...state , itemCounter: state.itemCounter - 1}
        case "removeItemFromCart":
            const newAddedItem2=state.addedItems.filter(item => item.id !== action.paylod.id )
            return {...state , addedItems:[...newAddedItem2], itemCounter: state.itemCounter - action.paylod.quntity}
        case "clearCart":
            return {...state , addedItems:[], itemCounter: 0}
        case "checkout":
            return {...state , checkout: true }
        case "RefalseCheckout":
            return {...state , checkout: false , addedItems:[], itemCounter: 0}
        case "Tehran":
            return {...state , Province:"Tehran"}
        case "Zagros":
            return {...state , Province:"Zagros"}
        case "Fars":
            return {...state , Province:"Fars"}
        default:
            return state;  
    }
}

export default cartReducer;