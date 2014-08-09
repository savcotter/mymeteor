Schedule = new Meteor.Collection('schedule');

var addProject = function(name, client, status, type) {
    Schedule.insert({
        game: "Game 2",
        awayTeam: "vs Civitas United",
        time: "@ 8pm",
        date: "Sunday July 20th"
    });
}

