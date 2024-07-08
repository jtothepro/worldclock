function updateTimeDate() {
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
}

function selectedCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="align">
          <div>
            <h2>${cityName}</h2>
            <div class="date" id="date">${cityTime.format(
              "MMMM Do, YYYY"
            )}</div>
          </div>
          <div class="time" id="time">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>`;
}

updateTimeDate();
setInterval(updateTimeDate, 1000);

let citySelectElement = document.querySelector("#citySelector");
citySelectElement.addEventListener("change", selectedCity);
