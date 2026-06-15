<template>
  <div>
    <!-- Navigation Bar - Consistent with GoodlifePlans.vue -->
    <v-app-bar
      color="#F5F5F5"
      elevation="1"
      height="65"
      app
      fixed
      class="custom-app-bar"
    >
      <v-container class="d-flex align-center px-7" max-width="1650">
        <div class="d-flex align-center">
          <img
            src="@/assets/images/damayan.png"
            alt="Goodlife Logo"
            style="width: 60px; height: 40px; margin-right: 12px"
          />

          <div class="d-flex flex-column">
            <span class="text-subtitle-1 font-weight-bold text-black">
              Goodlife Damayan Insurance Agency Co.
            </span>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="d-none d-md-flex align-center">
          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            @click="goToHomeSection('home')"
          >
            Home
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            @click="goToHomeSection('about')"
          >
            About
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            @click="goToHomeSection('blog')"
          >
            Blog
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            @click="goToHomeSection('legalities')"
          >
            Legalities
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            @click="goToHomeSection('features')"
          >
            Features
          </v-btn>

          <!-- Products Dropdown -->
          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                class="text-capitalize text-body-2 mx-2 nav-btn"
                :class="{
                  'active-link': $route.path.includes('products'),
                }"
              >
                Products
                <v-icon end>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list density="compact">
              <v-list-item
                v-for="item in productsMenuItems"
                :key="item.route"
                @click="goToProductsPage(item.route)"
                :class="{
                  'active-submenu': $route.path === item.route,
                }"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            @click="goToHomeSection('contact')"
          >
            Contact us
          </v-btn>
        </div>

        <!-- Mobile Menu Button -->
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      style="
        position: fixed;
        top: 65px;
        height: calc(100% - 65px);
        z-index: 3000;
      "
    >
      <v-list nav dense>
        <v-list-item
          title="Home"
          @click="
            goToHomeSection('home');
            drawer = false;
          "
        ></v-list-item>
        <v-list-item
          title="About"
          @click="
            goToHomeSection('about');
            drawer = false;
          "
        ></v-list-item>
        <v-list-item
          title="Blog"
          @click="
            drawer = false;
            goToHomeSection('blog');
          "
        ></v-list-item>
        <v-list-item
          title="Legalities"
          @click="
            goToHomeSection('legalities');
            drawer = false;
          "
        ></v-list-item>
        <v-list-item
          title="Features"
          @click="
            goToHomeSection('features');
            drawer = false;
          "
        ></v-list-item>

        <!-- Products Section with Expandable Items -->
        <v-list-group value="Products">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Products"></v-list-item>
          </template>
          <v-list-item
            v-for="item in productsMenuItems"
            :key="item.route"
            @click="
              goToProductsPage(item.route);
              drawer = false;
            "
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item
          title="Contact"
          @click="
            goToHomeSection('contact');
            drawer = false;
          "
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ============ FIXED CONTACT ICON WITH BOUNCE ANIMATION ============ -->
    <div 
      v-if="showContactIcon" 
      class="fixed-contact-icon bounce-animation" 
      @click="contactDialog = true"
    >
      <v-icon size="28">mdi-headset</v-icon>
      <span class="contact-icon-tooltip">Contact Support</span>
    </div>

    <!-- ============ CONTACT INFORMATION DIALOG - MINIMALIST DESIGN ============ -->
    <v-dialog v-model="contactDialog" max-width="1200" persistent scrollable>
      <v-card rounded="lg" elevation="0" class="contact-dialog-minimal contact-dialog-split">
        <div class="d-flex justify-space-between align-center px-6 pt-5 pb-2">
          <span class="text-h6 font-weight-bold" style="color: #1f2937">Contact Us</span>
          <v-btn
            icon="mdi-close"
            variant="text"
            size="small"
            aria-label="Close"
            @click="contactDialog = false"
          ></v-btn>
        </div>
        <v-divider />

        <v-card-text class="pa-0">
          <v-row class="ma-0 flex-column flex-md-row contact-split-row">
            <v-col cols="12" md="4" class="pa-5 pa-md-6 contact-split-sidebar">
              <p class="contact-split-subtitle mb-5" style="max-width: none">
                Any question? We would be happy to help you.
              </p>
              <div class="d-flex flex-column ga-4">
                <div class="contact-info-tile">
                  <div class="contact-info-tile__icon">
                    <v-icon size="20">mdi-phone</v-icon>
                  </div>
                  <div>
                    <div class="text-caption text-medium-emphasis text-uppercase letter-spacing mb-1">Phone</div>
                    <div class="contact-info-tile__text font-weight-medium">(082) 333 1809</div>
                  </div>
                </div>
                <a href="mailto:info@goodlifedamayan.com" class="text-decoration-none">
                  <div class="contact-info-tile contact-info-tile--email">
                    <div class="contact-info-tile__icon">
                      <v-icon size="20">mdi-email-outline</v-icon>
                    </div>
                    <div>
                      <div class="text-caption text-medium-emphasis text-uppercase letter-spacing mb-1">Email</div>
                      <div class="contact-info-tile__text font-weight-medium">info@goodlifedamayan.com</div>
                    </div>
                  </div>
                </a>
                <div class="contact-info-tile">
                  <div class="contact-info-tile__icon">
                    <v-icon size="20">mdi-map-marker-outline</v-icon>
                  </div>
                  <div>
                    <div class="text-caption text-medium-emphasis text-uppercase letter-spacing mb-1">Address</div>
                    <div class="contact-info-tile__text font-weight-medium">
                      Goodlife Building, National Highway, San Jose, Digos City
                    </div>
                  </div>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="7" class="pa-5 pa-md-6 contact-split-form-col">
              <v-form ref="contactFormRef" v-model="formValid" class="contact-split-form" @submit.prevent="submitContactForm">
                <!-- Honeypot -->
                <v-text-field v-model="contactFormHoneypot" class="d-none" autocomplete="off" tabindex="-1"></v-text-field>
                <label class="contact-form-label" for="contact-dlg-maf">
                  {{ CONTACT_SPLIT_FIELDS.maf.label }}
                </label>
                <v-text-field
                  id="contact-dlg-maf"
                  v-model="contactForm.mafNo"
                  type="text"
                  :placeholder="CONTACT_SPLIT_FIELDS.maf.hint"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  :rules="[rules.required]"
                  :error-messages="contactFormErrors.mafNo"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-input mb-5"
                ></v-text-field>

                <v-row dense class="mb-2">
                  <v-col cols="12" sm="4">
                    <label class="contact-form-label" for="contact-dlg-first">
                      {{ CONTACT_SPLIT_FIELDS.firstName.label }}
                    </label>
                    <v-text-field
                      id="contact-dlg-first"
                      v-model="contactForm.firstName"
                      :placeholder="CONTACT_SPLIT_FIELDS.firstName.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required, rules.alphabetic]"
                      :error-messages="contactFormErrors.firstName"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <label class="contact-form-label" for="contact-dlg-last">
                      {{ CONTACT_SPLIT_FIELDS.lastName.label }}
                    </label>
                    <v-text-field
                      id="contact-dlg-last"
                      v-model="contactForm.lastName"
                      :placeholder="CONTACT_SPLIT_FIELDS.lastName.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required, rules.alphabetic]"
                      :error-messages="contactFormErrors.lastName"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <label class="contact-form-label" for="contact-dlg-middle">
                      {{ CONTACT_SPLIT_FIELDS.middleName.label }}
                    </label>
                    <v-text-field
                      id="contact-dlg-middle"
                      v-model="contactForm.middleName"
                      :placeholder="CONTACT_SPLIT_FIELDS.middleName.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.alphabetic]"
                      :error-messages="contactFormErrors.middleName"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-checkbox
                  v-model="contactForm.isSameAsComplainant"
                  label="Complainant is the same as the personal information above"
                  density="compact"
                  hide-details
                  color="grey-darken-3"
                  class="mt-0 mb-2"
                ></v-checkbox>

                <template v-if="!contactForm.isSameAsComplainant">
                  <p class="text-body-2 font-weight-bold text-grey-darken-3 mb-3 mt-2">
                    Complainant
                  </p>
                  <v-row dense class="mb-2">
                    <v-col cols="12" sm="4">
                      <label class="contact-form-label" for="contact-dlg-c-first">
                        {{ CONTACT_SPLIT_FIELDS.firstName.label }}
                      </label>
                      <v-text-field
                        id="contact-dlg-c-first"
                        v-model="contactForm.complainantFirstName"
                        :placeholder="CONTACT_SPLIT_FIELDS.firstName.hint"
                        variant="outlined"
                        density="comfortable"
                        hide-details="auto"
                        :rules="[rules.required, rules.alphabetic]"
                        :error-messages="contactFormErrors.complainantFirstName"
                        bg-color="white"
                        color="grey-darken-2"
                        class="minimal-input mb-5"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <label class="contact-form-label" for="contact-dlg-c-last">
                        {{ CONTACT_SPLIT_FIELDS.lastName.label }}
                      </label>
                      <v-text-field
                        id="contact-dlg-c-last"
                        v-model="contactForm.complainantLastName"
                        :placeholder="CONTACT_SPLIT_FIELDS.lastName.hint"
                        variant="outlined"
                        density="comfortable"
                        hide-details="auto"
                        :rules="[rules.required, rules.alphabetic]"
                        :error-messages="contactFormErrors.complainantLastName"
                        bg-color="white"
                        color="grey-darken-2"
                        class="minimal-input mb-5"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <label class="contact-form-label" for="contact-dlg-c-middle">
                        {{ CONTACT_SPLIT_FIELDS.middleName.label }}
                      </label>
                      <v-text-field
                        id="contact-dlg-c-middle"
                        v-model="contactForm.complainantMiddleName"
                        :placeholder="CONTACT_SPLIT_FIELDS.middleName.hint"
                        variant="outlined"
                        density="comfortable"
                        hide-details="auto"
                        :rules="[rules.alphabetic]"
                        :error-messages="contactFormErrors.complainantMiddleName"
                        bg-color="white"
                        color="grey-darken-2"
                        class="minimal-input mb-5"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </template>

                <label class="contact-form-label" for="contact-dlg-email">
                  {{ CONTACT_SPLIT_FIELDS.email.label }}
                </label>
                <v-text-field
                  id="contact-dlg-email"
                  v-model="contactForm.email"
                  :placeholder="CONTACT_SPLIT_FIELDS.email.hint"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  :rules="[rules.required, rules.email]"
                  :error-messages="contactFormErrors.email"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-input mb-5"
                ></v-text-field>

                <label class="contact-form-label" for="contact-dlg-phone">
                  {{ CONTACT_SPLIT_FIELDS.phone.label }}
                </label>
                <v-text-field
                  id="contact-dlg-phone"
                  v-model="contactForm.contactNo"
                  :placeholder="CONTACT_SPLIT_FIELDS.phone.hint"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  :rules="[rules.required, rules.phone]"
                  :error-messages="contactFormErrors.contactNo"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-input mb-5"
                ></v-text-field>

                <v-row dense>
                  <v-col cols="12" md="12">
                    <label class="contact-form-label" for="contact-dlg-concern">
                      {{ CONTACT_SPLIT_FIELDS.concern.label }}
                    </label>
                    <v-select
                      id="contact-dlg-concern"
                      v-model="contactForm.concern"
                      :items="concernsList"
                      :placeholder="CONTACT_SPLIT_FIELDS.concern.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required]"
                      :error-messages="contactFormErrors.concern"
                      bg-color="white"
                      color="grey-darken-2"
                      item-title="title"
                      item-value="id"
                      return-object
                      clearable
                      class="minimal-select mb-5"
                    ></v-select>
                  </v-col>
                </v-row>

                <!-- Dynamic Form Fields (Dialog) -->
                <template v-if="contactForm.concern && contactForm.concern.fields && contactForm.concern.fields.length > 0">
                  <div
                    v-for="field in contactForm.concern.fields"
                    :key="field.title"
                    class="mb-4"
                  >
                    <label class="contact-form-label">
                      {{ field.label }}<span v-if="field.required" class="text-error"> *</span>
                    </label>
                    <v-text-field
                      v-if="field.type === 'text' || !field.type"
                      v-model="contactForm.dynamicAnswers[field.title]"
                      :placeholder="field.title + (field.required ? ' *' : '')"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="field.required ? [rules.required] : []"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-field"
                    ></v-text-field>
                    <v-textarea
                      v-else-if="field.type === 'textarea'"
                      v-model="contactForm.dynamicAnswers[field.title]"
                      :placeholder="field.title + (field.required ? ' *' : '')"
                      variant="outlined"
                      density="comfortable"
                      rows="3"
                      auto-grow
                      hide-details="auto"
                      :rules="field.required ? [rules.required] : []"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-field"
                    ></v-textarea>
                    <v-select
                      v-else-if="field.type === 'select'"
                      v-model="contactForm.dynamicAnswers[field.title]"
                      :items="field.options || []"
                      :placeholder="field.title + (field.required ? ' *' : '')"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="field.required ? [rules.required] : []"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-field"
                    ></v-select>
                    <div v-else-if="field.type === 'radio'" class="d-flex flex-column">
                      <v-radio-group
                        v-model="contactForm.dynamicAnswers[field.title]"
                        hide-details="auto"
                        :rules="field.required ? [rules.required] : []"
                        density="compact"
                      >
                        <v-radio
                          v-for="opt in field.options || []"
                          :key="opt"
                          :label="opt"
                          :value="opt"
                          color="primary"
                        ></v-radio>
                      </v-radio-group>
                    </div>
                    <div v-else-if="field.type === 'checkbox'" class="d-flex flex-column">
                      <v-input
                        v-model="contactForm.dynamicAnswers[field.title]"
                        :rules="field.required ? [rules.required] : []"
                        hide-details="auto"
                      >
                        <div class="d-flex flex-wrap">
                          <v-checkbox
                            v-for="opt in field.options || []"
                            :key="opt"
                            v-model="contactForm.dynamicAnswers[field.title]"
                            :value="opt"
                            :label="opt"
                            multiple
                            hide-details
                            density="compact"
                            color="primary"
                            class="mr-4"
                          ></v-checkbox>
                        </div>
                      </v-input>
                    </div>
                  </div>
                </template>

                <label class="contact-form-label" for="contact-dlg-message">
                  {{ CONTACT_SPLIT_FIELDS.message.label }}
                </label>
                <v-textarea
                  id="contact-dlg-message"
                  v-model="contactForm.description"
                  :placeholder="CONTACT_SPLIT_FIELDS.message.hint"
                  variant="outlined"
                  rows="4"
                  auto-grow
                  hide-details="auto"
                  :rules="[rules.required]"
                  :error-messages="contactFormErrors.description"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-textarea mb-4"
                ></v-textarea>

                <label class="contact-form-label" for="contact-dlg-files">
                  {{ CONTACT_SPLIT_FIELDS.attachment.label }}
                </label>
                <v-file-input
                  id="contact-dlg-files"
                  v-model="contactForm.attachments"
                  :placeholder="CONTACT_SPLIT_FIELDS.attachment.hint"
                  variant="outlined"
                  density="comfortable"
                  prepend-icon=""
                  prepend-inner-icon="mdi-paperclip"
                  multiple
                  chips
                  show-size
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-input contact-file-field mb-6"
                  hide-details="auto"
                  accept=".jpg, .jpeg, .png, .pdf, image/jpeg, image/png, application/pdf"
                  :rules="[rules.file]"
                ></v-file-input>

                <v-expand-transition>
                  <v-alert
                    v-if="rateLimitError"
                    type="warning"
                    variant="tonal"
                    class="mb-6 rounded-lg"
                    border="start"
                    icon="mdi-alert-octagon"
                    closable
                    @click:close="rateLimitError = ''"
                  >
                    <div class="text-subtitle-2 font-weight-bold mb-1">Submission Limit Reached</div>
                    <div class="text-caption">{{ rateLimitError }}</div>
                  </v-alert>
                </v-expand-transition>

                <div class="d-flex flex-column flex-sm-row ga-2 ga-sm-4 align-sm-center mb-2 contact-form-actions">
                  <v-btn
                    type="submit"
                    block
                    size="large"
                    variant="flat"
                    class="contact-btn-send flex-grow-1"
                    :loading="submitting"
                    :disabled="submitting"
                  >
                    Send Message
                    <v-icon end size="20">mdi-send</v-icon>
                  </v-btn>
                </div>

                <v-expand-transition>
                  <div v-if="submitting" class="mt-4 text-center">
                    <v-progress-linear
                      indeterminate
                      color="grey-darken-2"
                      height="2"
                      class="mb-2 rounded"
                    ></v-progress-linear>
                    <span class="text-caption text-medium-emphasis">
                      Sending your message, please wait…
                    </span>
                  </div>
                </v-expand-transition>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Notification Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="4000"
      :color="snackbar.color || 'success'"
      location="top"
      rounded="pill"
    >
      <div class="d-flex align-center">
        <v-icon class="mr-3">{{ snackbar.color === 'error' ? 'mdi-alert-circle' : 'mdi-check-circle' }}</v-icon>
        <span>{{ snackbar.text }}</span>
      </div>
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-main>
      <!-- Products Hero Section - Consistent with other pages -->
      <div class="products-hero">
        <!-- Background Image -->
        <img
          src="@/assets/images/family.jpg"
          alt="Insurance Products Banner"
          class="products-hero-image"
        />

        <!-- Dark Overlay -->
        <div class="products-hero-overlay"></div>

        <!-- MICRO INSURANCE LOGO - Consistent positioning -->
        <img
          src="@/assets/images/micro-insurance.png"
          alt="Micro Insurance Logo"
          class="products-banner-logo"
        />

        <div class="banner-content">
          <v-container class="fill-height">
            <v-row align="center" class="fill-height" data-aos="fade-up">
              <v-col cols="12" sm="12" md="7" class="text-center text-md-start">
                <h1 class="banner-title mb-4">
                  Our Insurance Products
                </h1>

                <!-- Marketing Highlight -->
                <div class="marketing-badge mb-4">
                  <v-chip color="success" variant="flat" size="large" class="font-weight-bold mr-2">
                    <v-icon start>mdi-account</v-icon>
                    Individual: ₱375/month
                  </v-chip>
                  <v-chip color="primary" variant="flat" size="large" class="font-weight-bold">
                    <v-icon start>mdi-account-group</v-icon>
                    Family: ₱650/month
                  </v-chip>
                </div>
                
                <p class="banner-subtitle mb-8">
                  Discover comprehensive insurance solutions designed to protect
                  what matters most in your life. <strong>Get up to ₱30,000 coverage (Individual) or ₱50,000+ (Family) with 5-year payment term and premium waiver benefit!</strong>
                </p>
                
                <v-btn
                  color="white"
                  size="large"
                  class="text-primary text-capitalize explore-btn"
                  @click="scrollToSection('product-list')"
                >
                  <span class="button-text">View All Products</span>
                  <v-icon end>mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" md="5" class="text-center">
                <!-- Optional: You can add an image here like other pages if needed -->
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>

      <v-container id="product-list" class="py-16">
        <!-- Section Header -->
        <v-row class="text-center" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold mt-16 section-title">
              AVAILABLE INDIVIDUAL INSURANCE PRODUCT
            </h3>
            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 80px; background-color: #03a635"
            />
            <p class="text-body-2 text-grey-darken-1">
              Choose from our flexible contribution plans
            </p>
          </v-col>
        </v-row>

        <!-- Individual Insurance Products Header -->
        <v-row class="mb-8" data-aos="fade-up">
          <v-col cols="12">
            <h3
              class="text-h4 font-weight-bold text-center"
              style="color: #4a4561"
            >
              INDI Contribution Terms
            </h3>
          </v-col>
        </v-row>

        <!-- Premium Table Section -->
        <v-row justify="center">
          <v-col cols="12" md="12" lg="11">
            <!-- Minimal Payment Grid -->
            <v-row class="mb-6" data-aos="fade-up">
              <v-col
                cols="12"
                md="6"
                v-for="term in contributionTerms"
                :key="term.name"
              >
                <v-card
                  variant="outlined"
                  class="rounded-lg pa-4 h-100"
                  :class="{ 'border-primary': term.mostPopular }"
                >
                  <!-- Simple Header -->
                  <div class="d-flex align-center mb-4">
                    <v-icon
                      :icon="term.icon"
                      size="20"
                      color="grey-darken-2"
                      class="mr-3"
                    ></v-icon>
                    <span
                      class="text-subtitle-1 font-weight-medium"
                      :class="`text-${term.color}`"
                    >
                      {{ term.name }}
                    </span>
                    <v-spacer></v-spacer>
                    <v-chip
                      v-if="term.mostPopular"
                      color="primary"
                      variant="outlined"
                      size="x-small"
                      class="text-caption font-weight-medium"
                    >
                      MOST POPULAR
                    </v-chip>
                  </div>

                  <!-- Clean Amount Display -->
                  <div class="text-center mb-5">
                    <div
                      class="text-h4 font-weight-regular text-grey-darken-4 mb-1"
                    >
                      {{ term.amount }}
                    </div>
                    <div class="text-caption-2 text-grey-darken-2">
                      {{ term.period }}
                    </div>
                  </div>

                  <!-- Subtle Divider -->
                  <v-divider class="mb-4"></v-divider>

                  <!-- Total Contribution & Term Info -->
                  <div class="text-center">
                    <!-- Total Contribution -->
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Total Contribution
                    </div>
                    <div
                      class="text-h6 font-weight-medium text-grey-darken-4 mb-3"
                    >
                      {{ term.total }}
                    </div>

                    <!-- Term Length -->
                    <div v-if="term.termLength" class="mb-3">
                      <div class="text-overline text-grey-darken-2 mb-1">
                        Term Length
                      </div>
                      <v-chip
                        color="primary"
                        variant="outlined"
                        size="small"
                        class="text-caption font-weight-medium"
                      >
                        {{ term.termLength }}
                      </v-chip>
                    </div>

                    <!-- Additional Info -->
                    <div
                      v-if="term.additionalInfo"
                      class="text-caption text-grey-darken-1 mt-2"
                    >
                      {{ term.additionalInfo }}
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- Benefit Coverage Section - Redesigned with wcg-card -->
      <v-container id="benefit-coverage" class="py-16">
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h3 font-weight-bold mb-4" style="color: #1a202c">Benefit Coverage</h3>
            <v-divider class="mx-auto mb-4" thickness="2" style="max-width: 60px; background-color: #03a635" />
            <h4 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">INDI</h4>
            <p class="text-body-1 text-grey-darken-2" style="max-width: 600px; margin: 0 auto">
              Upon death of a member, his/her beneficiaries shall be entitled to the following:
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-12" data-aos="fade-up">
          <v-col cols="12" md="6" lg="10">
            <v-row>
              <!-- Basic Life Insurance Card -->
              <v-col cols="12" md="4" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#3e3a5b">mdi-heart</v-icon>
                    </div>
                  </div>
                  <h3 class="wcg-card__name">Basic Life Insurance</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Applicable for Principal:</strong> 18-60 Years Old</p>
                    <p class="mb-2"><strong>Cash Assistance:</strong> <span class="text-h6 font-weight-bold text-primary">₱25,000.00</span></p>
                    <p><strong>Contestability:</strong> 1 Year (12 Months)</p>
                  </div>
                </div>
              </v-col>

              <!-- Accidental Death Insurance Card -->
              <v-col cols="12" md="4" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#3e3a5b">mdi-car-brake-alert</v-icon>
                    </div>
                  </div>
                  <h3 class="wcg-card__name">Accidental Death Insurance</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Applicable for Principal:</strong> 18-60 Years Old</p>
                    <p class="mb-2"><strong>Cash Assistance:</strong> <span class="text-h6 font-weight-bold text-primary">₱25,000.00</span></p>
                    <p><strong>Contestability:</strong> 24 Hours <span class="text-red" style="font-size: 11px;">(Strictly for Vehicular Accidents)</span></p>
                  </div>
                </div>
              </v-col>

              <!-- Cash Assistance Card -->
              <v-col cols="12" md="4" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#3e3a5b">mdi-cash</v-icon>
                    </div>
                  </div>
                  <h3 class="wcg-card__name">Cash Assistance</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Applicable for Principal:</strong> 18-60 Years Old</p>
                    <p class="mb-2"><strong>Cash Assistance:</strong> <span class="text-h6 font-weight-bold text-primary">₱5,000.00</span></p>
                    <p><strong>Contestability:</strong> 1 Year (Natural) / 24 Hours (Accident)</p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- PRINCIPAL BENEFIT COVERAGE SECTION (INDI) -->
      <v-container id="principal-benefit-coverage" class="py-16">
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h3 font-weight-bold mb-4" style="color: #1a202c">Principal Benefit Coverage | INDI</h3>
            <v-divider class="mx-auto mb-4" thickness="2" style="max-width: 60px; background-color: #03a635" />
            <p class="text-body-1 text-grey-darken-2" style="max-width: 600px; margin: 0 auto">Sample Detailed Computation</p>
          </v-col>
        </v-row>

        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="12" lg="10">
            <v-row>
              <!-- Natural Death Card -->
              <v-col cols="12" md="6" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#1e3a8a">mdi-heart</v-icon>
                    </div>
                    <span class="wcg-card__num">01</span>
                  </div>
                  <h3 class="wcg-card__name" style="color: #1e3a8a;">Natural Death</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Requirements:</strong> Double benefits with 1 year contestability <span class="text-red">(18–60 years old)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Payment Computation:</strong> Total Contract Savings: ₱31,500</p>
                    <p class="mb-2">• 375 x 12 Months: ₱4,500 <span class="text-red">(Balance waived: ₱27,000)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Coverage Computation:</strong></p>
                    <p class="mb-1">• Basic Life Coverage: ₱25,000</p>
                    <p>• Cash Assistance Benefit: ₱5,000</p>
                  </div>
                  <div class="wcg-card__tag">Total: ₱30,000</div>
                </div>
              </v-col>

              <!-- Accidental Death Card -->
              <v-col cols="12" md="6" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#dc2626">mdi-flash</v-icon>
                    </div>
                    <span class="wcg-card__num">02</span>
                  </div>
                  <h3 class="wcg-card__name" style="color: #dc2626;">Accidental Death</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Requirements:</strong> Triple benefits with 24 Hours contestability <span class="text-red">(18–60 years old)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Payment Computation:</strong> Total Contract Savings: ₱31,500</p>
                    <p class="mb-2">• 375 x 1 Month: ₱375 <span class="text-red">(Balance waived: ₱31,125)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Coverage Computation:</strong></p>
                    <p class="mb-1">• Basic Life Coverage: ₱25,000</p>
                    <p class="mb-1">• Accidental Coverage: ₱25,000</p>
                    <p>• Cash Assistance Benefit: ₱5,000</p>
                  </div>
                  <div class="wcg-card__tag">Total: ₱55,000</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Comparison Summary -->
        <v-row class="mt-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <div class="wcg-card wcg-card--bordered text-center">
              <h4 class="text-h5 font-weight-bold mb-4" style="color: #3e3a5b">Benefit Comparison</h4>
              <v-row class="text-center">
                <v-col cols="12" md="6">
                  <div class="text-h4 font-weight-bold mb-2" style="color: #1e3a8a">₱30,000</div>
                  <p class="text-body-2 text-grey-darken-2 mb-0">Natural Death Benefit</p>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="text-h4 font-weight-bold mb-2" style="color: #dc2626">₱55,000</div>
                  <p class="text-body-2 text-grey-darken-2 mb-0">Accidental Death Benefit</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <div
        style="
          border-top: 5px solid #e2e8f0;
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
        "
      ></div>

      <v-container id="product-list" class="py-16">
        <!-- Section Header -->
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold mb-4 mt-16 section-title">
              FAMILY INSURANCE PRODUCT
            </h3>
            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 80px; background-color: #03a635"
            />
            <p class="text-body-2 text-grey-darken-1">
              Choose from our flexible family contribution plans
            </p>
          </v-col>
        </v-row>

        <!-- Family Insurance Products Header -->
        <v-row class="mb-8" data-aos="fade-up">
          <v-col cols="12">
            <h3
              class="text-h5 font-weight-bold text-center"
              style="color: #4a4561"
            >
              FAMI Contribution Terms
            </h3>
          </v-col>
        </v-row>

        <!-- Premium Table Section -->
        <v-row justify="center">
          <v-col cols="12" md="12" lg="11">
            <!-- Minimal Payment Grid -->
            <v-row class="mb-6" data-aos="fade-up">
              <v-col
                cols="12"
                md="6"
                v-for="term in familyContributionTerms"
                :key="term.name"
              >
                <v-card
                  variant="outlined"
                  class="rounded-lg pa-4 h-100"
                  :class="{ 'border-primary': term.mostPopular }"
                >
                  <!-- Simple Header -->
                  <div class="d-flex align-center mb-4">
                    <v-icon
                      :icon="term.icon"
                      size="20"
                      color="grey-darken-2"
                      class="mr-3"
                    ></v-icon>
                    <span
                      class="text-subtitle-1 font-weight-medium"
                      :class="`text-${term.color}`"
                    >
                      {{ term.name }}
                    </span>
                    <v-spacer></v-spacer>
                    <v-chip
                      v-if="term.mostPopular"
                      color="primary"
                      variant="outlined"
                      size="x-small"
                      class="text-caption font-weight-medium"
                    >
                      MOST POPULAR
                    </v-chip>
                  </div>

                  <!-- Clean Amount Display -->
                  <div class="text-center mb-5">
                    <div
                      class="text-h4 font-weight-regular text-grey-darken-4 mb-1"
                    >
                      {{ term.amount }}
                    </div>
                    <div class="text-caption-2 text-grey-darken-2">
                      {{ term.period }}
                    </div>
                  </div>

                  <!-- Subtle Divider -->
                  <v-divider class="mb-4"></v-divider>

                  <!-- Total Contribution & Term Info -->
                  <div class="text-center">
                    <!-- Total Contribution -->
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Total Contribution
                    </div>
                    <div
                      class="text-h6 font-weight-medium text-grey-darken-4 mb-3"
                    >
                      {{ term.total }}
                    </div>

                    <!-- Term Length -->
                    <div v-if="term.termLength" class="mb-3">
                      <div class="text-overline text-grey-darken-2 mb-1">
                        Term Length
                      </div>
                      <v-chip
                        color="primary"
                        variant="outlined"
                        size="small"
                        class="text-caption font-weight-medium"
                      >
                        {{ term.termLength }}
                      </v-chip>
                    </div>

                    <!-- Additional Info -->
                    <div
                      v-if="term.additionalInfo"
                      class="text-caption text-grey-darken-1 mt-2"
                    >
                      {{ term.additionalInfo }}
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <!-- Additional Information -->
            <v-row justify="center" data-aos="fade-up">
              <v-col cols="12" class="text-center">
                <v-card variant="outlined" class="rounded-lg pa-4">
                  <div class="d-flex align-center justify-center mb-2">
                    <v-icon
                      icon="mdi-home-heart"
                      size="20"
                      color="grey-darken-2"
                      class="mr-2"
                    ></v-icon>
                    <span
                      class="text-body-2 font-weight-medium text-grey-darken-3"
                    >
                      Family Plan Information
                    </span>
                  </div>
                  <p class="text-caption text-grey-darken-2 mb-0">
                    FAMI plans provide comprehensive family coverage with
                    flexible payment options. Protect your entire family with
                    one convenient plan.
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- PRINCIPAL BENEFIT COVERAGE SECTION (FAMI) -->
      <v-container id="principal-benefit-coverage-fami" class="py-16">
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h3 font-weight-bold mb-4" style="color: #1a202c">Principal Benefit Coverage | FAMI</h3>
            <v-divider class="mx-auto mb-4" thickness="2" style="max-width: 60px; background-color: #03a635" />
            <p class="text-body-1 text-grey-darken-2" style="max-width: 600px; margin: 0 auto">Sample Detailed Computation</p>
          </v-col>
        </v-row>

        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="12" lg="10">
            <v-row>
              <!-- Natural Death Card -->
              <v-col cols="12" md="6" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#1e3a8a">mdi-heart</v-icon>
                    </div>
                    <span class="wcg-card__num">01</span>
                  </div>
                  <h3 class="wcg-card__name" style="color: #1e3a8a;">Natural Death</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Requirements:</strong> Double benefits with 1 year contestability <span class="text-red">(18–60 years old)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Payment Computation:</strong> Total Contract Savings: ₱39,000</p>
                    <p class="mb-2">• 650 x 12 Months: ₱7,800 <span class="text-red">(Balance waived: ₱31,200)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Coverage Computation:</strong></p>
                    <p class="mb-1">• Basic Life Coverage: ₱25,000</p>
                    <p>• Cash Assistance Benefit: ₱15,000</p>
                  </div>
                  <div class="wcg-card__tag">Total: ₱40,000</div>
                </div>
              </v-col>

              <!-- Accidental Death Card -->
              <v-col cols="12" md="6" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#dc2626">mdi-flash</v-icon>
                    </div>
                    <span class="wcg-card__num">02</span>
                  </div>
                  <h3 class="wcg-card__name" style="color: #dc2626;">Accidental Death</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Requirements:</strong> Triple benefits with 24 Hours contestability <span class="text-red">(18–60 years old)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Payment Computation:</strong> Total Contract Savings: ₱39,000</p>
                    <p class="mb-2">• 650 x 1 Month: ₱650 <span class="text-red">(Balance waived: ₱38,350)</span></p>
                    <div class="wcg-card__divider"></div>
                    <p class="mb-2"><strong>Coverage Computation:</strong></p>
                    <p class="mb-1">• Basic Life Coverage: ₱25,000</p>
                    <p class="mb-1">• Accidental Coverage: ₱25,000</p>
                    <p>• Cash Assistance Benefit: ₱15,000</p>
                  </div>
                  <div class="wcg-card__tag">Total: ₱65,000</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Comparison Summary -->
        <v-row class="mt-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <div class="wcg-card wcg-card--bordered text-center">
              <h4 class="text-h5 font-weight-bold mb-4" style="color: #3e3a5b">Benefit Comparison</h4>
              <v-row class="text-center">
                <v-col cols="12" md="6">
                  <div class="text-h4 font-weight-bold mb-2" style="color: #1e3a8a">₱40,000</div>
                  <p class="text-body-2 text-grey-darken-2 mb-0">Natural Death Benefit</p>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="text-h4 font-weight-bold mb-2" style="color: #dc2626">₱65,000</div>
                  <p class="text-body-2 text-grey-darken-2 mb-0">Accidental Death Benefit</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- SPECIAL BENEFIT COVERAGE SECTION (FAMI) -->
      <v-container id="special-benefit-coverage" class="py-16">
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold mb-4 section-title">Special Benefit Coverage | FAMI</h3>
            <v-divider class="mx-auto mb-6" thickness="2" style="max-width: 80px; background-color: #03a635" />
            <p class="text-body-2 text-grey-darken-1">Comprehensive family protection coverage</p>
          </v-col>
        </v-row>

        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="12" lg="10">
            <v-row>
              <!-- Dependent 1 -->
              <v-col cols="12" md="4" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#3e3a5b">mdi-account</v-icon>
                    </div>
                  </div>
                  <h3 class="wcg-card__name">DEPENDENT 1</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Basic Life Coverage:</strong> ₱25,000</p>
                    <p class="mb-2"><strong>Cash Assistance Benefit:</strong> ₱5,000</p>
                  </div>
                  <div class="wcg-card__tag">Total: ₱30,000</div>
                </div>
              </v-col>

              <!-- Dependent 2 -->
              <v-col cols="12" md="4" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#3e3a5b">mdi-account-multiple</v-icon>
                    </div>
                  </div>
                  <h3 class="wcg-card__name">DEPENDENT 2</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Basic Life Coverage:</strong> ₱25,000</p>
                    <p class="mb-2"><strong>Cash Assistance Benefit:</strong> ₱5,000</p>
                  </div>
                  <div class="wcg-card__tag">Total: ₱30,000</div>
                </div>
              </v-col>

              <!-- Dependent 3 -->
              <v-col cols="12" md="4" class="mb-6">
                <div class="wcg-card wcg-card--bordered h-100 text-left">
                  <div class="wcg-card__top">
                    <div class="wcg-card__icon-wrap">
                      <v-icon size="24" color="#3e3a5b">mdi-account-group</v-icon>
                    </div>
                  </div>
                  <h3 class="wcg-card__name">DEPENDENT 3</h3>
                  <div class="wcg-card__desc">
                    <p class="mb-2"><strong>Basic Life Coverage:</strong> ₱25,000</p>
                    <p class="mb-2"><strong>Cash Assistance Benefit:</strong> ₱5,000</p>
                  </div>
                  <div class="wcg-card__tag">Total: ₱30,000</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Total Coverage & Requirements Summary -->
        <v-row justify="center" class="mt-8" data-aos="fade-up">
          <v-col cols="12" md="10" lg="9">
            <div class="wcg-card wcg-card--bordered text-center">
              <div class="mb-4">
                <div class="d-flex align-center justify-center mb-2">
                  <v-icon icon="mdi-file-document-check" size="20" color="grey-darken-2" class="mr-2"></v-icon>
                  <span class="text-body-2 font-weight-medium text-grey-darken-3">Requirements</span>
                </div>
                <p class="text-body-1 text-grey-darken-2 mb-0">
                  Double benefits with 1 year contestability
                  <span class="text-red" style="font-weight: 500">(18–60 years old upon application)</span>
                </p>
              </div>
              <div class="wcg-card__divider"></div>
              <div class="mb-4 mt-4">
                <h4 class="text-h5 font-weight-bold mb-2" style="color: #2d3748">TOTAL DEPENDENT COVERAGE</h4>
                <div class="text-h3 font-weight-medium text-primary">₱ 90,000.00</div>
              </div>
              <div class="wcg-card__divider"></div>
              <div class="mt-4">
                <div class="d-flex align-center justify-center mb-2">
                  <v-icon icon="mdi-information" size="20" color="grey-darken-2" class="mr-2"></v-icon>
                  <span class="text-body-2 font-weight-medium text-grey-darken-3">Important Note</span>
                </div>
                <p class="text-body-1 text-grey-darken-2 mb-2">Double benefits with 12 Months Contestability, Only for Qualified Immediate Family Members</p>
                <div class="text-caption font-weight-medium text-grey-darken-1">MOTHER | FATHER | BROTHER | SISTER | SPOUSE | CHILDREN</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <div
        style="
          border-top: 5px solid #e2e8f0;
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
        "
      ></div>

      <!-- Extended Arrangement Section - Redesigned with wcg-card -->
      <v-container id="extended-arrangement" class="py-16">
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold mb-4 mt-16 section-title">Optional Extended Arrangement</h3>
            <v-divider class="mx-auto mb-6" thickness="2" style="max-width: 80px" />
          </v-col>
        </v-row>

        <v-row class="mb-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <div class="wcg-card wcg-card--bordered text-center">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap mx-auto">
                  <v-icon size="24" color="#3e3a5b">mdi-heart-plus</v-icon>
                </div>
              </div>
              <h3 class="wcg-card__name">Basic Life to Services</h3>
              <p class="wcg-card__desc">
                In the event of death, clients may choose to select the optional extended burial services arrangement.
                The specified amount for Basic Life Coverage will be used to pay the service arrangement.
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row class="mb-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <div class="wcg-card wcg-card--bordered text-center">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap mx-auto">
                  <v-icon size="24" color="#3e3a5b">mdi-home-heart</v-icon>
                </div>
              </div>
              <h3 class="wcg-card__name">Burial Services Arrangement</h3>
              <p class="wcg-card__desc">
                Burial Service Package will be arranged by the servicing mortuary of Goodlife Memorial Chapel
                and its affiliates as extended assistance of the agency to render quality customer service.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- CTA Section -->
      <v-container
        fluid
        class="py-16"
        style="background: linear-gradient(135deg, #e2e8f0, #cbd5e1)"
      >
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h2
                class="text-h3 font-weight-bold mb-4 mt-13"
                style="color: #1a202c"
              >
                Need Help Choosing?
              </h2>
              <p class="text-h6 mb-8" style="color: #4a5568">
                Our insurance experts are ready to help you find the perfect
                coverage for your needs.
              </p>
              <v-btn
                color="primary"
                size="large"
                class="text-white text-capitalize"
                @click="goToHomeSection('contact')"
              >
                Get Free Consultation
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <!-- Social Media & External Links Section -->
      <v-container class="py-12" data-aos="fade-up">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <v-card variant="outlined" class="rounded-xl pa-8 text-center border-dashed" style="border-width: 2px; border-color: #e2e8f0; background-color: #fafafa;">
              <h2 class="text-h6 font-weight-bold mb-2" style="color: #1a202c">
                Connect with Damayan
              </h2>
              <p class="text-body-2 text-grey-darken-1 mb-6">
                Follow our official Facebook page to stay updated with our latest insurance programs and community initiatives.
              </p>
              
              <v-row justify="center">
                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    prepend-icon="mdi-facebook"
                    color="#1877F2"
                    size="large"
                    variant="flat"
                    class="text-capitalize rounded-lg font-weight-bold shadow-sm"
                    href="https://www.facebook.com/share/1CU8nuMzJe/?mibextid=wwXIfr"
                    target="_blank"
                  >
                    Follow us on Facebook
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Footer -->
      <v-footer
        class="pt-10 pb-6"
        padless
        style="background-color: #f5f5f5; color: #000"
      >
        <v-container>
          <v-row>
            <!-- Logo & Description -->
            <v-col cols="12" md="4" class="mb-6 mb-md-0">
              <div class="d-flex align-center mb-3">
                <v-img
                  src="@/assets/images/damayan.png"
                  alt="Goodlife Damayan Logo"
                  max-width="70"
                  class="me-3 rounded"
                  contain
                />

                <div>
                  <h3 class="text-h6 font-weight-bold mb-1">
                    Goodlife Damayan Insurance <br />
                    Agency Co.
                  </h3>
                  <span class="text-body-2 text-medium-emphasis">
                    Official Corporate Website
                  </span>
                </div>
              </div>

               <p class="text-body-2 text-medium-emphasis">
                A 100% Filipino-owned insurance agency dedicated to protecting
                Filipino families through accessible, reliable, and
                people-centered insurance solutions.
              </p>

              <div class="d-flex mt-4">
                <v-btn
                  icon="mdi-facebook"
                  variant="tonal"
                  color="#1877F2"
                  size="small"
                  href="https://www.facebook.com/share/1CU8nuMzJe/?mibextid=wwXIfr"
                  target="_blank"
                  title="Follow us on Facebook"
                ></v-btn>
              </div>
            </v-col>

            <!-- Quick Links -->
            <v-col cols="6" md="4">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">Quick Links</h4>
              <ul class="list-none pa-0">
                <li class="mb-2">
                  <v-btn
                    variant="text"
                    class="text-black text-decoration-none px-0"
                    @click="goToHomeSection('home')"
                  >
                    Home
                  </v-btn>
                </li>
                <li class="mb-2">
                  <v-btn
                    variant="text"
                    class="text-black text-decoration-none px-0"
                    @click="goToHomeSection('about')"
                  >
                    About Us
                  </v-btn>
                </li>
                <li class="mb-2">
                  <v-btn
                    variant="text"
                    class="text-black text-decoration-none px-0"
                    @click="goToHomeSection('legalities')"
                  >
                    Legalities
                  </v-btn>
                </li>
                <li class="mb-2">
                  <v-btn
                    variant="text"
                    class="text-black text-decoration-none px-0"
                    @click="goToHomeSection('features')"
                  >
                    Features
                  </v-btn>
                </li>
                <li class="mb-2">
                  <v-btn
                    variant="text"
                    class="text-black text-decoration-none px-0"
                  >
                    Products
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    variant="text"
                    class="text-black text-decoration-none px-0"
                    @click="goToHomeSection('contact')"
                  >
                    Contact
                  </v-btn>
                </li>
              </ul>
            </v-col>

            <!-- Contact Info -->
            <v-col cols="12" md="4">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">
                Contact Information
              </h4>

              <div class="d-flex align-center mb-2">
                <v-icon class="me-2" color="black"> mdi-email-outline </v-icon>
                <span>info@goodlifedamayan.com</span>
              </div>

              <div class="d-flex align-center mb-2">
                <v-icon class="me-2" color="black"> mdi-phone </v-icon>
                <span>(082) 333 1809</span>
              </div>

              <div class="d-flex align-center">
                <v-icon class="me-2" color="black">
                  mdi-map-marker-outline
                </v-icon>
                <span>
                  Goodlife Building, National Highway, San Jose, Digos City
                </span>
              </div>
            </v-col>
          </v-row>

          <!-- Divider -->
          <v-divider class="my-6" color="black" opacity="0.15" />

          <!-- Footer Bottom -->
          <div class="text-center text-body-2 text-medium-emphasis">
            © 2026 Goodlife Damayan Insurance Agency Co. All rights reserved.
          </div>
        </v-container>
      </v-footer>
    </v-main>

    <!-- Product Details Dialog -->
    <v-dialog v-model="showDetailsDialog" max-width="800">
      <v-card v-if="selectedProduct">
        <v-card-title class="text-h5 font-weight-bold">
          {{ selectedProduct.name }}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="8">
              <p class="text-body-1 mb-4">
                {{
                  selectedProduct.detailedDescription ||
                  selectedProduct.description
                }}
              </p>
              <h4 class="text-h6 font-weight-bold mb-2">Key Features:</h4>
              <ul class="mb-4">
                <li
                  v-for="(feature, index) in selectedProduct.features"
                  :key="index"
                  class="mb-1"
                >
                  {{ feature }}
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon size="120" :color="selectedProduct.color" class="mb-4">
                {{ selectedProduct.icon }}
              </v-icon>
              <v-btn color="primary" block @click="contactForProduct">
                Get Quote
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="showDetailsDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";

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
import "aos/dist/aos.css";
import { messageService, planTypeService, concernService } from "@/plugins/api";

const router = useRouter();
const drawer = ref(false);
const showDetailsDialog = ref(false);
const selectedProduct = ref(null);

const productsMenuItems = [
  { title: "DAMAYAN", route: "/products/damayan" },
  { title: "Goodlife Plans", route: "/products/goodlife-plans" },
  { title: "MBAI", route: "/products/mbai" },
];

const goToProductsPage = (route) => {
  drawer.value = false;
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  router.push(route);
};

const contributionTerms = ref([
  {
    name: "Monthly",
    amount: "₱375",
    period: "per month",
    total: "₱31,500.00",
    termLength: "5 Years",
    color: "primary",
  },
  {
    name: "Quarterly",
    amount: "₱1,100",
    period: "every 3 months",
    total: "₱30,800.00",
    termLength: "5 Years",
    color: "primary",
  },
  {
    name: "Semi-Annual",
    amount: "₱2,160",
    period: "every 6 months",
    total: "₱30,240.00",
    termLength: "5 Years",
    color: "primary",
  },
  {
    name: "Annual",
    amount: "₱4,200",
    period: "per year",
    total: "₱29,400.00",
    termLength: "5 Years",
    color: "primary",
  },
]);

const familyContributionTerms = [
  {
    name: "Monthly",
    amount: "₱650",
    total: "₱39,000.00",
    termLength: "5 Year Term",
    color: "primary",
  },
  {
    name: "Quarterly",
    amount: "₱1,900",
    total: "₱38,000.00",
    termLength: "5 Year Term",
    color: "primary",
  },
  {
    name: "Semi-Annual",
    amount: "₱3,700",
    total: "₱37,000.00",
    termLength: "5 Year Term",
    color: "primary",
  },
  {
    name: "Annual",
    amount: "₱7,200",
    total: "₱36,000.00",
    termLength: "5 Year Term",
    color: "primary",
  },
];

// ============ MINIMALIST CONTACT DIALOG STATE ============
const contactDialog = ref(false);           
const formValid = ref(false);              
const submitting = ref(false);             
const contactFormRef = ref(null);          
const rateLimitError = ref("");
const contactAttempts = ref(0);
const contactFormHoneypot = ref("");
const lastSubmitTime = ref(0);

const sanitizeHTML = (str) => {
  if (!str) return str;
  return String(str).replace(/<[^>]*>?/gm, '');
};

// Contact Form Data - Minimal fields only
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
  concern: "",
  title: "",
  description: "",
  attachments: [],
  dynamicAnswers: {},
});

const contactFormErrors = ref({
  lastName: "",
  middleName: "",
  firstName: "",
  complainantLastName: "",
  complainantMiddleName: "",
  complainantFirstName: "",
  email: "",
  contactNo: "",
  mafNo: "",
  planType: "",
  concern: "",
  description: "",
});

// Merged Plan Type Options
const allPlans = ref([]);

const fetchPlanTypes = async () => {
  try {
    const planTypes = await planTypeService.getAll();
    allPlans.value = planTypes.map((planType) => ({
      ...planType,
      value: planType.id,
      icon: "mdi-shield-check-outline",
      color: "#708090",
    }));
  } catch (err) {
    console.error("Failed to fetch plan types:", err);
  }
};

// Concerns Options
const concernsList = ref([]);

const fetchConcerns = async () => {
  try {
    concernsList.value = await concernService.getAll();
  } catch (err) {
    console.error("Failed to fetch concerns:", err);
  }
};

const filteredConcerns = computed(() => {
  if (!contactForm.value.planType) return [];
  const selectedPlanId = contactForm.value.planType.id || contactForm.value.planType.value;
  return concernsList.value.filter(c => c.plan_type_id === selectedPlanId);
});

// Snackbar State for notifications
const snackbar = ref({
  show: false,
  text: "",
  color: "success",
});

// ============ VALIDATION RULES ============
const rules = {
  required: (v) => {
    if (typeof v === 'string') return !!v.trim() || "This field is required";
    if (Array.isArray(v)) return v.length > 0 || "This field is required";
    return !!v || "This field is required";
  },
  email: (v) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(v) || "Please enter a valid email address";
  },
  phone: (v) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return pattern.test(v) || "Please enter a valid phone number (e.g., +63 912 345 6789)";
  },
  alphabetic: (v) => {
    if (!v) return true;
    const pattern = /^[A-Za-z\sñÑ]+$/;
    return pattern.test(v) || "Please enter letters only";
  },
  numeric: (v) => {
    if (!v) return true;
    const pattern = /^[0-9]+$/;
    return pattern.test(v) || "Please enter numbers only";
  },
  file: (v) => {
    if (!v || v.length === 0) return true;
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    for (let i = 0; i < v.length; i++) {
      if (!allowedTypes.includes(v[i].type)) {
        return "Only JPG, PNG, and PDF files are allowed";
      }
      if (v[i].size > maxSize) {
        return "File size must be less than 5MB";
      }
    }
    return true;
  },
};

// Sync complainant names if checkbox is checked
watch(() => contactForm.value.isSameAsComplainant, (val) => {
  if (val) {
    contactForm.value.complainantLastName = contactForm.value.lastName;
    contactForm.value.complainantMiddleName = contactForm.value.middleName;
    contactForm.value.complainantFirstName = contactForm.value.firstName;
  }
});

watch(() => [contactForm.value.lastName, contactForm.value.middleName, contactForm.value.firstName], () => {
  if (contactForm.value.isSameAsComplainant) {
    contactForm.value.complainantLastName = contactForm.value.lastName;
    contactForm.value.complainantMiddleName = contactForm.value.middleName;
    contactForm.value.complainantFirstName = contactForm.value.firstName;
  }
});

const submitContactForm = async () => {
  if (contactFormHoneypot.value !== "") return; // Bot detected

  const now = Date.now();
  if (now - lastSubmitTime.value < 60000) {
    snackbar.value = { show: true, text: "Please wait 60 seconds before submitting again.", color: "warning" };
    return;
  }

  // Check attempts limit
  if (contactAttempts.value >= 10) {
    rateLimitError.value = "Too many attempts. Please try again later.";
    snackbar.value = {
      show: true,
      text: "Too many attempts. Please try again later.",
      color: "warning",
    };
    return;
  }

  const { valid } = await contactFormRef.value?.validate();
  if (!valid) return;

  submitting.value = true;
  contactAttempts.value++;
  lastSubmitTime.value = now;

  try {
    const messageData = {
      title: sanitizeHTML(`${contactForm.value.concern?.title || 'Contact Support'} - ${contactForm.value.planType?.title || 'General Inquiry'}`),
      description: sanitizeHTML(contactForm.value.description),
      email: sanitizeHTML(contactForm.value.email),
      contact_no: sanitizeHTML(contactForm.value.contactNo),
      maf_no: contactForm.value.mafNo,
      last_name: sanitizeHTML(contactForm.value.lastName),
      middle_name: sanitizeHTML(contactForm.value.middleName || ''),
      first_name: sanitizeHTML(contactForm.value.firstName),
      complainant_last_name: sanitizeHTML(contactForm.value.isSameAsComplainant ? contactForm.value.lastName : contactForm.value.complainantLastName),
      complainant_middle_name: sanitizeHTML(contactForm.value.isSameAsComplainant ? (contactForm.value.middleName || '') : (contactForm.value.complainantMiddleName || '')),
      complainant_first_name: sanitizeHTML(contactForm.value.isSameAsComplainant ? contactForm.value.firstName : contactForm.value.complainantFirstName),
      plan: sanitizeHTML(contactForm.value.planType?.title || ''),
      concern_info: [
        { title: 'Concern', value: sanitizeHTML(contactForm.value.concern?.title || '') },
        ...(contactForm.value.concern?.fields || []).map(f => ({
          title: f.label,
          value: sanitizeHTML(Array.isArray(contactForm.value.dynamicAnswers[f.title]) 
                  ? contactForm.value.dynamicAnswers[f.title].join(', ') 
                  : contactForm.value.dynamicAnswers[f.title] || '')
        }))
      ],
      files: contactForm.value.attachments,
    };

    await messageService.add(messageData);

    snackbar.value = {
      show: true,
      text: "Your message has been sent successfully! We'll respond within 24 hours.",
      color: "success",
    };

    contactAttempts.value = 0;

    contactFormRef.value?.reset();
    contactForm.value = {
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
      concern: "",
      title: "",
      description: "",
      attachments: [],
      dynamicAnswers: {},
    };

    contactDialog.value = false;
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    snackbar.value = {
      show: true,
      text: error.message || "Failed to send message. Please try again.",
      color: "error",
    };
  } finally {
    submitting.value = false;
  }
};

const resetContactForm = () => {
  contactFormRef.value?.reset();
  contactForm.value = {
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
    concern: "",
    title: "",
    description: "",
    dynamicAnswers: {},
  };
};

const showContactIcon = ref(true);

watch(contactDialog, (newVal) => {
  if (newVal) {
    showContactIcon.value = false;
  } else {
    showContactIcon.value = true;
  }
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

  AOS.init({
    duration: 1500,
    once: false,
    mirror: true,
    offset: 120,
  });

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
        while (el) {
          y += el.offsetTop;
          el = el.offsetParent;
        }
        
        window.scrollTo({ top: y + yOffset, behavior: "smooth" });
      }
    }, 300);
  });
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
    while (el) {
      y += el.offsetTop;
      el = el.offsetParent;
    }
    
    window.scrollTo({ top: y + yOffset, behavior: "smooth" });
  }
};

const showProductDetails = (product) => {
  selectedProduct.value = product;
  showDetailsDialog.value = true;
};

const contactForProduct = () => {
  showDetailsDialog.value = false;
  goToHomeSection("contact");
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.image-zoom-dialog {
  box-shadow: none !important;
}

.image-zoom-dialog :deep(.v-img__img) {
  object-fit: contain;
}
</style>