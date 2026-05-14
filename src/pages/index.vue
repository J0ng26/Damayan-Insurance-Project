<template>
  <div>
    <!-- Navigation Bar -->
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
                  <v-col cols="12" md="6">
                    <label class="contact-form-label" for="contact-dlg-plan">
                      {{ CONTACT_SPLIT_FIELDS.planType.label }}
                    </label>
                    <v-select
                      id="contact-dlg-plan"
                      v-model="contactForm.planType"
                      :items="allPlans"
                      :placeholder="CONTACT_SPLIT_FIELDS.planType.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required]"
                      :error-messages="contactFormErrors.planType"
                      bg-color="white"
                      color="grey-darken-2"
                      item-title="title"
                      item-value="value"
                      return-object
                      clearable
                      class="minimal-select mb-5"
                    >
                      <template v-slot:selection="{ item }">
                        <div class="d-flex align-center">
                          <v-icon size="small" :color="item.raw.color" class="mr-2">{{ item.raw.icon }}</v-icon>
                          <span>{{ item.raw.title }}</span>
                        </div>
                      </template>
                      <template v-slot:item="{ props, item }">
                        <v-list-item v-bind="props" :title="item.raw.title">
                          <template v-slot:prepend>
                            <v-icon :color="item.raw.color" size="small">{{ item.raw.icon }}</v-icon>
                          </template>
                        </v-list-item>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label class="contact-form-label" for="contact-dlg-concern">
                      {{ CONTACT_SPLIT_FIELDS.concern.label }}
                    </label>
                    <v-text-field
                      id="contact-dlg-concern"
                      v-model="contactForm.concern"
                      :placeholder="CONTACT_SPLIT_FIELDS.concern.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required]"
                      :error-messages="contactFormErrors.concern"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                </v-row>

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
                    Through <strong>Goodlife Plans</strong> (starting at <strong>₱800</strong>), 
                    <strong>Damayan Insurance</strong> (as low as <strong>₱375</strong>), 
                    and <strong>MBAI</strong> (from <strong>₱2,500</strong>), 
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
      </div>

      <!-- About Section -->
      <v-container
        id="about"
        max-width="1200"
        class="py-20 mt-16 text-center"
        data-aos="fade-up"
      >
        <!-- Title -->
        <v-row justify="center" class="mb-14 text-center">
          <v-col cols="12" md="10">
            <h2 class="text-h4 font-weight-bold mb-4 section-title">
              About Goodlife Damayan
            </h2>

            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 60px"
            />

            <p
              class="text-body-1 text-medium-emphasis mb-6"
              style="line-height: 1.8"
            >
              <strong>Goodlife Damayan Insurance Agency</strong> is committed to
              protecting what matters most—your family, your future, and your
              peace of mind. Rooted in the Filipino value of
              <em>damayan</em> (helping one another), we guide individuals,
              families, and businesses toward financial security through
              reliable and well-designed insurance solutions.
            </p>

            <p
              class="text-body-1 text-medium-emphasis mb-6"
              style="line-height: 1.8"
            >
              We understand that life is full of uncertainties. That's why we
              don't just offer insurance—we offer guidance, education, and
              genuine care. Our team works closely with each client to
              understand their unique needs and recommend coverage that fits
              their goals, budget, and stage of life.
            </p>

            <p
              class="text-body-1 text-medium-emphasis mb-8"
              style="line-height: 1.8"
            >
              At Goodlife Damayan, integrity and service are at the heart of
              everything we do. We believe insurance should be clear,
              accessible, and empowering— not confusing or intimidating. From
              life and health insurance to savings and protection plans, we
              build long-term relationships based on trust, transparency, and
              results.
            </p>
          </v-col>
        </v-row>

        <!-- VMC Cards -->
        <v-row align="stretch" justify="center" class="g-10">
          <!-- Corporate Ideals Header -->
          <v-col cols="12" class="text-center mb-12" data-aos="fade-up">
            <h3 class="text-h4 font-weight-bold mb-4 section-title">
              The Company's VMC
            </h3>

            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 60px"
            />
          </v-col>

          <!-- Vision Card -->
          <v-col cols="12" md="4" data-aos="fade-right">
            <v-card
              variant="outlined"
              rounded="xl"
              class="pa-10 h-100 about-card"
            >
              <h3 class="text-h5 font-weight-semibold mb-10 letter-spacing">
                Vision
              </h3>

              <p class="text-body-1 text-medium-emphasis line-height-relaxed">
                Strong and dependable industry in providing services, enhancing
                clients capability through responsible society
              </p>
            </v-card>
          </v-col>

          <!-- Mission Card -->
          <v-col cols="12" md="4" data-aos="fade-up">
            <v-card
              variant="outlined"
              rounded="xl"
              class="pa-10 h-100 about-card"
            >
              <h3 class="text-h5 font-weight-semibold mb-10 letter-spacing">
                Mission
              </h3>

              <p class="text-body-1 text-medium-emphasis line-height-relaxed">
                To help individuals and families in the community nationwide, in
                mutual benefits, a partner of choice in nation-building
              </p>
            </v-card>
          </v-col>

          <!-- Core Values Card -->
          <v-col cols="12" md="4" data-aos="fade-left">
            <v-card
              variant="outlined"
              rounded="xl"
              class="pa-10 h-100 about-card"
            >
              <h3 class="text-h5 font-weight-semibold mb-10 letter-spacing">
                Core Values
              </h3>

              <ul class="about-values text-body-1">
                <li>Love of God</li>
                <li>Fair and Truthful</li>
                <li>Excellence</li>
                <li>Unity and Diversity</li>
                <li>Respectful</li>
                <li>Honesty</li>
                <li>Professionalism</li>
              </ul>
            </v-card>
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

      <!-- Legalities Section -->
      <v-container
        id="legalities"
        max-width="1000"
        class="py-20 mt-16 text-center"
        data-aos="fade-up"
      >
        <v-row justify="center" class="mb-12">
          <v-col cols="12" md="10">
            <h2 class="text-h4 font-weight-bold mb-4 section-title">
              Legalities & Compliance
            </h2>

            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 60px"
            />

            <p
              class="text-body-1 text-medium-emphasis mb-8"
              style="line-height: 1.8"
            >
              Goodlife Damayan Insurance Agency Co. operates in full compliance
              with all Philippine insurance regulations and laws. We are
              committed to maintaining the highest standards of legal and
              ethical conduct in all our operations.
            </p>

            <v-btn
              color="primary"
              size="large"
              rounded="xl"
              elevation="2"
              @click="openLegalitiesDialog"
            >
              <v-icon start>mdi-folder-eye-outline</v-icon>
              View Documents
            </v-btn>
          </v-col>
        </v-row>

        <!-- Legal Documents Dialog -->
        <v-dialog v-model="legalitiesDialog" max-width="1000" scrollable>
          <v-card rounded="xl">
            <v-card-title class="d-flex justify-space-between align-center">
              <span class="text-h6 font-weight-bold">
                Legal & Compliance Documents
              </span>
              <v-btn icon @click="closeLegalitiesDialog">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-divider />

            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-card
                    variant="outlined"
                    rounded="lg"
                    class="pa-3 document-card"
                    @click="openZoom(legalDocuments[0])"
                  >
                    <v-img
                      :src="legalDocuments[0].images[0]"
                      aspect-ratio="1"
                      cover
                      class="rounded-lg mb-3 cursor-pointer"
                    />
                    <p class="text-body-2 font-weight-medium text-center">
                      Certificate of Registration
                    </p>
                  </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-card
                    variant="outlined"
                    rounded="lg"
                    class="pa-3 document-card"
                    @click="openZoom(legalDocuments[1])"
                  >
                    <v-img
                      :src="legalDocuments[1].images[0]"
                      aspect-ratio="1"
                      cover
                      class="rounded-lg mb-3 cursor-pointer"
                    />
                    <p class="text-body-2 font-weight-medium text-center">
                      Damayan 2nd Amended
                    </p>
                  </v-card>
                </v-col>
              </v-row>

              <v-dialog v-model="zoomDialog" max-width="90vw">
                <v-card rounded="xl">
                  <v-card-title
                    class="d-flex justify-space-between align-center"
                  >
                    <div>
                      <span class="text-h6 font-weight-bold">{{
                        zoomTitle
                      }}</span>
                      <div class="text-body-2 text-secondary">
                        Image {{ zoomIndex + 1 }} of {{ zoomImages.length }}
                      </div>
                    </div>
                    <v-btn icon @click="closeZoomDialog">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-title>

                  <v-divider />

                  <v-card-text
                    class="text-center d-flex align-center justify-center"
                  >
                    <v-btn icon :disabled="zoomIndex === 0" @click="prevImage">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>

                    <v-img
                      :src="zoomImages[zoomIndex]"
                      max-height="100vh"
                      contain
                      class="mx-4 rounded-lg"
                    />

                    <v-btn
                      icon
                      :disabled="zoomIndex === zoomImages.length - 1"
                      @click="nextImage"
                    >
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>

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
        <v-row class="text-center mb-10">
          <v-col cols="12">
            <h3 class="section-title mb-3">Features</h3>

            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 60px"
            />
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center g-6" align="stretch">
          <v-col cols="10" md="4" class="d-flex" data-aos="fade-right">
            <v-card
              variant="outlined"
              rounded="xl"
              class="pa-10 h-100 about-card text-center"
            >
              <h3 class="text-h5 font-weight-semibold mb-6 letter-spacing">
                Assignable
              </h3>

              <p class="text-body-1 text-medium-emphasis line-height-relaxed">
                Plans/Policy may be assigned from any person — living to
                deceased only.
              </p>
            </v-card>
          </v-col>

          <v-col cols="10" md="4" class="d-flex" data-aos="fade-up">
            <v-card
              variant="outlined"
              rounded="xl"
              class="pa-10 h-100 about-card text-center"
            >
              <h3 class="text-h5 font-weight-semibold mb-6 letter-spacing">
                Transferable
              </h3>

              <p class="text-body-1 text-medium-emphasis line-height-relaxed">
                Plans/Policy may be transferred from any person — living to
                living only.
              </p>
            </v-card>
          </v-col>

          <v-col cols="10" md="4" class="d-flex" data-aos="fade-left">
            <v-card
              variant="outlined"
              rounded="xl"
              class="pa-10 h-100 about-card text-center"
            >
              <h3 class="text-h5 font-weight-semibold mb-6 letter-spacing">
                Loanable
              </h3>

              <p class="text-body-1 text-medium-emphasis line-height-relaxed">
                Upon receiving your Certificate of Full Payment (COFP), you may
                apply for a policy loan with a guaranteed amount of up to 50% of
                the total amount paid.
              </p>
            </v-card>
          </v-col>

          <v-col cols="10" md="4" class="d-flex" data-aos="fade-down">
            <v-card
              variant="outlined"
              rounded="xl"
              class="pa-10 h-100 about-card text-center"
            >
              <h3 class="text-h5 font-weight-semibold mb-6 letter-spacing">
                Non-Forfeiture
              </h3>

              <p class="text-body-1 text-medium-emphasis line-height-relaxed">
                Client plans and policies will not be forfeited even if lapsed
                for several years.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Why Choose Goodlife Section -->
      <v-container fluid class="py-16 stats-section">
        <v-container max-width="700" class="text-center" data-aos="fade-up">
          <h2 class="text-h4 font-weight-bold mb-6 section-title">
            WHY CHOOSE GOODLIFE ?
          </h2>

          <v-expansion-panels variant="popout" class="text-left">
            <v-expansion-panel class="mb-4">
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
                collapse-icon="mdi-menu-up"
              >
                <v-row align="center" justify="space-between" class="w-100">
                  <span class="text-h6 font-weight-medium">Accessibility</span>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Our 190 plus Goodlife Damayan Insurance Agency Branches
                Nationwide with a centralized management system is a testament
                of the company's accessibility of services from application of
                coverage to claims of benefits or services reimbursement.
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
                collapse-icon="mdi-menu-up"
              >
                <v-row align="center" justify="space-between" class="w-100">
                  <span class="text-h6 font-weight-medium">Affordability</span>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                A life insurance agency that offers affordable premiums with
                high quality insurance benefits plus on optional coverage
                tailored to accomodate the client's needs.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-container>

      <!-- Products Section -->
      <v-container fluid class="py-16">
        <v-container id="products" max-width="1200">
          <v-row align="center" justify="space-between">
            <v-col cols="12" md="6" data-aos="slide-right">
              <h2 class="text-h4 font-weight-bold mb-4 section-title">
                Our Insurance Products
              </h2>

              <p
                class="text-body-1 mb-6 section-subtitle"
                style="line-height: 1.8; font-size: 1.1rem; color: #555"
              >
                Explore our carefully curated insurance solutions designed to
                protect what matters most. From everyday coverage to long-term
                security, we empower you with financial confidence at every
                stage of life.
              </p>

              <v-list density="comfortable" class="pa-0">
                <v-list-item
                  v-for="(feature, index) in features"
                  :key="index"
                  class="px-0 mb-2"
                >
                  <template #prepend>
                    <v-icon color="primary" class="me-3"
                      >mdi-shield-check</v-icon
                    >
                  </template>

                  <v-list-item-title
                    class="text-body-1 font-weight-medium"
                    style="color: #333"
                  >
                    {{ feature }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <v-col
              cols="12"
              md="12"
              class="d-flex justify-center justify-md-end align-center mt-6 mt-md-0"
              data-aos="fade-left"
            >
              <v-btn
                variant="outlined"
                color="primary"
                size="large"
                class="products-btn text-capitalize"
                :class="{ 'active-link': route.path === '/products' }"
                @click="goToProductsPage('/products')"
                style="
                  font-weight: 600;
                  padding-left: 28px;
                  padding-right: 28px;
                "
              >
                Explore Products
                <v-icon size="18" class="ml-2">mdi-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

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

      <!-- Contact Section — split layout (info + form) -->
      <v-container
        id="contact"
        fluid
        class="py-16 px-4 px-md-6 contact-page-split contact-cta"
      >
        <div class="contact-page-split__inner">
          <v-row class="align-start contact-split-row" data-aos="fade-up" justify="center">
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
                  href="mailto:info@goodlifedamayan.com"
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
                        info@goodlifedamayan.com
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
                  <v-col cols="12" md="6">
                    <label class="contact-form-label" for="contact-main-plan">
                      {{ CONTACT_SPLIT_FIELDS.planType.label }}
                    </label>
                    <v-select
                      id="contact-main-plan"
                      v-model="contactFormMain.planType"
                      :items="allPlans"
                      :placeholder="CONTACT_SPLIT_FIELDS.planType.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required]"
                      :error-messages="contactFormMainErrors.planType"
                      bg-color="white"
                      color="grey-darken-2"
                      item-title="title"
                      item-value="value"
                      return-object
                      clearable
                      class="minimal-select mb-5"
                    >
                      <template v-slot:selection="{ item }">
                        <div class="d-flex align-center">
                          <v-icon size="small" :color="item.raw.color" class="mr-2">{{ item.raw.icon }}</v-icon>
                          <span>{{ item.raw.title }}</span>
                        </div>
                      </template>
                      <template v-slot:item="{ props, item }">
                        <v-list-item v-bind="props" :title="item.raw.title">
                          <template v-slot:prepend>
                            <v-icon :color="item.raw.color" size="small">{{ item.raw.icon }}</v-icon>
                          </template>
                        </v-list-item>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label class="contact-form-label" for="contact-main-concern">
                      {{ CONTACT_SPLIT_FIELDS.concern.label }}
                    </label>
                    <v-text-field
                      id="contact-main-concern"
                      v-model="contactFormMain.concern"
                      :placeholder="CONTACT_SPLIT_FIELDS.concern.hint"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      :rules="[rules.required]"
                      :error-messages="contactFormMainErrors.concern"
                      bg-color="white"
                      color="grey-darken-2"
                      class="minimal-input mb-5"
                    ></v-text-field>
                  </v-col>
                </v-row>

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
                  href="https://www.facebook.com/share/18orq16XQj/?mibextid=wwXIfr"
                  target="_blank"
                  title="Follow us on Facebook"
                ></v-btn>
              </div>
            </v-col>

            <v-col cols="6" md="4">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">Quick Links</h4>
              <ul class="list-none pa-0">
                <li class="mb-2">
                  <a href="/" class="text-black text-decoration-none">Home</a>
                </li>
                <li class="mb-2">
                  <a href="/about" class="text-black text-decoration-none"
                    >About Us</a
                  >
                </li>
                <li class="mb-2">
                  <a href="/legalities" class="text-black text-decoration-none">
                    Legalities
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/services" class="text-black text-decoration-none">
                    Insurance Plans
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/contact" class="text-black text-decoration-none">
                    Contact
                  </a>
                </li>
                <li class="mb-2">
                  <a href="/privacy-policy" class="text-black text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" class="text-black text-decoration-none">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </v-col>

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
import "@/styles/css/style.css";
import { messageService } from "@/plugins/api";

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
const zoomDialog = ref(false);

// Contact Dialog State
const contactDialog = ref(false);
const formValid = ref(false);
const submitting = ref(false);
const contactFormRef = ref(null);
const contactAttempts = ref(0);
const rateLimitError = ref("");

// Main Contact Form State
const formValidMain = ref(false);
const submittingMain = ref(false);
const contactFormMainRef = ref(null);
const contactMainAttempts = ref(0);
const rateLimitErrorMain = ref("");

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
  concern: "",
  description: "",
  attachments: [],
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
  concern: "",
  description: "",
  attachments: [],
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
const allPlans = ref([
  { title: "Micro-Loans Redemption Insurance ( MLRI )", value: "mbai_insurance", icon: "mdi-crown", color: "#708090" },
  { title: "Jade Plan", value: "goodlife_jade", icon: "mdi-shield", color: "#708090" },
  { title: "Individual Insurance", value: "damayan_individual", icon: "mdi-account", color: "#708090" },
  { title: "Family Insurance", value: "damayan_family", icon: "mdi-account-group", color: "#708090" }
]);

// Concerns Options
const concernsList = ref([
  { title: "General Inquiry", value: "inquiry", icon: "mdi-information", color: "#708090" },
  { title: "Claim", value: "claim", icon: "mdi-file-document", color: "#708090" },
  { title: "Feedback", value: "feedback", icon: "mdi-comment", color: "#708090" },
  { title: "Support", value: "support", icon: "mdi-lifebuoy", color: "#708090" },
  { title: "Other", value: "other", icon: "mdi-dots-horizontal", color: "#708090" }
]);

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
    const pattern = /^[A-Za-z\sñÑ]+$/;
    return pattern.test(v) || "Please enter letters only";
  },
  numeric: (v) => {
    if (!v) return true;
    const pattern = /^[0-9]+$/;
    return pattern.test(v) || "Please enter numbers only";
  },
};

// Navigation State
const activeSection = ref("home");
const currentProductsRoute = ref("");
const zoomTitle = ref("");
const zoomImages = ref([]);
const zoomIndex = ref(0);

// Data Arrays
const sections = ["home", "about", "legalities", "features", "products", "contact"];
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

// Legal Documents Images
import cor1 from "@/assets/registration/COR-1.jpg";
import cor2 from "@/assets/registration/COR-2.jpg";
import cor3 from "@/assets/registration/COR-3.jpg";
import amended1 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0001.jpg";
import amended2 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0002.jpg";
import amended3 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0003.jpg";
import amended4 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0004.jpg";
import amended5 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0005.jpg";
import amended6 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0006.jpg";
import amended7 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0007.jpg";
import amended8 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0008.jpg";
import amended9 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0009.jpg";
import amended10 from "@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0010.jpg";

// Legal Documents Data
const legalDocuments = ref([
  {
    title: "Certificate of Registration",
    images: [cor1, cor2, cor3],
  },
  {
    title: "Damayan 2nd Amended",
    images: [amended1, amended2, amended3, amended4, amended5, amended6, amended7, amended8, amended9, amended10],
  },
]);

// ZOOM DIALOG METHODS
const openZoom = (doc) => {
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

// CONTACT FORM METHODS (Dialog)

const submitContactForm = async () => {
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

  try {
    const messageData = {
      title: `${contactForm.value.concern || 'Contact Support'} - ${contactForm.value.planType?.title || 'General Inquiry'}`,
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
      concern_info: [{ title: contactForm.value.concern, value: 'other' }],
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
      description: "",
      attachments: [],
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

  try {
    const messageData = {
      title: `${contactFormMain.value.concern || 'Contact Support'} - ${contactFormMain.value.planType?.title || 'General Inquiry'}`,
      description: contactFormMain.value.description,
      email: contactFormMain.value.email,
      contact_no: contactFormMain.value.contactNo,
      maf_no: contactFormMain.value.mafNo,
      last_name: contactFormMain.value.lastName,
      middle_name: contactFormMain.value.middleName || '',
      first_name: contactFormMain.value.firstName,
      complainant_last_name: contactFormMain.value.isSameAsComplainant ? contactFormMain.value.lastName : contactFormMain.value.complainantLastName,
      complainant_middle_name: contactFormMain.value.isSameAsComplainant ? (contactFormMain.value.middleName || '') : (contactFormMain.value.complainantMiddleName || ''),
      complainant_first_name: contactFormMain.value.isSameAsComplainant ? contactFormMain.value.firstName : contactFormMain.value.complainantFirstName,
      plan: contactFormMain.value.planType?.title || '',
      concern_info: [{ title: contactFormMain.value.concern, value: 'other' }],
      files: contactFormMain.value.attachments,
    };

    await messageService.add(messageData);

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
      concern: "",
      description: "",
      attachments: [],
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
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
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
</script>

<style scoped>
</style>