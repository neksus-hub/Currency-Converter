"use strcit";

const getData = () => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "JZmCaHwsuuLzCBq3vcis1ZqssiWpuqU6");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    "https://api.apilayer.com/exchangerates_data/latest?symbols=RUB&base=USD",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      dollarsToRubles(result.rates.RUB);
      rublesToDollars(result.rates.RUB);
    })
    .catch((error) => console.log("error", error));
};

const dollarsToRubles = (dollars) => {
  const dollarInputFirst = document.querySelector(".dollar-input-first");
  const buttonDollarToRubles = document.querySelector(
    ".dollar-rubles-converter"
  );
  const rublesInputFirst = document.querySelector(".rubles-input-first");

  buttonDollarToRubles.addEventListener("click", () => {
    rublesInputFirst.value = (dollarInputFirst.value * dollars).toFixed(2);
  });
};

const rublesToDollars = (dollars) => {
  const rublesInputSecond = document.querySelector(".rubles-input-second");
  const buttonRublesToDollars = document.querySelector(
    ".rubles-dollar-converter"
  );
  const dollarsInputSecond = document.querySelector(".dollar-input-second");

  buttonRublesToDollars.addEventListener("click", () => {
    dollarsInputSecond.value = (rublesInputSecond.value / dollars).toFixed(2);
  });
};

getData();
