import { COUNTER_DECREMENT, COUNTER_DECREMENT1, COUNTER_DIVIDE, COUNTER_INCREMENT, COUNTER_INCREMENT1, COUNTER_MULT } from "./action1";

export const add1 = () => ({type : COUNTER_INCREMENT });
export const sub1 = () => ({type : COUNTER_DECREMENT });
export const add2 = (value) => ({type : COUNTER_INCREMENT1 , payload :value });
export const sub2 = (value) => ({type : COUNTER_DECREMENT1 , payload :value});
export const mult = (value) => ({type : COUNTER_MULT , payload :value});
export const div = (value) => ({type : COUNTER_DIVIDE , payload :value});