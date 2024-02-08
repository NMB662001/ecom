import {configureStore} from "@reduxjs/toolkit"
import userslice from "./slices/userslice";
const store=configureStore({
    reducer:{userslice}
})
export default store;