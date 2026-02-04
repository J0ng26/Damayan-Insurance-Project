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
                  'active-link': $route.path.includes('products')
                }"
              >
                Products
                <v-icon end>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list density="compact">
              <v-list-item
                @click="goToProductsPage('/products/damayan')"
                :class="{ 'active-submenu': $route.path === '/products/damayan' }"
              >
                <v-list-item-title>DAMAYAN</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="goToProductsPage('/products/goodlife-plans')"
                :class="{ 'active-submenu': $route.path === '/products/goodlife-plans' }"
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
            <v-icon start>mdi-login</v-icon>
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
        <v-list-item title="Home" @click="goToHomeSection('home')"></v-list-item>
        <v-list-item title="About" @click="goToHomeSection('about')"></v-list-item>
        <v-list-item title="Legalities" @click="goToHomeSection('legalities')"></v-list-item>
        <v-list-item title="Features" @click="goToHomeSection('features')"></v-list-item>
        
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
        
        <v-list-item title="Contact" @click="goToHomeSection('contact')"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-main>
      <!-- Goodlife Plans Hero Section - FIXED GAP -->
      <div class="products-hero">
        <!-- Color Background -->
        <div class="color-backgrounds"></div>

        <div class="banner-content" data-aos="fade-up">
          <v-container class="fill-height">
            <v-row align="center" class="fill-height">
              <v-col cols="12" md="7" class="text-center text-md-start">
                <h1 class="banner-titles">
                  MUTUAL BENEFITS ASSOCIATION INC.
                </h1>
                <p class="banner-subtitles">
                  Comprehensive insurance solutions in partnership with MBAI. <br> Trusted protection for businesses and individuals across the Philippines.
                </p>
                <v-btn
                  color="white"
                  size="large"
                  class="text-primary text-capitalize"
                  @click="scrollToSection('plans-overview')"
                >
                  View Plans
                  <v-icon end>mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>
                    <v-col cols="12" md="5" class="text-center">
                <div class="banner-image-container">
                  <img
                    src="@/assets/images/glMbai.png"
                    alt="Goodlife Plans Logo"
                    class="banner-image"
                  />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>

<!-- Container 8: Bea MEMBER - Micro Insurance -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered Bea MEMBER -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            BE A MEMBER
          </h2>
          <p class="text-h6 mb-2" style="color: #718096; font-weight: 300;">
            Micro Insurance Membership
          </p>
        </div>

        <!-- Eligibility -->
        <div class="text-center mb-8">
          <div class="d-flex align-center justify-center mb-3">
            <v-icon size="20" class="mr-2" style="color: #275fdf;">mdi-account-plus</v-icon>
            <span class="text-subtitle-1 font-weight-medium" style="color: #2d3748;">
              Entry age: 18-60 years old
            </span>
          </div>
        </div>

        <!-- Content in two columns -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Member Benefits -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                ENJOY THE FOLLOWING BENEFITS:
              </h5>
              <div class="benefits-grid pl-4">
                <!-- Annual Membership -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Annual Membership to Goodlife Mutual Benefits Association, Inc.
                    </span>
                  </div>
                </div>
                
                <!-- Member Annual Insurance Coverage -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Member Annual Insurance Coverage
                    </span>
                  </div>
                </div>
                
                <!-- Equity Contribution Savings -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Equity Contribution Savings
                    </span>
                  </div>
                </div>
                
                <!-- Access to purchase various Microinsurance -->
                <div class="benefit-item d-flex align-start">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Access to purchase various Microinsurance bundled products sold by GLMBAI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Member Insurance Coverage -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                MEMBER INSURANCE COVERAGE:
              </h5>
              
              <!-- Coverage for Age 18-60 -->
              <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <div class="d-flex align-center mb-3">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account-group</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">
                    For members age 18-60 renewed up to 65 years old
                  </span>
                </div>
                
                <!-- Basic Life Insurance Benefit -->
                <div class="d-flex align-center justify-between mb-3">
                  <div class="d-flex align-center">
                    <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-shield</v-icon>
                    <span class="text-body-2" style="color: #4a5568;">Basic Life Insurance Benefit </span>
                  </div>
                  <span class="text-body-1 font-weight-medium" style="color: #2d3748;">Php 25,000.00</span>
                </div>
                
                <!-- Accidental Death & Disablement Benefit -->
                <div class="d-flex align-center justify-between mb-3">
                  <div class="d-flex align-center">
                    <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-alert-circle</v-icon>
                    <span class="text-body-2" style="color: #4a5568;">Accidental Death & Disablement Benefit</span>
                  </div>
                  <span class="text-body-1 font-weight-medium" style="color: #2d3748;">Php 25,000.00</span>
                </div>
                
                <!-- Total Permanent Disability Benefit -->
                <div class="d-flex align-center justify-between">
                  <div class="d-flex align-center">
                    <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-wheelchair</v-icon>
                    <span class="text-body-2" style="color: #4a5568;">Total Permanent Disability Benefit</span>
                  </div>
                  <span class="text-body-1 font-weight-medium" style="color: #2d3748;">Php 25,000.00</span>
                </div>
              </div>
              
              <!-- Coverage for Age 66-75 -->
              <div class="details-box pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
                <div class="d-flex align-center mb-3">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account-plus</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">
                    For members renewed aged 66-75
                  </span>
                </div>
                
                <!-- Basic Life insurance Benefit only -->
                <div class="d-flex align-center justify-between">
                  <div class="d-flex align-center">
                    <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-shield-check</v-icon>
                    <span class="text-body-2" style="color: #4a5568;">Basic Life insurance Benefit (only)</span>
                  </div>
                  <span class="text-body-1 font-weight-medium" style="color: #2d3748;">Php 25,000.00</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>
      
<div style="border-top: 5px solid #e2e8f0; width: 100%; max-width: 1450px; margin: 40px auto;"></div>

<!-- Container 1: Life Secure Plus -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered MICRO-LOANS REDEMPTION INSURANCE (MLRI) -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            MICRO-LOANS REDEMPTION INSURANCE (MLRI)
          </h2>
          <i class="text-body-1" style="color: #718096;">
            Covering what matters, when it matters most.
          </i>
        </div>

        <!-- Plan Content -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Benefits Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                BENEFITS
              </h5>
              <div class="benefits-grid pl-4">
                <!-- Accidental Death and Disablement -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Accidental Death and Disablement
                    </span>
                  </div>
                </div>
                
                <!-- Kabuhayan Assistance -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Kabuhayan Assistance
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      (death due to accident)
                    </div>
                  </div>
                </div>
                
                <!-- Cash Assistance -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Cash Assistance
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      (death due to infectious disease)
                    </div>
                  </div>
                </div>
                
                <!-- Total & Permanent Disability -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Total & Permanent Disability
                    </span>
                  </div>
                </div>
                
                <!-- Loan Redemption Insurance -->
                <div class="benefit-item d-flex align-start">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Loan Redemption Insurance
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      (death due to natural causes)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Total Gross Contribution -->
            <div class="mb-6">
              <div class="d-flex align-center mb-3">
                <v-icon size="20" class="mr-2" style="color: #275fdf;">mdi-currency-php</v-icon>
                <h5 class="text-subtitle-1 font-weight-medium mb-0" style="color: #2d3748;">
                  TOTAL GROSS CONTRIBUTION
                </h5>
              </div>
              
              <div class="contribution-details pa-4 mb-4" style="border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
                <p class="text-body-2 mb-2" style="color: #4a5568;">
                  per person (inclusive of equity savings deposit of Php 37.50 per month)
                </p>
                <p class="text-caption mb-0" style="color: #718096;">
                  equity deposit is 100% withdrawable upon death/withdrawal of debtor
                </p>
              </div>
            </div>

            <!-- Age Eligibility -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">
              <div class="mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">AGE ELIGIBILITY</span>
                </div>
                <div class="pl-6">
                  <p class="text-body-2 mb-1" style="color: #4a5568;">
                    Entry age 18-60 years old
                  </p>
                  <p class="text-body-2 mb-0" style="color: #4a5568;">
                    Coverage age 18-65
                  </p>
                </div>
              </div>
              
              <!-- Proposal Validity -->
              <div>
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-calendar-clock</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">PROPOSAL VALIDITY</span>
                </div>
                <p class="text-body-2 pl-6 mb-0" style="color: #4a5568;">
                  30 days from the date of issuance
                </p>
              </div>
            </div>

            <!-- CTA & Contact -->
            <div class="text-center">  
             <!-- Contact Information -->
              <div class="contact-info pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3
                class="mb-6"
                  style="
                  color: #275fdf;
                  font-weight: 600;
                  letter-spacing: 0.5px;
                "
              >
                APPLY NOW
              </h3>
                <!-- Phone -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">+639178074878</span>
                </div>
                
                <!-- Website -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-web</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">www.goodlifembai.com</span>
                </div>
                
                <!-- Email -->
                <div class="d-flex align-center justify-center">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-email</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">goodlife.mbai@gmail.com</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>

<div style="border-top: 5px solid #e2e8f0; width: 100%; max-width: 1450px; margin: 40px auto;"></div>

<!-- Spacing between containers -->
<div class="py-3"></div>

<!-- Container 2: OFW SecureLife -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered OFW SecureLife -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            OFW SECURELIFE
          </h2>
          <p class="text-h6 mb-2" style="color: #718096; font-weight: 300;">
            That Flies With You
          </p>
          <v-divider class="mx-auto mb-4" style="max-width: 120px; border-color: #e2e8f0;"></v-divider>
          <i class="text-body-1 mb-0" style="color: #718096;">
            Protecting Today, Securing Tomorrow.
          </i>
        </div>

        <!-- Content in two columns -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Benefits Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                COVERAGE
              </h5>
              <div class="benefits-grid pl-4">
                <!-- Basic Life Insurance -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Basic Life Insurance
                    </span>
                  </div>
                </div>
                
                <!-- Accidental Death & Dismemberment -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Accidental Death & Dismemberment
                    </span>
                  </div>
                </div>
                
                <!-- Total Permanent Disability -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Total Permanent Disability
                    </span>
                  </div>
                </div>
                
                <!-- Memorial Cash Assistance -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Memorial Cash Assistance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Age Eligibility -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">
              <div class="mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">AGE ELIGIBILITY</span>
                </div>
                <div class="pl-6">
                  <p class="text-body-2 mb-1" style="color: #4a5568;">
                    Covered Age: 18-65 years old
                  </p>
                  <p class="text-body-2 mb-0" style="color: #4a5568;">
                    **Covered age 66-75 years old (Basic Life Insurance only)
                  </p>
                </div>
              </div>
            </div>

            <!-- Tagline -->
            <div class="mb-6 text-center">
              <div class="d-flex align-center justify-center mb-4">
                <div class="icon-circle pa-3 mr-4 rounded-circle" style="background-color: #f0fdf4;">
                  <v-icon size="28" style="color: #275fdf;">mdi-airplane</v-icon>
                </div>
                <div>
                  <p class="text-body-1 font-weight-medium mb-0" style="color: #2d3748;">
                    Magpa-seguro para Protektado!
                  </p>
                </div>
              </div>
              <p class="text-body-2 mb-0" style="color: #718096; font-style: italic;">
                "Love Your Life, Insure with Goodlife MBAI"
              </p>
            </div>

            <!-- CTA & Contact -->
            <div class="text-center">  
              <!-- Contact Information -->
              <div class="contact-info pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 class="mb-6" style="color: #275fdf; font-weight: 600; letter-spacing: 0.5px;">
                  APPLY NOW
                </h3>
                <!-- Address -->
                <div class="d-flex align-start justify-center mb-3">
                  <v-icon size="16" class="mr-2 mt-1" style="color: #718096;">mdi-map-marker</v-icon>
                  <div class="text-left">
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      Room 104 Ground Floor GoodLife Emerald Building,
                    </span>
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      San Jose Highway, Digos City 8002,
                    </span>
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      Davao del Sur Philippines
                    </span>
                  </div>
                </div>
                
                <!-- Phone -->
                <div class="d-flex align-center justify-center mb-2">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Tel No: (082) 308-0414</span>
                </div>
                
                <!-- Hotline -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone-in-talk</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Hotline No. 09178074878</span>
                </div>
                
                <!-- Email -->
                <div class="d-flex align-center justify-center">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-email</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">president.glmbai@goodlifegroups.com</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>

<div style="border-top: 5px solid #e2e8f0; width: 100%; max-width: 1450px; margin: 40px auto;"></div>


<!-- Container 3: LIFE SHIELD PLUS -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered LIFE SHIELD PLUS -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            LIFE SHIELD PLUS
          </h2>
          <i class="text-h6 mb-2" style="color: #718096; font-weight: 300;">
            Your Comprehensive Protection Partner
          </i>
        </div>

        <!-- Content in two columns -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Key Benefits Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                KEY BENEFITS
              </h5>
              <div class="benefits-grid pl-4">
                <!-- Life Protection -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Life Protection
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      Your beneficiaries receive financial support in case of your passing.
                    </div>
                  </div>
                </div>
                
                <!-- Accidental Death & Dismemberment -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Accidental Death & Dismemberment
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      Added protection for accidental loss of life or limbs.
                    </div>
                  </div>
                </div>
                
                <!-- Total Permanent Disability Coverage -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Total Permanent Disability Coverage
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      Financial assistance if you can no longer work due to disability.
                    </div>
                  </div>
                </div>
                
                <!-- Equity Value Savings -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Equity Value Savings
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      A portion of your contributions grows as savings, claimable upon surrender or maturity.
                    </div>
                  </div>
                </div>

                <!-- FREE Unlimited Tele-Konsulta -->
                <div class="benefit-item d-flex align-start">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      ELIGIBILITY
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      Open to all filipinos age 18-60 (coverage continues until 75)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Age Eligibility -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">  
              <!-- Coverage Details -->
              <div>
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-shield-check</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">COVERAGE AGE</span>
                </div>
                <div class="pl-6">
                  <p class="text-body-2 mb-1" style="color: #4a5568;">
                    • Covered Age: 18-65 years old
                  </p>
                  <p class="text-body-2 mb-0" style="color: #4a5568;">
                    • **Covered age 66-75 years old (Basic Life Insurance only)
                  </p>
                </div>
              </div>
            </div>

            <!-- Tagline Section -->
            <div class="mb-6">
              <div class="d-flex align-center mb-4">
                <div class="icon-circle pa-3 mr-4 rounded-circle" style="background-color: #f0fdf4;">
                  <v-icon size="28" style="color: #275fdf;">mdi-shield-plus</v-icon>
                </div>
                <div>
                  <p class="text-body-1 font-weight-medium mb-1" style="color: #2d3748;">
                    "Love Your Life, Insure with Goodlife MBAI"
                  </p>
                </div>
              </div>
            </div>

            <!-- CTA & Contact -->
            <div class="text-center">  
              <!-- Contact Information -->
              <div class="contact-info pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 class="mb-6" style="color: #275fdf; font-weight: 600; letter-spacing: 0.5px;">
                  GET PROTECTED NOW
                </h3>
                
                <!-- Address -->
                <div class="d-flex align-start justify-center mb-3">
                  <v-icon size="16" class="mr-2 mt-1" style="color: #718096;">mdi-map-marker</v-icon>
                  <div class="text-left">
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      Room 104 Ground Floor GoodLife Emerald Building,
                    </span>
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      San Jose Highway, Digos City 8002,
                    </span>
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      Davao del Sur Philippines
                    </span>
                  </div>
                </div>
                
                <!-- Phone -->
                <div class="d-flex align-center justify-center mb-2">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Tel No: (082) 308-0414</span>
                </div>
                
                <!-- Hotline -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone-in-talk</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Hotline No. 09178074878</span>
                </div>
                
                <!-- Email -->
                <div class="d-flex align-center justify-center">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-email</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">president.glmbai@goodlifegroups.com</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>

<div style="border-top: 5px solid #e2e8f0; width: 100%; max-width: 1450px; margin: 40px auto;"></div>

<!-- Spacing between containers -->
<div class="py-4"></div>

<!-- Container 3: GLife Coverage Protek -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered GLife Protek Excel -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            GLife Protek Excel
          </h2>
          <p class="text-h6 mb-2" style="color: #718096; font-weight: 300;">
            Your Partner in Protection
          </p>
          <v-divider class="mx-auto mb-4" style="max-width: 120px; border-color: #e2e8f0;"></v-divider>
          <p class="text-body-1 mb-0" style="color: #718096;">
            Magpa-seguro para Protektado!
          </p>
        </div>

        <!-- Content in two columns -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Coverage Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                COVERAGE
              </h5>
              <div class="benefits-grid pl-4">
                <!-- Basic Life Insurance -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Basic Life Insurance
                    </span>
                  </div>
                </div>
                
                <!-- Accidental Death & Dismemberment -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Accidental Death & Dismemberment
                    </span>
                  </div>
                </div>
                
                <!-- Total Permanent Disability -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Total Permanent Disability
                    </span>
                  </div>
                </div>
                
                <!-- Equity Value Savings -->
                <div class="benefit-item d-flex align-start">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Calamity Protek
                    </span>
                  </div>
                </div>
                
                       <!-- Consultation Doctor -->
                <div class="benefit-item d-flex align-start">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                     Tele-Medical Consultation with a Doctor
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Calamity Protek Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                OTHER BENEFITS
              </h5>
              <div class="calamity-grid pl-4">
                <v-row>
                  <v-col cols="6">
                  <div class="d-flex align-center mb-3">
                  <v-icon size="15" class="mr-2 mt-1" style="color: #275fdf;">mdi-shield-check</v-icon>
                    <span class="text-body-2" style="color: #4a5568;">
                      Accidental death due to sudden, unforeseen & fortuitous event
                    </span>
                </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-fire</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Fire</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-weather-lightning</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Lightning</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-terrain</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Earthquake</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-weather-hurricane</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Typhoon</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-home-flood</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Flood</span>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Other Benefits Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
              OTHER CONVULSIONS OF NATURE
              </h5>
                      <v-col cols="6">
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-terrain</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Landslide</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-vector-square</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Subsidence</span>
                    </div>
                    <div class="d-flex align-center mb-3">
                      <v-icon size="16" class="mr-2" style="color: #275fdf;">mdi-volcano</v-icon>
                      <span class="text-body-2" style="color: #4a5568;">Volcanic Eruption</span>
                    </div>
                  </v-col>
            </div>

            <!-- Age Eligibility -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">
              <div class="mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">COVERED AGE</span>
                </div>
                <div class="pl-6">
                  <p class="text-body-2 mb-1" style="color: #4a5568;">
                    • Covered Age: 18-65 years old
                  </p>
                  <p class="text-body-2 mb-0" style="color: #4a5568;">
                    • **Covered age 66-75 years old (Basic Life Insurance only)
                  </p>
                </div>
              </div>
            </div>

            <!-- Tagline Section -->
            <div class="mb-6 text-center">
              <div class="d-flex align-center justify-center mb-4">
                <div class="icon-circle pa-3 mr-4 rounded-circle" style="background-color: #f0fdf4;">
                  <v-icon size="28" style="color: #275fdf;">mdi-shield-star</v-icon>
                </div>
                <div>
                  <p class="text-body-1 font-weight-medium mb-0" style="color: #2d3748;">
                    "Love Your Life, Insure with Goodlife MBAI"
                  </p>
                </div>
              </div>
            </div>

            <!-- CTA & Contact -->
            <div class="text-center">  
              <!-- Contact Information -->
              <div class="contact-info pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 class="mb-6" style="color: #275fdf; font-weight: 600; letter-spacing: 0.5px;">
                  GET PROTECTION
                </h3>
                
                <!-- Phone -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Phone Number: +639178074878</span>
                </div>
                
                <!-- Email -->
                <div class="d-flex align-center justify-center">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-email</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Email: goodlife.mbai@gmail.com</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>

<div style="border-top: 5px solid #e2e8f0; width: 100%; max-width: 1450px; margin: 40px auto;"></div>

<!-- Container 5: Glife Protek Insurance -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered Glife Protek Insurance -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            Glife Protek Insurance
          </h2>
          <p class="text-h6 mb-2" style="color: #718096; font-weight: 300;">
            Your Partner in Protection
          </p>
          <v-divider class="mx-auto mb-4" style="max-width: 120px; border-color: #e2e8f0;"></v-divider>
          <p class="text-body-1 mb-0" style="color: #718096;">
            "Love Your Life, Insure with Goodlife MBAI"
          </p>
        </div>

        <!-- Content in two columns -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Coverage Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                COVERAGE
              </h5>
              <div class="benefits-grid pl-4">
                <!-- Basic Life -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Basic Life Insurance
                    </span>
                  </div>
                </div>
                
                <!-- Accidental Death & Dismemberment -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Accidental Death & Dismemberment
                    </span>
                  </div>
                </div>
                
                <!-- Total Permanent Disability -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Total Permanent Disability
                    </span>
                  </div>
                </div>
                
                <!-- Equity Value Savings -->
                <div class="benefit-item d-flex align-start">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                     Fire Assistance Benefit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Other Benefits Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                OTHER BENEFITS
              </h5>
              <div class="other-benefits pl-4">
                <!-- Accidental Death (LIVELIHOOD ASSISTANCE) -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Accidental Death (LIVELIHOOD ASSISTANCE)
                    </span>
                  </div>
                </div>
                
                <!-- Permanent Disablement Benefit -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Permanent Disablement 
                    </span>
                  </div>
                </div>
                
                <!-- Unprovoked Murder and/or Assault -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Unprovoked Murder and/or Assault
                    </span>
                  </div>
                </div>
                
                <!-- Hospital Income Benefit (MAXIMUM OF 10 DAYS) -->
                <div class="benefit-item d-flex align-start">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Hospital Income Benefit (MAXIMUM OF 10 DAYS)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Important Note -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
              <div class="d-flex align-center mb-3">
                <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-information</v-icon>
                <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">IMPORTANT NOTE</span>
              </div>
              <p class="text-body-2 mb-0" style="color: #4a5568;">
                The benefits herein stated are payable on top of or in addition to existing medical plans that the INSURED may have, such as PhilHealth or other private medical insurance.
              </p>
            </div>

            <!-- Age Eligibility -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">
              <div class="mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">COVERED AGE</span>
                </div>
                <div class="pl-6">
                  <p class="text-body-2 mb-1" style="color: #4a5568;">
                    • Covered Age: 18-65 years old
                  </p>
                  <p class="text-body-2 mb-0" style="color: #4a5568;">
                    • **Covered age 66-75 years old (Basic Life Insurance only)
                  </p>
                </div>
              </div>
            </div>

            <!-- CTA & Contact -->
            <div class="text-center">  
              <!-- Contact Information -->
              <div class="contact-info pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 class="mb-6" style="color: #275fdf; font-weight: 600; letter-spacing: 0.5px;">
                  GET PROTECTED
                </h3>
                
                <!-- Phone -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Phone Number: +639178087478</span>
                </div>
                
                <!-- Email -->
                <div class="d-flex align-center justify-center">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-email</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">Email: goodlife.mbai@gmail.com</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>

<div style="border-top: 5px solid #e2e8f0; width: 100%; max-width: 1450px; margin: 40px auto;"></div>

<!-- Container 6: GLIFE HEALTHEASE -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered GLIFE HEALTHEASE -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            GLIFE HEALTHEASE
          </h2>
          <v-divider class="mx-auto mb-4" style="max-width: 120px; border-color: #e2e8f0;"></v-divider>
          <i class="text-body-1 mb-0" style="color: #718096;">
            For Health and Peace of Mind
          </i>
        </div>
        <!-- Content in two columns -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Coverage Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                COVERAGE
              </h5>
              <div class="benefits-grid pl-4">
                <!-- Basic Life Insurance -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Basic Life Insurance
                    </span>
                  </div>
                </div>
                
                <!-- Accidental Death & Dismemberment -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Accidental Death & Dismemberment
                    </span>
                  </div>
                </div>
                
                <!-- Total Permanent Disability -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Total Permanent Disability
                    </span>
                  </div>
                </div>
                
                <!-- Hospital Income Benefit -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Hospital Income Benefit
                    </span>
                    <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                      max 15 days (accident/illness)
                    </div>
                  </div>
                </div>
                
                <!-- ER CareFit Accident -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      ER CareFit Accident Emergency Room Benefit
                    </span>
                  </div>
                </div>
                
                <!-- Tele-Medical Consultation with a Doctor -->
                <div class="benefit-item d-flex align-start mb-4">
                  <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                  <div>
                    <span class="text-body-1 font-weight-medium" style="color: #2d3748;">
                      Tele-Medical Consultation with a Doctor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Age Eligibility -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">
              <div class="mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account-heart</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">COVERED AGE</span>
                </div>
                <div class="pl-6">
                  <p class="text-body-2 mb-1" style="color: #4a5568;">
                    • Covered Age: 18-65 years old
                  </p>
                     <p class="text-body-2 mb-1" style="color: #4a5568;">
                    • Covered Age: 66-75 years old Basic Life Insurance only
                  </p>
                </div>
              </div>
            </div>

            <!-- Tagline Section -->
            <div class="mb-6 text-center">
              <div class="d-flex align-center justify-center mb-4">
                <div class="icon-circle pa-3 mr-4 rounded-circle" style="background-color: #f0fdf4;">
                  <v-icon size="28" style="color: #275fdf;">mdi-heart-pulse</v-icon>
                </div>
                <div>
                  <p class="text-body-1 font-weight-medium mb-1" style="color: #2d3748;">
                    Segurong Pangkalusugan
                  </p>
                  <p class="text-body-2 mb-0" style="color: #718096;">
                    "Love Your Life, Insure with Goodlife MBAI"
                  </p>
                </div>
              </div>
            </div>

            <!-- More Information Section -->
            <div class="text-center">  
              <div class="contact-info pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 class="mb-6" style="color: #275fdf; font-weight: 600; letter-spacing: 0.5px;">
                  MORE INFORMATION
                </h3>
                
                <!-- Phone -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">09178074878</span>
                </div>
                
                <!-- Website -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-web</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">www.goodlifembai.com</span>
                </div>
                
                <!-- Email -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-email</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">goodlife.mbai@gmail.com</span>
                </div>
                
                <!-- Address -->
                <div class="d-flex align-start justify-center">
                  <v-icon size="16" class="mr-2 mt-1" style="color: #718096;">mdi-map-marker</v-icon>
                  <div class="text-left">
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      Rm 104 Ground Floor GL Emerald Bldg.
                    </span>
                    <span class="text-body-2 d-block" style="color: #4a5568;">
                      Digos City
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>

<div style="border-top: 5px solid #e2e8f0; width: 100%; max-width: 1450px; margin: 40px auto;"></div>

<!-- Container 7: GLIFE COMFORT -->
<v-container class="py-16" data-aos="fade-up">
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card variant="flat" class="minimal-card-1 pa-6">
        <!-- Header - Centered GLIFE COMFORT -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-4" style="color: #275fdf;">
            GLIFE COMFORT
          </h2>
          <v-divider class="mx-auto mb-4" style="max-width: 120px; border-color: #e2e8f0;"></v-divider>
          <i class="text-body-1 mb-0" style="color: #718096;">
            "Love Your Life, Insure with Goodlife MBAI"
          </i>
        </div>

        <!-- Content in two columns -->
        <v-row>
          <v-col cols="12" md="6" class="pr-md-6">
            <!-- Coverage Section -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                COVERAGE
              </h5>
              
              <!-- Basic Life Insurance -->
              <div class="benefit-item d-flex align-start mb-6">
                <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                <div>
                  <span class="text-body-1 font-weight-medium mb-1" style="color: #2d3748;">
                    BASIC LIFE INSURANCE
                  </span>
                  <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                    Your beneficiaries receive financial support in case of your passing.
                  </div>
                </div>
              </div>
              
              <!-- Accidental Death & Dismemberment -->
              <div class="benefit-item d-flex align-start mb-6">
                <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                <div>
                  <span class="text-body-1 font-weight-medium mb-1" style="color: #2d3748;">
                    ACCIDENTAL DEATH & DISMEMBERMENT
                  </span>
                  <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                    Added protection for accidental loss of life or limbs.
                  </div>
                </div>
              </div>
              
              <!-- Total Permanent Disability -->
              <div class="benefit-item d-flex align-start mb-6">
                <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                <div>
                  <span class="text-body-1 font-weight-medium mb-1" style="color: #2d3748;">
                    TOTAL PERMANENT DISABILITY
                  </span>
                  <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                    Financial assistance if you can no longer work due to disability.
                  </div>
                </div>
              </div>
              
              <!-- Equity Value Savings -->
              <div class="benefit-item d-flex align-start">
                <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                <div>
                  <span class="text-body-1 font-weight-medium mb-1" style="color: #2d3748;">
                    EQUITY VALUE SAVINGS
                  </span>
                  <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                    A portion of your contributions grows as savings, claimable upon surrender or maturity.
                  </div>
                </div>
              </div>

                      <!-- Memorial Cash Assistance -->
              <div class="benefit-item d-flex align-start">
                <v-icon size="16" class="mr-3 mt-1" style="color: #275fdf;">mdi-check-circle</v-icon>
                <div>
                  <span class="text-body-1 font-weight-medium mb-1" style="color: #2d3748;">
                    MEMORIAL CASH ASSISTANCE
                  </span>
                  <div class="text-caption mt-1" style="color: #718096; padding-left: 24px;">
                    Provides cash aid during bereavement
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pl-md-6">
            <!-- Funeral & Burial Coverage -->
            <div class="mb-6">
              <h5 class="text-h5 font-weight-bold mb-4" style="color: #2d3748; border-left: 3px solid #275fdf; padding-left: 12px;">
                FUNERAL & BURIAL COVERAGE
              </h5>
              <div class="funeral-benefits pa-4 mb-4" style="border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
                <p class="text-body-2 mb-3" style="color: #4a5568;">
                  It pays off the lumpsum of Php 1,050,000.00 in the event of the Insured's death caused by accident.
                </p>
                
                <p class="text-subtitle-2 font-weight-medium mb-3" style="color: #2d3748;">Optional Benefits Included:</p>
                
                <div class="optional-benefits">
                  <v-row>
                    <v-col cols="6">
                      <div class="d-flex align-center mb-3">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-flower</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Floral Arrangement</span>
                      </div>
                      <div class="d-flex align-center mb-3">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-account-tie</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Funeral Clothes</span>
                      </div>
                      <div class="d-flex align-center mb-3">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-newspaper</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Publication Expenses</span>
                      </div>
                      <div class="d-flex align-center mb-3">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-food</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Catering Expenses</span>
                      </div>
                    </v-col>
                    
                    <v-col cols="6">
                      <div class="d-flex align-center mb-3">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-bus</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Transportation Expense</span>
                      </div>
                      <div class="d-flex align-center mb-3">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-bed</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Hotel Accommodation</span>
                      </div>
                      <div class="d-flex align-center mb-3">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-car</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Additional Transportation</span>
                      </div>
                      <div class="d-flex align-center">
                        <v-icon size="14" class="mr-2" style="color: #275fdf;">mdi-cash-multiple</v-icon>
                        <span class="text-caption" style="color: #4a5568;">Miscellaneous Expenses</span>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>

            <!-- Age Eligibility -->
            <div class="details-box pa-4 mb-6" style="border: 1px solid #e2e8f0; border-radius: 8px;">
              <div class="mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" class="mr-2" style="color: #275fdf;">mdi-account</v-icon>
                  <span class="text-subtitle-2 font-weight-medium" style="color: #2d3748;">COVERED AGE</span>
                </div>
                <div class="pl-6">
                  <p class="text-body-2 mb-1" style="color: #4a5568;">
                    • Entry age 18 - 60 years old, coverage age 18 - 65
                  </p>
                  <p class="text-body-2 mb-0" style="color: #4a5568;">
                    • **Covered age 66-75 years old (Basic Life Insurance only)
                  </p>
                </div>
              </div>
            </div>

            <!-- Contact Section -->
            <div class="text-center">  
              <div class="contact-info pa-4" style="border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 class="mb-6" style="color: #275fdf; font-weight: 600; letter-spacing: 0.5px;">
                  CONTACT US FOR MORE INFORMATION
                </h3>
                
                <!-- Phone -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-phone</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">+639178074878</span>
                </div>
                
                <!-- Email -->
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-email</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">goodlife.mbai@gmail.com</span>
                </div>
                
                <!-- Website -->
                <div class="d-flex align-center justify-center">
                  <v-icon size="16" class="mr-2" style="color: #718096;">mdi-web</v-icon>
                  <span class="text-body-2" style="color: #4a5568;">www.goodlifembai.com</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>

<div style="border-top: 5px solid #e2e8f0;"></div>

      <!-- CTA Section -->
      <v-container fluid class="py-16" style="background: linear-gradient(135deg, #4a4561, #3e3a5b);">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <h2 class="text-h3 font-weight-bold mb-4" style="color: white;">
                Ready to Secure Your Future?
              </h2>
              <p class="text-h6 mb-8" style="color: rgba(255, 255, 255, 0.9);">
                Our insurance experts will help you choose the perfect Goodlife Plan for your needs.
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
        style="background-color: #F5F5F5; color: #000;"
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
              <h4 class="text-subtitle-1 font-weight-bold mb-3">
                Quick Links
              </h4>
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
                <v-icon class="me-2" color="black">
                  mdi-email-outline
                </v-icon>
                <span>info@goodlifedamayan.com</span>
              </div>

              <div class="d-flex align-center mb-2">
                <v-icon class="me-2" color="black">
                  mdi-phone
                </v-icon>
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
        <v-card-title class="text-h5 font-weight-bold d-flex justify-space-between align-center">
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
                <li v-for="(coverage, index) in selectedPlan.coverage" :key="index" class="mb-2">
                  {{ coverage }}
                </li>
              </ul>
              
              <h4 class="text-h6 font-weight-bold mb-3">Eligibility Requirements</h4>
              <ul class="mb-4">
                <li v-for="(req, index) in selectedPlan.requirements" :key="index" class="mb-1">
                  {{ req }}
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon
                size="120"
                :color="selectedPlan.iconColor"
                class="mb-4"
              >
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
              <div class="text-h3 font-weight-bold mb-4" style="color: #dc2626;">
                {{ selectedPlan.monthlyPremium }}
              </div>
              
              <v-btn
                color="primary"
                block
                size="large"
                @click="contactForPlan"
              >
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/css/style.css";

const router = useRouter()
const drawer = ref(false)
const showPlanDialog = ref(false)
const selectedPlan = ref(null)

const comparisonFeatures = ref([
  { name: 'Life Insurance Coverage', lifeSecure: true, familyProtect: true, wealthBuilder: true },
  { name: 'Accidental Death Benefit', lifeSecure: true, familyProtect: true, wealthBuilder: true },
  { name: 'Critical Illness Rider', lifeSecure: true, familyProtect: true, wealthBuilder: true },
  { name: 'Family Coverage', lifeSecure: false, familyProtect: true, wealthBuilder: true },
  { name: 'Investment Component', lifeSecure: false, familyProtect: false, wealthBuilder: true },
  { name: 'Education Fund', lifeSecure: false, familyProtect: true, wealthBuilder: true },
  { name: 'Retirement Benefits', lifeSecure: false, familyProtect: false, wealthBuilder: true },
  { name: 'Hospital Income', lifeSecure: false, familyProtect: true, wealthBuilder: false },
  { name: 'Funeral Assistance', lifeSecure: true, familyProtect: true, wealthBuilder: true },
  { name: 'Policy Loan Option', lifeSecure: true, familyProtect: true, wealthBuilder: true },
])

const specialBenefits = ref([
  { 
    title: 'Critical Illness Cover', 
    description: 'Coverage for 36 major critical illnesses including cancer, stroke, and heart attack',
    icon: 'mdi-heart-pulse',
    color: 'error'
  },
  { 
    title: 'Hospital Income', 
    description: 'Daily hospital income benefit during confinement (up to 180 days)',
    icon: 'mdi-hospital',
    color: 'info'
  },
  { 
    title: 'Education Fund', 
    description: 'Guaranteed education fund for children in case of untimely death',
    icon: 'mdi-school',
    color: 'success'
  },
  { 
    title: 'Emergency Assistance', 
    description: '24/7 emergency medical assistance and evacuation services',
    icon: 'mdi-ambulance',
    color: 'warning'
  },
])

const planDetails = {
  'life-secure-plus': {
    title: 'Life Secure Plus',
    description: 'A comprehensive life insurance plan offering substantial coverage with critical illness protection. Ideal for individuals seeking robust personal protection with cash value accumulation.',
    coverage: [
      'Life insurance coverage up to age 80',
      'Critical illness coverage for 36 major illnesses',
      'Accidental death benefit equal to sum assured',
      'Cash value accumulation starting year 3',
      'Waiver of premium for disability'
    ],
    requirements: [
      'Age: 18-60 years old',
      'Minimum coverage: ₱500,000',
      'Medical examination required for coverage above ₱1,000,000',
      'Valid government ID required'
    ],
    coverageAmount: '₱500,000',
    monthlyPremium: '₱2,500',
    icon: 'mdi-shield-account',
    iconColor: 'primary'
  },
  'family-protect-gold': {
    title: 'Family Protect Gold',
    description: 'Complete family protection package covering the principal and up to 3 dependents. Includes education fund benefits and comprehensive medical assistance.',
    coverage: [
      'Coverage for principal + 3 dependents',
      'Education fund guarantee for children',
      'Hospital income benefit (₱1,000 per day)',
      'Emergency medical assistance',
      'Family funeral assistance'
    ],
    requirements: [
      'Principal age: 25-55 years old',
      'Dependents age: 1 month to 25 years old',
      'Family relationship proof required',
      'Minimum coverage: ₱1,000,000'
    ],
    coverageAmount: '₱1,000,000',
    monthlyPremium: '₱4,800',
    icon: 'mdi-family',
    iconColor: 'secondary'
  },
  'wealth-builder-pro': {
    title: 'Wealth Builder Pro',
    description: 'Advanced investment-linked insurance combining life protection with wealth accumulation. Features guaranteed cash values and dividend participation.',
    coverage: [
      'Combined insurance and investment',
      'Guaranteed annual cash values',
      'Dividend participation option',
      'Retirement fund accumulation',
      'Estate planning benefits'
    ],
    requirements: [
      'Age: 25-55 years old',
      'Minimum investment: ₱100,000 annually',
      'Financial capacity assessment',
      'Risk profiling required'
    ],
    coverageAmount: '₱2,000,000',
    monthlyPremium: '₱8,500',
    icon: 'mdi-chart-line',
    iconColor: 'success'
  }
}

// Scroll to top when page loads
onMounted(() => {
  window.scrollTo(0, 0)
  
  // Initialize AOS
  AOS.init({
    duration: 1500,
    once: false,
    mirror: true,
    offset: 120,
  });
})

// Function to navigate to home page with section
const goToHomeSection = (section) => {
  router.push('/').then(() => {
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        const yOffset = -120
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)
  })
}

// Function to navigate to other product pages
const goToProductsPage = (route) => {
  drawer.value = false
  router.push(route)
}

// Function to scroll within this page
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const yOffset = -120
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const showPlanDetails = (planId) => {
  selectedPlan.value = planDetails[planId]
  showPlanDialog.value = true
}

const contactForPlan = () => {
  showPlanDialog.value = false
  goToHomeSection('contact')
}
</script>

<style scoped>
</style>