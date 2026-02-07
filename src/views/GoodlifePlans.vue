<template>
  <v-app>
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

          <v-btn
            variant="outlined"
            color="primary"
            class="text-capitalize ml-4 login-btn"
            size="small"
          >
            LOG IN
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
          <v-list-item @click="goToProductsPage('/products/damayan')">
            <v-list-item-title>DAMAYAN</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToProductsPage('/products/goodlife-plans')">
            <v-list-item-title>GOODLIFE PLANS</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToProductsPage('/products/mbai')">
            <v-list-item-title>MBAI</v-list-item-title>
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

                <p class="banner-subtitles-plan">
                  With bigger benefits, we ensure that protection and financial
                  stability are always within reach.
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
        style="background: linear-gradient(135deg, #4a4561, #3e3a5b)"
      >
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h2 class="text-h3 font-weight-bold mb-4" style="color: white">
                Ready to Secure Your Future?
              </h2>
              <p class="text-h6 mb-8" style="color: rgba(255, 255, 255, 0.9)">
                Our insurance experts will help you choose the perfect Goodlife
                Plan for your needs.
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
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/css/style.css";

const router = useRouter();
const drawer = ref(false);
const showPlanDialog = ref(false);
const selectedPlan = ref(null);

const hoveredItem = ref(null);
const hoveredTag = ref(null);

const itemHover = (index) => {
  hoveredItem.value = index;
};

const tagHover = (tag) => {
  hoveredTag.value = tag;
};

const paymentOptions = ref([
  {
    name: "Monthly",
    amount: "800",
    frequency: "per month",
    contractPrice: "₱48,000.00",
    duration: "",
    savings: "",
    color: "green",
  },
  {
    name: "Quarterly",
    icon: "mdi-calendar-quarter",
    amount: "2,280",
    frequency: "every 3 months",
    contractPrice: "₱45,600.00",
    color: "green",
  },
  {
    name: "Semi-Annual",
    icon: "mdi-calendar-half-year",
    amount: "4,320",
    frequency: "every 6 months",
    contractPrice: "₱43,200.00",
    color: "green",
  },
  {
    name: "Annual",
    icon: "mdi-calendar-year",
    amount: "8,000",
    frequency: "per year",
    contractPrice: "₱40,000.00",
    color: "green",
  },
]);

// Inside <script setup>
const benefits = ref({
  naturalDeath: {
    title: "NATURAL DEATH",
    description:
      "Double benefits with 1 year contestability period (18-60 years old)",
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

// Function to navigate to other product pages
const goToProductsPage = (route) => {
  drawer.value = false;
  router.push(route);
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
</style>
