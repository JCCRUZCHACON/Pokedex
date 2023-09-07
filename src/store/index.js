import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/trainer.slice";

export default configureStore({
    //sirve para englobar todos los estados globales reducer
    reducer: {
        trainer: trainerSlice
    }
})