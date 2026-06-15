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
          @click="goToHomeSection('contact')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Goodlife Plans Hero Section - FIXED GAP -->
      <div class="products-hero">
        <!-- Color Background -->
        <div class="color-backgrounds"></div>

        <div class="banner-content" data-aos="fade-up">
          <!-- MICRO INSURANCE LOGO -->
          <img
            src="@/assets/images/micro-insurance.png"
            alt="Micro Insurance Logo"
            class="mbai-banner-logo"
          />

          <v-container class="fill-height">
            <v-row align="center" class="fill-height">
              <v-col cols="12" md="7" class="text-center text-md-start">
                <h1 class="banner-titles">MUTUAL BENEFITS ASSOCIATION INC.</h1>

                <!-- Tagline & SEC Registration -->
                <div class="mb-8">
                  <h2 class="text-h5 font-weight-medium mb-2" style="color: #ffffff; font-style: italic; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                    “Love Your Life, Insure with Goodlife MBAI”
                  </h2>
                  <p class="text-subtitle-1 font-weight-light" style="color: rgba(255, 255, 255, 0.85);">
                    S.E.C. Reg. No.: 203010081770-020
                  </p>
                </div>

                <v-btn
                  color="white"
                  size="large"
                  class="text-primary text-capitalize"
                  @click="scrollToSection('mbai-list')"
                >
                  View Plans
                  <v-icon end>mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" md="5" class="text-center">
                <div class="banner-image-container">
                  <img
                    src="@/assets/images/glMbai.png"
                    alt="Goodlife MBAI"
                    class="banner-image"
                  />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>


      <!-- Salient Features Section -->
      <v-container id="salient-features" class="py-16" data-aos="fade-up">
        <v-row justify="center" class="mb-12">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-3" style="color: #1a202c">
              Salient Features for Membership
            </h2>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #275fdf"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="9">
            <div class="text-left">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                The Micro Mutual Benefit Association
              </h3>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                A mutual benefit association is a group that provides certain benefits to its members, including financial reimbursement for specific types of loss, Mutual Benefit Association do not pay insurance premium; however, they pay a membership fee or contribution, which serves a similar function.
              </p>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                Mutual Benefit Associations are often structured around social groups, companies, cooperatives, small medium enterprise or associations.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Membership Section -->
      <v-container id="membership-eligibility" class="py-16" data-aos="fade-up">
        <v-row justify="center" class="mb-12">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-3" style="color: #1a202c">
              MEMBERSHIP
            </h2>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #275fdf"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="9">
            <div class="text-left">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                ELIGIBILITY
              </h3>
              <p class="text-body-1 mb-6" style="color: #275fdf; line-height: 1.8;">
                The following may apply for membership in the Association by submitting an application in the prescribed form, provided they are not less than 18 years old but not more than 55 years old:
              </p>
              
              <div class="pl-4">
                <div class="d-flex align-start mb-4">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">1.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                    <strong>Members</strong> – Filipino citizen, member of cooperative, association or companies affiliated with Goodlife Group of Companies, and residing within the Philippines
                  </p>
                </div>
                <div class="d-flex align-start">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">2.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                    <strong>Dependents</strong> – Immediate family of the Member.
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Basic Benefits Section -->
      <v-container id="basic-benefits" class="py-16" data-aos="fade-up">
        <v-row justify="center" class="mb-12">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-3" style="color: #1a202c">
              BASIC BENEFITS
            </h2>
            <v-divider
              class="mx-auto mb-4"
              thickness="2"
              style="max-width: 60px; background-color: #275fdf"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="10">
            <div class="text-left mb-10">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                DEATH BENEFIT
              </h3>
              <p class="text-body-1 mb-4" style="color: #4a5568; line-height: 1.8;">
                Upon death of a Member, his beneficiaries shall be entitled to the following:
              </p>
              <div class="pl-4 mb-8">
                <div class="d-flex align-start mb-2">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">1.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">Basic Death Benefit, and</p>
                </div>
                <div class="d-flex align-start">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">2.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">The Member’s Equity Value</p>
                </div>
              </div>

              <!-- Benefits Table -->
              <v-table class="elevation-1 rounded-lg border" style="width: 100%;">
                <thead>
                  <tr style="background-color: #f8fafc">
                    <th class="text-left font-weight-bold py-6 px-6" style="color: #1a202c; border-bottom: 2px solid #e2e8f0; font-size: 1.15rem;">Benefits</th>
                    <th class="text-center font-weight-bold py-6 px-6" style="color: #1a202c; border-bottom: 2px solid #e2e8f0; font-size: 1.15rem;">For Members<br>18 – 60 years old</th>
                    <th class="text-center font-weight-bold py-6 px-6" style="color: #1a202c; border-bottom: 2px solid #e2e8f0; font-size: 1.15rem;">For Members<br>66 – 75 years old</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-weight-bold py-6 px-6" style="color: #2d3748; font-size: 1.1rem;">Life Insurance</td>
                    <td class="text-center py-6 px-6" style="color: #4a5568; font-size: 1.1rem;">Php25,000.00</td>
                    <td class="text-center py-6 px-6" style="color: #4a5568; font-size: 1.1rem;">Php25,000.00</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold py-6 px-6" style="color: #2d3748; font-size: 1.1rem;">Accidental Death</td>
                    <td class="text-center py-6 px-6" style="color: #4a5568; font-size: 1.1rem;">Php25,000.00</td>
                    <td class="text-center py-6 px-6" style="color: #4a5568; font-size: 1.1rem;">N/A</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold py-6 px-6" style="color: #2d3748; font-size: 1.1rem;">Total Permanent Disability</td>
                    <td class="text-center py-6 px-6" style="color: #4a5568; font-size: 1.1rem;">Php25,000.00</td>
                    <td class="text-center py-6 px-6" style="color: #4a5568; font-size: 1.1rem;">N/A</td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Membership Details Section (Contributions, Effectivity, etc.) -->
      <v-container id="membership-details" class="py-16" data-aos="fade-up">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="10">
            <!-- Contributions -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #275fdf">
                CONTRIBUTIONS
              </h3>
              <p class="text-body-1 mb-4" style="color: #4a5568; line-height: 1.8;">
                Upon membership in the Association, each Member shall contribute:
              </p>
              <div class="pl-4">
                <div class="d-flex align-start mb-2">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">1.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">
                    <strong>Member</strong> : Nine hundred (PhP900.00) annual, Seventy Five (Php75.00) monthly
                  </p>
                </div>
                <div class="d-flex align-start">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">2.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">
                    <strong>Dependent</strong> : Nine hundred (PhP900.00) annual, Seventy Five (Php75.00) monthly
                  </p>
                </div>
              </div>
            </div>

            <!-- Effectivity -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #275fdf">
                EFFECTIVITY
              </h3>
              <p class="text-body-1 mb-4" style="color: #4a5568; line-height: 1.8;">
                The Association may accept or reject the application of an individual in accordance with its prevailing underwriting guidelines. An individual accepted for membership in the Association is hereinafter referred to as a Member.
              </p>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                Membership in the Association becomes effective only when the individual is alive and in good health on the date of payment of the initial contribution.
              </p>
            </div>

            <!-- Certificate of Membership -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                CERTIFICATE OF MEMBERSHIP
              </h3>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                The Association shall issue a Certificate of Membership to each member setting forth a summary of the benefits and excerpts of the Rules and Regulation of the Individual as a Member of the Association.
              </p>
            </div>

            <!-- Misstatement of Age -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                MISSTATEMENT OF AGE
              </h3>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                In the event the age of a Member has been incorrectly stated and if found not eligible for membership, the Association shall refund all contributions paid.
              </p>
            </div>

            <!-- Termination of Certificate of Membership -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #275fdf">
                TERMINATION OF CERTIFICATE OF MEMBERSHIP
              </h3>
              <p class="text-body-1 mb-4" style="color: #4a5568; line-height: 1.8;">
                The Certificate of Membership shall automatically terminate whichever comes first:
              </p>
              <div class="pl-4 mb-6">
                <div class="d-flex align-start mb-2">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">1.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">If the Member or Dependent dies; or</p>
                </div>
                <div class="d-flex align-start mb-2">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">2.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">If the Member or Dependent reaches insurance age <strong>seventy-five (75)</strong>; or</p>
                </div>
                <div class="d-flex align-start mb-2">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">3.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">If the Member or Dependent withdraws his Equity Value in full; or</p>
                </div>
                <div class="d-flex align-start mb-2">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">4.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">If the Member or Dependent elect to resign from the Association, he/she belongs to; or</p>
                </div>
                <div class="d-flex align-start">
                  <span class="text-body-1 font-weight-bold mr-3" style="color: #2d3748">5.</span>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">As provided in the Contribution Loan provision of these Rules and Regulations.</p>
                </div>
              </div>
              <p class="text-body-1 mb-4" style="color: #4a5568; line-height: 1.8;">
                Termination of Certificate of Membership shall not invalidate any claim arising before such termination, if found to be compensable under the terms of these Rules, and Regulations.
              </p>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                Once terminated, further payments or acceptance of any contribution shall not create any liability under this Certificate of Membership other than to refund the same.
              </p>
            </div>

            <!-- Equity Value -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                EQUITY VALUE
              </h3>
              <p class="text-body-1 mb-4" style="color: #4a5568; line-height: 1.8;">
                The Equity Value is equivalent to fifty percent (50%) of the basic contribution of the Member. The Equity Value shall earn interest as may be declared by the Association but in no case lower than the average deposit interest rate that the top three banks in the country offer for their savings deposit.
              </p>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                The Member shall receive his Equity Value upon surrender of his Certificate of Membership or upon attainment of insurance age seventy-five (75) years old.
              </p>
            </div>

            <!-- Cash Surrender Value -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                CASH SURRENDER VALUE
              </h3>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                The cash surrender value is the amount of total payout when the Certificate of Membership is terminated before the member dies or before the member reaches insurance age seventy-five (75). The cash surrender value is equal to the member’s Equity Value less any outstanding loans and/or contributions due to the Association, but with no surrender charge.
              </p>
            </div>

            <!-- Divisible Surplus -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #275fdf">
                DIVISIBLE SURPLUS
              </h3>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                The Association shall only maintain a free and unassigned surplus of not more than twenty percent (20%) of its total liabilities as verified by the Insurance Commissioner. Any amount in excess shall be returned to the Members by way of dividends, enhancing the equity value or providing benefits in kind and other relevant services.
              </p>
            </div>

            <!-- Contribution Loan -->
            <div class="mb-0">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #275fdf">
                CONTRIBUTION LOAN
              </h3>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                Any contribution due remaining unpaid at the end of the Grace Period is automatically paid as a loan against the Equity Value. The loan together with interest is payable on or before the Member’s next contribution due date, but if it is not paid, both loan and interest automatically become a new loan on such contribution due date on which interest will be charged at the rate in effect from that date.
              </p>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                The contribution loan shall draw interest at a rate approved by the Insurance Commission but not to exceed eight percent (8%) per annum, compounded annually.
              </p>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                When the Equity Value less any indebtedness becomes less than the monthly contribution due, the Certificate of Membership shall continue only for the proportion of a month which the Equity Value less the indebtedness bears to the monthly contribution. The Member shall be informed in writing of the remaining term of coverage.
              </p>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                All loans and their interest are deducted automatically from any amount payable under this system. The Certificate of Membership automatically terminates if the total debt of a Member exceeds his Equity Value.
              </p>
              <p class="text-body-1 mb-4" style="color: #4a5568; line-height: 1.8;">
                Subject to the Insurance Commission’s approval, the Association reserves the right to establish new contribution rates to take effect on any anniversary of the effective date whenever the terms of the Certificate of Membership are changed or if the emerging trends in mortality/morbidity would result in unfavorable claims experience.
              </p>
              <p class="text-body-1 mb-0 font-weight-bold" style="color: #d32f2f; line-height: 1.8;">
                Notice of any new contribution rates shall be given to the members before the date specified by the Association for the rates to become effective.
              </p>
            </div>

            <!-- Grace Period -->
            <div class="mb-12 mt-16">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #275fdf">
                GRACE PERIOD
              </h3>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                A member who fails to pay his contributions after the first shall be given a grace period of forty-five (45) days within which to pay them. Any unpaid contribution shall be deductible from the benefits that may become payable during the grace period.
              </p>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                If the contribution remains unpaid until the end of the grace period, the Certificate of Membership shall automatically terminate except as provided in the Contribution Loan provision.
              </p>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                If Premiums for Optional or Additional Insurance Coverages remain unpaid until the end of the Grace Period, the insurance coverage under the Optional or Additional Insurance Coverages shall automatically terminate. Claims incurred during the Grace Period shall be payable if found valid.
              </p>
            </div>

            <!-- Suicide -->
            <div class="mb-12">
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                SUICIDE
              </h3>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                The death benefit shall not be payable if the Member commits suicide within one (1) year from the effective date of his Certificate of Membership or of its last reinstatement; provided however that suicide committed in the state of insanity is compensable regardless of the date of commission.
              </p>
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                Where suicide is not compensable, the liability of the Association is limited to the refund of the contributions that were received by the Association, without interest less all indebtedness under the account of the Member.
              </p>
            </div>

            <!-- Claims & Beneficiaries -->
            <div class="mb-0">
              <h2 class="text-h4 font-weight-bold mb-8" style="color: #1a202c">
                CLAIMS
              </h2>
              
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #2d3748">
                BENEFICIARIES
              </h3>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                A Member shall have the right to designate anybody, not disqualified by law, as his beneficiary or beneficiaries, and may at any time, designate new beneficiary or beneficiaries by filing a properly completed written request on a form satisfactory to the Association. Such a change shall take effect only when recorded in writing by the Association at its Home Office but without prejudice to the Association on any payment made before receipt of such notice.
              </p>
              <p class="text-body-1 mb-6" style="color: #4a5568; line-height: 1.8;">
                The death benefit shall be payable to the Member’s designated beneficiary or beneficiaries, if surviving; or if there be no beneficiaries designated or surviving at the death of the Member, to the surviving class of the following classes of successive preference beneficiaries:
              </p>

              <div class="pl-8 mb-6">
                <p class="text-body-1 mb-2" style="color: #4a5568;">The Member’s:</p>
                <div class="pl-4">
                  <p class="text-body-1 mb-1" style="color: #4a5568;">a. Widow or widower</p>
                  <p class="text-body-1 mb-1" style="color: #4a5568;">b. Surviving children born to or legally adopted by the member</p>
                  <p class="text-body-1 mb-1" style="color: #4a5568;">c. Surviving parents</p>
                  <p class="text-body-1 mb-1" style="color: #4a5568;">d. Surviving brothers and sisters</p>
                  <p class="text-body-1 mb-0" style="color: #4a5568;">e. Executors and administrators</p>
                </div>
              </div>
              
              <p class="text-body-1 mb-0" style="color: #4a5568; line-height: 1.8;">
                Surviving beneficiaries in the same beneficiary classification share equally in the death benefit proceeds for that beneficiary classification, unless otherwise specified.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- MBAI Details Image Section (Formatted like index.vue Legalities) -->
      <v-container id="mbai-image-details" class="py-20 text-center">
        <v-row justify="center">
          <v-col cols="12" md="10">
            <h2 class="text-h4 font-weight-bold mb-4" style="color: #1a202c">
              MBAI Documents
            </h2>

            <v-divider
              class="mx-auto mb-6"
              thickness="2"
              style="max-width: 60px"
            />

            <p class="text-body-1 text-medium-emphasis mb-8" style="line-height: 1.8">
              Click the button below to view the full salient features and official membership guidelines for the MBAI product.
            </p>

            <v-btn
              color="primary"
              size="large"
              rounded="xl"
              elevation="2"
              @click="zoomDialog = true"
            >
              <v-icon start>mdi-folder-eye-outline</v-icon>
              View Documents
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <!-- Container 1: Life Secure Plus -->
      <v-container id="mbai-list" class="py-16" data-aos="fade-up">
        <v-row justify="center">
          <v-col cols="12" lg="10">
            <v-card variant="flat" class="minimal-card-1 pa-6">
              <!-- Header - Centered MICRO-LOANS REDEMPTION INSURANCE (MLRI) -->
              <div class="text-center mb-12">
                <h2
                  class="text-h4 font-weight-bold mb-4"
                  style="color: #275fdf"
                >
                  MICRO-LOANS REDEMPTION INSURANCE (MLRI)
                </h2>
                <i class="text-body-1" style="color: #718096">
                  Covering what matters, when it matters most.
                </i>
              </div>

              <!-- Plan Content -->
              <v-row>
                <v-col cols="12" md="6" class="pr-md-6">
                  <!-- Benefits Section -->
                  <div class="mb-6">
                    <h5
                      class="text-h5 font-weight-bold mb-4"
                      style="
                        color: #2d3748;
                        border-left: 3px solid #275fdf;
                        padding-left: 12px;
                      "
                    >
                      BENEFITS
                    </h5>
                    <div class="benefits-grid pl-4">
                      <!-- Accidental Death and Disablement -->
                      <div class="benefit-item d-flex align-start mb-4">
                        <v-icon
                          size="16"
                          class="mr-3 mt-1"
                          style="color: #275fdf"
                          >mdi-check-circle</v-icon
                        >
                        <div>
                          <span
                            class="text-body-1 font-weight-medium"
                            style="color: #2d3748"
                          >
                            Accidental Death and Disablement
                          </span>
                        </div>
                      </div>

                      <!-- Kabuhayan Assistance -->
                      <div class="benefit-item d-flex align-start mb-4">
                        <v-icon
                          size="16"
                          class="mr-3 mt-1"
                          style="color: #275fdf"
                          >mdi-check-circle</v-icon
                        >
                        <div>
                          <span
                            class="text-body-1 font-weight-medium"
                            style="color: #2d3748"
                          >
                            Kabuhayan Assistance
                          </span>
                          <div
                            class="text-caption mt-1"
                            style="color: #718096; padding-left: 24px"
                          >
                            (death due to accident)
                          </div>
                        </div>
                      </div>

                      <!-- Cash Assistance -->
                      <div class="benefit-item d-flex align-start mb-4">
                        <v-icon
                          size="16"
                          class="mr-3 mt-1"
                          style="color: #275fdf"
                          >mdi-check-circle</v-icon
                        >
                        <div>
                          <span
                            class="text-body-1 font-weight-medium"
                            style="color: #2d3748"
                          >
                            Cash Assistance
                          </span>
                          <div
                            class="text-caption mt-1"
                            style="color: #718096; padding-left: 24px"
                          >
                            (death due to infectious disease)
                          </div>
                        </div>
                      </div>

                      <!-- Total & Permanent Disability -->
                      <div class="benefit-item d-flex align-start mb-4">
                        <v-icon
                          size="16"
                          class="mr-3 mt-1"
                          style="color: #275fdf"
                          >mdi-check-circle</v-icon
                        >
                        <div>
                          <span
                            class="text-body-1 font-weight-medium"
                            style="color: #2d3748"
                          >
                            Total & Permanent Disability
                          </span>
                        </div>
                      </div>

                      <!-- Loan Redemption Insurance -->
                      <div class="benefit-item d-flex align-start">
                        <v-icon
                          size="16"
                          class="mr-3 mt-1"
                          style="color: #275fdf"
                          >mdi-check-circle</v-icon
                        >
                        <div>
                          <span
                            class="text-body-1 font-weight-medium"
                            style="color: #2d3748"
                          >
                            Loan Redemption Insurance
                          </span>
                          <div
                            class="text-caption mt-1"
                            style="color: #718096; padding-left: 24px"
                          >
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
                      <v-icon size="20" class="mr-2" style="color: #275fdf"
                        >mdi-currency-php</v-icon
                      >
                      <h5
                        class="text-subtitle-1 font-weight-medium mb-0"
                        style="color: #2d3748"
                      >
                        TOTAL GROSS CONTRIBUTION
                      </h5>
                    </div>

                    <div
                      class="contribution-details pa-4 mb-4"
                      style="
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        background-color: #f8fafc;
                      "
                    >
                      <p class="text-body-2 mb-2" style="color: #4a5568">
                        per person (inclusive of equity savings deposit of Php
                        37.50 per month)
                      </p>
                      <p class="text-caption mb-0" style="color: #718096">
                        equity deposit is 100% withdrawable upon
                        death/withdrawal of debtor
                      </p>
                    </div>
                  </div>

                  <!-- Age Eligibility -->
                  <div
                    class="details-box pa-4 mb-6"
                    style="border: 1px solid #e2e8f0; border-radius: 8px"
                  >
                    <div class="mb-4">
                      <div class="d-flex align-center mb-2">
                        <v-icon size="18" class="mr-2" style="color: #275fdf"
                          >mdi-account</v-icon
                        >
                        <span
                          class="text-subtitle-2 font-weight-medium"
                          style="color: #2d3748"
                          >AGE ELIGIBILITY</span
                        >
                      </div>
                      <div class="pl-6">
                        <p class="text-body-2 mb-1" style="color: #4a5568">
                          Entry age 18-60 years old
                        </p>
                        <p class="text-body-2 mb-0" style="color: #4a5568">
                          Coverage age 18-65
                        </p>
                      </div>
                    </div>

                    <!-- Proposal Validity -->
                    <div>
                      <div class="d-flex align-center mb-2">
                        <v-icon size="18" class="mr-2" style="color: #275fdf"
                          >mdi-calendar-clock</v-icon
                        >
                        <span
                          class="text-subtitle-2 font-weight-medium"
                          style="color: #2d3748"
                          >PROPOSAL VALIDITY</span
                        >
                      </div>
                      <p class="text-body-2 pl-6 mb-0" style="color: #4a5568">
                        30 days from the date of issuance
                      </p>
                    </div>
                  </div>

                  <!-- CTA & Contact -->
                  <div class="text-center">
                    <!-- Contact Information -->
                    <div
                      class="contact-info pa-4"
                      style="border: 1px solid #e2e8f0; border-radius: 8px"
                    >
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
                        <v-icon size="16" class="mr-2" style="color: #718096"
                          >mdi-phone</v-icon
                        >
                        <span class="text-body-2" style="color: #4a5568"
                          >+639178074878</span
                        >
                      </div>

                      <!-- Website -->
                      <div class="d-flex align-center justify-center mb-3">
                        <v-icon size="16" class="mr-2" style="color: #718096"
                          >mdi-web</v-icon
                        >
                        <span class="text-body-2" style="color: #4a5568"
                          >www.goodlifembai.com</span
                        >
                      </div>

                      <!-- Email -->
                      <div class="d-flex align-center justify-center">
                        <v-icon size="16" class="mr-2" style="color: #718096"
                          >mdi-email</v-icon
                        >
                        <span class="text-body-2" style="color: #4a5568"
                          >goodlife.mbai@gmail.com</span
                        >
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div
        style="
          border-top: 5px solid #e2e8f0;
          width: 100%;
          max-width: 1450px;
          margin: 40px auto;
        "
      ></div>

      <!-- Spacing between containers -->
      <div class="py-3"></div>


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
                Connect with Goodlife MBAI
              </h2>
              <p class="text-body-2 text-grey-darken-1 mb-6">
                Follow our official Facebook page to stay updated with our latest membership benefits and community programs.
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
                    href="https://www.facebook.com/share/18orq16XQj/?mibextid=wwXIfr"
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
                  href="https://www.facebook.com/share/18orq16XQj/?mibextid=wwXIfr"
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
  <!-- Honeypot -->
  <v-text-field v-model="contactFormHoneypot" class="d-none" autocomplete="off" tabindex="-1"></v-text-field>
  <!-- MAF No Section -->
  <v-row dense class="mb-4">
    <v-col cols="12">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" size="small" class="mr-1">mdi-numeric</v-icon>
        <span class="text-subtitle-2 font-weight-medium">MAF No:</span>
      </div>
      <v-divider class="mb-4"></v-divider>
    </v-col>
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.mafNo"
        type="text"
        label="MAF No. *"
        placeholder="e.g., 12345678"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required]"
        :error-messages="contactFormErrors.mafNo"
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
    <!-- Last Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.lastName"
        label="Last name *"
        placeholder="Dela Cruz"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required, rules.alphabetic]"
        :error-messages="contactFormErrors.lastName"
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
        :rules="[rules.alphabetic]"
        :error-messages="contactFormErrors.middleName"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- First Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.firstName"
        label="First name *"
        placeholder="Juan"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required, rules.alphabetic]"
        :error-messages="contactFormErrors.firstName"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- Complainant Sync Checkbox -->
    <v-col cols="12" class="mt-2">
      <v-checkbox
        v-model="contactForm.isSameAsComplainant"
        label="Complainant is the same as the Personal Information"
        density="compact"
        hide-details
        color="primary"
        class="mt-0"
      ></v-checkbox>
    </v-col>
  </v-row>

  <!-- Complainant Information Section -->
  <v-row dense class="mb-6" v-if="!contactForm.isSameAsComplainant">
    <v-col cols="12">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" size="small" class="mr-1">mdi-account-alert</v-icon>
        <span class="text-subtitle-2 font-weight-medium">Complainant Information:</span>
      </div>
      <v-divider class="mb-4"></v-divider>
    </v-col>
    
    <!-- Complainant Last Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.complainantLastName"
        label="Last name *"
        placeholder="Dela Cruz"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required, rules.alphabetic]"
        :error-messages="contactFormErrors.complainantLastName"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- Complainant Middle Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.complainantMiddleName"
        label="Middle name"
        placeholder="Santos"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.alphabetic]"
        :error-messages="contactFormErrors.complainantMiddleName"
        bg-color="transparent"
        class="minimal-field"
      ></v-text-field>
    </v-col>

    <!-- Complainant First Name -->
    <v-col cols="12" md="4">
      <v-text-field
        v-model="contactForm.complainantFirstName"
        label="First name *"
        placeholder="Juan"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required, rules.alphabetic]"
        :error-messages="contactFormErrors.complainantFirstName"
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

  <!-- Plan Type Section -->
  <v-row dense class="mb-6">
    <v-col cols="12">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" size="small" class="mr-1">mdi-account</v-icon>
        <span class="text-subtitle-2 font-weight-medium">Plan Information:</span>
      </div>
      <v-divider class="mb-4"></v-divider>
    </v-col>
    <!-- Concerns - Dropdown Select -->
    <v-col cols="12" md="12">
      <v-text-field
        v-model="contactForm.concern"
        label="Concern *"
        placeholder="e.g., Claim Inquiry"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="[rules.required]"
        :error-messages="contactFormErrors.concern"
        bg-color="transparent"
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

    <!-- Attachment Section -->
    <v-col cols="12">
      <div class="d-flex align-center mb-1 mt-2">
        <v-icon color="primary" size="x-small" class="mr-1">mdi-paperclip</v-icon>
        <span class="text-caption font-weight-medium">Attachment (Optional):</span>
      </div>
      <v-file-input
        v-model="contactForm.attachments"
        label="Attach files or images"
        variant="outlined"
        density="compact"
        prepend-icon=""
        prepend-inner-icon="mdi-paperclip"
        multiple
        chips
        show-size
        bg-color="transparent"
        class="minimal-field"
        hide-details="auto"
        accept=".jpg, .jpeg, .png, .pdf, image/jpeg, image/png, application/pdf"
        :rules="[rules.file]"
      ></v-file-input>
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

    <!-- Image Zoom Dialog -->
    <v-dialog v-model="zoomDialog" max-width="95vw" class="image-zoom-dialog">
      <v-card class="bg-transparent" flat>
        <v-btn
          icon="mdi-close"
          position="fixed"
          style="top: 20px; right: 20px; z-index: 100;"
          @click="zoomDialog = false"
          color="white"
          variant="tonal"
        ></v-btn>
        <div class="d-flex justify-center align-center fill-height" style="min-height: 90vh;">
          <v-img
            src="@/assets/images/mbai insurance.jpeg"
            max-height="90vh"
            contain
            @click="zoomDialog = false"
            class="cursor-pointer"
          ></v-img>
        </div>
      </v-card>
    </v-dialog>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";

// Dialog States
const zoomDialog = ref(false);
import "aos/dist/aos.css";
import { messageService } from "@/plugins/api";

const router = useRouter();
const drawer = ref(false);
const showPlanDialog = ref(false);
const selectedPlan = ref(null);

const comparisonFeatures = ref([
  {
    name: "Life Insurance Coverage",
    lifeSecure: true,
    familyProtect: true,
    wealthBuilder: true,
  },
  {
    name: "Accidental Death Benefit",
    lifeSecure: true,
    familyProtect: true,
    wealthBuilder: true,
  },
  {
    name: "Critical Illness Rider",
    lifeSecure: true,
    familyProtect: true,
    wealthBuilder: true,
  },
  {
    name: "Family Coverage",
    lifeSecure: false,
    familyProtect: true,
    wealthBuilder: true,
  },
  {
    name: "Investment Component",
    lifeSecure: false,
    familyProtect: false,
    wealthBuilder: true,
  },
  {
    name: "Education Fund",
    lifeSecure: false,
    familyProtect: true,
    wealthBuilder: true,
  },
  {
    name: "Retirement Benefits",
    lifeSecure: false,
    familyProtect: false,
    wealthBuilder: true,
  },
  {
    name: "Hospital Income",
    lifeSecure: false,
    familyProtect: true,
    wealthBuilder: false,
  },
  {
    name: "Funeral Assistance",
    lifeSecure: true,
    familyProtect: true,
    wealthBuilder: true,
  },
  {
    name: "Policy Loan Option",
    lifeSecure: true,
    familyProtect: true,
    wealthBuilder: true,
  },
]);

const specialBenefits = ref([
  {
    title: "Critical Illness Cover",
    description:
      "Coverage for 36 major critical illnesses including cancer, stroke, and heart attack",
    icon: "mdi-heart-pulse",
    color: "error",
  },
  {
    title: "Hospital Income",
    description:
      "Daily hospital income benefit during confinement (up to 180 days)",
    icon: "mdi-hospital",
    color: "info",
  },
  {
    title: "Education Fund",
    description:
      "Guaranteed education fund for children in case of untimely death",
    icon: "mdi-school",
    color: "success",
  },
  {
    title: "Emergency Assistance",
    description: "24/7 emergency medical assistance and evacuation services",
    icon: "mdi-ambulance",
    color: "warning",
  },
]);

const planDetails = {
  "life-secure-plus": {
    title: "Life Secure Plus",
    description:
      "A comprehensive life insurance plan offering substantial coverage with critical illness protection. Ideal for individuals seeking robust personal protection with cash value accumulation.",
    coverage: [
      "Life insurance coverage up to age 80",
      "Critical illness coverage for 36 major illnesses",
      "Accidental death benefit equal to sum assured",
      "Cash value accumulation starting year 3",
      "Waiver of premium for disability",
    ],
    requirements: [
      "Age: 18-60 years old",
      "Minimum coverage: ₱500,000",
      "Medical examination required for coverage above ₱1,000,000",
      "Valid government ID required",
    ],
    coverageAmount: "₱500,000",
    monthlyPremium: "₱2,500",
    icon: "mdi-shield-account",
    iconColor: "primary",
  },
  "family-protect-gold": {
    title: "Family Protect Gold",
    description:
      "Complete family protection package covering the principal and up to 3 dependents. Includes education fund benefits and comprehensive medical assistance.",
    coverage: [
      "Coverage for principal + 3 dependents",
      "Education fund guarantee for children",
      "Hospital income benefit (₱1,000 per day)",
      "Emergency medical assistance",
      "Family funeral assistance",
    ],
    requirements: [
      "Principal age: 25-55 years old",
      "Dependents age: 1 month to 25 years old",
      "Family relationship proof required",
      "Minimum coverage: ₱1,000,000",
    ],
    coverageAmount: "₱1,000,000",
    monthlyPremium: "₱4,800",
    icon: "mdi-family",
    iconColor: "secondary",
  },
  "wealth-builder-pro": {
    title: "Wealth Builder Pro",
    description:
      "Advanced investment-linked insurance combining life protection with wealth accumulation. Features guaranteed cash values and dividend participation.",
    coverage: [
      "Combined insurance and investment",
      "Guaranteed annual cash values",
      "Dividend participation option",
      "Retirement fund accumulation",
      "Estate planning benefits",
    ],
    requirements: [
      "Age: 25-55 years old",
      "Minimum investment: ₱100,000 annually",
      "Financial capacity assessment",
      "Risk profiling required",
    ],
    coverageAmount: "₱2,000,000",
    monthlyPremium: "₱8,500",
    icon: "mdi-chart-line",
    iconColor: "success",
  },
};

// ============ MINIMALIST CONTACT DIALOG STATE ============
const contactDialog = ref(false);           // Dialog visibility
const formValid = ref(false);              // Form validation state
const submitting = ref(false);             // Submission loading state
const contactFormRef = ref(null);          // Form reference for validation
const contactFormHoneypot = ref("");
const lastSubmitTime = ref(0);
const contactAttempts = ref(0);
const rateLimitError = ref("");

const sanitizeHTML = (str) => {
  if (!str) return str;
  return String(str).replace(/<[^>]*>?/gm, '');
};

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



// ============ MINIMALIST CONTACT FORM METHODS ============

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

  rateLimitError.value = "";

  const { valid } = await contactFormRef.value?.validate();
  if (!valid) return;

  submitting.value = true;
  contactAttempts.value++;
  lastSubmitTime.value = now;

  try {
    // Prepare the data for the ticket system API
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
      concern_info: [{ title: sanitizeHTML(contactForm.value.concern), value: 'other' }],
      files: contactForm.value.attachments,
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
const goToHomeSection = (sectionId) => {
  router.push("/").then(() => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 65;
        const extraOffset = 15;
        const yOffset = -(headerHeight + extraOffset);
        
        // Use stable offsetTop to avoid AOS transformation issues
        let el = element;
        let y = 0;
        while (el) {
          y += el.offsetTop;
          el = el.offsetParent;
        }
        
        window.scrollTo({ top: y + yOffset, behavior: "smooth" });
      }
    }, 300); // Increased delay for stability
  });
};



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

// Function to scroll within this page
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 65;
    const extraOffset = 15;
    const yOffset = -(headerHeight + extraOffset);
    
    // Use stable offsetTop to avoid AOS transformation issues
    let el = element;
    let y = 0;
    while (el) {
      y += el.offsetTop;
      el = el.offsetParent;
    }
    
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
</style>
