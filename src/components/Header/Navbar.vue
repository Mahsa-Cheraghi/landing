<template>
	<HeadPage />

	<div class="hamburger-menu" v-show="showHamburgerMenu" @click="toggleMenu">
	</div>
	<div class="mobile-menu" v-show="showHamburgerMenu">
		<Navigate />
	</div>

	<div class="menu" v-show="!showHamburgerMenu">
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<li>
						<a class="nav-link dropdown-toggle collapse navbar-collapse pl-3"
							id="navbarSupportedContent navbarDropdown" aria-expanded="false" href="#"
							data-bs-toggle="dropdown">
							خانه
						</a>

						<ul class="dropdown-menu " aria-labelledby="navbarDropdown">
							<li><router-link class="my-link float-right pr-2" :to="{ name: 'landing' }">
									خانه-چیدمان 1
								</router-link></li>
							<li><router-link class="my-link float-right pr-2" :to="{ name: 'home2' }">
									خانه-چیدمان 2
								</router-link></li>
						</ul>
					</li>


					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav  mb-2 mb-lg-0">



							<li><router-link class="px-4 my-link" :to="{ name: 'about' }">
									درباره ی ما
								</router-link></li>

							<li><router-link class="px-4 my-link" :to="{ name: 'services' }">
									سرویس ها
								</router-link></li>
							<li><router-link class="px-3 my-link" :to="{ name: 'ourdoctor' }">
									دکترما
								</router-link></li>
							<li><router-link class="px-3 my-link" :to="{ name: 'appointment' }">
									وقت ملاقات
								</router-link></li>

						</ul>

						<li>
							<a class="nav-link dropdown-toggle collapse navbar-collapse pl-3"
								id="navbarSupportedContent navbarDropdown" aria-expanded="false" href="#"
								data-bs-toggle="dropdown">
								صفحات
							</a>

							<ul class="dropdown-menu " aria-labelledby="navbarDropdown">
								<li><router-link class="my-link float-right pr-2" :to="{ name: 'faq' }">
										پرسش و پاسخ
									</router-link></li>
								<li><router-link class="my-link float-right pr-2" :to="{ name: 'error' }">
										صفحه 404
									</router-link></li>
							</ul>
						</li>
						<li>
							<a class="nav-link dropdown-toggle collapse navbar-collapse pl-3"
								id="navbarSupportedContent navbarDropdown" aria-expanded="false" href="#"
								data-bs-toggle="dropdown">
							تماس
							</a>

							<ul class="dropdown-menu " aria-labelledby="navbarDropdown">
								<li><router-link class="my-link float-right pr-2" :to="{ name: 'layout1' }">
						تماس-1
									</router-link></li>
								<li class="ml-8"><router-link class="my-link float-right pr-2" :to="{ name: 'layout2' }">
					<br>		تماس-2
									</router-link></li>
							</ul>
						</li>

 <form class="form-inline my-2 my-lg-0 mr-auto">
							<div>ما را دنبال کنید :
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-twitter twitter"></i>
								<i class="fab fa-instagram"></i>
							</div>
						</form> 

					</div>
				</div>
			</nav>
		</div>
	</div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
import Navigate from './Navigate.vue'
import HeadPage from './HeadPage.vue'
export default {
	components: {
		HeadPage,
		Navigate
	},
	data() {
		return {
			showHamburgerMenu: false
		};
	},
	mounted() {
		this.checkScreenSize(); // Check screen size on component mount
		window.addEventListener('resize', this.checkScreenSize); // Listen for screen size changes
	},
	methods: {
		checkScreenSize() {
			this.showHamburgerMenu = window.innerWidth <= 992; // Set showHamburgerMenu based on screen size
		},
		toggleMenu() {
			this.showHamburgerMenu = !this.showHamburgerMenu; // Toggle showHamburgerMenu when hamburger menu is clicked
		}
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.checkScreenSize); // Clean up event listener on component destroy
	}
}
</script>
  
<style scoped>
@import url("/src/assets/css/all.css");



.bg-light {

	background-color: white !important;
	border-top: 1px solid rgb(107, 102, 102);
}

li {
	list-style-type: none;
}

.twitter {
	margin: 1rem;
}


.my-link {
	text-decoration: none;
	color: black;
	margin: 15px;
}

.my-link:hover,
:active {
	color: #2a70ed;
}

.mobile-menu {
	display: none;
}

.kol {
	position: absolute;
}
i{
	color:#2a70ed;
}
@media screen and (max-width: 992px) {

	.menu {
		display: none;

	}

	.mobile-menu {
		display: block;

	}




}
</style> 

