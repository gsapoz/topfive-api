const { getAllClubs, getClubsFromLeague } = require("../index");

const PL_Clubs = getClubsFromLeague("premier league");

const All_Clubs = getAllClubs();

console.log(PL_Clubs);
