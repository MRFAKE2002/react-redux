// libraries
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "roozbeh",
    children: ["ali", "abas"],
  },
  reducers: {
    /*
      dar inja ma mikhaim ba estefade az 'action' zir ma mitunim har chand ta esm ke mikhaim be surat 'payload' be list 'children'
      ezafe konim.
    */

    childAction: (state, action) => {
      // mikhaim ba estefade az shart 3 tayi ya 'ternary operator' begam age 'payload' az ghabl dakhel list 'children' bud dige ezafe nakon

      if (state.children.includes(...action.payload)) {
        state.children = [...state.children];
        alert("این مقدار اکنون در لیست قرار دارد.");
      } else {
        /* 
          dar inja ba gereftan data az vorudi 'state' mitunim be list 'children' dast yabim. hala ye list jadid misazim va ba estefade
          az 'spread operator' va maghadir data dakhel object ya list 'children' ro dakhel list jadid mirize va dar akhar meghdar 
          vorudi 'payload' ro az list dar miare ezafe mikone be list jadid.
        */
        state.children = [...state.children, ...action.payload];
        alert("مقدار با موفقیت اضافه شد.");
      }
    },
  },
});

export const { childAction } = userSlice.actions;

export default userSlice.reducer