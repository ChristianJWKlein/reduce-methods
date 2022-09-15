//The following is adaapted from https://code.tutsplus.com/articles/5-real-life-uses-for-the-javascript-reduce-method--cms-39096

const topSix = [
  { name: 'Nigeria', position: '1st', points: 43 },
  { name: 'England', position: '2nd', points: 37 },
  { name: 'USA', position: '3rd', points: 35 },
  { name: 'South Africa', position: '4th', points: 30 },
  { name: 'Brazil', position: '5th', points: 27 },
  { name: 'Korea', position: '6th', points: 23 },
]

const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0)

//Can use method to get total count of items in the array.  Say you wanna know how many teams

const totalTeams = topSix.reduce((acc, currTeam) => acc + 1, 0)

// Multiply the total teams by 3
const totalTeamsByThree = topSix.reduce((acc, currTeam) => acc + 3, 0)

console.log(totalPoints, totalTeams, totalTeamsByThree)
