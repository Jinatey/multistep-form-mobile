import { proxy } from "valtio";


export const state = proxy({
    name: "",
    email: "",
    number: "",
    planIndex: null,
    duration: "",
    addons: [false, false, false],
  });
  
