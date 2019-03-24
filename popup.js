document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.sync.get("githubUser", function(result) {
		document.getElementById('saveInput').value = result["githubUser"] || "";
	});
	var save = document.getElementById('save');
	var link = document.getElementById('githubLink');
	
	save.addEventListener('click', function() {
    document.getElementById("loading").style.display = 'block';
    document.getElementById("save").style.display = 'none';		
		register(document.getElementById('saveInput').value);
	});
	link.addEventListener('click', function() {
		chrome.tabs.create({active: true, url: "https://github.com/apps/notifications"});
	});
});

function sendRegistrationId(registrationId, input, callback) {
	$.ajax({
		url : "URL_TO_SAVE_DATA", //TO CHANGE
		type: "POST",
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		data : JSON.stringify({
			githubUsername: input,
			registrationId: registrationId
		}),
		success: function(data, textStatus, jqXHR)
		{	
			callback(true);
		},
		error: function (jqXHR, textStatus, errorThrown)
		{
			console.log(errorThrown);
		}
	});
}

function register(input) {
	var senderIds = ["XXXXXXXX"]; //TO CHANGE
	chrome.gcm.register(senderIds, function(registrationId) {
		if (chrome.runtime.lastError) {
			return;
		}
		sendRegistrationId(registrationId, input, function(succeed) {
			if (succeed) {
				chrome.storage.sync.set({githubUser: input});
				document.getElementById("save").style.display = 'inline-block';
				document.getElementById("loading").style.display = 'none';
			}
		});
	});
}
