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

  return data;
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

module.exports = {
  getClubsFromLeague,
  getAllClubs,
};
