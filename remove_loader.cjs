const fs = require('fs');

const filePath = 'd:/damayan-project/Damayan-Insurance-Project/src/pages/index.vue';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove import statement
content = content.replace(/import\s+SectionLoader\s+from\s+['"]@\/components\/SectionLoader\.vue['"];?\n?/, '');

// Remove opening <SectionLoader> tags
content = content.replace(/<SectionLoader[^>]*>\n?/g, '');

// Remove closing </SectionLoader> tags
content = content.replace(/<\/SectionLoader>\n?/g, '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Removed SectionLoader wrappers and import.');
