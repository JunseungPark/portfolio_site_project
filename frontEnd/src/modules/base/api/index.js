import axios, { AxiosRequestConfig } from "axios";

export default class mainService {
  // 인스턴스 생성 및 정의
  constructor() {
    let axiosInstance = axios.create({
      baseURL: `http://localhost:42088/api`
    })
  }

  // axiosCall에 대한 결과값
  async axiosCall(AxiosRequestConfig) {
    try {
      const { data } = await this.axiosInstance.request(config);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  // api 호출 함수정의 config
  // 카트리스트
  async getCart(userId: string) {
    return this.axiosCall<upso.CartListResponse>({ method: "get", url:`/Cart/GetCart?userId=${userId}&currentPage=1&countPerPage=10`});
  }
  // 카트추가
  async addCart(cartRequest: upso.CartRequest) {
    return this.axiosCall<any>({ method: "post", url:`/Cart/AddCart`, data: cartRequest });
  }
  // 카트수정
  async modifyCart(cartModifyRequest: upso.CartModifyRequest) {
    return this.axiosCall<any>({ method: "put", url:`/Cart/ModifyCart`, data: cartModifyRequest });
  }
  // 카트삭제
  async deleteCart(deleteCartRequest: upso.CartDeleteRequest) {
    return this.axiosCall<any>({ method: "delete", url:`/Cart/DeleteCartItem`, data: deleteCartRequest })
  }
  // 오더히스토리 추가
  async setOrderHistory(orderRequest: upso.OrderRequest) {
    return this.axiosCall<any>({ method: "post", url:`/Order/AddOrder`, data: orderRequest})
  }
  // 오더히스토리 가져오기
  async getOrderHistory(userId: string, currentPage: number, countPerPage: number) {
    return this.axiosCall<upso.OrderHistoryResponse>({ method: "get", url:`/Order/GetOrderList?userId=${userId}&currentPage=${currentPage}&countPerPage=${countPerPage}`})
  }
}

export const upsoAPI = new UpsoAPIService();