var request = require('request'),
	async = require('async');

var stats = {
	totalRepos: 9,
	lastCommit: 0,
	mostStarred: '',
	totalCommits: 0,
	totalFollowers: 0
};

var user = 'markwillis82';

get('https://api.github.com/users/'+user, function(err, res, body) {
	var parts = JSON.parse(body);
	stats.totalRepos = parts.public_repos;


	async.parallel([
		function(next) {
			get('https://api.github.com/users/'+user+'/followers', function(err, res, body) {
				var obj = JSON.parse(body);
				stats.totalFollowers = obj.length;
				next();
			});
		},
		function(next) {
			get('https://api.github.com/users/'+user+'/repos', function(err, res, body) {
				var obj = JSON.parse(body);
				// stats.totalFollowers = obj.length;
				obj.sort(function(a, b) {
					if(a.updated_at < b.updated_at) {
						return -1;
					} else if (a.updated_at > b.updated_at) {
						return 1;
					} else {
						return 0;
					}
				});
				stats.lastCommit = new Date(obj[0].updated_at);

				obj.sort(function(a, b) {
					if(a.watchers < b.watchers) {
						return 1;
					} else if (a.watchers > b.watchers) {
						return -1;
					} else {
						return 0;
					}
				});
				stats.mostStarred = obj[0].name + ' ('+obj[0].watchers+')';


				// console.log(obj);
				next();
			});
		}

	], function(err, res) {
		renderStatsText(stats);
	});
});

function renderStatsText(stats) {
	// console.log(stats);
	var str = ['<ul>',
			'<li>Total Repos: '+stats.totalRepos+'</li>',
			'<li>Last Public Commit: '+stats.latestCommit+'</li>',
			'<li>Most Starred Repo: '+stats.mostStarred+'</li>',
		'</ul>'].join('');
	console.log(str);
}


function get(url, cb) {
	var details = {
		headers: {
			'user-agent': 'jekyll'
		},
		url: url
	};
	request(details, cb);
}