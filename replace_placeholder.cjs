const fs = require('fs');
let c = fs.readFileSync('src/pages/index.vue', 'utf8');
c = c.replace(/:placeholder="field\.label \+ \(field\.required \? ' \*' : ''\)"/g, ':placeholder="field.title + (field.required ? \' *\' : \'\')"');
fs.writeFileSync('src/pages/index.vue', c);
console.log('Replaced successfully');
