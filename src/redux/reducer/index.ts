import { SET_CURRENT_ITEM_MENU } from '../actions';

export interface AppState {

    currentItemMenu: string;
    /* totalPages: number;
    fotoLicencia: string | null;
    selectedFilterLicencia: string;
    totalPagesLicencias: number; */
}

export type Action =
  | { type: typeof SET_CURRENT_ITEM_MENU; payload: string };
/* | { type: 'FETCH_SECUESTROS'; payload: any[] }
| { type: 'UPDATE_PAGE'; payload: number }
| { type: 'UPDATE_TOTAL_PAGES'; payload: number }
| { type: 'UPDATE_TOTAL_SECUESTROS'; payload: number }
| { type: 'LIMPIAR_FOTO_LICENCIA' } */

const initialState: AppState = {
    currentItemMenu: 'Control de actas',
    /* vehiculos: [],
    currentPage: 1,
    totalPages: 1,
    fotoLicencia: null,
    selectedFilterLicencia: "todas",
    totalPagesLicencias: 1, */
};

export const reducer = (state = initialState, action: Action): AppState => {
    switch (action.type) {
        case 'SET_CURRENT_ITEM_MENU':
            return { ...state, currentItemMenu: action.payload };
        /* case 'UPDATE_PAGE':
          return { ...state, currentPage: action.payload };
        case 'UPDATE_TOTAL_PAGES':
          return { ...state, totalPages: action.payload };
        case 'UPDATE_TOTAL_SECUESTROS':
          return { ...state, totalPages: action.payload };
        case 'LIMPIAR_FOTO_LICENCIA':
          return { ...state, fotoLicencia: null }; */
        default:
            return state;
    }
};
