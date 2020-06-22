<template>
    <div>
        
        <!-- Bouton Retour vers la section Portfolio -->
        <nav class="p-6">
            <router-link to="/#portfolio" tag="button" class="btn-back">
            Retour</router-link>
        </nav>

        <header>
            <div class="container p-3 mx-auto text-white flex flex-wrap md:pt-10 md:flex-row">
                <div class="p-3 flex-col text-center md:mb-0 md:p-0 md:text-left md:w-3/5">
                    <h1 class=" text-4xl md:text-5xl font-bold">Portfolio V1</h1>
                </div>

                <p class="p-3 text-xl md:text-2xl md:w-3/5 md:p-0">Ce projet est la première version de mon site internet. Il avait pour but de me créer une identité numérique et de faire évoluer mes compétences.</p>

                <div class="info">
                    <h2><i class="fas fa-calendar-alt mr-4"></i>Année : 2019</h2>
                    <h2><i class="fas fa-clock mr-4"></i>Durée : 3 Mois</h2>
                    <h2><i class="fas fa-tag mr-4"></i>Categorie : Développement Web </h2>
                </div>
            </div>
        </header>

        <!-- Séparateur Wave du haut -->
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
            </g>
        </svg>
        <!-- Séparateur Wave du haut -->

        <!-- Page -->
        <section class="bg-white py-8">
            <div class="container p-4 mx-auto md:mt-10">

                <div class="task">
                    <h1>Tâches effectuées :</h1>
                    <p><i class="fas fa-check"></i>Conception graphique et Webdesign</p>
                    <p><i class="fas fa-check"></i>Intégration web</p>
                    <p><i class="fas fa-check"></i>Animation de la page</p>
                    <p><i class="fas fa-check"></i>Site Responsive (compatible tous supports)</p>
                </div>

                <div class="flex flex-wrap">
                    <div class="m-auto p-4 w-full md:p-0 md:w-1/2 ">
                        <img src="@/assets/img/Projets/Projet1.png" alt="">
                    </div>

                    <div class="m-auto w-1/2 md:w-1/5 ">
                        <img src="@/assets/img/Projets/Projet1.2.png" alt="">
                    </div>
                </div>

                <div class="justify-center text-2xl text-center mt-20 md:flex md:flex-wrap">
                    
                    <div class="md:mr-10">
                        <h2 class="mb-2">Langages</h2>
                        <i class="fab fa-html5 text-5xl mr-3 text-orange-600"></i>
                        <i class="fab fa-css3-alt text-5xl mr-3 text-blue-600"></i>
                        <i class="fab fa-js text-5xl text-yellow-500"></i>
                    </div>

                    <div class="md:mr-10">
                        <h2 class="mb-2">Framework</h2>
                        <i class="fab fa-bootstrap text-5xl text-purple-700"></i>
                    </div>

                    <div>
                        <h2 class="mb-2">Outils</h2>
                        <div class="flex m-auto justify-center ">
                            <i class="fab fa-github text-5xl text-purple-500 mr-3"></i>
                            <img src="@/assets/img/icon/Logo-VS.png" alt="">
                        </div>
                    </div>

                </div>

                <img class="m-auto mt-10" src="@/assets/img/Projets/pt1.png" alt="">
                <img class="m-auto mt-1 md:mt-10" src="@/assets/img/Projets/pt2.png" alt="">

            </div>
        </section>
        
        <!-- Footer -->
		<footer class="bg-white">
			<div class="container flex justify-center m-auto">
                <h2 class="text-md text-gray-800 p-2 md:text-xl">COPYRIGHT © 2020 Louis GEVAUDAN - All Right Reserved</h2>
			</div>
		</footer>

    </div>
</template>