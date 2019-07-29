// //
// const mscInDay = 24 * 60 * 60 * 1000;
// console.log(Math.floor(mscInDay));
/// zmienne musza byc w srodku funckji aby byla od nowa wyowlywane !!!!!!!!
function change() {
  console.log("ok");
  const hours = document.querySelector(".hours");
  const days = document.querySelector(".days");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const currentDate = new Date();
  const meetDate = new Date(2018, 11, 22, 18, 30);

  const msDifrence = meetDate.getTime() - currentDate.getTime();

  const dayTo = Math.floor(msDifrence / 24 / 60 / 60 / 1000);
  console.log(dayTo);

  const hoursTO = Math.floor((msDifrence / 60 / 60 / 1000) % 24);
  console.log(hoursTO);

  const minTo = Math.floor((msDifrence / 60 / 1000) % 60);
  console.log(minTo);

  const secTo = Math.floor((msDifrence / 1000) % 60);
  console.log(secTo);
  days.textContent = dayTo;
  hours.textContent = hoursTO;
  minutes.textContent = minTo;
  seconds.textContent = secTo;
  console.log("w");
}
window.setInterval(function() {
  change();
  console.log("ok");
}, 1000);
