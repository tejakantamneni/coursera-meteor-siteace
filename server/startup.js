Meteor.startup(function() {
    if (!Websites.findOne()) {
        Websites.insert({
    		url: "http://www.google.com/",
    		title: "Google",
    		description: "Google",
            upVotes: 0,
            downVotes: 0,
    		createdOn: new Date()
    	});
        Websites.insert({
    		url: "http://www.yahoo.com/",
    		title: "Yahoo",
    		description: "Yahoo!!",
            upVotes: 0,
            downVotes: 0,
    		createdOn: new Date()
    	});
    }
});