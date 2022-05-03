function gameObject() {
    const allInfo = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number":0,
                    "shoe":16,
                    "points":22,
                    "rebounds":12,
                    "assists":12,
                    "steals":3,
                    "blocks":1,
                    "slamDunks":1
                },
                "Reggie Evans": {
                    "number":30,
                    "shoe":14,
                    "points":12,
                    "rebounds":12,
                    "assists":12,
                    "steals":12,
                    "blocks":12,
                    "slamDunks":7,
                },
                "Brook Lopez": {
                    "number":11,
                    "shoe":17,
                    "points":17,
                    "rebounds":19,
                    "assists":10,
                    "steals":3,
                    "blocks":1,
                    "slamDunks":15,
                },
                "Mason Plumlee": {
                    "number":1,
                    "shoe":19,
                    "points":26,
                    "rebounds":12,
                    "assists":6,
                    "steals":3,
                    "blocks":8,
                    "slamDunks":5,
                },
                "Jason Terry": {
                    "number":31,
                    "shoe":15,
                    "points":19,
                    "rebounds":2,
                    "assists":2,
                    "steals":4,
                    "blocks":11,
                    "slamDunks":1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number":4,
                    "shoe":18,
                    "points":10,
                    "rebounds":1,
                    "assists":1,
                    "steals":2,
                    "blocks":7,
                    "slamDunks":2
                },
                "Bismak Biyombo": {
                    "number":0,
                    "shoe":16,
                    "points":12,
                    "rebounds":4,
                    "assists":7,
                    "steals":7,
                    "blocks":15,
                    "slamDunks":10
                },
                "DeSagna Diop": {
                    "number":2,
                    "shoe":14,
                    "points":24,
                    "rebounds":12,
                    "assists":12,
                    "steals":4,
                    "blocks":5,
                    "slamDunks":5
                },
                "Ben Gordon": {
                    "number":8,
                    "shoe":15,
                    "points":33,
                    "rebounds":3,
                    "assists":2,
                    "steals":1,
                    "blocks":1,
                    "slamDunks":0
                },
                "Brendan Haywood": {
                    "number":33,
                    "shoe":15,
                    "points":6,
                    "rebounds":12,
                    "assists":12,
                    "steals":22,
                    "blocks":5,
                    "slamDunks":12
                }
            }
        }
    }
    return allInfo
}
// console.log(gameObject())

// function goodPractice() {
//     let game = gameObject()
//     for (let gameKey in game) {
//         debugger;
//         console.log(gameKey)
//         let teamObj = game[gameKey]
//         for (let teamKey in teamObj) {
//             debugger;
//             console.log(teamKey)
//             let data = teamKey.player
//             for (let key in data) {
//                 debugger;
//                 console.log(key)
//                 for (let newThing in key.names) {
//                     debugger;
//                     console.log(newThing)
//                 } 
//             }
//         }
//     }
// }
// console.log(goodPractice())

function numPointsScored(playerName) {
    let homeAway = gameObject();
    for (let info0 in homeAway) {
        // console.log(info0);
        let info1 = homeAway[info0]
        // console.log(info1);
        for (let info2 in info1) {
            // console.log(info2);
            let info3 = info1[info2]
            // console.log(info3);
            for (let info4 in info3) {
                // console.log(info4);
                let info5 = info3[info4]
                // console.log(info5);
                if (playerName === info4) {
                    return info5.points
                }
            }
        }
    }
}
console.log(numPointsScored("Jeff Adrien"));
//
function shoeSize(playerName) {
    let homeAway = gameObject();
    for (let info0 in homeAway) {
        // console.log(info0);
        let info1 = homeAway[info0]
        // console.log(info1);
        for (let info2 in info1) {
            // console.log(info2);
            let info3 = info1[info2]
            // console.log(info3);
            for (let info4 in info3) {
                // console.log(info4);
                let info5 = info3[info4]
                // console.log(info5);
                if (playerName === info4) {
                    return info5.shoe
                }
            }
        }
    }
}
console.log(shoeSize("Jeff Adrien"));
//
function teamColors(team) {
    let homeAway = gameObject();
    for (let info0 in homeAway) {
        // console.log(info0)
        let info1 = homeAway[info0]
        for (let info2 in info1) {
            // console.log(info2);
            let info3 = info1[info2]
            // console.log(info3);
            if (team === info3) {
                return info1.colors;
            }
        }
    }
}
const hornets = teamColors("Charlotte Hornets");
console.log(hornets);
//
const teamNames = () => {
    const answer = []
    const homeAway = gameObject();
    for (let info0 in homeAway) {
        let info1 = homeAway[info0]
        
        for (let info2 in info1) {
            // console.log(info2);
            let info3 = info1[info2]
            if (info2 === "teamName") {
                answer.push(info3)
            }
        }
    }
    return answer
}
const names = teamNames()
console.log(names);
//
const playerNumbers = (team) => {
    const answer = []
    let homeAway = gameObject();
    for (let info0 in homeAway) {
        // console.log(info0);
        let info1 = homeAway[info0]
        // console.log(info1);
        for (let info2 in info1) {
            // console.log(info2);
            let info3 = info1[info2]
            // console.log(info3);
            for (let info4 in info3) {
                // console.log(info4);
                let info5 = info3[info4]
                // console.log(info3);
                if (team === info3) {
                    answer.push(info4)
                }
            }
        }
    }
    return answer
}
console.log(playerNumbers("Charlotte Hornets"));