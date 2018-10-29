let dodge = {
  name: "Dodge",
  makes: [],
  established: 1910,
  owner: "Chrysler",
  founder: "John Dodge",
  headquarters: "Auburn Hills, Michigan",
}

let charger = {
  name: "Charger",
  doors: 4,
  startingPrice: "28,000",
  rack: false,
  type: [
    {
      name: "SXT",
      horsepower: 292,
      mpg: "19/30",
      msrp: "28,000"
    },
    {
      name: "GT AWD",
      horsepower: 300,
      mpg: "18/27",
      msrp: "33,000",
    },
    {
      name: "R/T",
      horsepower: 370,
      mpg: "16/25",
      msrp: "35,000",
    },
    {
      name: "GT PLUS AWD",
      horsepower: 300,
      mpg: "18/27",
      msrp: "36,000",
    },
    {
      name: "DAYTONA",
      horsepower: 370,
      mpg: "16/25",
      msrp: "39,000",
    },
    {
      name: "R/T SCAT PACK",
      horsepower: 485,
      mpg: "15/25",
      msrp: "40,000",
    }
  ]
}

let challenger = {
  name: "Challengers",
  doors: 2,
  startingPrice: "27,000",
  rack: false,
  type: [
    {
      name: "SXT",
      horsepower: 305,
      mpg: "19/30",
      msrp: "28,000",
    },
    {
      name: "SXT PLUS",
      horsepower: 305,
      mpg: "19/30",
      msrp: "30,000",
    },
    {
      name: "R/T",
      horsepower: 372,
      mpg: "16/25",
      msrp: "34,000",
    },
    {
      name: "GT AWD",
      horsepower: 305,
      mpg: "18/27",
      msrp: "34,000",
    },
    {
      name: "R/T PLUS",
      horsepower: 300,
      mpg: "18/27",
      msrp: "36,000",
    },
    {
      name: "SHAKER",
      horsepower: 375,
      mpg: "16/25",
      msrp: "37,000",
    },
    {
      name: "T/A",
      horsepower: 375,
      mpg: "15/25",
      msrp: "38,000",
    },
    {
      name: "R/T SCAT PACK",
      horsepower: 485,
      mpg: "14/23",
      msrp: "40,000",
    },
    {
      name: "R/T PLUS SHAKER",
      horsepower: 375,
      mpg: "16/25",
      msrp: "40,000",
    },
    {
      name: "R/T TA PLUS",
      horsepower: 375,
      mpg: "15/23",
      msrp: "41,000",
    },
    {
      name: "R/T PLUS SHAKER",
      horsepower: 375,
      mpg: "16/25",
      msrp: "40,000",
    },
    {
      name: "R/T HEMI SCAT PACK SHAKER",
      horsepower: 485,
      mpg: "15/25",
      msrp: "43,000",
    },
    {
      name: "Demon",
      horsepower: 808,
      mpg: "19/26",
      msrp: "83,000",
    },
  ]
}

let journey = {
  name: "Journey",
  doors: 4,
  startingPrice: "23,000",
  rack: true,
  type: [
    {
      name: "SE",
      horsepower: 173,
      mpg: "19/25",
      msrp: "23,000",
    },
    {
      name: "V6 VALUE PACKAGE",
      horsepower: 283,
      mpg: "17/25",
      msrp: "25,000",
    },
    {
      name: "SXT",
      horsepower: 173,
      mpg: "19/25",
      msrp: "26,000",
    },
    {
      name: "CROSSROAD",
      horsepower: 173,
      mpg: "19/25",
      msrp: "28,000",
    },
    {
      name: "GT",
      horsepower: 283,
      mpg: "17/25",
      msrp: "33,000",
    },
  ]
}

let durango = {
  name: "Durango",
  doors: 2,
  startingPrice: "30,000",
  rack: false,
  type: [
    {
      name: "SXT",
      horsepower: 295,
      mpg: "19/26",
      msrp: "30,000"
    },
    {
      name: "SXT PLUS",
      horsepower: 293,
      mpg: "19/26",
      msrp: "33,000"
    },
    {
      name: "GT",
      horsepower: 295,
      mpg: "19/26",
      msrp: "38,000"
    },
    {
      name: "GT RALLYE",
      horsepower: 295,
      mpg: "19/26",
      msrp: "42,000"
    },
    {
      name: "CITADEL",
      horsepower: 360,
      mpg: "14/22",
      msrp: "44,000"
    },
    {
      name: "R/T",
      horsepower: 475,
      mpg: "13/19",
      msrp: "63,000"
    },
    {
      name: "SRT",
      horsepower: 475,
      mpg: "13/19",
      msrp: "63,000"
    },
  ]

}
let caravan = {
  name: "Grand Caravan",
  doors: 2,
  startingPrice: "30,000",
  rack: false,
  type: [
    {
      name: "SE",
      horsepower: 283,
      mpg: "17/25",
      msrp: "26,000"
    },
    {
      name: "SE PLUS",
      horsepower: 283,
      mpg: "17/25",
      msrp: "29,000"
    },
    {
      name: "SXT",
      horsepower: 283,
      mpg: "17/25",
      msrp: "31,000"
    },
  ]
}

let dart = {
  name: "Dart",
  doors: 4,
  startingPrice: "14,000",
  rack: false,
  type: [
    {
      name: "RALLY",
      horsepower: 180,
      mpg: "20/32",
      msrp: "16,000"
    },]
}

dodge.makes.push(charger, challenger, journey, durango, caravan);


let story = ` ${dodge.name} was founded in ${dodge.established}, by ${dodge.founder}. They are headquarted in 
${dodge.headquarters}. I am doing this because I drive a 2013 ${dodge.name} ${dart.name}, which is now discontinued. Possibly my fault. If I could choose a Dodge car to drive, it would certainly be either a ${dodge.makes[1].type[12].name} or a ${dodge.makes[3].name} `

console.log(story);