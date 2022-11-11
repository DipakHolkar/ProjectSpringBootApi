import reducer from "./reducer";
import {configureStore} from "redux";
const initialSt ={loggedin:false};

const mystore=configureStore(reducer,initialSt)
