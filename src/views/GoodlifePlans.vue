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
          @click="goToHomeSection('home')"
        ></v-list-item>
        <v-list-item
          title="About"
          @click="goToHomeSection('about')"
        ></v-list-item>
        <v-list-item
          title="Blog"
          @click="goToHomeSection('blog')"
        ></v-list-item>
        <v-list-item
          title="Legalities"
          @click="goToHomeSection('legalities')"
        ></v-list-item>
        <v-list-item
          title="Features"
          @click="goToHomeSection('features')"
        ></v-list-item>

        <!-- Products Submenu in Mobile -->
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
          @click="goToHomeSection('contact')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Goodlife Plans Hero Section - FIXED GAP -->
      <div class="products-hero">
        <!-- Color Background -->
        <div class="color-background"></div>

        <div class="banner-content">
          <!-- MICRO INSURANCE LOGO -->
          <img
            src="@/assets/images/micro-insurance.png"
            alt="Micro Insurance Logo"
            class="plans-banner-logo"
          />

          <v-container class="fill-height">
            <v-row align="center" class="fill-height" data-aos="fade-up">
              <v-col cols="12" sm="12" md="7" class="text-center text-md-start">
                <h1 class="banner-titles-plan">GOODLIFE PLANS INC.</h1>

                <!-- Marketing Highlight -->
                <div class="marketing-badge mb-4">
                  <v-chip color="success" variant="flat" size="large" class="font-weight-bold mr-2">
                    <v-icon start>mdi-cash</v-icon>
                    Only ₱800/month
                  </v-chip>
                  <v-chip color="primary" variant="flat" size="large" class="font-weight-bold">
                    <v-icon start>mdi-gift</v-icon>
                    ₱75,050 Total Benefits
                  </v-chip>
                </div>

                <p class="banner-subtitles-plan">
                  With bigger benefits, we ensure that protection and financial
                  stability are always within reach. <strong>Get ₱37,525 Cash Assistance + ₱37,525 Memorial Service Package — casket, embalming, chapel & more included!</strong>
                </p>

                <v-btn
                  color="white"
                  size="large"
                  class="text-primary text-capitalize"
                  @click="scrollToSection('premium-table')"
                >
                  View Plans
                  <v-icon end>mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" md="5" class="text-center">
                <div class="banner-image-container">
                  <img
                    src="@/assets/images/plans.png"
                    alt="Goodlife Plans Logo"
                    class="banner-image"
                  />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>

      <v-container id="memorial-package" class="py-16" data-aos="fade-up">
        <!-- Title -->
        <v-row justify="center" class="mb-12">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-3" style="color: #1a202c">
              Memorial Service Package
            </h2>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #03a635"
            />
            <p
              class="text-body-1 text-medium-emphasis"
              style="font-size: 1.125rem"
            >
              A dignified and complete memorial arrangement
            </p>
          </v-col>
        </v-row>

        <!-- Content -->
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <div class="minimal-wrapper">
              <v-row>
                <!-- LEFT - Package Inclusions -->
                <v-col cols="12" md="6" class="pr-md-8">
                  <div class="section-header d-flex align-center mb-6">
                    <div class="header-line"></div>
                    <h3
                      class="text-h5 font-weight-bold pl-3"
                      style="color: #2d3748"
                    >
                      Package Inclusions
                    </h3>
                  </div>

                  <div class="package-list">
                    <div
                      v-for="(item, index) in [
                        'Casket (Full Glass)',
                        'Casket Decoration',
                        '25 Kilometer Free Charges',
                        'Viewing (7 Days Residence)',
                        'Flowers or Wreaths',
                        'Tarpaulin',
                        '7 Days Embalming',
                        'Ribbons',
                      ]"
                      :key="item"
                      class="package-item d-flex align-center py-3"
                      :style="{
                        borderBottom: index < 7 ? '1px solid #e2e8f0' : 'none',
                        borderLeft: '3px solid transparent',
                      }"
                      @mouseenter="itemHover(index)"
                      @mouseleave="itemHover(null)"
                      :class="{ 'item-hovered': hoveredItem === index }"
                    >
                      <v-icon
                        size="20"
                        :color="hoveredItem === index ? '#edad00' : '#4a5568'"
                        class="mr-3"
                      >
                        mdi-check
                      </v-icon>
                      <span
                        class="text-body-1"
                        style="color: #2d3748; transition: color 0.2s"
                      >
                        {{ item }}
                      </span>
                    </div>
                  </div>
                </v-col>

                <!-- RIGHT - Casket Description -->
                <v-col cols="12" md="6" class="pl-md-8 mt-12 mt-md-0">
                  <div class="section-header d-flex align-center mb-6">
                    <div class="header-line"></div>
                    <h3
                      class="text-h5 font-weight-bold pl-3"
                      style="color: #2d3748"
                    >
                      Casket Description
                    </h3>
                  </div>

                  <!-- Casket Features - Minimalist Tags -->
                  <div class="casket-tags mb-8">
                    <div
                      v-for="feature in [
                        'SINGLE TOP',
                        'WOODEN CASKET',
                        'FULL GLASS',
                        'QUALITY & ELEGANT INTERIORS',
                      ]"
                      :key="feature"
                      class="tag-item d-inline-block pa-2 mr-2 mb-2"
                      style="
                        border: 1.5px solid #e2e8f0;
                        border-radius: 6px;
                        color: #4a5568;
                        font-size: 0.85rem;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        transition: all 0.2s ease;
                      "
                      @mouseenter="tagHover(feature)"
                      @mouseleave="tagHover(null)"
                      :class="{ 'tag-hovered': hoveredTag === feature }"
                    >
                      {{ feature }}
                    </div>
                  </div>

                  <!-- Casket Image - Clean Version -->
                  <div class="casket-image-wrapper" data-aos="fade-left">
                    <v-img
                      src="@/assets/images/casket.png"
                      cover
                      class="casket-image"
                      style="border-radius: 8px"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="#03a635"
                            size="48"
                            width="2"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </div>
                </v-col>
              </v-row>

              <!-- Minimal Footer Note -->
              <v-row
                justify="center"
                class="mt-12 pt-8"
                style="border-top: 1px solid #e2e8f0"
              >
                <v-col cols="12" md="8" class="text-center">
                  <p class="text-body-2 mb-0" style="color: #718096">
                    Complete memorial service • Professional assistance •
                    Dignified arrangements
                  </p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Premium Table Section - Clean Minimalist -->
      <v-container id="premium-table" class="py-16">
        <v-row justify="center" class="mb-8" data-aos="fade-up">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-3" style="color: #1a202c">
              Plan Premium Table
            </h2>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #03a635"
            />
            <p class="text-body-2 text-grey-darken-1">Flexible payment terms</p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <!-- Minimal Payment Grid -->
            <v-row class="mb-6" data-aos="fade-up">
              <v-col
                cols="12"
                md="6"
                v-for="option in paymentOptions"
                :key="option.name"
              >
                <v-card
                  variant="outlined"
                  class="rounded-lg pa-4 h-100"
                  :class="{ 'border-primary': option.mostPopular }"
                >
                  <!-- Simple Header -->
                  <div class="d-flex align-center mb-4">
                    <v-icon
                      :icon="option.icon"
                      size="20"
                      color="grey-darken-2"
                      class="mr-3"
                    ></v-icon>
                    <span
                      class="text-subtitle-1 font-weight-medium"
                      :class="`text-${option.color}`"
                    >
                      {{ option.name }}
                    </span>
                    <v-spacer></v-spacer>
                    <span
                      v-if="option.savings"
                      class="text-caption font-weight-medium text-primary"
                    >
                      {{ option.savings }}
                    </span>
                  </div>

                  <!-- Clean Price Display -->
                  <div class="text-center mb-5">
                    <div
                      class="text-h4 font-weight-regular text-grey-darken-4 mb-1"
                    >
                      ₱{{ option.amount }}
                    </div>
                    <div class="text-caption-2 text-grey-darken-2">
                      {{ option.frequency }}
                    </div>
                  </div>

                  <!-- Subtle Divider -->
                  <v-divider class="mb-4"></v-divider>

                  <!-- Contract Price -->
                  <div class="text-center">
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Contract Price
                    </div>
                    <div class="text-h6 font-weight-medium text-grey-darken-4">
                      {{ option.contractPrice }}
                    </div>
                    <div
                      v-if="option.duration"
                      class="text-caption text-grey-darken-1 mt-2"
                    >
                      {{ option.duration }}
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- Composition of Benefits Section -->
      <v-container id="composition-benefits" class="py-16" data-aos="fade-up">
        <v-row justify="center" class="mb-8">
          <v-col cols="12" class="text-center">
            <span class="text-h3 font-weight-regular mb-3 text-green">
              Composition of Benefits
            </span>

            <p class="text-body-2 text-grey-darken-1">
              Complete coverage breakdown
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <!-- Natural Death Section -->
            <v-card variant="outlined" class="rounded-lg pa-5 mb-6">
              <div class="d-flex align-center mb-4">
                <v-icon
                  icon="mdi-heart-pulse"
                  size="20"
                  color="grey-darken-2"
                  class="mr-3"
                ></v-icon>
                <span class="text-h5 font-weight-bold text-grey-darken-4">
                  NATURAL DEATH
                </span>
              </div>

              <div class="pl-7">
                <p class="text-body-1 text-grey-darken-3 mb-3">
                  Double benefits with 1 year contestability period (18-60 years
                  old)
                </p>
              </div>
            </v-card>

            <!-- Total Contract Price -->
            <v-card variant="outlined" class="rounded-lg pa-5 mb-6">
              <div class="d-flex align-center mb-4">
                <v-icon
                  icon="mdi-calculator"
                  size="20"
                  color="grey-darken-2"
                  class="mr-3"
                ></v-icon>
                <span class="text-h5 font-weight-medium text-grey-darken-4">
                  TOTAL CONTRACT PRICE
                </span>
              </div>

              <div class="pl-7">
                <!-- Price Calculation -->
                <div class="mb-4">
                  <v-divider class="my-2"></v-divider>
                  <div class="d-flex justify-space-between align-baseline">
                    <span class="text-body-1 text-grey-darken-3"
                      >Total Contract Price</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >Php 48,000.00</span
                    >
                  </div>
                  <div class="d-flex justify-space-between align-baseline mt-2">
                    <span class="text-body-1 text-grey-darken-3 mr-2"
                      >P800.00 × 12 months</span
                    >
                    <span class="text-h6 font-weight-medium text-primary"
                      >Php 9,600.00</span
                    >
                  </div>
                </div>

                <!-- Waived Balance -->
                <div class="pt-3" style="border-top: 1px dashed #e2e8f0">
                  <div class="d-flex justify-space-between align-baseline">
                    <span class="text-body-1 text-grey-darken-3"
                      >Waived Balance</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >38,400.00</span
                    >
                  </div>
                </div>
              </div>
            </v-card>

            <!-- Benefits Breakdown -->
            <v-card variant="outlined" class="rounded-lg pa-5">
              <div class="d-flex align-center mb-4">
                <v-icon
                  icon="mdi-shield-check"
                  size="20"
                  color="green"
                  class="mr-3"
                ></v-icon>
                <span class="text-h5 font-weight-medium" style="color: #03a635">
                  BENEFITS
                </span>
              </div>

              <div class="pl-7">
                <!-- Cash Assistance Benefit -->
                <div class="mb-4">
                  <div class="d-flex justify-space-between align-baseline mb-1">
                    <span class="text-body-1 text-grey-darken-3"
                      >Cash Assistance Benefit</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >PHP 37,525.00</span
                    >
                  </div>
                </div>

                <!-- Memorial Service Benefit -->
                <div class="mb-4">
                  <div class="d-flex justify-space-between align-baseline mb-1">
                    <span class="text-body-1 text-grey-darken-3"
                      >Memorial Service Benefit</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >PHP 37,525.00</span
                    >
                  </div>
                </div>

                <!-- Total Benefits -->
                <div class="pt-3 mt-4" style="border-top: 2px solid #e2e8f0">
                  <div class="d-flex justify-space-between align-baseline">
                    <span
                      class="text-subtitle-1 font-weight-medium text-grey-darken-4"
                      >Total Benefits</span
                    >
                    <span class="text-h5 font-weight-medium text-primary"
                      >PHP 75,050.00</span
                    >
                  </div>
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

      <!-- Composition of Benefits Section -->
      <v-container id="composition-benefits" class="py-16" data-aos="fade-up">
        <v-row justify="center" class="mb-8">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-regular mb-3 text-green">
              Composition of Benefits
            </h2>

            <p class="text-body-2 text-grey-darken-1">
              Complete coverage breakdown
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <!-- Natural Death Section -->
            <v-card variant="outlined" class="rounded-lg pa-5 mb-6">
              <div class="d-flex align-center mb-4">
                <v-icon
                  icon="mdi-heart-pulse"
                  size="20"
                  color="grey-darken-2"
                  class="mr-3"
                ></v-icon>
                <span class="text-h5 font-weight-bold text-grey-darken-4">
                  ACCIDENTAL DEATH
                </span>
              </div>

              <div class="pl-7">
                <p class="text-body-1 text-grey-darken-3 mb-3">
                  Double benefits with 1 year contestability period (18-60 years
                  old)
                </p>
              </div>
            </v-card>

            <!-- Total Contract Price -->
            <v-card variant="outlined" class="rounded-lg pa-5 mb-6">
              <div class="d-flex align-center mb-4">
                <v-icon
                  icon="mdi-calculator"
                  size="20"
                  color="grey-darken-2"
                  class="mr-3"
                ></v-icon>
                <span class="text-h5 font-weight-medium text-grey-darken-4">
                  TOTAL CONTRACT PRICE
                </span>
              </div>

              <div class="pl-7">
                <!-- Price Calculation -->
                <div class="mb-4">
                  <v-divider class="my-2"></v-divider>
                  <div class="d-flex justify-space-between align-baseline">
                    <span class="text-body-1 text-grey-darken-3"
                      >Total Contract Price</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >Php 48,000.00</span
                    >
                  </div>
                  <div class="d-flex justify-space-between align-baseline mt-2">
                    <span class="text-body-1 text-grey-darken-3 mr-2"
                      >P800.00 × 1 month</span
                    >
                    <span class="text-h6 font-weight-medium text-primary"
                      >Php 800.00</span
                    >
                  </div>
                </div>

                <!-- Waived Balance -->
                <div class="pt-3" style="border-top: 1px dashed #e2e8f0">
                  <div class="d-flex justify-space-between align-baseline">
                    <span class="text-body-1 text-grey-darken-3"
                      >Waived Balance</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >47,200.00</span
                    >
                  </div>
                </div>
              </div>
            </v-card>

            <!-- Benefits Breakdown -->
            <v-card variant="outlined" class="rounded-lg pa-5">
              <div class="d-flex align-center mb-4">
                <v-icon
                  icon="mdi-shield-check"
                  size="20"
                  color="green"
                  class="mr-3"
                ></v-icon>
                <span class="text-h5 font-weight-medium" style="color: #03a635">
                  BENEFITS
                </span>
              </div>

              <div class="pl-7">
                <!-- Cash Assistance Benefit -->
                <div class="mb-4">
                  <div class="d-flex justify-space-between align-baseline mb-1">
                    <span class="text-body-1 text-grey-darken-3"
                      >Cash Assistance Benefit</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >PHP 37,525.00</span
                    >
                  </div>
                </div>

                <!-- Memorial Service Benefit -->
                <div class="mb-4">
                  <div class="d-flex justify-space-between align-baseline mb-1">
                    <span class="text-body-1 text-grey-darken-3"
                      >Memorial Service Benefit</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >PHP 37,525.00</span
                    >
                  </div>
                </div>

                <!-- Accidental Death Benefit -->
                <div class="mb-4">
                  <div class="d-flex justify-space-between align-baseline mb-1">
                    <span class="text-body-1 text-grey-darken-3"
                      >Accidental Death Benefit</span
                    >
                    <span class="text-h6 font-weight-medium text-grey-darken-4"
                      >PHP 37,525.00</span
                    >
                  </div>
                </div>

                <!-- Total Benefits -->
                <div class="pt-3 mt-4" style="border-top: 2px solid #e2e8f0">
                  <div class="d-flex justify-space-between align-baseline">
                    <span
                      class="text-subtitle-1 font-weight-medium text-grey-darken-4"
                      >Total Benefits</span
                    >
                    <span class="text-h5 font-weight-medium text-primary"
                      >PHP 112,575.00</span
                    >
                  </div>
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

      <v-container class="py-16" data-aos="fade-up">
        <!-- Title -->
        <v-row justify="center" class="mb-12">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-3" style="color: #1a202c">
              FEATURES
            </h2>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #03a635"
            />
            <p
              class="text-body-1 text-medium-emphasis"
              style="font-size: 1.125rem"
            >
              Enhanced benefits and flexible options
            </p>
          </v-col>
        </v-row>

        <!-- Content -->
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <div class="minimal-wrapper">
              <v-row>
                <!-- Special Features List -->
                <v-col cols="12">
                  <div class="section-header d-flex align-center mb-6">
                    <div class="header-line"></div>
                    <h3
                      class="text-h4 font-weight-bold pl-3"
                      style="color: #2d3748"
                    >
                      SPECIAL FEATURES
                    </h3>
                  </div>

                  <div class="package-list">
                    <!-- Assignability -->
                    <div
                      class="package-item d-flex align-center py-3"
                      :style="{
                        borderBottom: '1px solid #e2e8f0',
                        borderLeft: '3px solid transparent',
                      }"
                      @mouseenter="itemHover(0)"
                      @mouseleave="itemHover(null)"
                      :class="{ 'item-hovered': hoveredItem === 0 }"
                    >
                      <v-icon
                        size="20"
                        :color="hoveredItem === 0 ? '#edad00' : '#03a635'"
                        class="mr-3"
                      >
                        mdi-check-circle
                      </v-icon>
                      <div>
                        <span
                          class="text-h6 font-weight-medium"
                          style="
                            color: #2d3748;
                            transition: color 0.2s;
                            font-weight: 500;
                          "
                        >
                          Assignability
                        </span>
                        <p class="text-body-1 mb-0" style="color: #718096">
                          100% full service from living to deceased person.
                        </p>
                      </div>
                    </div>

                    <!-- Transferability -->
                    <div
                      class="package-item d-flex align-center py-3"
                      :style="{
                        borderBottom: '1px solid #e2e8f0',
                        borderLeft: '3px solid transparent',
                      }"
                      @mouseenter="itemHover(1)"
                      @mouseleave="itemHover(null)"
                      :class="{ 'item-hovered': hoveredItem === 1 }"
                    >
                      <v-icon
                        size="20"
                        :color="hoveredItem === 1 ? '#edad00' : '#03a635'"
                        class="mr-3"
                      >
                        mdi-swap-horizontal
                      </v-icon>
                      <div>
                        <span
                          class="text-h6 font-weight-medium"
                          style="
                            color: #2d3748;
                            transition: color 0.2s;
                            font-weight: 500;
                          "
                        >
                          Transferability
                        </span>
                        <p class="text-body-1 mb-0" style="color: #718096">
                          Transferable from living to living person.
                        </p>
                      </div>
                    </div>

                    <!-- Increment -->
                    <div
                      class="package-item d-flex align-center py-3"
                      :style="{
                        borderBottom: 'none',
                        borderLeft: '3px solid transparent',
                      }"
                      @mouseenter="itemHover(2)"
                      @mouseleave="itemHover(null)"
                      :class="{ 'item-hovered': hoveredItem === 2 }"
                    >
                      <v-icon
                        size="20"
                        :color="hoveredItem === 2 ? '#edad00' : '#03a635'"
                        class="mr-3"
                      >
                        mdi-trending-up
                      </v-icon>
                      <div>
                        <span
                          class="text-h6 font-weight-medium"
                          style="
                            color: #2d3748;
                            transition: color 0.2s;
                            font-weight: 500;
                          "
                        >
                          Increment
                        </span>
                        <p class="text-body-1 mb-0" style="color: #718096">
                          The memorial service benefits increases 5% of the
                          contract price that starts on the 6th policy year up
                          to 150% of the contract price.
                        </p>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>

              <!-- Minimal Footer Note -->
              <v-row
                justify="center"
                class="mt-12 pt-8"
                style="border-top: 1px solid #e2e8f0"
                data-aos="fade-up"
              >
                <v-col cols="12" md="8" class="text-center">
                  <i class="text-h3 mb-0" style="color: #718096">
                    " MANIGURO PARA BUHAY AY LAGING SIGURADO "
                  </i>
                </v-col>
              </v-row>
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
              <h2 class="text-h3 font-weight-bold mb-4" style="color: #1a202c">
                Ready to Secure Your Future?
              </h2>
              <p class="text-h6 mb-8" style="color: #4a5568">
                Our insurance experts will help you choose the perfect Goodlife
                Plan for your needs.
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
                Connect with Goodlife Plans
              </h2>
              <p class="text-body-2 text-grey-darken-1 mb-6">
                Stay updated with our latest news and explore more of our services through our official platforms.
              </p>
              
              <v-row justify="center" class="ga-4">
                <v-col cols="12" sm="5">
                  <v-btn
                    block
                    prepend-icon="mdi-facebook"
                    color="#1877F2"
                    size="large"
                    variant="flat"
                    class="text-capitalize rounded-lg font-weight-bold shadow-sm"
                    href="https://www.facebook.com/share/16rMkUEhuR/?mibextid=wwXIfr"
                    target="_blank"
                  >
                    Follow us on Facebook
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn
                    block
                    prepend-icon="mdi-web"
                    color="#03a635"
                    size="large"
                    variant="flat"
                    class="text-capitalize rounded-lg font-weight-bold shadow-sm"
                    href="https://www.goodlifeplans.ph/"
                    target="_blank"
                  >
                    Visit Official Website
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

              <div class="d-flex mt-4 ga-3">
                <v-btn
                  icon="mdi-facebook"
                  variant="tonal"
                  color="#1877F2"
                  size="small"
                  href="https://www.facebook.com/share/16rMkUEhuR/?mibextid=wwXIfr"
                  target="_blank"
                  title="Follow us on Facebook"
                ></v-btn>
                <v-btn
                  icon="mdi-web"
                  variant="tonal"
                  color="#03a635"
                  size="small"
                  href="https://www.goodlifeplans.ph/"
                  target="_blank"
                  title="Visit our official website"
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
                    @click="goToProductsPage('/products/goodlife-plans')"
                  >
                    Goodlife Plans
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

    <!-- Plan Details Dialog -->
    <v-dialog v-model="showPlanDialog" max-width="800">
      <v-card v-if="selectedPlan">
        <v-card-title
          class="text-h5 font-weight-bold d-flex justify-space-between align-center"
        >
          {{ selectedPlan.title }}
          <v-btn icon @click="showPlanDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-text class="pt-6">
          <v-row>
            <v-col cols="12" md="8">
              <h4 class="text-h6 font-weight-bold mb-3">Plan Overview</h4>
              <p class="text-body-1 mb-4">
                {{ selectedPlan.description }}
              </p>

              <h4 class="text-h6 font-weight-bold mb-3">Coverage Details</h4>
              <ul class="mb-4">
                <li
                  v-for="(coverage, index) in selectedPlan.coverage"
                  :key="index"
                  class="mb-2"
                >
                  {{ coverage }}
                </li>
              </ul>

              <h4 class="text-h6 font-weight-bold mb-3">
                Eligibility Requirements
              </h4>
              <ul class="mb-4">
                <li
                  v-for="(req, index) in selectedPlan.requirements"
                  :key="index"
                  class="mb-1"
                >
                  {{ req }}
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon size="120" :color="selectedPlan.iconColor" class="mb-4">
                {{ selectedPlan.icon }}
              </v-icon>
              <div class="text-h4 font-weight-bold mb-2">
                {{ selectedPlan.coverageAmount }}
              </div>
              <div class="text-body-2 text-medium-emphasis mb-4">
                Total Coverage
              </div>

              <v-divider class="my-4" />

              <h5 class="text-h6 font-weight-bold mb-3">Monthly Premium</h5>
              <div class="text-h3 font-weight-bold mb-4" style="color: #dc2626">
                {{ selectedPlan.monthlyPremium }}
              </div>

              <v-btn color="primary" block size="large" @click="contactForPlan">
                Apply Now
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
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

  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
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
const productsMenuItems = [
  { title: "DAMAYAN", route: "/products/damayan" },
  { title: "Goodlife Plans", route: "/products/goodlife-plans" },
  { title: "MBAI", route: "/products/mbai" },
];

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
const contactFormHoneypot = ref("");
const lastSubmitTime = ref(0);
const contactAttempts = ref(0);

const sanitizeHTML = (str) => {
  if (!str) return str;
  return String(str).replace(/<[^>]*>?/gm, '');
};
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
    if (Array.isArray(v)) return v.length > 0 || "This field is required";
    return !!v || "This field is required";
  },
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email address",
  phone: (v) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(v) || "Please enter a valid phone number",
  alphabetic: (v) => { if (!v) return true; return /^[A-Za-z\sñÑ]+$/.test(v) || "Please enter letters only"; },
  numeric: (v) => { if (!v) return true; return /^[0-9]+$/.test(v) || "Please enter numbers only"; },
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

  contactFormErrors.value = {
    lastName: "", middleName: "", firstName: "",
    complainantLastName: "", complainantMiddleName: "", complainantFirstName: "",
    email: "", contactNo: "", mafNo: "", planType: "", concern: "", description: "",
  };
  rateLimitError.value = "";

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
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.image-zoom-dialog {
  box-shadow: none !important;
}

/* Ensure the image in the dialog is sharp */
.image-zoom-dialog :deep(.v-img__img) {
  object-fit: contain;
}

.document-viewer-card {
  border: 1px solid rgba(0,0,0,0.1) !important;
  transition: all 0.3s ease;
}

.document-viewer-card:hover {
  border-color: #03a635 !important;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.viewer-overlay {
  background: rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.document-viewer-card:hover .viewer-overlay {
  opacity: 1;
}

.banner-image {
  transition: transform 0.3s ease;
}

.banner-image:hover {
  transform: scale(1.02);
}
</style>
