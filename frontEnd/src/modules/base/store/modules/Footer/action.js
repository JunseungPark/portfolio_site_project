import { FOOTER } from './type';

export const actions = {
  changeName({ commit }, value){
      commit(FOOTER.SET_NAME, value);
  },
}