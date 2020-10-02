export const immutableObject = (oldObject, newPropety) => {
    return{
        ...oldObject,
        ...newPropety
    }
}