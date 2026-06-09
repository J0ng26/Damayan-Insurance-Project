const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'src', 'pages', 'index.vue'),
  path.join(__dirname, 'src', 'views', 'DamayanProducts.vue'),
  path.join(__dirname, 'src', 'views', 'GoodlifePlans.vue'),
  path.join(__dirname, 'src', 'views', 'MBAIProducts.vue')
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // For index.vue dynamic fields
    content = content.replace(
      /:placeholder="field\.label"/g, 
      `placeholder="e.g. Type your answer..."`
    );

    // For other files dynamic fields that use :label but no placeholder
    // We want to add placeholder="e.g. Type your answer..." after :label="..."
    // Text field:
    content = content.replace(
      /:label="field\.label \+ \(field\.required \? ' \*' : ''\)"\n(\s+)variant="outlined"/g,
      `:label="field.label + (field.required ? ' *' : '')"\n$1placeholder="e.g. Type your answer..."\n$1variant="outlined"`
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log("Patched placeholders in", file);
  }
});
