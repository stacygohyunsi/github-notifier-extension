# Github Chrome notifier
Find the project [here](https://chrome.google.com/webstore/detail/github-notifier/hoapibhhppbolnldjengllkcdbpbbgih).

Find the medium article for the project [here](https://medium.freecodecamp.org/i-wanted-real-time-github-push-notifications-so-i-built-a-chrome-extension-7e6be0611e4).

This project is a Chrome extension and to run it locally, it should be downloaded together with https://github.com/stacygohyunsi/github-notifier-firebase.

# Local Setup
1. Fill in your `senderId` in `popup.js`
Login to Firebase Console and go to Project Settings > Cloud Messaging. You can find the Sender ID there.

2. Download `https://github.com/stacygohyunsi/github-notifier-firebase` and run it locally. 
Change the `URL_TO_SAVE_DATA` to point to the `savedata` function of your firebase project.

# Usage
1. Go to `chrome://extensions/`
2. Load unpack extension