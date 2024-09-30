import UpBox2 from "./UpBox2";


function UpBox1(params) {
  /* 
    We make the three UpBox components nested to show we can use redux in all components.
    Then we make the three DownBox components nested to show we can actually use one redux slice in hole project And if we change
    it in the one component it will effect in others too.
  */

  return (
    <>
      <div style={{backgroundColor:'blue', padding:'30px'}}>
        <h3>UpBox1</h3>
        <UpBox2 />
      </div>
    </>
  );
}

export default UpBox1;