<template>
	<section class="py-16 bg-stone-300" id="features">
		<div class="container mx-auto px-4">
			<div class="flex items-center mb-12">
				<div class="w-8 h-0.5 bg-black mr-4"></div>
				<h2 class="text-4xl font-bold text-black uppercase">
					What We Do
				</h2>
			</div>

			<!-- Retail Section -->
			<div class="flex flex-col md:flex-row gap-8 mb-16">
				<!-- RETAIL text -->
				<div
					class="w-full md:w-1/4 bg-black rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-4 md:p-0"
				>
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
				<div
					class="w-full md:w-3/4 bg-black rounded-3xl shadow-2xl overflow-hidden"
				>
					<div class="p-8">
						<h3 class="text-3xl font-bold text-secondary mb-4">
							Go Global, Stay Local.
						</h3>
						<h3 class="text-2xl font-bold text-secondary mb-4">
							One eSIM for all your mobile numbers. Anywhere.
						</h3>
						<p class="text-secondary mb-4">
							As part of the V-Tell group, Glotell brings you a
							revolutionary eSIM solution, designed to keep you
							connected globally while blending in locally. With
							access to over 90 international phone numbers, you can
							assign local numbers from any country to your eSIM,
							giving you credibility and seamless communication
							wherever you are.
						</p>
						<h3 class="text-2xl font-bold text-secondary mb-4">
							Stay in Touch, Stay Credible
						</h3>
						<p class="text-secondary mb-4">
							No matter where your travels take you, a local number
							ensures you stay in contact with family, friends,
							clients, banks, government agencies, and business
							partners as if you never left their country. A local
							number not only opens doors but also enhances trust and
							reliability in the marketplace.
						</p>
						<h3 class="text-2xl font-bold text-secondary mb-4">
							Discreet and Seamless Connectivity
						</h3>
						<p class="text-secondary mb-4">
							Your physical location remains confidential to your
							callers, no matter where you are in the world. Depending
							on your plan, your calls, SMS, and internet are always
							available at a flat rate, with no hidden fees. Our
							state-of-the-art Smart Caller ID system ensures that
							your contacts see a familiar local number on their
							caller ID, regardless of your actual location.
						</p>
						<h3 class="text-2xl font-bold text-secondary mb-4">
							Multiple Numbers, One Device
						</h3>
						<p class="text-secondary mb-4">
							With the V-Tell eSIM, you can transfer existing phone
							numbers or add an unlimited number of local numbers from
							any country, all on a single eSIM. This allows you to
							manage multiple social media and messaging accounts,
							making it effortless to stay connected, no matter how
							many contacts or countries you interact with. Your
							contacts can always reach you using a local number from
							their country, even if you're on the other side of the
							globe.
						</p>
						<h3 class="text-2xl font-bold text-secondary mb-4">
							Limitless Freedom, Simplified Communication
						</h3>
						<p class="text-secondary mb-4">
							Travel light, stay connected, and make the most of your
							mobile device with Glotell’s unified solution, powered
							by the V-Tell eSIM.
						</p>
						<a
							href="https://v-tell.com/en"
							target="_blank"
							rel="noopener noreferrer"
							class="bg-primary text-secondary px-4 py-2 rounded-full font-semibold hover:bg-opacity-80 hover:text-black transition-colors inline-block uppercase"
						>
							VISIT V-TELL
						</a>
					</div>
				</div>
			</div>

			<!-- Wholesale Section -->
			<div class="flex flex-col md:flex-row gap-8">
				<!-- Wholesale copy -->
				<div
					class="w-full md:w-3/4 bg-black rounded-3xl shadow-2xl overflow-hidden order-2 md:order-1"
				>
					<div class="p-8">
						<h2 class="text-2xl font-bold text-secondary mb-4">
							Glotell: Your Partner in Domestic Telecommunications
							Termination
						</h2>
						<p class="text-secondary mb-4">
							Glotell is a leading provider of telecommunications
							termination services, dedicated to delivering
							high-quality, reliable solutions that cater to the
							specific needs of our diverse client base. With years of
							expertise in the telecom industry, we ensure that your
							communication infrastructure is optimized for peak
							performance, cost-efficiency, and regulatory compliance.
						</p>
						<h2 class="text-2xl font-bold text-secondary mb-4">
							Expert Guidance and Regulatory Compliance
						</h2>
						<p class="text-secondary mb-4">
							Our experienced team is committed to guiding businesses
							through evolving telecom technologies, offering insights
							into new solutions and ensuring adherence to the latest
							industry standards, including TCPA and Robocall
							mitigation. We understand the complexities of the
							telecommunications landscape and work tirelessly to help
							our clients navigate these challenges with ease,
							offering scalable and future-proof solutions.
						</p>
						<h2 class="text-2xl font-bold text-secondary mb-4">
							Comprehensive Service Offerings
						</h2>
						<p class="text-secondary">
							From call center support and calling card termination
							services to advanced arbitrage VOIP services, Glotell
							has the expertise to ensure that your business remains
							connected and competitive in the global marketplace. Our
							tailored approach means that no matter your operational
							needs, we provide the technology and services that
							empower your business to grow and thrive.
						</p>
					</div>
				</div>

				<!-- WHOLESALE text -->
				<div
					class="w-full md:w-1/4 bg-black rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-4 md:p-0 order-1 md:order-2"
				>
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
