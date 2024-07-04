//Stuttgart
let stuttgartElement = document.querySelector("#stuttgart");
let stuttgartDateElement = stuttgartElement.querySelector(".date");
let stuttgartTimeElement = stuttgartElement.querySelector(".time");
let stuttgartTime = moment().tz("Europe/Berlin");
stuttgartDateElement.innerHTML = stuttgartTime.format("MMMM Do, YYYY");
stuttgartTimeElement.innerHTML = stuttgartTime.format(
  "hh:mm:ss [<small>]A[</small>]"
);
//London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
londonTimeElement.innerHTML = londonTime.format(
  "hh:mm:ss [<small>]A[</small>]"
);
