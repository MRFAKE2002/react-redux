// libraries
import { createSlice } from "@reduxjs/toolkit";

/*
  Dar redux baraye har kodum az mozuat ya moteghayer hayi ke mikhaim dar tamame porojhe estefade konim bayad 'slice'
  besazim; har slice yek moteghyer dare ke 3 argoman migire:
  1- avali 'name' ke esm slice ro dakhelesh mizarim.
  2- dovomi 'initialState' ke meghdar avalie ro migire.
  3- sevomi 'reducers' ke har chandta 'action' ya hamun tavabeyi ke baes taghyir mizan state mishan ro dakhelesh mizarim.
*/

export const counterSlicer = createSlice({
  name: "counter",
  initialState: {
    // yek argoman value migire ke meghdar avalie darunesh gharar midim.
    value: 0,
  },
  reducers: {
    /*
      alan avalin 'action' khodemun ro misazim ke mikhad meghdar state ro afzayesh bede.
      dar vorudi yek 'state' migire ke akharin vaziat ya meghdar 'value' moteghayer 'counterSlicer' ro migire.
      be shekl arrow function minevisim va dar khoruji meghdar jadid 'value' state ro bar migardune.
    */
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
