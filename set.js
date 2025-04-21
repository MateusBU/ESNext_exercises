const teams = new Set()
teams.add('Milan')
teams.add('Real Madrid').add('Liverpool').add('Barcelona')
teams.add('Milan')

console.log(teams)
console.log(teams.size)
console.log(teams.has('Real Madrid'))
teams.delete('Barcelona')