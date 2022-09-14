var steamClientFactory = require('./steamClient.js');
var configsArray = [];
var config;
var botArray = [];

// conta principal
config = {};
config.username = 'USERNAME';
config.password = 'PASSWORD';
config.sharedSecret = '';
config.games = [GAMES ID]
configsArray.push(config);

console.log('Quantidade de contas: ' + configsArray.length);

for	(index = 0; index < configsArray.length; index++) {
	var config = configsArray[index];
	
	var bot = steamClientFactory.buildBot(config);
	bot.doLogin();
	botArray.push(bot);
}

console.log('Inicializando ' + botArray.length + ' contas.');
