<template>
	<section
		id="hero"
		class="relative overflow-hidden bg-black text-secondary flex items-center justify-center my-16 pt-16"
	>
		<div
			class="absolute top-0 left-0 right-0 h-16"
			aria-hidden="true"
		></div>
		<div class="container relative z-10 mx-auto px-8 py-12">
			<div
				class="bg-gradient-to-br from-black to-primary rounded-3xl shadow-2xl overflow-hidden"
			>
				<div class="flex flex-wrap items-center justify-between p-8">
					<div class="w-full lg:w-3/5 pr-8 mb-8 lg:mb-0">
						<h2 class="text-gray-100 font-semibold mb-3 text-xl">
							Telecommunications Services
						</h2>
						<h1 class="text-5xl font-bold mb-6">
							Voice Solutions you can count on.
						</h1>
						<div class="mt-8">
							<h3 class="text-2xl font-semibold mb-4">
								Retail and Wholesale all in one place.
							</h3>
							<p class="mb-4 text-lg">
								As part of the V-Tell group of companies, Glotell
								delivers cutting-edge telecommunications termination
								services, offering reliable and high-quality solutions
								tailored to meet the specific needs of our clients.
								Our experienced team excels in optimizing telecom
								infrastructure and guiding businesses through the
								latest communication technologies.
							</p>
							<p class="mb-8 text-lg">
								In addition to our telecom expertise, we provide
								seamless global connectivity through V-Tell’s retail
								cellular services. This unified approach ensures that
								our customers benefit from robust, world-class
								communication solutions—whether for business or
								personal use—under one cohesive operation.
							</p>
						</div>
					</div>
					<div class="w-full lg:w-2/5">
						<img
							src="/assets/call-center.jpg"
							alt="Hero image"
							class="w-full h-auto rounded-2xl shadow-lg"
						/>
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
	#hero {
		scroll-margin-top: 4rem; /* Adjust this value based on your navbar height */
	}
</style>
