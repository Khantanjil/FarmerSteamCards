const prompt = require('prompt');
const SteamUser = require('steam-user')
//const config = require('./config.json')
const client = new SteamUser();

prompt.start();
prompt.get(['username', 'password'], function(err, result){
	if(err){return onErr(err);}
	console.log('Your account: ');
	console.log('	Username: ' + result.username);
	console.log('	Password: ' + result.password);
	console.log("Importing steam-user")
	console.log("Trying to Logging...\n")

	const logInOptions = {
    	accountName: result.username,
    	password: result.password,
	};

	client.logOn(logInOptions)

	client.on('loggedOn', () => {
    	console.log('Logged in!')

    client.setPersona(SteamUser.EPersonaState.Offline);
    // Set to offline to not disturbe te others
    // You can change to Online if you want
    console.log('Setting to offline status.')
    client.gamesPlayed([504130]);
    console.log("Playing the games and idling cards...")
	});
	});


function onErr(err){
	console.log(err);
	return 1;
}
