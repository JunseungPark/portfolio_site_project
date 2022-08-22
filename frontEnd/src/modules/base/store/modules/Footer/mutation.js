import { FOOTER } from './type';

export const mutations = {
  [FOOTER.SET_NAME](state, value) {
      state.name = value;
  }
}