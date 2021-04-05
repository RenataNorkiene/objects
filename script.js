const knygos = {
  "Vaikiškos knygos": [
    {
      kaina: 10.99,
      metai: 2021,
      pavadinimas: "Haris Poteris ir Išminties akmuo. 1 dalis",
      puslapiuSk: 248,
      isbn: 9786090141601,
    },
    {
      kaina: 5.84,
      metai: 2018,
      pavadinimas: "Mazasis princas",
      puslapiuSk: 104,
      isbn: 9789955089629,
    },
    {
      kaina: 11.03,
      metai: 2020,
      pavadinimas: "Troliai mumiai",
      puslapiuSk: 288,
      isbn: 9789955883678,
    },
    {
      kaina: 10.95,
      metai: 2020,
      pavadinimas: "Eziukas ruke",
      puslapiuSk: 372,
      isbn: 9789955683971,
    },
  ],
  Detektyvai: [
    {
      kaina: 11.99,
      metai: 2021,
      pavadinimas: "Stiklainis sirdziu",
      puslapiuSk: 336,
      isbn: 9786094871290,
    },
    {
      kaina: 12.15,
      metai: 2018,
      pavadinimas: "Viena po kito",
      puslapiuSk: 416,
      isbn: 9789955139638,
    },
    {
      kaina: 10.0,
      metai: 2010,
      pavadinimas: "Bendradarbis",
      puslapiuSk: 352,
      isbn: 9789955132745,
    },
    {
      kaina: 12.0,
      metai: 2011,
      pavadinimas: "Bendradarbis",
      puslapiuSk: 448,
      isbn: 9786090101124,
    },
  ],
  Romanai: [
    {
      kaina: 13.89,
      metai: 2021,
      pavadinimas: "Bela Blu",
      puslapiuSk: 360,
      isbn: 9786094207266,
    },
    {
      kaina: 13.89,
      metai: 2021,
      pavadinimas: "Bela Blu",
      puslapiuSk: 360,
      isbn: 9786094207266,
    },
    {
      kaina: 20.0,
      metai: 2021,
      pavadinimas: "Jonvabaliu takas",
      puslapiuSk: 512,
      isbn: 9789955136644,
    },
    {
      kaina: 13.19,
      metai: 2018,
      pavadinimas: "Tavo paslapciu zemelapis",
      puslapiuSk: 368,
      isbn: 9786090131688,
    },
  ],
};

console.log("2018 metų knygos:");
for (let tipas in knygos) {
  //console.log(tipas);
  for (let parametrai in knygos[tipas]) {
    //console.log(parametrai);
    if (knygos[tipas][parametrai]["metai"] == 2018) {
      console.log(knygos[tipas][parametrai]["pavadinimas"]);
    }
  }
}

console.log("Pigiausios knygos kategorijose");
for (let tipas in knygos) {
  //console.log(tipas);
  let maziausiaKaina = 1000;
  let pigiausiaKnyga;
  for (let parametrai in knygos[tipas]) {
    //console.log(parametrai);
    if (knygos[tipas][parametrai]["kaina"] < maziausiaKaina) {
      maziausiaKaina = knygos[tipas][parametrai]["kaina"];
      pigiausiaKnyga = parametrai;
    }
  }
  console.log(`Pigiausia ${tipas}: ${knygos[tipas][pigiausiaKnyga]["pavadinimas"]} - ${knygos[tipas][pigiausiaKnyga]["kaina"]} Eur`);
}
