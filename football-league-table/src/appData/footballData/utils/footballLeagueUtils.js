let teamData = [];
const getWins = (score1, score2) => score1 > score2 ? 1 : 0;
const getDefeats = (score1, score2) => score1 < score2 ? 1 : 0;
const getDraws = (score1, score2) => score1 === score2 ? 1 : 0;

const getTeam = (teamName) => teamData.findIndex(v => v.name === teamName);

const createTeam = (team, match, isSecondTeam) => {
    return {
        name: team.name,
        key: team.key,
        goalsFor: isSecondTeam ? match.score2 : match.score1,
        goalsAgainst: isSecondTeam ? match.score1 : match.score2,
        wins: isSecondTeam ? getWins(match.score2, match.score1) : getWins(match.score1, match.score2),
        draws: match.score1 === match.score2 ? 1 : 0,
        defeats: isSecondTeam ? getDefeats(match.score2, match.score1) : getDefeats(match.score1, match.score2),
    }
};

const updateTeam = (team, match, isSecondTeam) => {
    team.goalsFor = team.goalsFor + (isSecondTeam ? match.score2 : match.score1);
    team.goalsAgainst = team.goalsAgainst + (isSecondTeam ? match.score1 : match.score2);
    team.wins = team.wins + (isSecondTeam ? getWins(match.score2, match.score1) : getWins(match.score1, match.score2));
    team.defeats = team.defeats + getDefeats(match.score2, match.score1);
    team.draws = team.draws + getDraws(match.score1, match.score2);
    team.points = team.wins * 3 + team.draws;
    return team;
}

export const createGameData = (game) => {
    if(game && game.rounds && game.rounds.length > 0 ) {
        game.rounds.forEach(value => {
            value.matches.forEach(match => {
                const team1 = getTeam(match.team1.name);
                const team2 = getTeam(match.team2.name);
                if (team1 < 0) {
                    teamData.push(createTeam(match.team1, match));
                } else {
                    teamData[team1] = updateTeam(teamData[team1], match);
                }
                if (team2 < 0) {
                    teamData.push(createTeam(match.team2, match, true));
                } else {
                    teamData[team2] = updateTeam(teamData[team2], match, true);
                }
            });
        });
    
        return teamData.sort((team1, team2) => {
            return team1.points < team2.points ? 1 : team1.points > team2.points ? -1 :
                (team1.goalsFor - team1.goalsAgainst) < (team2.goalsFor - team2.goalsAgainst) ? 1 :
                    (team1.goalsFor - team1.goalsAgainst) > (team2.goalsFor - team2.goalsAgainst) ? -1 :
                        team1.goalsFor < team2.goalsFor ? 1 : -1;
        })
    } 
    return [];
};