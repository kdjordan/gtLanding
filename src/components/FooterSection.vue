<template>
	<footer class="bg-stone-200 text-black py-16">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- Logo and Description -->
				<div class="md:col-span-2">
					<div class="flex items-center mb-4">
						<svg
							class="h-8 w-8 text-primary mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
						<span class="font-display font-bold text-xl uppercase"
							>THE GLOTELL ADVANTAGE</span
						>
					</div>
					<p class="mb-4 max-w-2xl">
						In partnership with V-Tell, we offer a suite of
						connectivity solutions designed to meet the needs of
						enterprises and individuals worldwide. Our offerings range
						from retail cellular services to robust termination
						solutions, ensuring that IT leaders can deliver reliable,
						cost-effective communications infrastructure. Whether
						you’re expanding your reach or enhancing existing systems,
						Glotell’s unified approach ensures seamless operations and
						unmatched global coverage.
					</p>

				</div>

				<!-- Location -->
				<div class="md:pl-8">
					<h3 class="font-bold text-lg mb-4">Location</h3>
					<p class="mb-4">
						1832 S Ocean Drive<br />
						Hallandale Beach, FL 33009<br />
						USA
					</p>
					<a
						href="https://www.google.com/maps/search/?api=1&query=1832+S+Ocean+Drive,Hallandale+Beach,FL+33009,USA"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-black transition-colors"
					>
						View on Google Maps
					</a>
				</div>
			</div>

			<!-- Bottom Section -->
			<div
				class="mt-16 pt-8 border-t border-gray-300 flex flex-wrap justify-between items-center"
			>
				<p>&copy; 2024 Glotell, LLC. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
	// Add any necessary imports and logic here
</script>
