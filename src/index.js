const fs = require("fs");
const data = loadJSON(__dirname + "/../topfive.json");

function loadJSON(filename) {
  const data = fs.readFileSync(filename, "utf8");
  return JSON.parse(data);
}

function upperCase(query) {
  let words = query.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  query = words.join(" ");
  return query;
}

function getAllClubs() {
  /**
   *
   * Returns all current clubs in Europe's Top Five league.
   *
   * Options include:
   *    "Premier League", "Serie A", "Bundesliga", "Ligue 1", "La Liga"
   *
   * The three Club Properties are:
   *    name (string), image(string), and players(json)
   *
   */
  let clubs = data[0].clubs;

  clubs = clubs.concat(
    data[1].clubs,
    data[2].clubs,
    data[3].clubs,
    data[4].clubs
  );

  return clubs;
}

function getAllPlayers() {
  /**
   *
   * Returns all current players in Europe's Top Five Leagues.
   *
   * League options include:
   *    "Premier League", "Serie A", "Bundesliga", "Ligue 1", "La Liga"
   *
   * The Player Properties are:
   *    name (string), image(string), age(string), position(string),
   *    height(string), weight(string), and nationality (string)
   *
   */
  let players = data[0].clubs[0].players;
  players = players.concat(
    //Premier League
    data[0].clubs[1].players,
    data[0].clubs[2].players,
    data[0].clubs[3].players,
    data[0].clubs[4].players,
    data[0].clubs[5].players,
    data[0].clubs[6].players,
    data[0].clubs[7].players,
    data[0].clubs[8].players,
    data[0].clubs[9].players,
    data[0].clubs[10].players,
    data[0].clubs[11].players,
    data[0].clubs[12].players,
    data[0].clubs[13].players,
    data[0].clubs[14].players,
    data[0].clubs[15].players,
    data[0].clubs[16].players,
    data[0].clubs[17].players,
    data[0].clubs[18].players,
    data[0].clubs[19].players,
    //Serie A
    data[1].clubs[0].players,
    data[1].clubs[1].players,
    data[1].clubs[2].players,
    data[1].clubs[3].players,
    data[1].clubs[4].players,
    data[1].clubs[5].players,
    data[1].clubs[6].players,
    data[1].clubs[7].players,
    data[1].clubs[8].players,
    data[1].clubs[9].players,
    data[1].clubs[10].players,
    data[1].clubs[11].players,
    data[1].clubs[12].players,
    data[1].clubs[13].players,
    data[1].clubs[14].players,
    data[1].clubs[15].players,
    data[1].clubs[16].players,
    data[1].clubs[17].players,
    data[1].clubs[18].players,
    data[1].clubs[19].players,
    //Bundesliga
    data[2].clubs[0].players,
    data[2].clubs[1].players,
    data[2].clubs[2].players,
    data[2].clubs[3].players,
    data[2].clubs[4].players,
    data[2].clubs[5].players,
    data[2].clubs[6].players,
    data[2].clubs[7].players,
    data[2].clubs[8].players,
    data[2].clubs[9].players,
    data[2].clubs[10].players,
    data[2].clubs[11].players,
    data[2].clubs[12].players,
    data[2].clubs[13].players,
    data[2].clubs[14].players,
    data[2].clubs[15].players,
    data[2].clubs[16].players,
    data[2].clubs[17].players,
    //Ligue 1
    data[3].clubs[0].players,
    data[3].clubs[1].players,
    data[3].clubs[2].players,
    data[3].clubs[3].players,
    data[3].clubs[4].players,
    data[3].clubs[5].players,
    data[3].clubs[6].players,
    data[3].clubs[7].players,
    data[3].clubs[8].players,
    data[3].clubs[9].players,
    data[3].clubs[10].players,
    data[3].clubs[11].players,
    data[3].clubs[12].players,
    data[3].clubs[13].players,
    data[3].clubs[14].players,
    data[3].clubs[15].players,
    data[3].clubs[16].players,
    data[3].clubs[17].players,
    data[3].clubs[18].players,
    data[3].clubs[19].players,
    //La Liga
    data[4].clubs[0].players,
    data[4].clubs[1].players,
    data[4].clubs[2].players,
    data[4].clubs[3].players,
    data[4].clubs[4].players,
    data[4].clubs[5].players,
    data[4].clubs[6].players,
    data[4].clubs[7].players,
    data[4].clubs[8].players,
    data[4].clubs[9].players,
    data[4].clubs[10].players,
    data[4].clubs[11].players,
    data[4].clubs[12].players,
    data[4].clubs[13].players,
    data[4].clubs[14].players,
    data[4].clubs[15].players,
    data[4].clubs[16].players,
    data[4].clubs[17].players,
    data[4].clubs[18].players,
    data[4].clubs[19].players
  );

  return players;
}

function getClubsFromLeague(league) {
  /**
   *
   * Returns all current clubs in a given league.
   *
   * League options include:
   *    "Premier League", "Serie A", "Bundesliga", "Ligue 1", "La Liga"
   *
   * The three Club Properties are:
   *    name (string), image(string), and players(json)
   *
   */
  league = upperCase(league);
  let clubs = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].name.match(league)) {
      clubs = data[i].clubs;
    }
  }

  return clubs;
}

function getPlayersFromClub(club) {
  /**
   *
   * Returns all current players in a given club.
   *
   * Club name formatting may vary across each league, I would recommend
   *    incorporating an autocomplete function that matches club names by
   *    keyword (ie: "Bayern Munich" is saved as "FC Bayern Munich")
   *
   * Player Properties are:
   *    name (string), image(string), age(string), position(string),
   *    height(string), weight(string), and nationality (string)
   *
   */
  club = upperCase(club);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      if (data[i].clubs[j].name == club) {
        return data[i].clubs[j].players;
      }
    }
  }
}

function getPlayerAttributes(name) {
  /**
   *
   * Searches for a player by name and returns his properties
   *
   * Player Properties are:
   *    name (string), image(string), age(string), position(string),
   *    height(string), weight(string), and nationality (string)
   *
   */
  name = upperCase(name);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      for (let k = 0; k < data[i].clubs[j].players.length; k++) {
        if (data[i].clubs[j].players[k].name == name) {
          return data[i].clubs[j].players[k];
        }
      }
    }
  }
}

function getClubAttributes(name) {
  /**
   *
   * Searches for a club by name and returns its properties
   *
   * Club name formatting may vary across each league, I would recommend
   *    incorporating an autocomplete function that matches club names by
   *    keyword (ie: "Bayern Munich" is saved as "FC Bayern Munich")
   *
   * The three Club Properties are:
   *    name (string), image(string), and players(json)
   *
   */
  name = upperCase(name);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      if (data[i].clubs[j].name == name) {
        return data[i].clubs[j];
      }
    }
  }
}

function getLeagueAttributes(name) {
  /**
   *
   * Searches for a league by name and returns its properties
   *
   * League options include:
   *    "Premier League", "Serie A", "Bundesliga", "Ligue 1", "La Liga"
   *
   * The three Club Properties are:
   *    name (string), image(string), and players(json)
   *
   */
  name = upperCase(name);

  for (let i = 0; i < data.length; i++) {
    if (data[i].name.match(name)) {
      return data[i];
    }
  }
}

function getLeagueImage(league) {
  /**
   *
   * Searches for a league by name and returns its image url
   *
   * League options include:
   *    "Premier League", "Serie A", "Bundesliga", "Ligue 1", "La Liga"
   *
   */
  league = upperCase(league);
  let clubs = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].name.match(league)) {
      return data[i].image;
    }
  }
}

function getClubImage(club) {
  /**
   *
   * Searches for a club by name and returns its image url
   *
   * Club name formatting may vary across each league, I would recommend
   *    incorporating an autocomplete function that matches club names by
   *    keyword (ie: "Bayern Munich" is saved as "FC Bayern Munich")
   *
   */
  club = upperCase(club);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      if (data[i].clubs[j].name == club) {
        // console.log(data[i][j].image);
        return data[i].clubs[j].image;
        // break;
      }
    }
  }
}

function getPlayerImage(name) {
  /**
   *
   * Searches for a player by name and returns his image url
   *
   * Player Images are currently in beta, each player image is currently
   *    stored as a placeholder, this will be resolved with topfive-api version 1.50
   *
   */
  name = upperCase(name);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      for (let k = 0; k < data[i].clubs[j].players.length; k++) {
        if (data[i].clubs[j].players[k].name == name) {
          return data[i].clubs[j].players[k].image;
        }
      }
    }
  }
}

module.exports = {
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
};
