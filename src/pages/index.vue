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

          <!-- Legalities Navigation Item -->
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

          <!-- Products Dropdown Menu -->
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

          <v-btn
            variant="outlined"
            color="primary"
            class="text-capitalize-1 ml-4 login-btn"
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

        <!-- Legalities Mobile Menu Item -->
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

    <!-- Main Content -->
    <v-main>
         <div id="home" class="products-hero">
        <!-- Color Background -->
        <div class="color-backgrounds-family"></div>

        <div class="banner-content" data-aos="fade-up">
          <v-container class="fill-height">
            <v-row align="center" class="fill-height">
              <v-col cols="12" md="7" class="text-center text-md-start">
                  <h2 class="banner-title-family">
                  SECURE YOUR LIFE,<br />
                  <span class="banner-title-highlight-family"
                    >SECURE WITH GOODLIFE</span
                  >
                </h2>

                <p class="banner-subtitle-family">
                  At Goodlife, we offer comprehensive individual or family type
                  of insurance that caters to the needs of your immediate family
                  members at the time of life's uncertainties
                </p>
              </v-col>
                <v-col cols="12" md="5"  class="banner-image-col-family">
                <div class="banner-image-container-family">
                  <img
                    src="@/assets/images/damayan insurance family.png"
                    alt="Goodlife Plans Logo"
                    class="banner-image-family"
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

            <!-- Description -->
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

            <!-- CTA Button -->
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
                <!-- Certificate of Registration Card -->
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

                <!-- Data Privacy Registration Card -->
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

              <!-- Image Zoom Dialog -->
              <v-dialog v-model="zoomDialog" max-width="90vw">
                <v-card rounded="xl">
                  <!-- Title Section -->
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

                  <!-- Image Navigation Section -->
                  <v-card-text
                    class="text-center d-flex align-center justify-center"
                  >
                    <!-- Previous Button -->
                    <v-btn icon :disabled="zoomIndex === 0" @click="prevImage">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>

                    <!-- Current Image -->
                    <v-img
                      :src="zoomImages[zoomIndex]"
                      max-height="100vh"
                      contain
                      class="mx-4 rounded-lg"
                    />

                    <!-- Next Button -->
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
          <!-- Assignable Feature Card -->
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

          <!-- Transferable Feature Card -->
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

          <!-- Loanable Feature Card -->
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

          <!-- Non-Forfeiture Feature Card -->
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
          <!-- Section Header -->
          <h2 class="text-h4 font-weight-bold mb-6" style="color: white">
            WHY CHOOSE GOODLIFE ?
          </h2>

          <!-- Expansion Panels -->
          <v-expansion-panels variant="popout" class="text-left">
            <!-- Accessibility Panel -->
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

            <!-- Affordability Panel -->
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
            <!-- Left Column - Text Content -->
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

              <!-- Features List -->
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

            <!-- Right Column - Explore Button -->
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

      <!-- Contact Section -->
      <v-container
        id="contact"
        fluid
        class="py-16 contact-cta text-center"
        style="background: linear-gradient(135deg, #4a4561); color: white"
      >
        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="8">
            <h2 class="text-h4 font-weight-bold mb-4">
              Get in Touch with Goodlife Damayan
            </h2>
            <p class="text-h6 mb-10">
              Have questions about our insurance plans or need guidance choosing
              the right coverage? Reach out to the Goodlife Damayan Insurance
              Agency Co. and let our team assist you every step of the way.
            </p>
          </v-col>
        </v-row>

        <!-- Contact Form -->
        <v-row justify="center" data-aos="fade-up">
          <v-col cols="12" md="6" lg="5">
            <v-card color="transparent" flat>
              <v-form>
                <v-text-field
                  label="Full Name"
                  outlined
                  dense
                  color="white"
                  class="mb-4"
                  hide-details
                ></v-text-field>

                <v-text-field
                  label="Email Address"
                  outlined
                  dense
                  color="white"
                  class="mb-4"
                  hide-details
                ></v-text-field>

                <v-textarea
                  label="Your Message"
                  outlined
                  color="white"
                  rows="4"
                  auto-grow
                  hide-details
                ></v-textarea>

                <v-btn
                  color="white"
                  class="mt-3 mb-4 text-primary font-weight-medium px-5 py-2 rounded-pill elevation-3"
                  type="submit"
                >
                  Send Message
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Footer Section -->
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
                <li>
                  <a href="/contact" class="text-black text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </v-col>

            <!-- Contact Information -->
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

          <!-- Footer Divider -->
          <v-divider class="my-6" color="black" opacity="0.15" />

          <!-- Copyright -->
          <div class="text-center text-body-2 text-medium-emphasis">
            © 2026 Goodlife Damayan Insurance Agency Co. All rights reserved.
          </div>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/css/style.css';

// Component name can be defined using defineOptions
import { defineOptions } from 'vue';

defineOptions({
  name: 'HomePage'
});


// REACTIVE STATE VARIABLES
const route = useRoute();
const router = useRouter();

// UI State
const drawer = ref(false);
const legalitiesDialog = ref(false);
const zoomDialog = ref(false);

// Navigation State
const activeSection = ref('home');
const currentProductsRoute = ref('');
const zoomTitle = ref('');
const zoomImages = ref([]);
const zoomIndex = ref(0);

// Data Arrays
const sections = ['home', 'about', 'legalities', 'features', 'contact'];
const features = ref([
  'Available Individual Insurance Product',
  'Family Insurance Product',
  'Goodlife Plans',
  'Goodlife Benefits Association Inc.'

]);

const productsMenuItems = ref([
  { title: 'DAMAYAN', route: '/products/damayan' },
  { title: 'GOODLIFE PLANS', route: '/products/goodlife-plans' },
  { title: 'MBAI', route: '/products/mbai' }
]);

// Legal Documents Data - Using proper asset paths
const legalDocuments = ref([
  {
    category: 'Certificate of Registration',
    images: [
      new URL('@/assets/registration/COR-1.jpg', import.meta.url).href,
      new URL('@/assets/registration/COR-2.jpg', import.meta.url).href,
      new URL('@/assets/registration/COR-3.jpg', import.meta.url).href
    ]
  },
  {
    category: 'DAMAYAN 2ND Amended',
    images: [
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0001.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0002.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0003.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0004.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0005.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0006.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0007.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0008.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0009.jpg', import.meta.url).href,
      new URL('@/assets/registration/amendment/DAMAYAN 2ND AMENDED_page-0010.jpg', import.meta.url).href
    ]
  }
]);


// NAVIGATION METHODS
/**
 * Navigate to a specific products page
 * @param {string} productRoute - Route path to navigate to
 */
const goToProductsPage = (productRoute) => {
  drawer.value = false; // Close mobile drawer
  router.push(productRoute);
};

/**
 * Smooth scroll to a section with offset for navbar
 * @param {string} id - Section ID to scroll to
 */
const scrollToSection = (id) => {
  drawer.value = false; // Close mobile drawer
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -120; // Navbar height offset
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    smoothScrollTo(y);
  }
};

/**
 * Smooth scroll animation
 * @param {number} targetY - Target scroll position
 * @param {number} duration - Animation duration in ms
 */
const smoothScrollTo = (targetY, duration = 800) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;
  
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const percent = Math.min(time / duration, 1);
    
    // Easing function for smooth animation
    const easing = percent < 0.5 
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
/**
 * Open the legal documents dialog
 */
const openLegalitiesDialog = () => {
  legalitiesDialog.value = true;
};

/**
 * Close the legal documents dialog
 */
const closeLegalitiesDialog = () => {
  legalitiesDialog.value = false;
};

/**
 * Open zoom dialog for a document
 * @param {Object} doc - Document object with images
 */
const openZoom = (doc) => {
  zoomTitle.value = doc.category;
  zoomImages.value = doc.images;
  zoomIndex.value = 0;
  zoomDialog.value = true;
};

/**
 * Close the zoom dialog
 */
const closeZoomDialog = () => {
  zoomDialog.value = false;
};

/**
 * Navigate to next image in zoom dialog
 */
const nextImage = () => {
  if (zoomIndex.value < zoomImages.value.length - 1) {
    zoomIndex.value++;
  }
};

/**
 * Navigate to previous image in zoom dialog
 */
const prevImage = () => {
  if (zoomIndex.value > 0) {
    zoomIndex.value--;
  }
};

// --------------------------------------------------------------
// SCROLLSPY FUNCTIONALITY
// --------------------------------------------------------------

/**
 * Handle scroll events to update active section
 */
const handleScroll = () => {
  let current = '';
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop - 160;
      if (window.scrollY >= sectionTop) {
        current = id;
      }
    }
  });
  if (current) activeSection.value = current;
};

// --------------------------------------------------------------
// LIFECYCLE HOOKS
// --------------------------------------------------------------

onMounted(() => {
  // Initialize AOS animations
  AOS.init({
    duration: 1500,
    once: false,
    mirror: true,
    offset: 120
  });
  
  // Add scroll listener for scrollspy
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Clean up scroll listener
  window.removeEventListener('scroll', handleScroll);
});

// --------------------------------------------------------------
// WATCHERS
// --------------------------------------------------------------

// Watch route changes for products navigation
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    if (newPath.includes('/products')) {
      currentProductsRoute.value = newPath;
    } else {
      currentProductsRoute.value = '';
    }
  },
  { immediate: true }
);

// Refresh AOS when route changes
watch(route, async () => {
  await nextTick();
  AOS.refresh();
});
</script>

<style scoped>
</style>