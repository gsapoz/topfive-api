const {
  getClubsFromLeague,
  getAllClubs,
  getClubImage,
  getLeagueImage,
  getLeagueAttributes,
  getClubAttributes,
  getPlayersFromClub,
  getPlayerAttributes,
  getPlayerImage,
  getAllPlayers,
} = require("../src/index");

const PL_Clubs = getClubsFromLeague("premier league"); //returns all clubs from the PL, in one json object
const All_Clubs = getAllClubs(); //returns all clubs in the list, concatanated together in one json object
const Club_Image = getClubImage("chelsea"); //returns an image src for Chelsea's club crest
const Player_Image = getPlayerImage("Alphonso davies"); //returns the player profile iamge of Alphonso Davies
const League_Image = getLeagueImage("la Liga"); //returns an image src for the crest of La Liga
const League_Props = getLeagueAttributes("serie A"); //returns name, image, and clubs object for league
const Club_Props = getClubAttributes("Villarreal CF"); //returns club name, crest image, and players from Villareal
const Sevilla_Players = getPlayersFromClub("Sevilla FC"); //returns a json object of all Sevilla players
const Player_Props = getPlayerAttributes("Mason Mount"); //returns the name, position, age, height, weight, and image
const All_Players = getAllPlayers(); //returns all players in the list, concatenated together in one json object.

console.log(All_Players);
