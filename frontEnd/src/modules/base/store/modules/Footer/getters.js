export const getters = {
  personInfo: (state) => {
      return `이름 : ${state.name}, 나이 : ${state.age}`;
  }
}