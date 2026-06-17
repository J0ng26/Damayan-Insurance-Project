<template>
  <div>
    <!-- Navigation Bar -->
    <v-app-bar
      color="#F5F5F5"
      elevation="1"
      height="65"
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
            :class="{ 'active-link': activeSection === 'home' }"
            @click="scrollToSection('home')"
          >
            Home
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': activeSection === 'about' }"
            @click="scrollToSection('about')"
          >
            About
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': activeSection === 'blog' }"
            @click="scrollToSection('blog')"
          >
            Blog
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': activeSection === 'legalities' }"
            @click="scrollToSection('legalities')"
          >
            Legalities
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': activeSection === 'features' }"
            @click="scrollToSection('features')"
          >
            Features
          </v-btn>

          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                class="text-capitalize text-body-2 mx-2 nav-btn"
                :class="{
                  'active-link': currentProductsRoute.includes('products'),
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
                  'active-submenu': currentProductsRoute === item.route,
                }"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': activeSection === 'contact' }"
            @click="scrollToSection('contact')"
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

    <!-- Mobile Navigation Drawer -->
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
          @click="scrollToSection('home')"
        ></v-list-item>
        <v-list-item
          title="About"
          @click="scrollToSection('about')"
        ></v-list-item>
        <v-list-item
          title="Blog"
          @click="scrollToSection('blog')"
        ></v-list-item>
        <v-list-item
          title="Legalities"
          @click="scrollToSection('legalities')"
        ></v-list-item>
        <v-list-item
          title="Features"
          @click="scrollToSection('features')"
        ></v-list-item>
        <v-list-group value="Products">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Products"></v-list-item>
          </template>
          <v-list-item
            v-for="item in productsMenuItems"
            :key="item.route"
            @click="goToProductsPage(item.route)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item
          title="Contact"
          @click="scrollToSection('contact')"
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
                <a href="mailto:goodlifecustomercareservice@gmail.com" class="text-decoration-none">
                  <div class="contact-info-tile contact-info-tile--email">
                    <div class="contact-info-tile__icon">
                      <v-icon size="20">mdi-email-outline</v-icon>
                    </div>
                    <div>
                      <div class="text-caption text-medium-emphasis text-uppercase letter-spacing mb-1">Email</div>
                      <div class="contact-info-tile__text font-weight-medium">goodlifecustomercareservice@gmail.com</div>
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

    <!-- Main Content -->
    <v-main>
      <div id="home" class="products-hero">
        <!-- Color Background -->
        <div class="color-backgrounds-family"></div>

        <div class="banner-content position-relative" data-aos="fade-up">
          <!-- MICRO INSURANCE LOGO -->
          <img
            src="@/assets/images/micro-insurance.png"
            alt="Micro Insurance Logo"
            class="micro-insurance-logo"
          />

          <v-container class="fill-height d-flex align-center justify-center">
            <v-row align="center" class="fill-height" justify="center">
              <!-- Text Column -->
              <v-col
                cols="12"
                md="7"
                class="d-flex flex-column align-center align-md-start justify-center text-center text-md-start text-first-mobile text-first-tablet"
              >
                <div class="banner-containers d-flex flex-column align-center align-md-start">
                  <h2 class="banner-title-family text-left w-100">
                    SECURING THE LIVES OF EVERY FILIPINO FAMILY SINCE 2016, <br>
                    <span class="banner-title-highlight-family">
                    WITH MORE THAN 195 BRANCHES NATIONWIDE
                    </span>
                  </h2>

                  <p class="banner-subtitle-family text-left w-100">
                    At Goodlife, we offer comprehensive individual or family
                    type of insurance that caters to the needs of your immediate
                    family members at the time of life's uncertainties.
                    Through <strong>Goodlife Plans</strong> (starting at <strong>800</strong>), 
                    <strong>Damayan Insurance</strong> (as low as <strong>375</strong>), 
                    and <strong>MBAI</strong> (from <strong>2,500</strong>), 
                    we provide trusted protection, financial security, and peace of mind 
                    for every Filipino family.
                  </p>
                </div>
              </v-col>

              <!-- Image Column -->
              <v-col
                cols="12"
                md="5"
                class="banner-image-col-family d-flex align-center justify-center image-second-mobile image-second-tablet"
              >
                <div
                  class="banner-image-container-family d-flex justify-center justify-md-end w-100"
                >
                  <img
                    src="@/assets/images/damayan insurance family.png"
                    alt="Goodlife Damayan Insurance Family"
                    class="banner-image-family"
                    loading="lazy"
                  />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>      <section id="about" class="abt-section" data-aos="fade-up">
        <v-container max-width="1200">

          <!-- Header -->
          <div class="abt-header">
            <span class="minimal-eyebrow">01 — WHO WE ARE</span>
            <h2 class="minimal-title">About Goodlife Damayan</h2>
            <p class="abt-lead">
              <strong>Goodlife Damayan Insurance Agency</strong> is committed to protecting what matters most — your family, your future, and your peace of mind. Rooted in the Filipino value of <em>damayan</em> (helping one another), we guide individuals, families, and businesses toward financial security through reliable and well-designed insurance solutions.
            </p>
            <p class="abt-lead">
              We don't just offer insurance — we offer guidance, education, and genuine care. Our team works closely with each client to understand their unique needs and recommend coverage that fits their goals, budget, and stage of life. At Goodlife Damayan, integrity and service are at the heart of everything we do.
            </p>
          </div>

          <!-- Stat strip -->
          <div class="abt-stats">
            <div class="abt-stat">
              <span class="abt-stat__num">2016</span>
              <span class="abt-stat__label">Founded</span>
            </div>
            <div class="abt-stat-divider"></div>
            <div class="abt-stat">
              <span class="abt-stat__num">195<span class="abt-stat__plus">+</span></span>
              <span class="abt-stat__label">Branches Nationwide</span>
            </div>
            <div class="abt-stat-divider"></div>
            <div class="abt-stat">
              <span class="abt-stat__num">100<span class="abt-stat__plus">%</span></span>
              <span class="abt-stat__label">Filipino-Owned</span>
            </div>
          </div>

        </v-container>
      </section>

      <v-container max-width="1200">
        <!-- VMC Cards -->
        <v-row align="stretch" justify="center" class="g-6 mt-8">
          <!-- Corporate Ideals Header -->
          <v-col cols="12" class="text-center mb-6" data-aos="fade-up">
            <div class="minimal-section-header">
              <span class="minimal-eyebrow">COMPANY</span>
              <h2 class="minimal-title">The Company's VMC</h2>
            </div>
          </v-col>

          <!-- Vision Card -->
          <v-col cols="12" md="4" class="d-flex" data-aos="fade-right">
            <div class="wcg-card wcg-card--bordered h-100 w-100 text-left">
              <div class="wcg-card__top">
                <span class="wcg-card__num">01</span>
              </div>
              <h3 class="wcg-card__name">Vision</h3>
              <p class="wcg-card__desc">
                Strong and dependable industry in providing services, enhancing
                clients capability through responsible society
              </p>
            </div>
          </v-col>

          <!-- Mission Card -->
          <v-col cols="12" md="4" class="d-flex" data-aos="fade-up">
           <div class="wcg-card wcg-card--bordered h-100 w-100 text-left">
              <div class="wcg-card__top">
                <span class="wcg-card__num">02</span>
              </div>
              <h3 class="wcg-card__name">Mission</h3>
              <p class="wcg-card__desc">
                To help individuals and families in the community nationwide, in
                mutual benefits, a partner of choice in nation-building
              </p>
            </div>
          </v-col>

          <!-- Core Values Card -->
          <v-col cols="12" md="4" class="d-flex" data-aos="fade-left">
            <div class="wcg-card wcg-card--bordered h-100 w-100 text-left">
              <div class="wcg-card__top">
                <span class="wcg-card__num">03</span>
              </div>
              <h3 class="wcg-card__name">Core Values</h3>
              <ul class="wcg-card__desc text-left pl-4 mb-0" style="list-style-type: disc;">
                <li>Love of God</li>
                <li>Fair and Truthful</li>
                <li>Excellence</li>
                <li>Unity and Diversity</li>
                <li>Respectful</li>
                <li>Honesty</li>
                <li>Professionalism</li>
              </ul>
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

      <!-- Blog Section -->
      <section id="blog" class="blog-featured-section" data-aos="fade-up">
        <v-container max-width="1200">
          <!-- Section Header -->
          <div class="blog-featured-header">
            <div class="blog-featured-header__left">
              <span class="blog-featured-eyebrow">04 — BLOG</span>
              <h2 class="blog-featured-title">Featured posts</h2>
            </div>
          </div>

          <!-- Carousel Grid -->
          <template v-if="blogs.length > 0">
            <v-carousel
              cycle
              interval="15000"
              hide-delimiter-background
              show-arrows="hover"
              height="650"
              class="mt-6 blog-carousel-wrapper "
            >
              <v-carousel-item
                v-for="(chunk, index) in blogChunks"
                :key="index"
              >
                <v-row class="blog-featured-grid mx-0 h-100 pb-10 justify-center">
                  <v-col
                    v-for="blog in chunk"
                    :key="blog.id"
                    cols="12"
                    sm="6"
                    md="3"
                    class="blog-featured-col h-100"
                  >
                    <div
                      class="blog-featured-card blog-featured-card--active d-flex flex-column h-100"
                      @click="openBlogDialog(blog)"
                      style="cursor: pointer;"
                    >
                      <div class="blog-featured-card__thumb">
                        <v-img
                          :src="blog.images && blog.images.length > 0 ? blog.images[0] : blog.image_path"
                          cover
                          class="blog-featured-card__img"
                        >
                          <v-chip
                            v-if="blog.images && blog.images.length > 1"
                            size="x-small"
                            color="black"
                            class="blog-featured-card__img-chip ma-2"
                            prepend-icon="mdi-image-multiple"
                          >
                            {{ blog.images.length }}
                          </v-chip>
                        </v-img>
                      </div>
                      <div class="blog-featured-card__body d-flex flex-column flex-grow-1 px-4 py-4" style="background: white;">
                        <span class="blog-featured-card__date text-caption text-medium-emphasis mb-2">
                          {{ (blog.date || blog.created_at) ? new Date(blog.date || blog.created_at).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' }) : '' }}
                        </span>
                        <h3 class="blog-featured-card__title text-h6 font-weight-bold mb-2 text-truncate">{{ blog.title }}</h3>
                        <p class="blog-featured-card__excerpt text-body-2 text-medium-emphasis mb-4" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">{{ blog.content }}</p>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="#0b2a55"
                          variant="tonal"
                          class="align-self-start text-capitalize font-weight-bold"
                          @click.stop="openBlogDialog(blog)"
                        >
                          Read more
                          <v-icon end size="16">mdi-arrow-top-right</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </template>
          <template v-else>
            <v-row class="blog-featured-grid mt-6">
              <v-col cols="12" sm="4" class="blog-featured-col">
                <div class="blog-featured-card blog-featured-card--empty h-100 d-flex align-center justify-center py-10" style="background: #f5f5f5; border-radius: 12px;">
                  <span class="blog-featured-card__coming text-medium-emphasis">More posts coming soon</span>
                </div>
              </v-col>
            </v-row>
          </template>
        </v-container>

        <!-- Blog Detail Dialog — Minimalist Redesign -->
        <v-dialog v-model="blogDialog" max-width="920" scrollable>
          <div class="blog-dlg" v-if="selectedBlog">

            <!-- Close Button -->
            <button class="blog-dlg__close" @click="blogDialog = false" aria-label="Close">
              <v-icon size="20">mdi-close</v-icon>
            </button>

            <!-- Left: Image Pane -->
            <div class="blog-dlg__media" v-if="selectedBlog.images && selectedBlog.images.length > 0">

              <!-- Main Image -->
              <div class="blog-dlg__main-img-wrap">
                <transition name="blog-dlg-fade" mode="out-in">
                  <img
                    :key="blogImageIndex"
                    :src="selectedBlog.images[blogImageIndex]"
                    class="blog-dlg__main-img"
                    alt="Blog image"
                  />
                </transition>

                <!-- Prev / Next arrows -->
                <template v-if="selectedBlog.images.length > 1">
                  <button
                    class="blog-dlg__arrow blog-dlg__arrow--prev"
                    @click.stop="blogImageIndex = (blogImageIndex - 1 + selectedBlog.images.length) % selectedBlog.images.length"
                    aria-label="Previous image"
                  >
                    <v-icon size="18" color="white">mdi-chevron-left</v-icon>
                  </button>
                  <button
                    class="blog-dlg__arrow blog-dlg__arrow--next"
                    @click.stop="blogImageIndex = (blogImageIndex + 1) % selectedBlog.images.length"
                    aria-label="Next image"
                  >
                    <v-icon size="18" color="white">mdi-chevron-right</v-icon>
                  </button>
                </template>

                <!-- Counter badge -->
                <span class="blog-dlg__counter" v-if="selectedBlog.images.length > 1">
                  {{ blogImageIndex + 1 }} / {{ selectedBlog.images.length }}
                </span>
              </div>

              <!-- Thumbnail strip -->
              <div class="blog-dlg__thumbs" v-if="selectedBlog.images.length > 1">
                <button
                  v-for="(img, i) in selectedBlog.images"
                  :key="i"
                  class="blog-dlg__thumb"
                  :class="{ 'blog-dlg__thumb--active': i === blogImageIndex }"
                  @click="blogImageIndex = i"
                  :aria-label="`View image ${i + 1}`"
                >
                  <img :src="img" :alt="`Thumbnail ${i + 1}`" />
                </button>
              </div>
            </div>

            <!-- No image fallback -->
            <div class="blog-dlg__media blog-dlg__media--empty" v-else>
              <v-icon size="48" color="#c8c5e0">mdi-image-off-outline</v-icon>
              <span class="blog-dlg__no-img-text">No images available</span>
            </div>

            <!-- Right: Content Pane -->
            <div class="blog-dlg__content">
              <span class="blog-dlg__date">
                {{ (selectedBlog.date || selectedBlog.created_at)
                  ? new Date(selectedBlog.date || selectedBlog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                  : '' }}
              </span>
              <h2 class="blog-dlg__title">{{ selectedBlog.title }}</h2>
              <div class="blog-dlg__divider"></div>
              <p class="blog-dlg__body">{{ selectedBlog.content }}</p>
            </div>

          </div>
        </v-dialog>
      </section>

      
      <div
        style="
          border-top: 5px solid #e2e8f0;
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
        "
      ></div>

      <!-- Legalities Section -->
      <section id="legalities" class="leg-section" data-aos="fade-up">
        <v-container max-width="1000">

          <!-- Header -->
          <div class="leg-header">
            <span class="minimal-eyebrow">03 — REGULATORY</span>
            <h2 class="minimal-title">Legalities &amp; Compliance</h2>
            <p class="leg-lead">
              Goodlife Damayan Insurance Agency Co. operates in full compliance with all Philippine insurance regulations and laws. We are committed to maintaining the highest standards of legal and ethical conduct in all our operations.
            </p>
            <button class="leg-btn" @click="openLegalitiesDialog">
              <v-icon size="18" style="margin-right:8px;">mdi-folder-eye-outline</v-icon>
              View Documents
              <v-icon size="16" style="margin-left:6px;">mdi-arrow-top-right</v-icon>
            </button>
          </div>

          <!-- Legal Documents Dialog -->
          <v-dialog v-model="legalitiesDialog" max-width="1020" scrollable>
            <div class="ldlg">

              <!-- Header -->
              <div class="ldlg__header">
                <div>
                  <span class="minimal-eyebrow">DOCUMENTS</span>
                  <h2 class="ldlg__title">Legal &amp; Compliance</h2>
                </div>
                <button class="blog-dlg__close" style="position:static;" @click="closeLegalitiesDialog" aria-label="Close">
                  <v-icon size="20">mdi-close</v-icon>
                </button>
              </div>

              <div class="ldlg__divider"></div>

              <!-- Document grid -->
              <div class="ldlg__body">
                <div class="ldlg__grid">
                  <div
                    v-for="(doc, idx) in combinedDocuments"
                    :key="idx"
                    class="ldlg__card"
                    @click="openZoom(doc)"
                  >
                    <!-- PDF -->
                    <div v-if="doc.isPdf" class="ldlg__card-thumb ldlg__card-thumb--pdf">
                      <v-icon color="#e53935" size="44">mdi-file-pdf-box</v-icon>
                      <span class="ldlg__pdf-label">PDF</span>
                    </div>
                    <!-- Image -->
                    <div v-else class="ldlg__card-thumb">
                      <img :src="doc.images && doc.images[0]" :alt="doc.title" />
                    </div>
                    <p class="ldlg__card-name">{{ doc.title }}</p>
                  </div>
                </div>
              </div>

              <!-- Zoom dialog (nested) -->
              <v-dialog v-model="zoomDialog" max-width="90vw">
                <div class="ldlg-zoom">
                  <div class="ldlg-zoom__header">
                    <div>
                      <p class="minimal-eyebrow">{{ zoomTitle }}</p>
                      <span class="ldlg-zoom__counter">{{ zoomIndex + 1 }} / {{ zoomImages.length }}</span>
                    </div>
                    <button class="blog-dlg__close" style="position:static;" @click="closeZoomDialog" aria-label="Close">
                      <v-icon size="20">mdi-close</v-icon>
                    </button>
                  </div>
                  <div class="ldlg-zoom__body">
                    <button class="blog-dlg__arrow blog-dlg__arrow--prev" style="position:static; flex-shrink:0;" :disabled="zoomIndex === 0" @click="prevImage">
                      <v-icon size="18" color="white">mdi-chevron-left</v-icon>
                    </button>
                    <div class="ldlg-zoom__img-wrap">
                      <v-img :src="zoomImages[zoomIndex]" max-height="72vh" contain class="rounded-lg" />
                    </div>
                    <button class="blog-dlg__arrow blog-dlg__arrow--next" style="position:static; flex-shrink:0;" :disabled="zoomIndex === zoomImages.length - 1" @click="nextImage">
                      <v-icon size="18" color="white">mdi-chevron-right</v-icon>
                    </button>
                  </div>
                </div>
              </v-dialog>

            </div>
          </v-dialog>
        </v-container>
      </section>

      <div
        style="
          border-top: 5px solid #e2e8f0;
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
        "
      ></div>

      <!-- Features Section -->
      <v-container
        id="features"
        max-width="1200"
        class="py-20 mt-16 text-center"
        data-aos="fade-up"
      >
        <v-row class="text-center mb-6">
          <v-col cols="12">
            <div class="minimal-section-header">
              <span class="minimal-eyebrow">BENEFITS</span>
              <h2 class="minimal-title">Features</h2>
            </div>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center g-6" align="stretch">
          <v-col cols="12" sm="6" md="3" class="d-flex">
            <div class="wcg-card wcg-card--bordered h-100 w-100 text-left" data-aos="fade-up" data-aos-delay="0">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap">
                  <v-icon size="22" color="#3e3a5b">mdi-account-switch-outline</v-icon>
                </div>
              </div>
              <h3 class="wcg-card__name">Assignable</h3>
              <p class="wcg-card__desc">
                Plans/Policy may be assigned from any person living to
                deceased only.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" class="d-flex">
            <div class="wcg-card wcg-card--bordered h-100 w-100 text-left" data-aos="fade-up" data-aos-delay="100">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap">
                  <v-icon size="22" color="#3e3a5b">mdi-swap-horizontal</v-icon>
                </div>
              </div>
              <h3 class="wcg-card__name">Transferable</h3>
              <p class="wcg-card__desc">
                Plans/Policy may be transferred from any person living to
                living only.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" class="d-flex">
            <div class="wcg-card wcg-card--bordered h-100 w-100 text-left" data-aos="fade-up" data-aos-delay="200">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap">
                  <v-icon size="22" color="#3e3a5b">mdi-cash-fast</v-icon>
                </div>
              </div>
              <h3 class="wcg-card__name">Loanable</h3>
              <p class="wcg-card__desc">
                Upon receiving your Certificate of Full Payment (COFP), you may
                apply for a policy loan with a guaranteed amount of up to 50% of
                the total amount paid.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" class="d-flex">
            <div class="wcg-card wcg-card--bordered h-100 w-100 text-left" data-aos="fade-up" data-aos-delay="300">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap">
                  <v-icon size="22" color="#3e3a5b">mdi-shield-check-outline</v-icon>
                </div>
              </div>
              <h3 class="wcg-card__name">Non-Forfeiture</h3>
              <p class="wcg-card__desc">
                Client plans and policies will not be forfeited even if lapsed
                for several years.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Why Choose Goodlife Section — Minimalist redesign -->
      <section class="wcg-section" data-aos="fade-up">
        <v-container max-width="1200">

          <!-- Header -->
          <div class="wcg-header">
            <span class="wcg-eyebrow">05 — WHY US</span>
            <h2 class="wcg-title">Why Choose Goodlife?</h2>
            <p class="wcg-subtitle">
              Two pillars that set us apart from the rest of the industry.
            </p>
          </div>

          <!-- Two reason cards -->
          <div class="wcg-cards">

            <div class="wcg-card" data-aos="fade-up" data-aos-delay="0">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap">
                  <v-icon size="22" color="#3e3a5b">mdi-map-marker-radius-outline</v-icon>
                </div>
                <span class="wcg-card__num">01</span>
              </div>
              <h3 class="wcg-card__name">Accessibility</h3>
              <p class="wcg-card__desc">
                Our 190+ Goodlife Damayan Insurance Agency branches nationwide, backed by a
                centralized management system, ensure seamless access to all services — from
                application and coverage to claims and reimbursements.
              </p>
              <div class="wcg-card__tag">190+ Branches</div>
            </div>

            <div class="wcg-card wcg-card--dark" data-aos="fade-up" data-aos-delay="100">
              <div class="wcg-card__top">
                <div class="wcg-card__icon-wrap wcg-card__icon-wrap--light">
                  <v-icon size="22" color="#ffffff">mdi-currency-php</v-icon>
                </div>
                <span class="wcg-card__num">02</span>
              </div>
              <h3 class="wcg-card__name">Affordability</h3>
              <p class="wcg-card__desc">
                We offer affordable premiums with high-quality insurance benefits plus
                optional coverage tailored to accommodate every client's unique needs and
                financial situation.
              </p>
              <div class="wcg-card__tag wcg-card__tag--light">Flexible Premiums</div>
            </div>

          </div>
        </v-container>
      </section>

      <!-- Products Section -->
      <section class="prod-section" data-aos="fade-up">
        <v-container id="products" max-width="1200">

          <!-- Header -->
          <div class="prod-header">
            <span class="minimal-eyebrow">02 — COVERAGE</span>
            <h2 class="minimal-title">Our Insurance Products</h2>
            <p class="prod-lead">
              Explore our carefully curated insurance solutions designed to protect what matters most. From everyday coverage to long-term security, we empower you with financial confidence at every stage of life.
            </p>
          </div>

          <!-- Feature tags -->
          <div class="prod-tags">
            <span
              v-for="(feature, index) in features"
              :key="index"
              class="prod-tag"
            >
              <v-icon size="14" color="#3e3a5b" style="margin-right:5px;">mdi-shield-check</v-icon>
              {{ feature }}
            </span>
          </div>

          <!-- CTA -->
          <button class="prod-cta" @click="goToProductsPage('/products')">
            Explore Products
            <v-icon size="16" style="margin-left:8px;">mdi-arrow-top-right</v-icon>
          </button>

        </v-container>
      </section>

      <div
        style="
          border-top: 5px solid #e2e8f0;
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
        "
      ></div>

      <!-- Achievements Section -->
      <v-container max-width="1200" class="pa-10">
        <v-row class="text-center mb-10" data-aos="fade-up">
          <v-col cols="12">
            <p class="section-subtitle">
              GOODLIFE DAMAYAN INSURANCE AGENCY CO.
            </p>
            <h2 class="section-title mb-3">ACHIEVEMENTS</h2>
            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 60px"
            />
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center g-6" align="stretch">
          <v-col cols="12" sm="6" md="4" class="d-flex" data-aos="fade-right">
            <v-card class="service-card pa-6 text-center" elevation="2">
              <v-avatar size="195" class="mb-4" color="transparent">
                <v-img
                  src="@/assets/achievements/golden globe.png"
                  alt="People's Choice Excellence Awards"
                  contain
                />
              </v-avatar>

              <h3 class="service-title mb-2">GOLDEN GLOBE</h3>
              <p class="service-text">
                2022 GOLDEN GLOBE ANNUAL <br />
                AWARDS FOR BUSINESS EXCELLENCE
              </p>
              <h3 class="service-title mt-5">BEST RELIABLE INSURANCE AGENCY</h3>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" class="d-flex" data-aos="fade-up">
            <v-card class="service-card pa-6 text-center" elevation="2">
              <v-avatar size="195" class="mb-4" color="transparent">
                <v-img
                  src="@/assets/achievements/people choice.png"
                  alt="People's Choice Excellence Awards"
                  contain
                />
              </v-avatar>

              <h3 class="service-title mb-2">PEOPLE'S CHOICE</h3>

              <p class="service-text">
                2023 PEOPLE'S CHOICE EXCELLENCE <br />
                AWARDS AS
              </p>

              <h3 class="service-title mt-5">BEST RELIABLE INSURANCE AGENCY</h3>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" class="d-flex" data-aos="fade-left">
            <v-card class="service-card pa-6 text-center" elevation="2">
              <v-avatar size="195" class="mb-4" color="transparent">
                <v-img
                  src="@/assets/achievements/sterling.png"
                  alt="People's Choice Excellence Awards"
                  contain
                />
              </v-avatar>
              <h3 class="service-title mb-2">ASIAN STERLING</h3>
              <p class="service-text">
                2023 ASIAN STERLING AWARDS <br />
                AS
              </p>
              <h3 class="service-title mt-5">
                MOST OUTSTANDING INSURANCE AGENCY
              </h3>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" class="d-flex" data-aos="fade-right">
            <v-card class="service-card pa-6 text-center" elevation="2">
              <v-avatar size="195" class="mb-4" color="transparent">
                <v-img
                  src="@/assets/achievements/elite.png"
                  alt="People's Choice Excellence Awards"
                  contain
                />
              </v-avatar>
              <h3 class="service-title mb-2">ELITE</h3>
              <p class="service-text">
                2023 ELITE BUSINESS AND LEADERSHIP <br />
                NATIONAL AWARDS AS
              </p>
              <h3 class="service-title mt-5">PREMIER LITE INSURANCE COMPANY</h3>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" class="d-flex" data-aos="fade-up">
            <v-card class="service-card pa-6 text-center" elevation="2">
              <v-avatar size="195" class="mb-4" color="transparent">
                <v-img
                  src="@/assets/achievements/asia-pacific.png"
                  alt="People's Choice Excellence Awards"
                  contain
                />
              </v-avatar>
              <h3 class="service-title mb-2">ASIA PACIFIC</h3>
              <p class="service-text">2023 ASIA PACIFIC EXCELLENCE AWARDS AS</p>
              <h3 class="service-title mt-5">BEST RELIABLE INSURANCE AGENCY</h3>
              <p class="service-text">
                awarded in Montein Riverside Hotel, Bangkok, Thailand
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" class="d-flex" data-aos="fade-left">
            <v-card class="service-card pa-6 text-center" elevation="2">
              <v-avatar size="195" class="mb-4" color="transparent">
                <v-img
                  src="@/assets/achievements/vietnam.jpg"
                  alt="People's Choice Excellence Awards"
                  contain
                />
              </v-avatar>
              <h3 class="service-title mb-2">ASIAN AWARDS</h3>
              <p class="service-text">
                2023 VIETNAM INTERNATIONAL ACHIEVERS AWARD
              </p>
              <h3 class="service-title mt-5">BEST INSURANCE AGENCY CO.</h3>
              <p class="service-text">
                awarded in King Hall, Royal Saigon Hotel, HO CHI MIHN CITY,
                Vietnam
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Contact Section split layout (info + form) -->
      <v-container
        id="contact"
        fluid
        class="py-16 px-4 px-md-6 contact-page-split contact-cta"
      >
        <div class="contact-page-split__inner">
          <v-row class="align-start contact-split-row" justify="center">
            <v-col cols="12" md="4" class="contact-split-sidebar mb-8 mb-md-0">
              <h2 class="contact-split-title mb-3">Contact Us</h2>
              <p class="contact-split-subtitle mb-8">
                Any question? We would be happy to help you reach the right plan
                or answer inquiries about Goodlife Damayan.
              </p>

              <div class="d-flex flex-column ga-4">
                <div class="contact-info-tile">
                  <div class="contact-info-tile__icon">
                    <v-icon size="20">mdi-phone</v-icon>
                  </div>
                  <div>
                    <div class="text-caption text-medium-emphasis text-uppercase letter-spacing mb-1">
                      Phone
                    </div>
                    <div class="contact-info-tile__text font-weight-medium">
                      (082) 333 1809
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:goodlifecustomercareservice@gmail.com"
                  class="text-decoration-none"
                >
                  <div class="contact-info-tile contact-info-tile--email">
                    <div class="contact-info-tile__icon">
                      <v-icon size="20">mdi-email-outline</v-icon>
                    </div>
                    <div>
                      <div class="text-caption text-medium-emphasis text-uppercase letter-spacing mb-1">
                        Email
                      </div>
                      <div class="contact-info-tile__text font-weight-medium">
                        goodlifecustomercareservice@gmail.com
                      </div>
                    </div>
                  </div>
                </a>

                <div class="contact-info-tile">
                  <div class="contact-info-tile__icon">
                    <v-icon size="20">mdi-map-marker-outline</v-icon>
                  </div>
                  <div>
                    <div class="text-caption text-medium-emphasis text-uppercase letter-spacing mb-1">
                      Address
                    </div>
                    <div class="contact-info-tile__text font-weight-medium">
                      Goodlife Building, National Highway, San Jose, Digos City
                    </div>
                  </div>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="6" class="contact-split-form-col">
              <v-form
                ref="contactFormMainRef"
                v-model="formValidMain"
                class="contact-split-form"
                @submit.prevent="submitContactFormMain"
              >
                <!-- Honeypot -->
                <v-text-field v-model="contactFormMainHoneypot" class="d-none" autocomplete="off" tabindex="-1"></v-text-field>
                <label class="contact-form-label" for="contact-main-maf">
                  {{ CONTACT_SPLIT_FIELDS.maf.label }}
                </label>
                <v-text-field
                  id="contact-main-maf"
                  v-model="contactFormMain.mafNo"
                  type="text"
                  :placeholder="CONTACT_SPLIT_FIELDS.maf.hint"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  :rules="[rules.required]"
                  :error-messages="contactFormMainErrors.mafNo"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-input mb-5"
                ></v-text-field>

                <v-row dense class="mb-2">
                  <v-col cols="12" sm="4">
                    <label class="contact-form-label" for="contact-main-first">
                      {{ CONTACT_SPLIT_FIELDS.firstName.label }}
                    </label>
                    <v-text-field
                      id="contact-main-first"
                      v-model="contactFormMain.firstName"
                      :placeholder="CONTACT_SPLIT_FIELDS.firstName.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required, rules.alphabetic]"
                      :error-messages="contactFormMainErrors.firstName"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <label class="contact-form-label" for="contact-main-last">
                      {{ CONTACT_SPLIT_FIELDS.lastName.label }}
                    </label>
                    <v-text-field
                      id="contact-main-last"
                      v-model="contactFormMain.lastName"
                      :placeholder="CONTACT_SPLIT_FIELDS.lastName.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required, rules.alphabetic]"
                      :error-messages="contactFormMainErrors.lastName"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <label class="contact-form-label" for="contact-main-middle">
                      {{ CONTACT_SPLIT_FIELDS.middleName.label }}
                    </label>
                    <v-text-field
                      id="contact-main-middle"
                      v-model="contactFormMain.middleName"
                      :placeholder="CONTACT_SPLIT_FIELDS.middleName.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.alphabetic]"
                      :error-messages="contactFormMainErrors.middleName"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-checkbox
                  v-model="contactFormMain.isSameAsComplainant"
                  label="Complainant is the same as the personal information above"
                  density="compact"
                  hide-details
                  color="grey-darken-3"
                  class="mt-0 mb-2 text-subtitle-1"
                ></v-checkbox>

                <template v-if="!contactFormMain.isSameAsComplainant">
                  <p class="text-body-2 font-weight-bold text-grey-darken-3 mb-3 mt-2">
                    Complainant
                  </p>
                  <v-row dense class="mb-2">
                    <v-col cols="12" sm="4">
                      <label class="contact-form-label" for="contact-main-c-first">
                        {{ CONTACT_SPLIT_FIELDS.firstName.label }}
                      </label>
                      <v-text-field
                        id="contact-main-c-first"
                        v-model="contactFormMain.complainantFirstName"
                        :placeholder="CONTACT_SPLIT_FIELDS.firstName.hint"
                        variant="outlined"
                        density="comfortable"
                        hide-details="auto"
                        :rules="[rules.required, rules.alphabetic]"
                        :error-messages="contactFormMainErrors.complainantFirstName"
                        bg-color="white"
                        color="grey-darken-2"
                        class="minimal-input mb-5"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <label class="contact-form-label" for="contact-main-c-last">
                        {{ CONTACT_SPLIT_FIELDS.lastName.label }}
                      </label>
                      <v-text-field
                        id="contact-main-c-last"
                        v-model="contactFormMain.complainantLastName"
                        :placeholder="CONTACT_SPLIT_FIELDS.lastName.hint"
                        variant="outlined"
                        density="comfortable"
                        hide-details="auto"
                        :rules="[rules.required, rules.alphabetic]"
                        :error-messages="contactFormMainErrors.complainantLastName"
                        bg-color="white"
                        color="grey-darken-2"
                        class="minimal-input mb-5"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <label class="contact-form-label" for="contact-main-c-middle">
                        {{ CONTACT_SPLIT_FIELDS.middleName.label }}
                      </label>
                      <v-text-field
                        id="contact-main-c-middle"
                        v-model="contactFormMain.complainantMiddleName"
                        :placeholder="CONTACT_SPLIT_FIELDS.middleName.hint"
                        variant="outlined"
                        density="comfortable"
                        hide-details="auto"
                        :rules="[rules.alphabetic]"
                        :error-messages="contactFormMainErrors.complainantMiddleName"
                        bg-color="white"
                        color="grey-darken-2"
                        class="minimal-input mb-5"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </template>

                <label class="contact-form-label" for="contact-main-email">
                  {{ CONTACT_SPLIT_FIELDS.email.label }}
                </label>
                <v-text-field
                  id="contact-main-email"
                  v-model="contactFormMain.email"
                  :placeholder="CONTACT_SPLIT_FIELDS.email.hint"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  :rules="[rules.required, rules.email]"
                  :error-messages="contactFormMainErrors.email"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-input mb-5"
                ></v-text-field>

                <label class="contact-form-label" for="contact-main-phone">
                  {{ CONTACT_SPLIT_FIELDS.phone.label }}
                </label>
                <v-text-field
                  id="contact-main-phone"
                  v-model="contactFormMain.contactNo"
                  :placeholder="CONTACT_SPLIT_FIELDS.phone.hint"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  :rules="[rules.required, rules.phone]"
                  :error-messages="contactFormMainErrors.contactNo"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-input mb-5"
                ></v-text-field>

                <v-row dense>
                  <v-col cols="12" md="12">
                    <label class="contact-form-label" for="contact-main-concern">
                      {{ CONTACT_SPLIT_FIELDS.concern.label }}
                    </label>
                    <v-select
                      id="contact-main-concern"
                      v-model="contactFormMain.concern"
                      :items="concernsList"
                      :placeholder="CONTACT_SPLIT_FIELDS.concern.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required]"
                      :error-messages="contactFormMainErrors.concern"
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

                <!-- Dynamic Form Fields (Main) -->
                <template v-if="contactFormMain.concern && contactFormMain.concern.fields && contactFormMain.concern.fields.length > 0">
                  <div
                    v-for="field in contactFormMain.concern.fields"
                    :key="field.title"
                    class="mb-4"
                  >
                    <label class="contact-form-label">
                      {{ field.label }}<span v-if="field.required" class="text-error"> *</span>
                    </label>
                    <v-text-field
                      v-if="field.type === 'text' || !field.type"
                      v-model="contactFormMain.dynamicAnswers[field.title]"
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
                      v-model="contactFormMain.dynamicAnswers[field.title]"
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
                      v-model="contactFormMain.dynamicAnswers[field.title]"
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
                        v-model="contactFormMain.dynamicAnswers[field.title]"
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
                        v-model="contactFormMain.dynamicAnswers[field.title]"
                        :rules="field.required ? [rules.required] : []"
                        hide-details="auto"
                      >
                        <div class="d-flex flex-wrap">
                          <v-checkbox
                            v-for="opt in field.options || []"
                            :key="opt"
                            v-model="contactFormMain.dynamicAnswers[field.title]"
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

                <label class="contact-form-label" for="contact-main-message">
                  {{ CONTACT_SPLIT_FIELDS.message.label }}
                </label>
                <v-textarea
                  id="contact-main-message"
                  v-model="contactFormMain.description"
                  :placeholder="CONTACT_SPLIT_FIELDS.message.hint"
                  variant="outlined"
                  rows="5"
                  auto-grow
                  hide-details="auto"
                  :rules="[rules.required]"
                  :error-messages="contactFormMainErrors.description"
                  bg-color="white"
                  color="grey-darken-2"
                  class="minimal-textarea mb-4"
                ></v-textarea>

                <label class="contact-form-label" for="contact-main-files">
                  {{ CONTACT_SPLIT_FIELDS.attachment.label }}
                </label>
                <v-file-input
                  id="contact-main-files"
                  v-model="contactFormMain.attachments"
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
                    v-if="rateLimitErrorMain"
                    type="warning"
                    variant="tonal"
                    class="mb-6 rounded-lg"
                    border="start"
                    icon="mdi-alert-octagon"
                    closable
                    @click:close="rateLimitErrorMain = ''"
                  >
                    <div class="text-subtitle-2 font-weight-bold mb-1">Submission Limit Reached</div>
                    <div class="text-caption">{{ rateLimitErrorMain }}</div>
                  </v-alert>
                </v-expand-transition>

                <v-btn
                  block
                  type="submit"
                  size="large"
                  variant="flat"
                  class="contact-btn-send contact-form-submit"
                  :loading="submittingMain"
                  :disabled="submittingMain"
                >
                  Send Message
                  <v-icon end size="20">mdi-send</v-icon>
                </v-btn>

                <v-expand-transition>
                  <div v-if="submittingMain" class="mt-4 text-center">
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
        </div>
      </v-container>

      <!-- Footer Section -->
      <v-footer
        class="pt-10 pb-6"
        padless
        style="background-color: #f5f5f5; color: #000"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="mb-6 mb-md-0">
              <!-- Updated brand area with larger logo and better alignment -->
              <div class="d-flex align-start mb-3">
                <v-img
                  src="@/assets/images/damayan.png"
                  alt="Goodlife Damayan Logo"
                  max-width="85"
                  class="me-4 rounded"
                  contain
                />
                <div class="d-flex flex-column" style="line-height: 1.2; margin-top: -2px;">
                  <h3 class="text-h6 font-weight-bold mb-0">Goodlife Damayan Insurance</h3>
                  <span class="text-h6 font-weight-bold" style="margin-top: -4px;">Agency Co.</span>
                  <span class="text-body-2 text-medium-emphasis mt-1">Official Corporate Website</span>
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
                  href="https://www.facebook.com/share/18orq16XQj/?mibextid=wwXIfr"
                  target="_blank"
                  title="Follow us on Facebook"
                ></v-btn>
              </div>
            </v-col>

            <v-col cols="6" md="4">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">Quick Links</h4>
              <ul class="pa-0 ma-0" style="list-style-type: none;">
                <li class="mb-2">
                  <a
                    href="#"
                    class="text-black text-decoration-none text-body-2"
                    style="cursor: pointer;"
                    @click.prevent="scrollToSection('home')"
                  >Home</a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="text-black text-decoration-none text-body-2"
                    style="cursor: pointer;"
                    @click.prevent="scrollToSection('about')"
                  >About Us</a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="text-black text-decoration-none text-body-2"
                    style="cursor: pointer;"
                    @click.prevent="scrollToSection('legalities')"
                  >Legalities</a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="text-black text-decoration-none text-body-2"
                    style="cursor: pointer;"
                    @click.prevent="scrollToSection('features')"
                  >Insurance Plans</a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="text-black text-decoration-none text-body-2"
                    style="cursor: pointer;"
                    @click.prevent="scrollToSection('contact')"
                  >Contact</a>
                </li>
                <li class="mb-2">
                  <a href="/privacy-policy" class="text-black text-decoration-none text-body-2">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions" class="text-black text-decoration-none text-body-2">Terms &amp; Conditions</a>
                </li>
              </ul>
            </v-col>

            <v-col cols="12" md="4">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">
                Contact Information
              </h4>
              <div class="d-flex align-center mb-2">
                <v-icon class="me-2" color="black"> mdi-email-outline </v-icon>
                <span>goodlifecustomercareservice@gmail.com</span>
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

          <v-divider class="my-6" color="black" opacity="0.15" />

          <div class="text-center text-body-2 text-medium-emphasis">
            © 2026 Goodlife Damayan Insurance Agency Co. All rights reserved.
          </div>
        </v-container>
      </v-footer>
    </v-main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { messageService, legalDocumentService, concernService, planTypeService, blogService } from "@/plugins/api";

import { defineOptions } from "vue";

defineOptions({
  name: "HomePage",
});

/** Shared copy for contact split forms. Labels are plain; examples are placeholders. */
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

// REACTIVE STATE VARIABLES
const route = useRoute();
const router = useRouter();

// UI State
const drawer = ref(false);
const legalitiesDialog = ref(false);
const blogs = ref([]);
const blogDialog = ref(false);
const selectedBlog = ref(null);
const blogImageIndex = ref(0);
const zoomDialog = ref(false);

const windowWidth = ref(window.innerWidth);
const onResizeWindow = () => {
  windowWidth.value = window.innerWidth;
};

const itemsPerSlide = computed(() => {
  if (windowWidth.value >= 960) return 3;
  if (windowWidth.value >= 600) return 2;
  return 1;
});

const blogChunks = computed(() => {
  const chunks = [];
  if (!blogs.value || blogs.value.length === 0) return [];
  for (let i = 0; i < blogs.value.length; i += itemsPerSlide.value) {
    chunks.push(blogs.value.slice(i, i + itemsPerSlide.value));
  }
  return chunks;
});

// Contact Dialog State
const contactDialog = ref(false);
const formValid = ref(false);
const submitting = ref(false);
const contactFormRef = ref(null);
const contactAttempts = ref(0);
const rateLimitError = ref("");
const contactFormHoneypot = ref("");
const lastSubmitTime = ref(0);

// Main Contact Form State
const formValidMain = ref(false);
const submittingMain = ref(false);
const contactFormMainRef = ref(null);
const contactMainAttempts = ref(0);
const rateLimitErrorMain = ref("");
const contactFormMainHoneypot = ref("");
const lastSubmitTimeMain = ref(0);

const sanitizeHTML = (str) => {
  if (!str) return str;
  return String(str).replace(/<[^>]*>?/gm, '');
};

// Contact Form Data (Dialog)
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

// Contact Form Errors (Dialog)
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

// Contact Form Data (Main Section)
const contactFormMain = ref({
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

// Contact Form Errors (Main Section)
const contactFormMainErrors = ref({
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

const concernsList = ref([]);

const fetchConcerns = async () => {
  try {
    concernsList.value = await concernService.getAll();
  } catch (err) {
    console.error("Failed to fetch concerns:", err);
  }
};

const fetchBlogs = async () => {
  try {
    blogs.value = await blogService.getAll();
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }
};

const filteredConcerns = computed(() => {
  if (!contactForm.value.planType) return [];
  const selectedPlanId = contactForm.value.planType.id || contactForm.value.planType.value;
  return concernsList.value.filter(c => c.plan_type_id === selectedPlanId);
});

const filteredConcernsMain = computed(() => {
  if (!contactFormMain.value.planType) return [];
  const selectedPlanId = contactFormMain.value.planType.id || contactFormMain.value.planType.value;
  return concernsList.value.filter(c => c.plan_type_id === selectedPlanId);
});

// Snackbar State
const snackbar = ref({
  show: false,
  text: "",
  color: "success",
});

// Validation Rules with better error messages
const rules = {
  required: (v) => {
    if (v === null || v === undefined) return "This field is required";
    if (typeof v === 'string') return v.trim().length > 0 || "This field is required";
    if (Array.isArray(v)) return v.length > 0 || "This field is required";
    if (typeof v === 'object') return v !== null || "This field is required";
    return !!v || "This field is required";
  },
  email: (v) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(v) || "Please enter a valid email address";
  },
  phone: (v) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return pattern.test(v) || "Please enter a valid phone number (+63 912 345 6789)";
  },
  alphabetic: (v) => {
    if (!v) return true;
    const pattern = /^[A-Za-z\sÃ±Ã‘]+$/;
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

// Navigation State
const activeSection = ref("home");
const currentProductsRoute = ref("");
const zoomTitle = ref("");
const zoomImages = ref([]);
const zoomIndex = ref(0);

// Data Arrays
const sections = ["home", "about", "blog", "legalities", "features", "products", "contact"];
const features = ref([
  "Available Individual Insurance Product",
  "Family Insurance Product",
  "Goodlife Plans",
  "Goodlife Benefits Association Inc.",
]);

const productsMenuItems = ref([
  { title: "DAMAYAN", route: "/products/damayan" },
  { title: "GOODLIFE PLANS", route: "/products/goodlife-plans" },
  { title: "MBAI", route: "/products/mbai" },
]);

const uploadedDocuments = ref([]);

const fetchUploadedDocuments = async () => {
  try {
    uploadedDocuments.value = await legalDocumentService.getAll();
  } catch (err) {
    console.error("Failed to fetch uploaded documents:", err);
  }
};

const combinedDocuments = computed(() => {
  const list = [];

  // Group uploaded documents by title
  const grouped = {};
  uploadedDocuments.value.forEach(doc => {
    if (!grouped[doc.title]) {
      grouped[doc.title] = {
        title: doc.title,
        files: []
      };
    }
    grouped[doc.title].files.push(doc);
  });

  // Convert groups to the format index.vue expects
  Object.keys(grouped).forEach(title => {
    const group = grouped[title];
    const isPdf = group.files.some(f => f.mime_type.toLowerCase().includes('pdf'));
    const fileUrls = group.files.map(f => f.file_url);

    list.push({
      title: title,
      images: isPdf ? [] : fileUrls,
      isPdf: isPdf,
      fileUrl: fileUrls[0],
    });
  });

  return list;
});

// ZOOM DIALOG METHODS
const openZoom = (doc) => {
  if (doc.isPdf) {
    window.open(doc.fileUrl, '_blank');
    return;
  }
  zoomTitle.value = doc.title;
  zoomImages.value = doc.images;
  zoomIndex.value = 0;
  zoomDialog.value = true;
};

const closeZoomDialog = () => {
  zoomDialog.value = false;
};

const prevImage = () => {
  if (zoomIndex.value > 0) zoomIndex.value--;
};

const nextImage = () => {
  if (zoomIndex.value < zoomImages.value.length - 1) zoomIndex.value++;
};

// NAVIGATION METHODS
const goToProductsPage = (productRoute) => {
  drawer.value = false;
  router.push(productRoute);
};

const scrollToSection = (id) => {
  drawer.value = false;
  const section = document.getElementById(id);
  if (section) {
    const headerHeight = 65;
    const extraOffset = 15; // Small gap for aesthetics
    const yOffset = -(headerHeight + extraOffset);
    
    // Use offsetTop instead of getBoundingClientRect to avoid AOS transformation issues
    let element = section;
    let y = 0;
    while (element) {
      y += element.offsetTop;
      element = element.offsetParent;
    }
    
    smoothScrollTo(y + yOffset);
  }
};

const smoothScrollTo = (targetY, duration = 800) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const percent = Math.min(time / duration, 1);
    const easing =
      percent < 0.5
        ? 4 * percent * percent * percent
        : 1 - Math.pow(-2 * percent + 2, 3) / 2;
    window.scrollTo(0, startY + diff * easing);
    if (time < duration) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};

// LEGAL DOCUMENTS METHODS
const openLegalitiesDialog = () => {
  legalitiesDialog.value = true;
};

const closeLegalitiesDialog = () => {
  legalitiesDialog.value = false;
};

const openBlogDialog = (blog) => {
  selectedBlog.value = blog;
  blogImageIndex.value = 0;
  blogDialog.value = true;
};

// CONTACT FORM METHODS (Dialog)
  
const submitContactForm = async () => {
  // if (contactFormHoneypot.value !== "") return; // Bot detected

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

  // Clear previous errors
  rateLimitError.value = "";
  contactFormErrors.value = {
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
  };

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
      concern_info: {
        'MAF No.': contactForm.value.mafNo || '',
        'Complainant': (() => {
          if (contactForm.value.isSameAsComplainant) {
            return [contactForm.value.firstName, contactForm.value.middleName, contactForm.value.lastName].filter(Boolean).join(' ');
          }
          return [contactForm.value.complainantFirstName, contactForm.value.complainantMiddleName, contactForm.value.complainantLastName].filter(Boolean).join(' ');
        })(),
        'Concern': contactForm.value.concern?.title || '',
        ...Object.fromEntries(
          (contactForm.value.concern?.fields || []).map(f => [
            f.label,
            Array.isArray(contactForm.value.dynamicAnswers[f.title])
              ? contactForm.value.dynamicAnswers[f.title].join(', ')
              : contactForm.value.dynamicAnswers[f.title] || ''
          ])
        ),
      },
      files: contactForm.value.attachments,
    };

    // TODO: Re-enable when backend is ready for final setup
    // await messageService.add(messageData);

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
      concern: null,
      description: "",
      attachments: [],
      dynamicAnswers: {},
    };
    contactFormErrors.value = {
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
    };

    contactDialog.value = false;
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    if (typeof error === 'object' && error !== null && !(error instanceof Error)) {
      // Set field-specific errors
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
      
      if (errorMsg.includes("limit") || errorMsg.includes("maximum")) {
        rateLimitError.value = errorMsg;
      }

      snackbar.value = {
        show: true,
        text: errorMsg,
        color: "error",
      };
    }
  } finally {
    submitting.value = false;
  }
};
// CONTACT FORM METHODS (Main Section)

const submitContactFormMain = async () => {
  // if (contactFormMainHoneypot.value !== "") return; // Bot detected

  const now = Date.now();
  if (now - lastSubmitTimeMain.value < 60000) {
    snackbar.value = { show: true, text: "Please wait 60 seconds before submitting again.", color: "warning" };
    return;
  }

  // Check attempts limit
  if (contactMainAttempts.value >= 10) {
    rateLimitErrorMain.value = "Too many attempts. Please try again later.";
    snackbar.value = {
      show: true,
      text: "Too many attempts. Please try again later.",
      color: "warning",
    };
    return;
  }

  // Clear previous errors
  rateLimitErrorMain.value = "";
  contactFormMainErrors.value = {
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
  };

  const { valid } = await contactFormMainRef.value?.validate();
  if (!valid) return;

  submittingMain.value = true;
  contactMainAttempts.value++;
  lastSubmitTimeMain.value = now;

  try {
    const messageData = {
      title: sanitizeHTML(`${contactFormMain.value.concern?.title || 'Contact Support'} - ${contactFormMain.value.planType?.title || 'General Inquiry'}`),
      description: sanitizeHTML(contactFormMain.value.description),
      email: sanitizeHTML(contactFormMain.value.email),
      contact_no: sanitizeHTML(contactFormMain.value.contactNo),
      maf_no: contactFormMain.value.mafNo,
      last_name: sanitizeHTML(contactFormMain.value.lastName),
      middle_name: sanitizeHTML(contactFormMain.value.middleName || ''),
      first_name: sanitizeHTML(contactFormMain.value.firstName),
      complainant_last_name: sanitizeHTML(contactFormMain.value.isSameAsComplainant ? contactFormMain.value.lastName : contactFormMain.value.complainantLastName),
      complainant_middle_name: sanitizeHTML(contactFormMain.value.isSameAsComplainant ? (contactFormMain.value.middleName || '') : (contactFormMain.value.complainantMiddleName || '')),
      complainant_first_name: sanitizeHTML(contactFormMain.value.isSameAsComplainant ? contactFormMain.value.firstName : contactFormMain.value.complainantFirstName),
      plan: sanitizeHTML(contactFormMain.value.planType?.title || ''),
      concern_info: {
        'MAF No.': contactFormMain.value.mafNo || '',
        'Complainant': (() => {
          if (contactFormMain.value.isSameAsComplainant) {
            return [contactFormMain.value.firstName, contactFormMain.value.middleName, contactFormMain.value.lastName].filter(Boolean).join(' ');
          }
          return [contactFormMain.value.complainantFirstName, contactFormMain.value.complainantMiddleName, contactFormMain.value.complainantLastName].filter(Boolean).join(' ');
        })(),
        'Concern': contactFormMain.value.concern?.title || '',
        ...Object.fromEntries(
          (contactFormMain.value.concern?.fields || []).map(f => [
            f.label,
            Array.isArray(contactFormMain.value.dynamicAnswers[f.title])
              ? contactFormMain.value.dynamicAnswers[f.title].join(', ')
              : contactFormMain.value.dynamicAnswers[f.title] || ''
          ])
        ),
      },
      files: contactFormMain.value.attachments,
    };
    // TODO: Re-enable when backend is ready for final setup
    // await messageService.add(messageData);

    snackbar.value = {
      show: true,
      text: "Your message has been sent successfully! We'll respond within 24 hours.",
      color: "success",
    };

    contactMainAttempts.value = 0;

    contactFormMainRef.value?.reset();
    contactFormMain.value = {
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
    };
    contactFormMainErrors.value = {
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
    };
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    if (typeof error === 'object' && error !== null && !(error instanceof Error)) {
      // Set field-specific errors
      contactFormMainErrors.value = {
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

      if (errorMsg.includes("limit") || errorMsg.includes("maximum")) {
        rateLimitErrorMain.value = errorMsg;
      }

      snackbar.value = {
        show: true,
        text: errorMsg,
        color: "error",
      };
    }
  } finally {
    submittingMain.value = false;
  }
};

const showContactIcon = computed(() => {
  return !contactDialog.value && activeSection.value !== 'contact';
});

// SCROLLSPY FUNCTIONALITY
const handleScroll = () => {
  let current = "";
  const headerHeight = 65;
  const threshold = headerHeight + 100; // Trigger slightly before reaching the section
  
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      // Get absolute offsetTop
      let element = section;
      let sectionTop = 0;
      while (element) {
        sectionTop += element.offsetTop;
        element = element.offsetParent;
      }
      
      if (window.scrollY >= sectionTop - threshold) {
        current = id;
      }
    }
  });

  // Special case: check if we are at the very bottom of the page
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
    current = sections[sections.length - 1];
  }

  if (current) activeSection.value = current;
};

// LIFECYCLE HOOKS
onMounted(() => {
  AOS.init({
    duration: 1500,
    once: false,
    mirror: true,
    offset: 120,
  });
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", onResizeWindow);
  onResizeWindow();
  fetchUploadedDocuments();
  fetchConcerns();
  fetchPlanTypes();
  fetchBlogs();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", onResizeWindow);
});

// WATCHERS
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    if (newPath.includes("/products")) {
      currentProductsRoute.value = newPath;
    } else {
      currentProductsRoute.value = "";
    }
  },
  { immediate: true },
);

watch(route, async () => {
  await nextTick();
  AOS.refresh();
});

watch(
  () => contactForm.value.planType,
  () => {
    contactForm.value.concern = null;
    contactForm.value.dynamicAnswers = {};
  }
);

watch(
  () => contactFormMain.value.planType,
  () => {
    contactFormMain.value.concern = null;
    contactFormMain.value.dynamicAnswers = {};
  }
);
</script>

<style scoped>
/* ===== Blog Image Carousel ===== */
.blog-carousel {
  border-radius: 12px;
  overflow: visible;
}

.blog-carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: white !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18) !important;
  opacity: 0.92;
  transition: opacity 0.2s, transform 0.2s;
}

.blog-carousel-btn:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

.blog-carousel-btn--prev {
  left: -16px;
}

.blog-carousel-btn--next {
  right: -16px;
}

.blog-carousel-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: background 0.25s, transform 0.25s;
}

.blog-carousel-dot--active {
  background: #1f2937;
  transform: scale(1.3);
}
</style>