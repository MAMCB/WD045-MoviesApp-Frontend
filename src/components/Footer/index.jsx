import React from "react";

const Footer = () => {
	return (
		<footer class="bg-white rounded-lg shadow  dark:bg-gray-800">
			<div class="w-full mx-auto p-4 md:flex md:items-center justify-between">
				<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{" "}
					<a href="https://flowbite.com/" class="hover:underline">
						Flowbite™
					</a>
					. All Rights Reserved.
				</span>
				<ul class="flex flex-wrap  mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">
							About
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">
							Licensing
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;