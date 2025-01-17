// libraries
import { useDispatch, useSelector } from "react-redux";

// redux slice
import { counterSlice, decrement } from "../../app/counterSlice";

function DownBox3(params) {
  /*
    Dar inja baraye inke ma betunim az redux va data darun state estefade komim bayad az 'useSelector' ke male react redux
    estefade konim va dar vorudi tamame data 'store' ke reducer va slice ha dakhelesh hast ro be ma mide va ma dar khoruji
    migim meghdar value oun slice ke mikhaim ro behemun bede.
    intori meghdar value state oun slicer dakhel moteghayer gharar migire va mitunim namayesh bedim
  */
  const counter = useSelector((state) => state.counter.value);
  /* 
      console.log(counter);
      '
      counter: {value: 0}
      '
    */

  // az 'dispatch' baraye seda zadan oun 'action' ke male ye slice khas az store redux hast estefade mikonim.
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ backgroundColor: "white", padding: "30px" }}>
        <h3>DownBox3</h3>

        {/* 
          ma ye dokme mizarim migim zamani ke rush click shod bia ba estefade az 'dispatch' oun 'action' ke mikhaim ro seda bezan.
        */}
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>

        <br />

        <h1>counter:{counter}</h1>
      </div>
    </>
  );
}

export default DownBox3;
