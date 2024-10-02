// libraries
import { configureStore } from "@reduxjs/toolkit";

// components
import { counterSlice } from "./counterSlice";

/* 
  baraye inke configuration redux ro besazim bayad ye 'store.jsx' besazim. dar inja miaim ye moteghayer misazim va
  'export' mizarim ta betunim az oun moteghayer dar baghie jahaye porojhe estefade konim va data dakhel moteghayer gharar midim.
  Dar asl moteghayer 'store' mahali baraye negahdari vaziyat barname ast ke tush mituni etefaghati mokhtalef ro dakhelesh negah dari
  va dar tamam porojhe dastresi dare.
*/

export const store = configureStore({
  /* 
    Tamame data va slice hayi ke dar kol porojhe gharare estefade beshe dakhel in moteghayer mizarim.
    'action' mishe oun function ya tabeyi ke baes taghyir vaziat ya moteghayer mored nazar mishe; masalan tu moteghayer 'counter' 'action' mishe
    oun tabeyi ke meghdar 'counter' ro kam ya ziad mikone.
    'Reducer' tabeye khalesi hast ke masule beruzresani vaziyat ya meghdar jadid ro bar asas 'action' va vaziyat feli ya meghdar feli tayin mikonad; be ebarat sade har
    zamani ke yek 'action' dar redux ferestade mishe 'reducer' oun action ro migire va tasmim migire ke vaziat 'state' ya oun slice ro taghyir dahad.
    dar redux be dalil nazm khas bayad baraye har kodum az moteghayer ha ya function haye marbut be oun moteghayer ro
    dakhel 'slice' besazim.
  */
  reducer: {
    /* 
      dar inja ma tamame slicer hayi ke misazim ro gharar midim va age bekhaim dar tamame porojhe estefade konim az esm 'counter'
      estefade mikonim.
    */
    counter: counterSlice.reducer,
  },
});
