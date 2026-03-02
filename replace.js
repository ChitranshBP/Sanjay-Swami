const fs = require('fs');
const path = require('path');
function walk(dir, done) {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
}

walk('./src', (err, files) => {
  if (err) throw err;
  const astroFiles = files.filter(f => f.endsWith('.astro'));
  for (const file of astroFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(
      /Cloud Nine Hospital, Jayanagar, Bangalore - 560041/g,
      'Navami Krishna, near Hosa Road, Electronic City, Bengaluru - 560100'
    );
    content = content.replace(
      /Cloud Nine Hospital, Jayanagar, Bangalore/g,
      'Navami Krishna, near Hosa Road, Electronic City, Bengaluru'
    );
    content = content.replace(
      /<iframe[\s\S]*?src=\"https:\/\/www\.google\.com\/maps\/embed\?pb=[^>]*?title=\"Cloud Nine Hospital Jayanagar Location\">\s*<\/iframe>/g,
      `<iframe
              src="https://maps.google.com/maps?q=Dr+Sanjay+Swamy,+Navami+Krishna,+near+Hosa+Road,+Chennakeshava+Nagar,+Pragathi+Nagar,+Electronic+City,+Bengaluru,+Karnataka+560100&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              title="Dr Sanjay Swamy Clinic Location">
            </iframe>`
    );
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Updated ' + file);
    }
  }
});
