const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync(path.join(__dirname, 'src/pages/index.vue'), 'utf-8');

// Extract Dialog HTML (non-greedy match for the first contactDialog v-dialog)
const dialogMatch = indexContent.match(/<v-dialog v-model="contactDialog".*?<\/v-dialog>/s);
if (!dialogMatch) {
  console.error('Could not find contactDialog in index.vue');
  process.exit(1);
}
const dialogHtml = dialogMatch[0];

// Extract CONTACT_SPLIT_FIELDS
const fieldsMatch = indexContent.match(/const CONTACT_SPLIT_FIELDS = \{.*?\};/s);
if (!fieldsMatch) {
  console.error('Could not find CONTACT_SPLIT_FIELDS in index.vue');
  process.exit(1);
}
const fieldsCode = fieldsMatch[0];

const filesToUpdate = [
  'src/views/GoodlifePlans.vue',
  'src/views/DamayanProducts.vue',
  'src/views/MBAIProducts.vue'
];

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(path.join(__dirname, file), 'utf-8');
  
  // Replace dialog HTML
  const oldDialogRegex = /<v-dialog v-model="contactDialog".*?<\/v-dialog>/s;
  if (!oldDialogRegex.test(content)) {
    console.warn(`Could not find old contactDialog in ${file}`);
  } else {
    content = content.replace(oldDialogRegex, dialogHtml);
  }

  // Insert CONTACT_SPLIT_FIELDS if missing
  if (!content.includes('const CONTACT_SPLIT_FIELDS')) {
    // Insert it after `const contactForm = ref({` declaration by finding the start of reactive variables
    // or just after the imports
    content = content.replace(/(import .*? from ["'].*?["'];\s*)+/, `$&
${fieldsCode}
`);
  }

  fs.writeFileSync(path.join(__dirname, file), content, 'utf-8');
  console.log(`Updated ${file}`);
});
