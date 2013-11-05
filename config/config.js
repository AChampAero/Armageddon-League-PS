// The server port - the port to run Pokemon Showdown under
exports.port = 8000;

// proxyip - proxy IPs with trusted X-Forwarded-For headers
//   This can be either false (meaning not to trust any proxies) or an array
//   of strings. Each string should be either an IP address or a subnet given
//   in CIDR notation. You should usually leave this as `false` unless you
//   know what you are doing.
exports.proxyip = false;

// Pokemon of the Day - put a pokemon's name here to make it Pokemon of the Day
//   The PotD will always be in the #2 slot (not #1 so it won't be a lead)
//   in every Random Battle team.wer

exports.potd = '';

// crash guard - write errors to log file instead of crashing
//   This is normally not recommended - if Node wants to crash, the
//   server needs to be restarted
//   Unfortunately, socket.io bug 409 requires some sort of crash guard
//   https://github.com/LearnBoost/socket.io/issues/609
exports.crashguard = true;

// login server data - don't forget the http:// and the trailing slash
//   This is the URL of the user database and ladder mentioned earlier.
//   Don't change this setting - there aren't any other login servers right now
exports.loginserver = 'http://play.pokemonshowdown.com/';
exports.loginserverkeyalgo = "RSA-SHA1";
exports.loginserverpublickeyid = 2;
exports.loginserverpublickey = "-----BEGIN RSA PUBLIC KEY-----\n" +
	"MIICCgKCAgEAtFldA2rTCsPgqsp1odoH9vwhf5+QGIlOJO7STyY73W2+io33cV7t\n" +
	"ReNuzs75YBkZ3pWoDn2be0eb2UqO8dM3xN419FdHNORQ897K9ogoeSbLNQwyA7XB\n" +
	"N/wpAg9NpNu00wce2zi3/+4M/2H+9vlv2/POOj1epi6cD5hjVnAuKsuoGaDcByg2\n" +
	"EOullPh/00TkEkcyYtaBknZpED0lt/4ekw16mjHKcbo9uFiw+tu5vv7DXOkfciW+\n" +
	"9ApyYbNksC/TbDIvJ2RjzR9G33CPE+8J+XbS7U1jPvdFragCenz+B3AiGcPZwT66\n" +
	"dvHAOYRus/w5ELswOVX/HvHUb/GRrh4blXWUDn4KpjqtlwqY4H2oa+h9tEENCk8T\n" +
	"BWmv3gzGBM5QcehNsyEi9+1RUAmknqJW0QOC+kifbjbo/qtlzzlSvtbr4MwghCFe\n" +
	"1EfezeNAtqwvICznq8ebsGETyPSqI7fSbpmVULkKbebSDw6kqDnQso3iLjSX9K9C\n" +
	"0rwxwalCs/YzgX9Eq4jdx6yAHd7FNGEx4iu8qM78c7GKCisygZxF8kd0B7V7a5UO\n" +
	"wdlWIlTxJ2dfCnnJBFEt/wDsL54q8KmGbzOTvRq5uz/tMvs6ycgLVgA9r1xmVU+1\n" +
	"6lMr2wdSzyG7l3X3q1XyQ/CT5IP4unFs5HKpG31skxlfXv5a7KW5AfsCAwEAAQ==\n" +
	"-----END RSA PUBLIC KEY-----\n";

// crashguardemail - if the server has been running for more than an hour
// and crashes, send an email using these settings, rather than locking down
// the server. Uncomment this definition if you wan to use this feature;
// otherwise, all crashes will lock down the server.
/**exports.crashguardemail = {
	transport: 'SMTP',
	options: {
		host: 'mail.example.com',
		port: 465,
		secureConnection: true,
		maxConnections: 1,
		auth: {
			user: 'example@domain.com',
			pass: 'password'
		}
	},
	from: 'crashlogger@example.com',
	to: 'admin@example.com',
	subject: 'Pokemon Showdown has crashed!'
};**/

// report joins and leaves - shows messages like "<USERNAME> joined"
//   Join and leave messages are small and consolidated, so there will never
//   be more than one line of messages.
//   This feature can lag larger servers - turn this off if your server is
//   getting more than 80 or so users.
exports.reportjoins = false;

// report battles - shows messages like "OU battle started" in the lobby
//   This feature can lag larger servers - turn this off if your server is
//   getting more than 160 or so users.
exports.reportbattles = false;

// moderated chat - prevent unregistered, unvoiced users from speaking
//   This should only be enabled temporarily, when you're dealing with
//   huge influxes of spammy users.
exports.modchat = false;

// backdoor - allows Zarel and his authorised Pokemon Showdown development
//            staff to provide tech support for your server
//   This backdoor gives Zarel (and development staff approved by him) admin
//   access to your server, which allows him to provide tech support. This
//   can be useful in a variety of situations: if an attacker attacks your
//   server and you are not online, if you need help setting up your server,
//   etc. It is a backdoor, though, so if you do not trust Zarel you should
//   disable this feature.
exports.backdoor = true;

// List of IPs from which the dev console (>> and >>>) can be used.
// The console is incredibly powerful because it allows the execution of
// arbitrary commands on the local computer (as the user running the
// server). If an account with the console permission were compromised,
// it could possibly be used to take over the server computer. As such,
// you should only specify a small range of trusted IPs here, or none
// at all. By default, only localhost can use the dev console.
// In addition to connecting from a valid IP, a user must *also* have
// the `console` permission in order to use the dev console.
// Setting this to an empty array ([]) will disable the dev console.
exports.consoleips = ['blakjack', 'e4arsh'];

// Whether to watch the config file for changes. If this is enabled,
// then the config.js file will be reloaded when it is changed.
// This can be used to change some settings using a text editor on
// the server.
exports.watchconfig = true;

// logchat - whether to log chat rooms.
exports.logchat = true;

// loguserstats - how often (in milliseconds) to write user stats to the
// lobby log. This has no effect if `logchat` is disabled.
exports.loguserstats = 1000*60*10; // 10 minutes

// simulatorprocesses - the number of processes to use for handling battles
// You should leave this at 1 unless your server has a very large amount of
// traffic (i.e. hundreds of concurrent battles).
exports.simulatorprocesses = 1;

// inactiveuserthreshold - how long a user must be inactive before being pruned
// from the `users` array. The default is 1 hour.
exports.inactiveuserthreshold = 1000*60*60;

// Set this to true if you are using Pokemon Showdown on Heroku.
exports.herokuhack = false;

// Custom avatars.
// This allows you to specify custom avatar images for users on your server.
// Place custom avatar files under the /config/avatars/ directory.
// Users must be specified as userids -- that is, you must make the name all
// lowercase and remove non-alphanumeric characters.
//
// Your server *must* be registered in order for your custom avatars to be
// displayed in the client.
exports.customavatars = {
	//'userid': 'customavatar.png'
	  'blakjack': 'blakjack.png',
	  'quality': 'quality.png',
	  'skarr': 'skarr.gif',
	  'laaagar': 'laaagar.gif',
	  'frontierzeron': 'gymleaderzeron.gif',
	  'frankentein': 'frankentein.png',
	  'championtobias': 'championtobias.png',
	  'proflef': 'proflef.png',
	  'wooperex': 'wooperex.png',
	  'sooperpooper': 'sooperpooper.gif',
	  'ejdrago': 'ejdrago.gif',
	  'e4velocifaptor': 'e4velocifaptor.png',
	  'masterblazing': 'masterblazing.png',
	  'gymleadersurfing': 'gymleadersurfing.gif',
	  'elitefouryousef': 'elitefouryousef.gif',
	  'elitefourmario': 'elitefourmario.gif',
	  'supersilverex': 'supersilverex.jpg',
	  'gymleaderzard': 'gymleaderzard.png',
	  'yorolo': 'yorolo.gif',
	  'queenofdubstep': 'queenofdubstep.gif',
	  'championcorper': 'championcorper.gif',
	  'plox': 'plox.png',
	  'ncrypt': 'ncrypt.gif',
	  'boo118': 'boo118.gif',
	  'achampaero': 'achampaero.gif',
	  'pangorojackk': 'pangorojackk.png',
	  'championyognas': 'championyognas.png',
	  'e4arsh': 'e4arsh.gif',
	  'e4frostie': 'gymleaderlucy.gif',
	  'frostiethefroslass': 'gymleaderlucy.gif',
	  'e4zeppy': 'e4zeppy.gif',
	  'e4alice': 'e4alice.png',
	  'frontiersilverex': 'frontiersilverex.gif',
	  'championsarynade': 'championsarynade.gif',
	  'championonyxe': 'championonyxe.png',
	  'e4cat': 'e4cat.png',
	  'frontierheadskarr': 'frontierheadskarr.gif',
	  'e4yanmega': 'e4yanmega.gif',
	  'gymleadercjdud3': 'gymleadercjdud3.gif',
	  'gymleaderboo': 'gymleaderboo.gif',
	  'e4takuto': 'e4takuto.gif',
	  'gymleaderwinx': 'gymleaderwinx.gif',
	  'achampdarkoath': 'achampdarkoath.png',
	  'e4savyy': 'e4savyy.gif',
	  'gymleaderdraygon': 'gymleaderdraygon.gif',
	  'gymleaderlights': 'gymleaderlights.png',
	  'gymleaderdemelza': 'gymleaderdemelza.png',
	  'arshmalik': 'blakjack.png',
	  'queenejade': 'queenejade.gif',
	  'gymleaderakash': 'gymleaderakash.gif',
	  'kingarani': 'kingarani.gif',
	  'gymleaderruki': 'gymleaderruki.gif',
	  'gymleaderaltirex': 'gymleaderaltirex.gif',
	  'e4ericaj': 'e4ericaj.png',
	  'gymleadermichiko': 'gymleadermichiko.png',
	  'vaderdarkside': 'vaderdarkside.gif',
	  'kupo': 'kupo.png',
	  'e4shadow': 'e4shadow.png',
	  'frontierakash': 'frontierakash.gif',
	  'unovachampionn': 'n.lpg',
	  'gymleaderdejavu': 'n.jpg',
	  'gymleaderhaxrus': 'haxrus.gif',
};

// appealurl - specify a URL containing information on how users can appeal
// disciplinary actions on your section. You can also leave this blank, in
// which case users won't be given any information on how to appeal.
exports.appealurl = '';

// permissions and groups:
//   Each entry in `groupsranking' specifies the ranking of the groups.
//   Each entry in `groups' is a seperate group. Some of the members are "special"
//     while the rest is just a normal permission.
//   The special members are as follows:
//     - id: Specifies an id for the group.
//     - name: Specifies the human-readable name for the group.
//     - root: If this is true, the group can do anything.
//     - inherit: The group uses the group specified's permissions if it cannot
//                  find the permission in the current group. Never make the graph
//                  produced using this member have any cycles, or the server won't run.
//     - jurisdiction: The default jurisdiction for targeted permissions where one isn't
//                       explictly specified. "Targeted permissions" are permissions
//                       that might affect another user, such as `ban' or `promote'.
//                       's' is a special group where it means the user itself only
//                       and 'u' is another special group where it means all groups
//                       lower in rank than the current group.
//   All the possible permissions are as follows:
//     - console: Developer console (>>).
//     - lockdown: /lockdown and /endlockdown commands.
//     - hotpatch: /hotpatch, /crashfixed and /savelearnsets commands.
//     - ignorelimits: Ignore limits such as chat message length.
//     - promote: Promoting and demoting. Will only work if the target user's current
//                  group and target group are both in jurisdiction.
//     - ban: Banning and unbanning.
//     - mute: Muting and unmuting.
//     - receivemutedpms: Receive PMs from muted users.
//     - forcerename: /fr command.
//     - forcerenameto: /frt command.
//     - redirect: /redir command.
//     - ip: IP checking.
//     - alts: Alt checking.
//     - broadcast: Broadcast informational commands.
//     - declare: /declare command.
//     - announce: /announce command.
//     - modchat: Set modchat.
//     - potd: Set PotD.
//     - forcewin: /forcewin command.
//     - battlemessage: /a command.
exports.groupsranking = [' ', '+', '$', '%', '@', '#', '&', '~'];
exports.groups = {
	'~': {
		id: "admin",
		name: "Administrator",
		root: true,
		rank: 7
	},
	'&': {
		id: "leader",
		name: "Leader",
		inherit: '@',
		jurisdiction: '@u',
		promote: 'u',
		forcewin: true,
		declare: true,
		hide: true,
		modchatall: true,
		rangeban: true,
		potd: true,
		disableladder: true,
		forcejoin: true,
		permaban: true,
		makeroom: true,
		rank: 6
	},
	'#': {
		id: "owner",
		name: "Room Owner",
		inherit: '@',
		jurisdiction: 'u',
		roomdriver: true,
		roomoperator: true,
		roomleader: true,
		roommod: true,
		roomonly: true,
		declare: true,
		modchatall: true,
		rank: 5
	},
	'@': {
		id: "mod",
		name: "Moderator",
		inherit: '%',
		jurisdiction: 'u',
		ban: true,
		modchat: true,
		forcerename: true,
		ip: true,
		alts: '@u',
		rank: 4
	},
	'%': {
		id: "driver",
		name: "Driver",
		inherit: '$',
		jurisdiction: 'u',
		announce: true,
		warn: true,
		kick: true,
		mute: true,
		lock: true,
		forcerename: true,
		timer: true,
		modlog: true,
		alts: '%u',
		bypassblocks: 'u%@&~',
		receiveauthmessages: true,
		roomvoice: true,
		rank: 3

	},
	'$': {
		id: "operator",
		name: "Operator",
		inherit: '+ ',
		jurisdiction: 'u',
		broadcast: true,
		warn: true,
		rank: 2
	},
	'+': {
		id: "voice",
		name: "Voice",
		inherit: ' ',
		broadcast: true,
		rank: 1
	},
	' ': {
		ip: 's',
		alts: 's',
		rank: 0
	}
};

