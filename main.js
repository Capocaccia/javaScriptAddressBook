var friends = new Object();

friends.bill = {}
friends.steve = {}

friends.bill.firstName = "Bill";
friends.bill.lastName = "Bob";
friends.bill.number = "8675309";
friends.bill.address = [];

friends.steve.firstName = "Steve";
friends.steve.lastName = "Simmers";
friends.steve.number = "8675309";
friends.steve.address = [];

function list(friend){
    for(var key in friends){
        console.log(key)
    }
}

var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};
