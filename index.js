const fs = require("fs");

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
  const data = loadJSON("../topfive.json");
  let clubs = data[0].clubs;

  clubs = clubs.concat(
    data[1].clubs,
    data[2].clubs,
    data[3].clubs,
    data[4].clubs
  );

  return clubs;
}

function getClubsFromLeague(league) {
  const data = loadJSON("../topfive.json");
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
  const data = loadJSON("../topfive.json");
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
  const data = loadJSON("../topfive.json");
  name = upperCase(name);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      for (let k = 0; k < data[i].clubs[j].players.length; k++) {
        if (data[i].clubs[j].players[k].name == "Mason Mount") {
          return data[i].clubs[j].players[k];
        }
      }
    }
  }
}

function getClubAttributes(club) {
  const data = loadJSON("../topfive.json");
  club = upperCase(club);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      if (data[i].clubs[j].name == club) {
        return data[i].clubs[j];
      }
    }
  }
}

function getLeagueAttributes(league) {
  const data = loadJSON("../topfive.json");
  league = upperCase(league);

  for (let i = 0; i < data.length; i++) {
    if (data[i].name.match(league)) {
      return data[i];
    }
  }
}

function getLeagueImage(league) {
  const data = loadJSON("../topfive.json");
  league = upperCase(league);
  let clubs = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].name.match(league)) {
      return data[i].image;
    }
  }
}

function getClubImage(club) {
  const data = loadJSON("../topfive.json");
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
  const data = loadJSON("../topfive.json");
  name = upperCase(name);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].clubs.length; j++) {
      for (let k = 0; k < data[i].clubs[j].players.length; k++) {
        if (data[i].clubs[j].players[k].name == "Mason Mount") {
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
};