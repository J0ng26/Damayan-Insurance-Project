const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src/views/GoodlifePlans.vue');
let content = fs.readFileSync(filePath, 'utf-8');

// The correct script section to inject
const correctScript = `<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/css/style.css";
import { messageService, planTypeService, concernService } from "@/plugins/api";

const CONTACT_SPLIT_FIELDS = {
  maf: { label: "MAF No. *", hint: "12345678" },
  firstName: { label: "First name *", hint: "Juan" },
  lastName: { label: "Last name *", hint: "Dela Cruz" },
  middleName: { label: "Middle name", hint: "Santos" },
  email: { label: "Email *", hint: "juan@example.com" },
  phone: { label: "Phone number *", hint: "+63 912 345 6789" },
  planType: { label: "Plan type *", hint: "Jade Plan" },
  concern: { label: "Concern *", hint: "Claim inquiry" },
  message: { label: "Message *", hint: "How can we help you?" },
  attachment: { label: "Attachment (optional)", hint: "PDF or photos" },
};

const router = useRouter();
const drawer = ref(false);
const showPlanDialog = ref(false);
const selectedPlan = ref(null);

const hoveredItem = ref(null);
const hoveredTag = ref(null);

const itemHover = (index) => { hoveredItem.value = index; };
const tagHover = (tag) => { hoveredTag.value = tag; };

const paymentOptions = ref([
  { name: "Monthly", amount: "800", frequency: "per month", contractPrice: "₱48,000.00", duration: "", savings: "", color: "green" },
  { name: "Quarterly", icon: "mdi-calendar-quarter", amount: "2,280", frequency: "every 3 months", contractPrice: "₱45,600.00", color: "green" },
  { name: "Semi-Annual", icon: "mdi-calendar-half-year", amount: "4,320", frequency: "every 6 months", contractPrice: "₱43,200.00", color: "green" },
  { name: "Annual", icon: "mdi-calendar-year", amount: "8,000", frequency: "per year", contractPrice: "₱40,000.00", color: "green" },
]);

// Inside <script setup>
const benefits = ref({
  naturalDeath: {
    title: "NATURAL DEATH",
    description: "Double benefits with 1 year contestability period (18-60 years old)",
    icon: "mdi-heart-pulse",
  },
  contractPrice: {
    title: "TOTAL CONTRACT PRICE",
    monthlyPremium: "P800.00",
    months: 12,
    totalPrice: "Php 48,000.00",
    paidAmount: "Php 9,600.00",
    waivedBalance: "38,400.00",
    icon: "mdi-calculator",
  },
  benefits: {
    title: "BENEFITS",
    items: [
      { name: "Cash Assistance Benefit", amount: "PHP 37,525.00" },
      { name: "Memorial Service Benefit", amount: "PHP 37,525.00" },
    ],
    total: "PHP 75,050.00",
    icon: "mdi-shield-check",
  },
});

// ============ CONTACT DIALOG STATE ============
const contactDialog = ref(false);
const formValid = ref(false);
const submitting = ref(false);
const contactFormRef = ref(null);
const showContactIcon = ref(true);
const rateLimitError = ref("");
const successMessage = ref("");

const contactForm = ref({
  lastName: "",
  middleName: "",
  firstName: "",
  complainantLastName: "",
  complainantMiddleName: "",
  complainantFirstName: "",
  isSameAsComplainant: true,
  email: "",
  contactNo: "",
  mafNo: "",
  planType: null,
  concern: null,
  description: "",
  attachments: [],
  dynamicAnswers: {},
});

const contactFormErrors = ref({
  lastName: "", middleName: "", firstName: "",
  complainantLastName: "", complainantMiddleName: "", complainantFirstName: "",
  email: "", contactNo: "", mafNo: "", planType: "", concern: "", description: "",
});

// Plan Types
const allPlans = ref([]);
const fetchPlanTypes = async () => {
  try {
    const planTypes = await planTypeService.getAll();
    allPlans.value = planTypes.map((planType) => ({
      ...planType, value: planType.id, icon: "mdi-shield-check-outline", color: "#708090",
    }));
  } catch (err) { console.error("Failed to fetch plan types:", err); }
};

// Concerns
const concernsList = ref([]);
const fetchConcerns = async () => {
  try {
    concernsList.value = await concernService.getAll();
  } catch (err) { console.error("Failed to fetch concerns:", err); }
};

const filteredConcerns = computed(() => {
  if (!contactForm.value.planType) return [];
  const selectedPlanId = contactForm.value.planType.id || contactForm.value.planType.value;
  return concernsList.value.filter(c => c.plan_type_id === selectedPlanId);
});

// Snackbar
const snackbar = ref({ show: false, text: "", color: "success" });

// ============ VALIDATION RULES ============
const rules = {
  required: (v) => {
    if (typeof v === 'string') return !!v.trim() || "This field is required";
    return !!v || "This field is required";
  },
  email: (v) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) || "Please enter a valid email address",
  phone: (v) => /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/.test(v) || "Please enter a valid phone number",
  alphabetic: (v) => { if (!v) return true; return /^[A-Za-z\\sñÑ]+$/.test(v) || "Please enter letters only"; },
  numeric: (v) => { if (!v) return true; return /^[0-9]+$/.test(v) || "Please enter numbers only"; },
};

// ============ CONTACT FORM METHODS ============
const resetContactForm = () => {
  contactFormRef.value?.reset();
  contactForm.value = {
    lastName: "", middleName: "", firstName: "",
    complainantLastName: "", complainantMiddleName: "", complainantFirstName: "",
    isSameAsComplainant: true,
    email: "", contactNo: "", mafNo: "",
    planType: null, concern: null, description: "", attachments: [], dynamicAnswers: {},
  };
  contactFormErrors.value = {
    lastName: "", middleName: "", firstName: "",
    complainantLastName: "", complainantMiddleName: "", complainantFirstName: "",
    email: "", contactNo: "", mafNo: "", planType: "", concern: "", description: "",
  };
  rateLimitError.value = "";
};

const openContactDialog = () => { contactDialog.value = true; };
const closeContactDialog = () => { contactDialog.value = false; resetContactForm(); };

const submitContactForm = async () => {
  contactFormErrors.value = {
    lastName: "", middleName: "", firstName: "",
    complainantLastName: "", complainantMiddleName: "", complainantFirstName: "",
    email: "", contactNo: "", mafNo: "", planType: "", concern: "", description: "",
  };
  rateLimitError.value = "";

  const { valid } = await contactFormRef.value?.validate();
  if (!valid) return;

  submitting.value = true;
  try {
    const messageData = {
      title: \`\${contactForm.value.concern?.title || 'Contact Support'} - \${contactForm.value.planType?.title || 'General Inquiry'}\`,
      description: contactForm.value.description,
      email: contactForm.value.email,
      contact_no: contactForm.value.contactNo,
      maf_no: contactForm.value.mafNo,
      last_name: contactForm.value.lastName,
      middle_name: contactForm.value.middleName || '',
      first_name: contactForm.value.firstName,
      complainant_last_name: contactForm.value.isSameAsComplainant ? contactForm.value.lastName : contactForm.value.complainantLastName,
      complainant_middle_name: contactForm.value.isSameAsComplainant ? (contactForm.value.middleName || '') : (contactForm.value.complainantMiddleName || ''),
      complainant_first_name: contactForm.value.isSameAsComplainant ? contactForm.value.firstName : contactForm.value.complainantFirstName,
      plan: contactForm.value.planType?.title || '',
      concern_info: [
        { title: 'Concern', value: contactForm.value.concern?.title || '' },
        ...(contactForm.value.concern?.fields || []).map(f => ({
          title: f.label,
          value: Array.isArray(contactForm.value.dynamicAnswers[f.title])
            ? contactForm.value.dynamicAnswers[f.title].join(', ')
            : contactForm.value.dynamicAnswers[f.title] || ''
        }))
      ],
      files: contactForm.value.attachments,
    };

    await messageService.add(messageData);
    successMessage.value = "Your message has been sent successfully! We'll respond within 24 hours.";
    snackbar.value = { show: true, text: successMessage.value, color: "success" };
    resetContactForm();
    contactDialog.value = false;
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    if (typeof error === 'object' && error !== null && !(error instanceof Error)) {
      contactFormErrors.value = {
        lastName: error.last_name?.[0] || "",
        middleName: error.middle_name?.[0] || "",
        firstName: error.first_name?.[0] || "",
        complainantLastName: error.complainant_last_name?.[0] || "",
        complainantMiddleName: error.complainant_middle_name?.[0] || "",
        complainantFirstName: error.complainant_first_name?.[0] || "",
        email: error.email?.[0] || "",
        contactNo: error.contact_no?.[0] || "",
        mafNo: error.maf_no?.[0] || "",
        planType: error.plan?.[0] || "",
        concern: error.concern?.[0] || "",
        description: error.description?.[0] || "",
      };
    } else {
      const errorMsg = error instanceof Error ? error.message : (error.message || "Failed to send message. Please try again.");
      if (errorMsg.toLowerCase().includes('rate limit') || errorMsg.toLowerCase().includes('too many')) {
        rateLimitError.value = errorMsg;
      } else {
        snackbar.value = { show: true, text: errorMsg, color: "error" };
      }
    }
  } finally {
    submitting.value = false;
  }
};

watch(contactDialog, (newVal) => {
  showContactIcon.value = !newVal;
});

watch(
  () => contactForm.value.planType,
  () => {
    contactForm.value.concern = null;
    contactForm.value.dynamicAnswers = {};
  }
);

// Scroll to top when page loads
onMounted(() => {
  window.scrollTo(0, 0);
  AOS.init({ duration: 1500, once: false, mirror: true, offset: 120 });
  fetchPlanTypes();
  fetchConcerns();
});

// Function to navigate to home page with section
const goToHomeSection = (sectionId) => {
  router.push("/").then(() => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 65;
        const extraOffset = 15;
        const yOffset = -(headerHeight + extraOffset);
        let el = element;
        let y = 0;
        while (el) { y += el.offsetTop; el = el.offsetParent; }
        window.scrollTo({ top: y + yOffset, behavior: "smooth" });
      }
    }, 300);
  });
};

// Function to navigate to other product pages
const goToProductsPage = (route) => {
  drawer.value = false;
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  router.push(route);
};

// Function to scroll within this page
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 65;
    const extraOffset = 15;
    const yOffset = -(headerHeight + extraOffset);
    let el = element;
    let y = 0;
    while (el) { y += el.offsetTop; el = el.offsetParent; }
    window.scrollTo({ top: y + yOffset, behavior: "smooth" });
  }
};

const showPlanDetails = (planId) => {
  selectedPlan.value = planDetails[planId];
  showPlanDialog.value = true;
};

const contactForPlan = () => {
  showPlanDialog.value = false;
  goToHomeSection("contact");
};
</script>`;

// Replace from <script setup> to </script>
const scriptStart = content.indexOf('<script setup>');
const scriptEnd = content.indexOf('</script>') + '</script>'.length;

if (scriptStart === -1 || scriptEnd === -1) {
  console.error('Could not find script block!');
  process.exit(1);
}

const newContent = content.substring(0, scriptStart) + correctScript + content.substring(scriptEnd);
fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('GoodlifePlans.vue script section rewritten successfully!');
