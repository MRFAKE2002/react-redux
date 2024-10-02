// libraries
import { useDispatch, useSelector } from "react-redux";

// redux slice
import { counterSlice, increment, incrementByAmount } from "../../app/counterSlice";
import { childAction, userSlice } from "../../app/userSlice";

function UpBox3(params) {
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

  // in moteghayer daraye list 'children' ke marbut be userSlice ast
  const userChildren = useSelector((state) => state.user.children);

  // az 'dispatch' baraye seda zadan oun 'action' ke male ye slice khas az store redux hast estefade mikonim.
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ backgroundColor: "white", padding: "30px" }}>
        <h3>UpBox3</h3>

        {/* 
          ma ye dokme mizarim migim zamani ke rush click shod bia ba estefade az 'dispatch' oun 'action' ke mikhaim ro seda bezan.
        */}
        <button onClick={() => dispatch(increment())}>
          increment
        </button>

        <br />

        <button
          onClick={() => dispatch(incrementByAmount(5))}
        >
          increment by amount
        </button>

        <br />

        <button onClick={() => dispatch(childAction(["mamad", "amir"]))}>
          children
        </button>

        {userChildren.map((child, index) => (
          <h3 key={index}>{child}</h3>
        ))}

        <h1>counter:{counter}</h1>
      </div>
    </>
  );
}

export default UpBox3;
