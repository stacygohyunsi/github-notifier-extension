function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

var imgArray = ['github.png', 'github-coder-cat.png', 'github-female.png', 'github-los-muertos.png', 'github-old.png', 'github-rainbow.png', 'github-starwars.png'];

chrome.gcm.onMessage.addListener(function(message) {
	var rand = imgArray[Math.floor(Math.random() * imgArray.length)];	
	var parsedMessage = JSON.parse(message.data.message);
	switch(parsedMessage.action) {
		case 'fork':
			var action = 'forked the repository';
			break;				
		case 'issue_comment':
			var action = 'commented on an issue at ';
			break;		
		case 'issues':
			var action = 'started an issue at';
			break;
		case 'watch':
			var action = 'starred';
			break;
		case 'pull_request':
			var action = 'opened a pull request at';
			break;			
		default:
			var action = 'interacted with';
	}
	var options = {
		type: "basic",
		title: "Github notification",
		message: parsedMessage.sender + " " + action + " " + parsedMessage.name,
		iconUrl: "images/" + rand
	}	
	chrome.notifications.create(guid(), options, function(notificationId) {
        // do nothing
	});
});

chrome.gcm.onSendError.addListener(function(err) {
    // do nothing
})