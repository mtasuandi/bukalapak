var fs = require('fs');
var google = require('google');
 
google.resultsPerPage = 100;
var nextCounter = 0;
var logger = fs.createWriteStream('bukalapak.txt', {
  flags: 'a'
});

google('site:bukalapak.com', function (err, res) {
    if (err) console.error(err)
 
    for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        logger.write(link.href + "\n");
    }
 
    if (nextCounter < 100) {
        nextCounter += 1
        if (res.next) res.next()
    }
});
