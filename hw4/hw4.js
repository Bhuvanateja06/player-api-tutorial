use soccerPlayersDB

db.soccerPlayers.insertMany([
  { playerId: 1, name: "John Doe", position: "Forward", age: 25, nationality: "USA", goals_scored: 12, assists: 5, is_captain: false },
  { playerId: 2, name: "Carlos Martinez", position: "Midfielder", age: 28, nationality: "Spain", goals_scored: 4, assists: 12, is_captain: true },
  { playerId: 3, name: "Lee Wong", position: "Defender", age: 24, nationality: "South Korea", goals_scored: 1, assists: 2, is_captain: false },
  { playerId: 4, name: "David Kim", position: "Goalkeeper", age: 30, nationality: "Canada", goals_scored: 0, assists: 1, is_captain: false },
  { playerId: 5, name: "Samuel Brown", position: "Forward", age: 22, nationality: "England", goals_scored: 10, assists: 7, is_captain: false }
])

db.soccerPlayers.find({ is_captain: true })

db.soccerPlayers.find({ age: { $lt: 25 } })

db.soccerPlayers.find({ goals_scored: { $gt: 5 } })

db.soccerPlayers.find().sort({ age: 1 })

db.soccerPlayers.find({ nationality: "England" })
