const fs = require('fs');

const content = fs.readFileSync('d:/damayan-project/Damayan-Insurance-Project/src/pages/index.vue', 'utf-8');
const pattern = /<([a-z]+)[^>]*id=['"](home|about|blog|legalities|features|contact)['"][^>]*>/g;

let match;
while ((match = pattern.exec(content)) !== null) {
    const lines = content.substring(0, match.index).split('\n').length;
    console.log(`Match: ${match[0]} at line ${lines}`);
}
