import DownBox2 from "./DownBox2";

function DownBox1(params) {
  return (
    <>
      <div style={{backgroundColor:'red', padding:'30px'}}>
        <h3>DownBox1</h3>
        <DownBox2 />
      </div>
    </>
  );
}

export default DownBox1;