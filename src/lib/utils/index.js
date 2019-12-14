export const updateItem = (item, state) => {
  //...
  return state;
};
export const deleteItem = (item, state) => {
  //...
  return state;
};
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
