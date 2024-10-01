import { useSelector } from "react-redux";

function UpBox3(params) {

  /*
    Dar inja baraye inke ma betunim az redux va data darun state estefade komim bayad az 'useSelector' ke male react redux
    estefade konim va dar vorudi tamame data 'store' ke reducer va slice ha dakhelesh hast ro be ma mide va ma dar khoruji
    migim meghdar value oun slice ke mikhaim ro behemun bede.
    intori meghdar value state oun slicer dakhel moteghayer gharar migire va mitunim namayesh bedim
  */

  const counter = useSelector(state => state.counter.value)
  /* 
    console.log(counter);
    '
    counter: {value: 0}
    '
  */


  return (
    <>
      <div style={{backgroundColor:'white', padding:'30px'}}>
        <h3>UpBox3</h3>
        <h1>counter:{counter}</h1>
      </div>
    </>
  );
}

export default UpBox3;