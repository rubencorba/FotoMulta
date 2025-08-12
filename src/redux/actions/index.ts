export const SET_CURRENT_ITEM_MENU = 'SET_CURRENT_ITEM_MENU';

export const setCurrentItemMenu = (id: string) => ({
  type: SET_CURRENT_ITEM_MENU,
  payload: id,
});
