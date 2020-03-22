const SteamUser = require('steam-user')
const config = require('./config.json')
const client = new SteamUser();

const logInOptions = {
    accountName: config.username,
    password: config.password,
};

client.logOn(logInOptions)

client.on('loggedOn', () => {
    console.log('Logged in!')
    client.setPersona(SteamUser.EPersonaState.Offline);
    client.gamesPlayed([860860,303610,448070,797410]);
    console.log('Farming...')
});