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

    // Because we just replaced all with `e.g. Type your answer...`, we need to find each input type and give it a specific placeholder.
    
    // 1. Text Field Placeholder (v-if="field.type === 'text' || !field.type")
    content = content.replace(
      /(<v-text-field\s+v-if="field\.type === 'text' \|\| !field\.type"[\s\S]*?)placeholder="e\.g\. Type your answer\.\.\."/g,
      `$1placeholder="e.g. Type your answer here"`
    );
    
    // 2. Textarea Placeholder (v-else-if="field.type === 'textarea'")
    content = content.replace(
      /(<v-textarea\s+v-else-if="field\.type === 'textarea'"[\s\S]*?)placeholder="e\.g\. Type your answer\.\.\."/g,
      `$1placeholder="e.g. Provide more details..."`
    );

    // 3. Select Placeholder (v-else-if="field.type === 'select'")
    // Some selects might not have a placeholder yet (we may have added it globally or not), so let's match carefully.
    content = content.replace(
      /(<v-select\s+v-else-if="field\.type === 'select'"[\s\S]*?)placeholder="e\.g\. Type your answer\.\.\."/g,
      `$1placeholder="Select an option"`
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log("Updated specific placeholders in", file);
  }
});
