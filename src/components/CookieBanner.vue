<template>
  <v-slide-y-reverse-transition>
    <div v-if="showBanner" class="cookie-banner-wrapper">
      <div class="cookie-banner-content bg-grey-darken-4 rounded-lg elevation-12 px-6 py-4 mx-auto">
        <div class="d-flex flex-column flex-sm-row align-center w-100 justify-space-between gap-4">
          <div class="text-body-2 mb-3 mb-sm-0 flex-grow-1 text-white">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. 
            <router-link to="/privacy-policy" class="text-decoration-none text-primary font-weight-bold">Read our Privacy Policy</router-link>.
          </div>
          <div class="d-flex gap-2 flex-shrink-0">
            <v-btn
              color="white"
              variant="outlined"
              size="small"
              @click="decline"
            >
              Decline
            </v-btn>
            <v-btn
              color="primary"
              variant="flat"
              size="small"
              @click="accept"
            >
              Accept All
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-slide-y-reverse-transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { cookieConsentService } from '@/plugins/api';

const showBanner = ref(false);

onMounted(() => {
  console.log('CookieBanner mounted. Checking consent...');
  const consent = localStorage.getItem('cookie_consent');
  console.log('Current consent:', consent);
  if (!consent) {
    setTimeout(() => {
      console.log('Showing banner now.');
      showBanner.value = true;
    }, 1000);
  }
});

const handleConsent = async (status: 'accepted' | 'declined') => {
  showBanner.value = false;
  localStorage.setItem('cookie_consent', status);
  
  try {
    await cookieConsentService.add({ status });
    console.log('Consent submitted successfully:', status);
  } catch (e) {
    console.error('Failed to submit consent:', e);
    // Silently fail as it is just tracking
  }
};

const accept = () => handleConsent('accepted');
const decline = () => handleConsent('declined');
</script>

<style scoped>
.cookie-banner-wrapper {
  position: fixed;
  bottom: 24px;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 0 16px;
  pointer-events: none; /* Let clicks pass through the wrapper */
}

.cookie-banner-content {
  max-width: 900px;
  width: 100%;
  pointer-events: auto; /* Catch clicks on the actual banner */
}

.gap-4 {
  gap: 16px;
}
.gap-2 {
  gap: 8px;
}
</style>
