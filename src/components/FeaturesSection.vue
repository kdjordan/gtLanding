<template>
  <section class="py-16 bg-stone-300" id="features">
    <div class="container mx-auto px-4">
      <div class="flex items-center mb-12">
        <div class="w-8 h-0.5 bg-black mr-4"></div>
        <h2 class="text-4xl font-bold text-black uppercase">What We Do</h2>
      </div>
      
      <!-- Retail Section -->
      <div class="flex flex-col md:flex-row gap-8 mb-16">
        <!-- RETAIL text -->
        <div class="w-full md:w-1/4 bg-black rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-4 md:p-0">
          <div class="text-4xl md:text-6xl font-bold text-secondary">
            <div class="feature-text">
              <span>R</span>
              <span>E</span>
              <span>T</span>
              <span>A</span>
              <span>I</span>
              <span>L</span>
            </div>
          </div>
        </div>
        
        <!-- Retail copy -->
        <div class="w-full md:w-3/4 bg-black rounded-3xl shadow-2xl overflow-hidden">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-secondary mb-4">Global Connectivity, Simplified</h3>
            <p class="text-secondary mb-4">
              Through Glotell's strategic partnership with V-Tell, we bring you a revolutionary eSIM solution that enables global communication with ease. With access to over 90 international phone numbers on one eSIM, users can enjoy seamless connectivity for calls, SMS, and data wherever they are. Stay local while traveling the world with a convenient multi-number solution that keeps you connected across borders.
            </p>
            <h3 class="text-2xl font-bold text-secondary mb-4">A Single eSIM for Multiple Local Numbers</h3>
            <p class="text-secondary mb-4">
              The V-Tell eSIM allows you to maintain local credibility by assigning local numbers from different countries to your eSIM, regardless of your physical location. Whether you're conducting business, staying in touch with family, or simply exploring the globe, your contacts can always reach you using a familiar local number. This flexibility enhances convenience and builds trust, whether for personal or professional needs.
            </p>
            <h3 class="text-2xl font-bold text-secondary mb-4">Travel Light, Stay Connected</h3>
            <p class="text-secondary mb-4">
              With no hidden fees and a flat-rate pricing model, the V-Tell eSIM offers transparency and peace of mind. Its Smart Caller ID ensures that your contacts see your local number, maintaining discretion and privacy. The ability to add multiple social media and messaging accounts linked to your various phone numbers makes managing communication effortless, all from a single device.
            </p>
            <a href="https://v-tell.com/en" target="_blank" rel="noopener noreferrer" class="bg-primary text-secondary px-4 py-2 rounded-full font-semibold hover:bg-opacity-80 hover:text-black transition-colors inline-block uppercase">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <!-- Wholesale Section -->
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Wholesale copy -->
        <div class="w-full md:w-3/4 bg-black rounded-3xl shadow-2xl overflow-hidden order-2 md:order-1">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-secondary mb-4">Glotell: Your Partner in Domestic Telecommunications Termination</h2>
            <p class="text-secondary mb-4">
              Glotell is a leading provider of telecommunications termination services, dedicated to delivering high-quality, reliable solutions that cater to the specific needs of our diverse client base. With years of expertise in the telecom industry, we ensure that your communication infrastructure is optimized for peak performance, cost-efficiency, and regulatory compliance.
            </p>
            <h2 class="text-2xl font-bold text-secondary mb-4">Expert Guidance and Regulatory Compliance</h2>
            <p class="text-secondary mb-4">
              Our experienced team is committed to guiding businesses through evolving telecom technologies, offering insights into new solutions and ensuring adherence to the latest industry standards, including TCPA and Robocall mitigation. We understand the complexities of the telecommunications landscape and work tirelessly to help our clients navigate these challenges with ease, offering scalable and future-proof solutions.
            </p>
            <h2 class="text-2xl font-bold text-secondary mb-4">Comprehensive Service Offerings</h2>
            <p class="text-secondary">
              From call center support and calling card termination services to advanced arbitrage VOIP services, Glotell has the expertise to ensure that your business remains connected and competitive in the global marketplace. Our tailored approach means that no matter your operational needs, we provide the technology and services that empower your business to grow and thrive.
            </p>
          </div>
        </div>
        
        <!-- WHOLESALE text -->
        <div class="w-full md:w-1/4 bg-black rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-4 md:p-0 order-1 md:order-2">
          <div class="text-4xl md:text-6xl font-bold text-secondary">
            <div class="feature-text py-8">
              <span>W</span>
              <span>H</span>
              <span>O</span>
              <span>L</span>
              <span>E</span>
              <span>S</span>
              <span>A</span>
              <span>L</span>
              <span>E</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add any necessary imports and logic here
</script>

<style scoped>
#features {
  scroll-margin-top: 4rem;
}

.feature-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.feature-text span {
  display: inline-block;
}

@media (min-width: 768px) {
  .feature-text {
    flex-direction: column;
  }
  
  .feature-text span {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
}
</style>