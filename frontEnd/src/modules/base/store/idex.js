import { createStore } from "vuex";
import { Footer } from "@/store/modules/Footer";
import { Header } from "@/store/modules/Header";

export default createStore({
  modules: { Header, Footer }
});