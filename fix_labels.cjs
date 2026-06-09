const fs = require('fs');
let c = fs.readFileSync('src/pages/index.vue', 'utf8');
c = c.replace(/<label class="contact-form-label" v-if="field.type === 'radio' \|\| field.type === 'checkbox'">/g, '<label class="contact-form-label">');
fs.writeFileSync('src/pages/index.vue', c);
