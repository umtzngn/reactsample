export const ADD_TO_CARD = "ADD_TO_CARD"
export const REMOVE_FROM_CARD = "REMOVE_FROM_CARD"

export function addToCard(product) {
    return{
        type : ADD_TO_CARD,
        payload : product
    }
}

export function removeFromCard(product) {
    return{
        type : REMOVE_FROM_CARD,
        payload : product
    }
}