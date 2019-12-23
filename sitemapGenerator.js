const fs = require('fs');
const xmlParser = require('xml2json');
const xmlFormatter = require('xml-formatter');

(async () => {
    /**
     * Get the sitemap
     */
    const sitemap = await new Promise((resolve, reject) => {
        fs.readFile(process.argv[2], 'utf8', function (err, data) {
            if (!err) {
                resolve(xmlParser.toJson(data, {
                    reversible: true,
                    object: true
                }));

            } else {
                reject(err);
            }
        });
    }).catch(() => ({
        urlset: {
          xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
          url: []
        }
    }));
    const urls = sitemap['urlset']['url'];
    /**
     * Get the list of all URLs that needs to be modified
     */
    const urlList = (await new Promise((resolve, reject) => {
        fs.readFile(process.argv[3], 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }))
    .trim()
    .split('\n');
    let i, j;
    let status, url;
    const now = new Date().toISOString().split('T')[0];
    for (i = 0; i < urlList.length; i++) {
        [status, url] = urlList[i].split(/\s+/);
        switch(status) {
            case 'A':
                urls.push({
                    loc: { '$t': url },
                    lastmod: { '$t': now },
                    changefreq: { '$t': 'weekly' },
                    priority: { '$t': '0.5' }
                });
                break;
            case 'M':
                let match = false;
                for (j = 0; j < urls.length; j++) {
                    if (urls[j]['loc']['$t'] === url) {
                        urls[j]['lastmod']['$t'] = now;
                        match = true;
                        break;
                    }
                }
                if (!match) {
                    urls.push({
                        loc: { '$t': url },
                        lastmod: { '$t': now },
                        changefreq: { '$t': 'weekly' },
                        priority: { '$t': '0.5' }
                    });
                }
                break;
            case 'D':
                for (j = 0; j < urls.length; j++) {
                    if (urls[j]['loc']['$t'] === url) {
                        urls.splice(j, 1);
                        break;
                    }
                }
                break;
        }
    }
    fs.writeFile(
        process.argv[2], 
        xmlFormatter(
            `<?xml version="1.0" encoding="UTF-8"?>${xmlParser.toXml(sitemap)}`,
            {
                collapseContent: true
            }
        ), 
        function(err) {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Done success');
            }
        }
    );
})();
