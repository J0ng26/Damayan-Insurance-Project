<template>
  <div class="legal-page-wrapper">
    <v-container class="py-12" style="max-width: 800px;">
      <!-- Subtle Back Link -->
      <div class="mb-12">
        <router-link to="/" class="back-link d-inline-flex align-center">
          <v-icon size="small" class="mr-2">mdi-arrow-left</v-icon>
          Return to Home
        </router-link>
      </div>

      <!-- Header -->
      <header class="mb-16">
        <h1 class="text-h2 font-weight-bold mb-4 text-grey-darken-4 letter-spacing-tight">Terms & Conditions</h1>
        <div class="d-flex align-center text-grey-darken-1">
          <v-icon size="small" class="mr-2">mdi-calendar</v-icon>
          <span class="text-overline tracking-wider">Effective Date: {{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
        </div>
      </header>

      <!-- Content -->
      <article class="legal-content">
        <p class="lead-paragraph mb-10">
          Welcome to our website. By accessing and using this website, you accept and agree to be bound 
          by the terms and provision of this agreement. In addition, when using this website's particular services, 
          you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">1. Acceptance of Terms</h2>
          <p>
            Any participation in this service will constitute acceptance of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">2. Intellectual Property Rights</h2>
          <p>
            The site and its original content, features, and functionality are owned by us and are protected by 
            international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">3. User Responsibilities</h2>
          <p>
            As a user of this website, you are responsible for maintaining the confidentiality of your account and password 
            and for restricting access to your computer. You agree to accept responsibility for all activities that occur 
            under your account or password.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">4. Limitation of Liability</h2>
          <p>
            In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for 
            damages, direct or consequential, resulting from your use of the site, and you agree to defend, indemnify and hold 
            us harmless from any claims, losses, liability costs and expenses.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>
      </article>

      <v-divider class="my-12" color="grey-lighten-2"></v-divider>

      <div class="text-center text-caption text-grey-darken-1">
        &copy; {{ new Date().getFullYear() }} Goodlife Damayan Insurance Agency Co. All rights reserved.
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.legal-page-wrapper {
  min-height: 100vh;
  background-color: #fafafa;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.back-link {
  text-decoration: none;
  color: #757575;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease;
  letter-spacing: 0.5px;
}

.back-link:hover {
  color: #1a1a1a;
}

.letter-spacing-tight {
  letter-spacing: -0.02em !important;
}

.tracking-wider {
  letter-spacing: 0.05em !important;
}

.legal-content p {
  color: #424242;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-weight: 400;
}

.lead-paragraph {
  font-size: 1.15rem !important;
  color: #616161 !important;
  line-height: 1.7;
}

.legal-content section {
  border-left: 2px solid transparent;
  padding-left: 0;
  transition: all 0.3s ease;
}

.legal-content section:hover {
  border-left-color: #e0e0e0;
  padding-left: 1rem;
}
</style>
