<template>
  <v-app>
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
            :class="{ 'active-link': $route.path === '/' }"
            @click="goToHomeSection('home')"
          >
            Home
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': $route.path === '/' }"
            @click="goToHomeSection('about')"
          >
            About
          </v-btn>

          <!-- Legalities Navigation Item -->
          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': $route.path === '/' }"
            @click="goToHomeSection('legalities')"
          >
            Legalities
          </v-btn>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': $route.path === '/' }"
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
                @click="goToProductsPage('/products/damayan')"
                :class="{
                  'active-submenu': $route.path === '/products/damayan',
                }"
              >
                <v-list-item-title>DAMAYAN</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="goToProductsPage('/products/goodlife-plans')"
                :class="{
                  'active-submenu': $route.path === '/products/goodlife-plans',
                }"
              >
                <v-list-item-title>Goodlife Plans</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="goToProductsPage('/products/mbai')"
                :class="{ 'active-submenu': $route.path === '/products/mbai' }"
              >
                <v-list-item-title>MBAI</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 mx-2 nav-btn"
            :class="{ 'active-link': $route.path === '/' }"
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
            @click="
              goToProductsPage('/products/damayan');
              drawer = false;
            "
          >
            <v-list-item-title>DAMAYAN</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              goToProductsPage('/products/goodlife-plans');
              drawer = false;
            "
          >
            <v-list-item-title>Goodlife Plans</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              goToProductsPage('/products/mbai');
              drawer = false;
            "
          >
            <v-list-item-title>MBAI</v-list-item-title>
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
<v-dialog v-model="contactDialog" max-width="800" persistent scrollable>
  <v-card rounded="lg" elevation="0" class="contact-dialog-minimal">
    <!-- Minimal Header -->
    <div class="d-flex justify-space-between align-center px-6 pt-6 pb-2">
      <div class="d-flex align-center">
        <span class="text-h6 font-weight-medium">Contact Support</span>
      </div>
      <v-btn 
        icon="mdi-close" 
        variant="text" 
        size="small"
        @click="contactDialog = false"
      ></v-btn>
    </div>

    <v-divider class="mx-6"></v-divider>

    <v-card-text class="pa-6">
      <!-- Compact Contact Info -->
      <div class="d-flex ga-4 mb-6">
        <div class="d-flex align-center">
          <v-icon size="small" color="grey-darken-1" class="mr-1">mdi-email-outline</v-icon>
          <span class="text-body-2 text-grey-darken-1">info@goodlifedamayan.com</span>
        </div>
        <div class="d-flex align-center">
          <v-icon size="small" color="grey-darken-1" class="mr-1">mdi-phone</v-icon>
          <span class="text-body-2 text-grey-darken-1">(082) 333 1809</span>
        </div>
      </div>

 <!-- Clean Form Layout -->
<v-form ref="contactFormRef" v-model="formValid" @submit.prevent="submitContactForm">
  <!-- Series No Section - Separated at the top -->
  <v-row dense class="mb-6">
    <v-col cols="12">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" size="small" class="mr-1">mdi-tag</v-icon>
        <span class="text-subtitle-2 font-weight-medium">Reference Information:</span>
      </div>
      <v-divider class="mb-4"></v-divider>
    </v-col>
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.seriesNo"
        label="Series No."
        placeholder="SER-2024-001"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required]"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>
  </v-row>

  <!-- Personal Information Section -->
  <v-row dense class="mb-6">
    <v-col cols="12">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" size="small" class="mr-1">mdi-account</v-icon>
        <span class="text-subtitle-2 font-weight-medium">Personal Information:</span>
      </div>
      <v-divider class="mb-4"></v-divider>
    </v-col>
    
    <!-- Last Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.lastName"
        label="Last name"
        placeholder="Dela Cruz"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required]"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- Middle Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.middleName"
        label="Middle name"
        placeholder="Santos"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required]"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- First Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.firstName"
        label="First name"
        placeholder="Juan"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required]"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>
  </v-row>

  <!-- Contact Information Section -->
  <v-row dense class="mb-6">
    <v-col cols="12">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" size="small" class="mr-1">mdi-phone</v-icon>
        <span class="text-subtitle-2 font-weight-medium">Contact Information:</span>
      </div>
      <v-divider class="mb-4"></v-divider>
    </v-col>

    <!-- Email -->
    <v-col cols="12" md="6">
      <v-text-field
        v-model="contactForm.email"
        label="Email"
        placeholder="juan@example.com"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required, rules.email]"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- Contact No -->
    <v-col cols="12" md="6">
      <v-text-field
        v-model="contactForm.contactNo"
        label="Contact no."
        placeholder="+63 912 345 6789"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required, rules.phone]"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>
  </v-row>

  <!-- Plan Details Section -->
  <v-row dense class="mb-6">
    <v-col cols="12">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" size="small" class="mr-1">mdi-file-document</v-icon>
        <span class="text-subtitle-2 font-weight-medium">Plan Details:</span>
      </div>
      <v-divider class="mb-4"></v-divider>
    </v-col>

    <!-- Entity - Dropdown Select -->
    <v-col cols="12" md="6">
      <v-select
        v-model="contactForm.entity"
        :items="entities"
        label="Entity type *"
        placeholder="Select entity type"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required]"
        bg-color="transparent"
        class="minimal-field"
        return-object
        item-title="title"
        item-value="value"
        clearable
        @update:model-value="handleEntityChange"
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

    <!-- Plan Type - Conditional Dropdown based on Entity -->
    <v-col cols="12" md="6">
      <template v-if="contactForm.entity">
        <!-- Damayan Plans Dropdown -->
        <v-select
          v-if="contactForm.entity.value === 'damayan'"
          v-model="contactForm.planType"
          :items="damayanPlans"
          label="Plan type *"
          placeholder="Select plan type"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :rules="[rules.required]"
          bg-color="transparent"
          class="minimal-field"
          item-title="title"
          item-value="value"
          return-object
          clearable
        >
          <template v-slot:selection="{ item }">
            <div class="d-flex align-center">
              <v-icon size="small" color="#708090" class="mr-2">mdi-account-group</v-icon>
              <span>{{ item.raw.title }}</span>
            </div>
          </template>
        </v-select>

        <!-- Goodlife Plans Dropdown -->
        <v-select
          v-else-if="contactForm.entity.value === 'goodlife_plans'"
          v-model="contactForm.planType"
          :items="goodlifePlans"
          label="Plan type *"
          placeholder="Select plan type"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :rules="[rules.required]"
          bg-color="transparent"
          class="minimal-field"
          item-title="title"
          item-value="value"
          return-object
          clearable
        >
          <template v-slot:selection="{ item }">
            <div class="d-flex align-center">
              <v-icon size="small" color="#708090" class="mr-2">mdi-account</v-icon>
              <span>{{ item.raw.title }}</span>
            </div>
          </template>
        </v-select>

        <!-- MBAI Plans Dropdown -->
        <v-select
          v-else-if="contactForm.entity.value === 'mbai'"
          v-model="contactForm.planType"
          :items="mbaiPlans"
          label="Plan type *"
          placeholder="Select plan type"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :rules="[rules.required]"
          bg-color="transparent"
          class="minimal-field"
          item-title="title"
          item-value="value"
          return-object
          clearable
        >
          <template v-slot:selection="{ item }">
            <div class="d-flex align-center">
              <v-icon size="small" color="#708090" class="mr-2">mdi-office-building</v-icon>
              <span>{{ item.raw.title }}</span>
            </div>
          </template>
        </v-select>
      </template>
      
      <!-- Placeholder when no entity selected -->
      <v-text-field
        v-else
        label="Plan type"
        placeholder="Select entity type first"
        variant="outlined"
        density="compact"
        hide-details="auto"
        disabled
        bg-color="grey-lighten-3"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- Message - Clean Textarea -->
    <v-col cols="12">
      <v-textarea
        v-model="contactForm.description"
        label="Message"
        placeholder="How can we help you?"
        variant="outlined"
        density="compact"
        rows="3"
        auto-grow
        hide-details="auto"
        :rules="[rules.required]"
        bg-color="transparent"
        class="minimal-field"
      ></v-textarea>
    </v-col>
  </v-row>
</v-form>
    </v-card-text>

    <v-divider></v-divider>

    <!-- Minimal Actions -->
    <v-card-actions class="pa-4">
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        size="small"
        @click="contactDialog = false"
      >
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        variant="flat"
        size="small"
        class="ml-2"
        :loading="submitting"
        :disabled="submitting"
        @click="submitContactForm"
      >
        Send
      </v-btn>
    </v-card-actions>
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
                
                <p class="banner-subtitle mb-8">
                  Discover comprehensive insurance solutions designed to protect
                  what matters most in your life.
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
          <v-col cols="12" md="10" lg="8">
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

      <v-container id="benefit-coverage" class="py-16">
        <!-- Centered Header -->
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h3 font-weight-bold mb-4" style="color: #1a202c">
              Benefit Coverage
            </h3>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #03a635"
            />
            <h4 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
              INDI
            </h4>
            <p
              class="text-body-1 text-grey-darken-2"
              style="max-width: 600px; margin: 0 auto"
            >
              Upon death of a member, his/her beneficiaries shall be entitled to
              the following:
            </p>
          </v-col>
        </v-row>

        <!-- Centered Benefits List -->
        <v-row justify="center" class="mb-12" data-aos="fade-up">
          <v-col cols="12" md="8" lg="6">
            <v-row>
              <v-col
                cols="6"
                md="3"
                v-for="(item, index) in [
                  'Basic Life Insurance Benefit',
                  'Accidental Death Benefits',
                  'Waiver of Premium due to Death',
                  'Cash Assistance',
                ]"
                :key="item"
                class="text-center"
              >
                <div class="benefit-icon-wrapper mb-3">
                  <v-icon size="30" color="primary">
                    {{
                      [
                        'mdi-heart',
                        'mdi-car-brake-alert',
                        'mdi-shield-check',
                        'mdi-cash',
                      ][index]
                    }}
                  </v-icon>
                </div>
                <p class="text-body-1" style="color: #2d3748">
                  {{ item }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Centered Cards -->
        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="10" lg="8">
            <v-row justify="center">
              <!-- Basic Life Insurance -->
              <v-col cols="12" md="4" class="text-center mb-6">
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <div class="text-center mb-4 mt-5">
                    <h4 class="text-h5 font-weight-bold" style="color: #2d3748">
                      Basic Life Insurance
                    </h4>
                  </div>

                  <div class="text-center">
                    <div class="mb-3">
                      <p class="text-caption text-grey-darken-2 mb-1">
                        APPLICABLE FOR PRINCIPAL:
                      </p>
                      <p class="text-body-1 font-weight-medium">
                        18-60 Years Old
                      </p>
                    </div>

                    <div class="mb-3">
                      <p class="text-caption text-grey-darken-2 mb-1">
                        CASH ASSISTANCE:
                      </p>
                      <p class="text-h5 font-weight-bold text-primary">
                        ₱25,000.00
                      </p>
                    </div>

                    <div>
                      <p class="text-caption text-grey-darken-2 mb-2">
                        CONTESTABILITY:
                      </p>
                      <div class="d-flex justify-center">
                        <span class="text-body-2 font-weight-medium mr-2"
                          >1 Year</span
                        >
                        <v-divider vertical style="height: 20px"></v-divider>
                        <span class="text-body-2 font-weight-medium ml-2"
                          >12 Months</span
                        >
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>

              <!-- Accidental Death Insurance -->
              <v-col cols="12" md="4" class="text-center mb-6">
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <div class="text-center mb-4 mt-5">
                    <h4 class="text-h5 font-weight-bold" style="color: #2d3748">
                      Accidental Death Insurance
                    </h4>
                  </div>

                  <div class="text-center">
                    <div class="mb-3">
                      <p class="text-caption text-grey-darken-2 mb-1">
                        APPLICABLE FOR PRINCIPAL:
                      </p>
                      <p class="text-body-1 font-weight-medium">
                        18-60 Years Old
                      </p>
                    </div>

                    <div class="mb-3">
                      <p class="text-caption text-grey-darken-2 mb-1">
                        CASH ASSISTANCE:
                      </p>
                      <p class="text-h5 font-weight-bold text-primary">
                        ₱25,000.00
                      </p>
                    </div>

                    <div>
                      <p class="text-caption text-grey-darken-2 mb-2">
                        CONTESTABILITY:
                      </p>
                      <p class="text-body-1 font-weight-medium mb-2">
                        24 Hours
                      </p>
                      <p class="text-caption text-red" style="font-size: 11px">
                        Note: Strictly for Vehicular Accidents
                      </p>
                    </div>
                  </div>
                </v-card>
              </v-col>

              <!-- Cash Assistance -->
              <v-col cols="12" md="4" class="text-center mb-6">
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <div class="text-center mb-4 mt-5">
                    <h4 class="text-h5 font-weight-bold" style="color: #2d3748">
                      Cash Assistance
                    </h4>
                  </div>

                  <div class="text-center">
                    <div class="mb-3">
                      <p class="text-caption text-grey-darken-2 mb-1">
                        APPLICABLE FOR PRINCIPAL:
                      </p>
                      <p class="text-body-1 font-weight-medium">
                        18-60 Years Old
                      </p>
                    </div>

                    <div class="mb-3">
                      <p class="text-caption text-grey-darken-2 mb-1">
                        CASH ASSISTANCE:
                      </p>
                      <p class="text-h5 font-weight-bold text-primary">
                        ₱5,000.00
                      </p>
                    </div>

                    <div>
                      <p class="text-caption text-grey-darken-2 mb-2">
                        CONTESTABILITY:
                      </p>
                      <div class="mb-2">
                        <div class="d-flex justify-center">
                          <span class="text-body-2 font-weight-medium mr-2"
                            >1 Year</span
                          >
                          <v-divider vertical style="height: 20px"></v-divider>
                          <span class="text-body-2 font-weight-medium ml-2"
                            >12 Months - Natural</span
                          >
                        </div>
                        <p class="text-body-2 font-weight-medium">
                          24 Hours - Accident
                        </p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- PRINCIPAL BENEFIT COVERAGE SECTION -->
      <v-container id="principal-benefit-coverage" class="py-16">
        <!-- Section Header -->
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h3 font-weight-bold mb-4" style="color: #1a202c">
              Principal Benefit Coverage | INDI
            </h3>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #03a635"
            />
            <p
              class="text-body-1 text-grey-darken-2"
              style="max-width: 600px; margin: 0 auto"
            >
              Sample Detailed Computation
            </p>
          </v-col>
        </v-row>

        <!-- Computation Cards -->
        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="10" lg="8">
            <v-row justify="center">
              <!-- Natural Death -->
              <v-col cols="12" md="6" class="text-center mb-6">
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <div class="text-center mb-4 mt-5">
                    <h4
                      class="text-h5 font-weight-bold mb-2"
                      style="color: #1e3a8a"
                    >
                      Natural Death
                    </h4>
                  </div>

                  <!-- Requirements -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Requirements:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Double benefits with 1 year contestability
                      </p>
                      <p class="text-subtitle-2 mb-0" style="color: #ef4444">
                        (18–60 years old upon application)
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Payment Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Payment Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Total Contract Savings: ₱31,500
                      </p>
                      <p class="text-subtitle-2 mb-0">
                        • 375 x 12 Months: ₱4,500 <br />
                        &nbsp;&nbsp;
                        <span style="color: #ef4444"
                          >Balance (waived): ₱27,000</span
                        >
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Coverage Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Coverage Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Basic Life Coverage: ₱25,000
                      </p>
                      <p class="text-subtitle-2 mb-1">
                        • Cash Assistance Benefit: ₱5,000
                      </p>
                      <div class="mt-3 pt-2 text-center">
                        <p
                          class="text-h5 font-weight-bold mb-0"
                          style="color: #1e3a8a"
                        >
                          Total Coverage: ₱30,000
                        </p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>

              <!-- Accidental Death -->
              <v-col cols="12" md="6" class="text-center mb-6">
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <div class="text-center mb-4 mt-5">
                    <h4
                      class="text-h5 font-weight-bold mb-2"
                      style="color: #dc2626"
                    >
                      Accidental Death
                    </h4>
                  </div>

                  <!-- Requirements -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Requirements:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Triple benefits with 24 Hours contestability
                      </p>
                      <p class="text-subtitle-2 mb-0" style="color: #ef4444">
                        (18–60 years old upon application)
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Payment Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Payment Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Total Contract Savings: ₱31,500
                      </p>
                      <p class="text-subtitle-2 mb-0">
                        • 375 x 1 Month: ₱375 <br />
                        &nbsp;&nbsp;
                        <span style="color: #ef4444"
                          >Balance (waived): ₱31,125</span
                        >
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Coverage Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Coverage Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Basic Life Coverage: ₱25,000
                      </p>
                      <p class="text-subtitle-2 mb-1">
                        • Accidental Coverage: ₱25,000
                      </p>
                      <p class="text-subtitle-2 mb-1">
                        • Cash Assistance Benefit: ₱5,000
                      </p>
                      <div class="mt-3 pt-2 text-center">
                        <p
                          class="text-h5 font-weight-bold mb-0"
                          style="color: #dc2626"
                        >
                          Total Coverage: ₱55,000
                        </p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Comparison Summary -->
        <v-row class="mt-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <v-card class="pa-6 elevation-0 outlined">
              <div class="text-center">
                <h4
                  class="text-h5 font-weight-bold mb-4"
                  style="color: #3e3a5b"
                >
                  Benefit Comparison
                </h4>
              </div>

              <v-row class="text-center">
                <v-col cols="12" md="6">
                  <div class="pa-4">
                    <div
                      class="text-h4 font-weight-bold mb-2"
                      style="color: #1e3a8a"
                    >
                      ₱30,000
                    </div>
                    <p class="text-body-2 text-grey-darken-2 mb-0">
                      Natural Death Benefit
                    </p>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <div class="pa-4">
                    <div
                      class="text-h4 font-weight-bold mb-2"
                      style="color: #dc2626"
                    >
                      ₱55,000
                    </div>
                    <p class="text-body-2 text-grey-darken-2 mb-0">
                      Accidental Death Benefit
                    </p>
                  </div>
                </v-col>
              </v-row>

              <v-divider class="my-5" />
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
          <v-col cols="12" md="10" lg="8">
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

      <v-container id="principal-benefit-coverage-fami" class="py-16">
        <!-- Section Header -->
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h3 font-weight-bold mb-4" style="color: #1a202c">
              Principal Benefit Coverage | FAMI
            </h3>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #03a635"
            />
            <p
              class="text-body-1 text-grey-darken-2"
              style="max-width: 600px; margin: 0 auto"
            >
              Sample Detailed Computation
            </p>
          </v-col>
        </v-row>

        <!-- Computation Cards -->
        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="10" lg="8">
            <v-row justify="center">
              <!-- Natural Death -->
              <v-col cols="12" md="6" class="text-center mb-6">
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <div class="text-center mb-4 mt-5">
                    <h4
                      class="text-h5 font-weight-bold mb-2"
                      style="color: #1e3a8a"
                    >
                      Natural Death
                    </h4>
                  </div>

                  <!-- Requirements -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Requirements:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Double benefits with 1 year contestability
                      </p>
                      <p class="text-subtitle-2 mb-0" style="color: #ef4444">
                        (18–60 years old upon application)
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Payment Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Payment Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Total Contract Savings: ₱39,000
                      </p>
                      <p class="text-subtitle-2 mb-0">
                        • 650 x 12 Months: ₱7,800 <br />
                        &nbsp;&nbsp;
                        <span style="color: #ef4444"
                          >Balance (waived): ₱31,200</span
                        >
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Coverage Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Coverage Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Basic Life Coverage: ₱25,000
                      </p>
                      <p class="text-subtitle-2 mb-1">
                        • Cash Assistance Benefit: ₱15,000
                      </p>
                      <div class="mt-3 pt-2 text-center">
                        <p
                          class="text-h5 font-weight-bold mb-0"
                          style="color: #1e3a8a"
                        >
                          Total Coverage: ₱40,000
                        </p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>

              <!-- Accidental Death -->
              <v-col cols="12" md="6" class="text-center mb-6">
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <div class="text-center mb-4 mt-5">
                    <h4
                      class="text-h5 font-weight-bold mb-2"
                      style="color: #dc2626"
                    >
                      Accidental Death
                    </h4>
                  </div>

                  <!-- Requirements -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Requirements:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Triple benefits with 24 Hours contestability
                      </p>
                      <p class="text-subtitle-2 mb-0" style="color: #ef4444">
                        (18–60 years old upon application)
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Payment Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Payment Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Total Contract Savings: ₱39,000
                      </p>
                      <p class="text-subtitle-2 mb-0">
                        • 650 x 1 Month: ₱650 <br />
                        &nbsp;&nbsp;
                        <span style="color: #ef4444"
                          >Balance (waived): ₱38,350</span
                        >
                      </p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Coverage Computation -->
                  <div class="mb-4 text-left">
                    <p class="text-subtitle-2 mb-1">
                      <strong>Coverage Computation:</strong>
                    </p>
                    <div class="pl-3">
                      <p class="text-subtitle-2 mb-1">
                        • Basic Life Coverage: ₱25,000
                      </p>
                      <p class="text-subtitle-2 mb-1">
                        • Accidental Coverage: ₱25,000
                      </p>
                      <p class="text-subtitle-2 mb-1">
                        • Cash Assistance Benefit: ₱15,000
                      </p>
                      <div class="mt-3 pt-2 text-center">
                        <p
                          class="text-h5 font-weight-bold mb-0"
                          style="color: #dc2626"
                        >
                          Total Coverage: ₱65,000
                        </p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Comparison Summary -->
        <v-row class="mt-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <v-card class="pa-6 elevation-0 outlined">
              <div class="text-center">
                <h4
                  class="text-h5 font-weight-bold mb-4"
                  style="color: #3e3a5b"
                >
                  Benefit Comparison
                </h4>
              </div>

              <v-row class="text-center">
                <v-col cols="12" md="6">
                  <div class="pa-4">
                    <div
                      class="text-h4 font-weight-bold mb-2"
                      style="color: #1e3a8a"
                    >
                      ₱40,000
                    </div>
                    <p class="text-body-2 text-grey-darken-2 mb-0">
                      Natural Death Benefit
                    </p>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <div class="pa-4">
                    <div
                      class="text-h4 font-weight-bold mb-2"
                      style="color: #dc2626"
                    >
                      ₱65,000
                    </div>
                    <p class="text-body-2 text-grey-darken-2 mb-0">
                      Accidental Death Benefit
                    </p>
                  </div>
                </v-col>
              </v-row>

              <v-divider class="my-4" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container id="special-benefit-coverage" class="py-16">
        <!-- Section Header -->
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold mb-4 section-title">
              Special Benefit Coverage | FAMI
            </h3>
            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 80px; background-color: #03a635"
            />
            <p class="text-body-2 text-grey-darken-1">
              Comprehensive family protection coverage
            </p>
          </v-col>
        </v-row>

        <!-- Dependents Coverage -->
        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="10" lg="8">
            <v-row>
              <v-col
                cols="12"
                md="4"
                v-for="(dependent, index) in [
                  'DEPENDENT 1',
                  'DEPENDENT 2',
                  'DEPENDENT 3',
                ]"
                :key="dependent"
                class="mb-6"
              >
                <v-card variant="outlined" class="rounded-lg pa-4 h-100">
                  <!-- Header -->
                  <div class="text-center mb-4">
                    <v-icon
                      size="32"
                      :color="['primary', 'primary', 'primary'][index]"
                      class="mb-2"
                    >
                      {{
                        [
                          'mdi-account',
                          'mdi-account-multiple',
                          'mdi-account-group',
                        ][index]
                      }}
                    </v-icon>
                    <div
                      class="text-h6 font-weight-bold"
                      style="color: #2d3748"
                    >
                      {{ dependent }}
                    </div>
                  </div>

                  <!-- Coverage Details -->
                  <div class="text-center">
                    <div class="mb-4">
                      <div class="text-overline text-grey-darken-2 mb-3">
                        COVERAGE COMPUTATION
                      </div>

                      <div class="mb-3">
                        <div class="text-caption text-grey-darken-2 mb-1">
                          Basic Life Coverage
                        </div>
                        <div
                          class="text-h6 font-weight-medium text-grey-darken-4"
                        >
                          ₱25,000
                        </div>
                      </div>

                      <div class="mb-4">
                        <div class="text-caption text-grey-darken-2 mb-1">
                          Cash Assistance Benefit
                        </div>
                        <div
                          class="text-h6 font-weight-medium text-grey-darken-4"
                        >
                          ₱5,000
                        </div>
                      </div>
                    </div>

                    <!-- Total Coverage -->
                    <div class="pt-3" style="border-top: 1px solid #e2e8f0">
                      <div class="text-overline text-grey-darken-2 mb-1">
                        TOTAL COVERAGE
                      </div>
                      <div class="text-h5 font-weight-bold text-primary">
                        ₱30,000
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Total Coverage & Requirements -->
        <v-row justify="center" class="mt-8" data-aos="fade-up">
          <v-col cols="12" md="8" lg="6">
            <v-card variant="outlined" class="rounded-lg pa-5">
              <!-- Requirements -->
              <div class="text-center mb-4">
                <div class="d-flex align-center justify-center mb-2">
                  <v-icon
                    icon="mdi-file-document-check"
                    size="20"
                    color="grey-darken-2"
                    class="mr-2"
                  ></v-icon>
                  <span
                    class="text-body-2 font-weight-medium text-grey-darken-3"
                  >
                    Requirements
                  </span>
                </div>
                <p class="text-body-1 text-grey-darken-2 mb-0">
                  Double benefits with 1 year contestability
                  <span class="text-red" style="font-weight: 500">
                    (18–60 years old upon application)
                  </span>
                </p>
              </div>

              <!-- Divider -->
              <v-divider class="my-4"></v-divider>

              <!-- Total Coverage -->
              <div class="text-center mb-4">
                <div class="d-flex align-center justify-center mb-2">
                  <span class="text-h5 font-weight-bold" style="color: #2d3748">
                    TOTAL DEPENDENT COVERAGE
                  </span>
                </div>
                <div class="text-h3 font-weight-medium text-primary">
                  ₱ 90,000.00
                </div>
              </div>

              <!-- Divider -->
              <v-divider class="my-4"></v-divider>

              <!-- Note -->
              <div class="text-center">
                <div class="d-flex align-center justify-center mb-2">
                  <v-icon
                    icon="mdi-information"
                    size="20"
                    color="grey-darken-2"
                    class="mr-2"
                  ></v-icon>
                  <span
                    class="text-body-2 font-weight-medium text-grey-darken-3"
                  >
                    Important Note
                  </span>
                </div>
                <p class="text-body-1 text-grey-darken-2 mb-2">
                  Double benefits with 12 Months Contestability, Only for
                  Qualified Immediate Family Members
                </p>
                <div class="text-caption font-weight-medium text-grey-darken-1">
                  MOTHER | FATHER | BROTHER | SISTER | SPOUSE | CHILDREN
                </div>
              </div>
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

      <v-container id="extended-arrangement" class="py-16">
        <!-- Section Header -->
        <v-row class="text-center mb-12" data-aos="fade-up">
          <v-col cols="12">
            <h3 class="text-h4 font-weight-bold mb-4 mt-16 section-title">
              Optional Extended Arrangement
            </h3>
            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 80px"
            />
          </v-col>
        </v-row>

        <!-- Basic Life to Services -->
        <v-row class="mb-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <v-card class="pa-6 elevation-0 outlined">
              <div class="text-center mb-4">
                <h4
                  class="text-h5 font-weight-bold mb-3"
                  style="color: #3e3a5b"
                >
                  Basic Life to Services
                </h4>
              </div>

              <div class="text-left">
                <p class="text-subtitle-2 mb-3">
                  In the event of death, clients may choose to select the
                  optional extended burial services arrangement. The specified
                  amount for Basic Life Coverage will be used to pay the service
                  arrangement.
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Burial Services Arrangement -->
        <v-row class="mb-8" data-aos="fade-up">
          <v-col cols="12" md="8" class="mx-auto">
            <v-card class="pa-6 elevation-0 outlined">
              <div class="text-center mb-4">
                <h4
                  class="text-h5 font-weight-bold mb-3"
                  style="color: #3e3a5b"
                >
                  Burial Services Arrangement
                </h4>
              </div>

              <div class="text-left">
                <p class="text-subtitle-2 mb-0">
                  Burial Service Package will be arranged by the servicing
                  mortuary of Goodlife Memorial Chapel and its affiliates as
                  extended assistance of the agency to render quality customer
                  service.
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- CTA Section -->
      <v-container
        fluid
        class="py-16"
        style="background: linear-gradient(135deg, #4a4561, #3e3a5b)"
      >
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h2
                class="text-h3 font-weight-bold mb-4 mt-13"
                style="color: white"
              >
                Need Help Choosing?
              </h2>
              <p class="text-h6 mb-8" style="color: rgba(255, 255, 255, 0.9)">
                Our insurance experts are ready to help you find the perfect
                coverage for your needs.
              </p>
              <v-btn
                color="white"
                size="large"
                class="text-primary text-capitalize"
                @click="goToHomeSection('contact')"
              >
                Get Free Consultation
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
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
  </v-app>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/css/style.css";
import { messageService } from "@/plugins/api";

const router = useRouter();
const drawer = ref(false);
const showDetailsDialog = ref(false);
const selectedProduct = ref(null);

const goToProductsPage = (route) => {
  drawer.value = false;
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
const contactDialog = ref(false);           // Dialog visibility
const formValid = ref(false);              // Form validation state
const submitting = ref(false);             // Submission loading state
const contactFormRef = ref(null);          // Form reference for validation

// Contact Form Data - Minimal fields only
const contactForm = ref({
  seriesNo: "",
  lastName: "",
  middleName: "",
  firstName: "",
  email: "",
  contactNo: "",
  entity: null,
  planType: null,
  title: "",
  description: "",
});

// Entity Options
const entities = ref([
  { 
    title: "Goodlife Plans", 
    value: "goodlife_plans", 
    icon: "mdi-account", 
    color: "#708090" 
  },
  { 
    title: "MBAI", 
    value: "mbai", 
    icon: "mdi-office-building", 
    color: "#708090" 
  },
  { 
    title: "Damayan", 
    value: "damayan", 
    icon: "mdi-account-group", 
    color: "#708090" 
  },
]);

// Plan Type Options based on Entity
const damayanPlans = ref([
  { title: "Individual Insurance", value: "damayan_individual", icon: "mdi-account", color: "#708090"  },
  { title: "Family Insurance", value: "damayan_family", icon: "mdi-account-group", color: "#708090"  },
]);

const goodlifePlans = ref([
  { title: "Jade Plan", value: "goodlife_life", icon: "mdi-shield", color: "#708090" },
]);

const mbaiPlans = ref([
  { title: "Micro-Loans Redemption Insurance (MLRI)", value: "mbai_insurance", icon: "mdi-crown", color: "#708090" },
  { title: "OFW Secure Life", value: "mbai_secure_life", icon: "mdi-star", color: "#708090" },
  { title: "Life Shield Plus", value: "mbai_shield_plus", icon: "mdi-diamond", color: "#708090" },
  { title: "Glife Protek Excel", value: "mbai_protek_excel", icon: "mdi-diamond", color: "#708090" },
  { title: "Glife Protek Insurance", value: "mbai_protek_insurance", icon: "mdi-diamond", color: "#708090" },
  { title: "Glife Healthease", value: "mbai_healthease", icon: "mdi-diamond", color: "#708090" },
  { title: "Glife Comfort", value: "mbai_comfort", icon: "mdi-diamond", color: "#708090" },
]);

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
    return !!v || "This field is required";
  },
  email: (v) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(v) || "Please enter a valid email address";
  },
  phone: (v) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return pattern.test(v) || "Please enter a valid phone number";
  },
};

// Handle entity change - reset plan type when entity changes
const handleEntityChange = () => {
  contactForm.value.planType = null;
};

// ============ MINIMALIST CONTACT FORM METHODS ============

const submitContactForm = async () => {
  const { valid } = await contactFormRef.value?.validate();
  if (!valid) return;

  submitting.value = true;

  try {
    // Prepare the data for the ticket system API
    const messageData = {
      title: `Contact Support - ${contactForm.value.entity?.title || 'General Inquiry'}`,
      description: contactForm.value.description,
      email: contactForm.value.email,
      contact_no: contactForm.value.contactNo,
      series_no: contactForm.value.seriesNo,
      last_name: contactForm.value.lastName,
      middle_name: contactForm.value.middleName || '',
      first_name: contactForm.value.firstName,
      plan: contactForm.value.planType?.title || '',
      entity: contactForm.value.entity?.title || '',
    };

    // Send to ticket system API
    await messageService.add(messageData);

    snackbar.value = {
      show: true,
      text: "Your message has been sent successfully! We'll respond within 24 hours.",
      color: "success",
    };

    contactFormRef.value?.reset();
    contactForm.value = {
      seriesNo: "",
      lastName: "",
      middleName: "",
      firstName: "",
      email: "",
      contactNo: "",
      entity: null,
      planType: null,
      title: "",
      description: "",
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
/**
 * Reset contact form manually
 */
const resetContactForm = () => {
  contactFormRef.value?.reset();
  contactForm.value = {
    seriesNo: "",
    lastName: "",
    firstName: "",
    email: "",
    contactNo: "",
    entity: null,
    title: "",
    description: "",
  };
};

/**
 * Open contact dialog and optionally reset form
 */
const openContactDialog = () => {
  contactDialog.value = true;
  // Optional: Reset form when opening
  // resetContactForm();
};

/**
 * Close contact dialog and reset form
 */
const closeContactDialog = () => {
  contactDialog.value = false;
  resetContactForm();
};

const showContactIcon = ref(true);

watch(contactDialog, (newVal) => {
  if (newVal) {
    // Dialog is opening - hide the icon
    showContactIcon.value = false;
  } else {
    // Dialog is closing - show the icon
    showContactIcon.value = true;
  }
});


// Scroll to top when page loads
onMounted(() => {
  window.scrollTo(0, 0);

  // Initialize AOS
  AOS.init({
    duration: 1500,
    once: false,
    mirror: true,
    offset: 120,
  });
});

// Function to navigate to home page with section
const goToHomeSection = (section) => {
  router.push("/").then(() => {
    // Wait for navigation to complete
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = -120;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  });
};

// Function to scroll within this page
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -120;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
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
</style>