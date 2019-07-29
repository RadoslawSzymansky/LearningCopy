const ele = (
  <div>
    <p className="ok"> 'jedziemy z koksem' </p>
  </div>
);
const ok = (
  <section
    onClick={function() {
      alert("ok");
    }}
  >
    <p className="ck">ok ok sec</p>
  </section>
);
const arr = [ele, ok];

ReactDOM.render(arr, document.getElementById("root"));
React;
