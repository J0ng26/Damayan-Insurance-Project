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
        <h1 class="text-h2 font-weight-bold mb-4 text-grey-darken-4 letter-spacing-tight">Privacy Policy</h1>
        <div class="d-flex align-center text-grey-darken-1">
          <v-icon size="small" class="mr-2">mdi-calendar</v-icon>
          <span class="text-overline tracking-wider">Effective Date: {{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
        </div>
      </header>

      <!-- Content -->
      <article class="legal-content">
        <p class="lead-paragraph mb-10">
          This Privacy Policy describes how we collect, use, process, and disclose your information, 
          including personal information, in conjunction with your access to and use of our platform.
        </p>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">1. Information We Collect</h2>
          <p>
            We collect information that you share with us directly when you use our services, 
            such as when you create an account, contact customer support, or interact with our platform. 
            This may include your name, email address, phone number, and other relevant details.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">2. How We Use Information</h2>
          <p>
            We use, store, and process information, including personal information, about you to provide, 
            understand, improve, and develop our platform, create and maintain a trusted and safer environment, 
            and comply with our legal obligations.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">3. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our platform and hold certain information. 
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">4. Sharing and Disclosure</h2>
          <p>
            We do not share your personal information with third parties without your consent, 
            except as necessary to provide our services, comply with the law, or protect our rights.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">5. Your Rights</h2>
          <p>
            You may exercise any of the rights described in this section consistent with applicable law. 
            You have the right to request access to or deletion of your personal information.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-h5 font-weight-bold mb-4 text-grey-darken-4">6. Contact Us</h2>
          <p>
            If you have any questions or complaints about this Privacy Policy or our information handling practices, 
            you may contact us via our provided support channels.
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
