<template>
    <div>

        <!-- Header -->
        <header>
            <div class="container pt-20 p-4 mx-auto flex flex-wrap justify-center text-white md:flex-row md:pt-40">

                <div class="flex-col m-auto w-full text-center md:w-2/5 md:text-left">
                    <h1 class="titre-section text-white">Louis GEVAUDAN</h1>
                    <p class="text-2xl mb-8">DÉVELOPPEUR WEB JUNIOR</p>
                </div>

                <div class="w-4/5 mb-10 md:mb-0 md:w-3/5">
                    <img class="m-auto rounded-full shadow-2xl" src="../assets/img/logo-solo.png">
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

        <!-- Propos -->
        <section id='propos'>
            <div class="container p-8 mx-auto mt-10 md:p-0">

                <h1 class="titre-section text-gray-800 ">Faisons plus ample connaissance ?</h1>
                <hr class="hr bg-red-700" />

                <div class="propos">
                    <p>
                        Bonjour et bienvenue sur mon site internet ! Je me présente, je m'appelle Louis GEVAUDAN j'ai 20 ans
                        et je suis originaire d'Avignon. Depuis l'âge de mes 7 ans, j'ai développé
                        une passion pour l'informatique dans sa généralité et depuis je mets tout en œuvre pour percer dans cette voie. Je
                        ne me repose jamais sur mes acquis et fais toujours en sorte de développer mes compétences.
                        <span>Pour pouvoir un jour faire de ma passion mon métier!</span>
                    </p>
                </div>

            </div>
        </section>

        <!-- Skill -->
        <section id="skill">
            <div class="container flex flex-col mx-auto sm:flex-row">

                    <!-- Front-End -->
                    <div class="cont-card">
                        <div class="card-skill">
                            <div class="titre-card"> 
                                <img class="logo-card" src="../assets/img/front-logo.png" alt=""> Front-end
                            </div>

                            <p class="p-5">J'adore coder les choses à partir de zéro et donner vie à des idées dans le navigateur.</p>
                            
                            <div>
                                <h3>Langages acquis</h3>
                                <p class=""><i class=" text-orange-600 fab fa-html5 mr-4"></i> 
                                <i class="text-blue-700 fab fa-css3-alt mr-4"></i> 
                                <i class="text-yellow-500 fab fa-js"></i></p>
                            </div>

                            <div class="mt-4">
                                <h3>Frameworks</h3>
                                <div class="flex m-auto justify-center">
                                    <i class=" text-green-600 fab fa-vuejs mr-2 mt-2"></i> 
                                    <img class="w-1/5 mr-4" src="../assets/img/icon/Icon-Tailwindcss.png" alt=""> 
                                    <i class="text-purple-900 fab fa-bootstrap mt-2"></i>
                                </div>
                            </div>

                            <div class="mt-4 mb-6">
                                <h3>Outils</h3>
                                <p class="text-center">Visual Studio Code <br> GitHub <br> Npm <br> PowerShell </p>
                            </div>

                        </div>
                    </div>

                    <!-- Back-End -->
                    <div class="cont-card">
                        <div class="card-skill">

                            <div class="titre-card">
                                <img class="logo-card" src="../assets/img/back-logo.png" alt="">Back-end
                            </div>

                            <p class="p-5">J'aime cette idée de me dire que le back-end se résume à coder l'âme d'une idée.</p>

                            <div>
                                <h3>Langages acquis</h3>
                                <div class="flex m-auto justify-center ">
                                    <i class="text-blue-800 fab fa-php mr-4"></i> 
                                    <img class="w-1/6" src="../assets/SQL.png" alt="">
                                </div>
                            </div>

                            <div class="mt-4">
                                <h3>Frameworks</h3>
                                <p class="text-center text-6xl"><i class=" text-red-500 fab fa-laravel"></i></p>
                            </div>

                            <div class="mb-6">
                                <h3>Outils</h3>
                                <p class="text-center">Visual Studio Code <br> Mysql <br> GitHub <br> Composer <br> Eloquent</p>
                            </div>

                        </div>
                    </div>

                    <!-- Autres -->
                    <div class="cont-card">
                        <div class="card-skill">

                            <div class="titre-card">
                                <img class="logo-card" src="../assets/img/autres.png" alt="">Autres compétences
                            </div>

                            <p class="p-5">
                                J'aime me développer professionnellement et personnellement.
                            </p>

                            <div>
                                <h3>Softs skills</h3>
                                <p>Motivation, Curiosité, Créativité, Esprit d'équipe</p>
                            </div>

                            <div class="mt-8">
                                <h3>D'autres compétences</h3>
                                <p class="lg:mb-0 mb-6">Methodes agiles <br> C# <br> Java <br> Pack-office <br> Photoshop
                                    <br> Première Pro </p>
                            </div>

                        </div>
                    </div>

            </div>
        </section>

        <!-- Portfolio -->
        <section id="portfolio">

            <h1 class="titre-section text-center text-gray-800 ">Mes divers projets</h1>
                <hr class="hr mx-auto bg-red-700" />

            <div class="container flex flex-wrap mx-auto justify-center pb-12">

                <!-- Card PortfolioV1-->
                <kinesis-container easing :duration="100" class="container-cardP">
                    <kinesis-element :strength="10" type="depth" class="card-portfolio">
                            <div class="overlay rounded-lg">

                                <kinesis-element :strength="10" type="depth">
                                    <h1>Portfolio V1</h1>
                                    <p>Développement de la toute première version de mon site internet, afin de me créer une identité numérique.</p>
                                </kinesis-element>

                                <kinesis-element :strength="10" type="depth">
                                        <router-link to='/PortfolioV1' tag="button" class="btn-projet">
                                        En savoir plus<i class="fas fa-mouse-pointer"></i>
                                        </router-link>
                                </kinesis-element>

                            </div>
                    </kinesis-element>
                </kinesis-container>
                
                <!-- Card LocaGes-->
                <kinesis-container easing :duration="100" class="container-cardP">
                    <kinesis-element :strength="10" type="depth" class="card-portfolio">
                        <div class="overlay rounded-lg">

                            <kinesis-element :strength="10" type="depth"
                                class="flex-1 rounded-t rounded-b-none overflow-hidden">
                                <h1>LocaGes</h1>
                                <p>Développement d'un logiciel de gestion des diverses informations des propriétaires.
                                </p>
                            </kinesis-element>

                            <kinesis-element :strength="10" type="depth" class="">
                                <router-link to='/Locages' tag="button" class="btn-projet">
                                En savoir plus<i class="fas fa-mouse-pointer"></i></router-link>
                            </kinesis-element>
                            
                        </div>
                    </kinesis-element>
                </kinesis-container>

                <!-- Card GSB-Frais-->
                <kinesis-container easing :duration="100" class="container-cardP">
                    <kinesis-element :strength="10" type="depth" class="card-portfolio">
                        <div class="">

                            <kinesis-element :strength="10" type="depth"
                                class="flex-1 rounded-t rounded-b-none overflow-hidden">
                                <div class="w-full p-8 text-3xl font-bold text-center">GSB-Frais</div>
                                <p>Refonte et mise à jour d'une application web, qui permet la gestion de divers frais.
                                </p>
                            </kinesis-element>

                            <kinesis-element :strength="10" type="depth" class=" m-auto">
                                <router-link to='/GSBfrais' tag="button" class="btn-projet">
                                En savoir plus<i class="fas fa-mouse-pointer"></i></router-link>
                            </kinesis-element>

                        </div>
                    </kinesis-element>
                </kinesis-container>

                <!-- Card PortfolioV2-->
                <kinesis-container easing :duration="100" class="container-cardP">
                    <kinesis-element :strength="10" type="depth" class="card card-portfolio">
                        <div class="overlay rounded-lg">

                            <kinesis-element :strength="10" type="depth"
                                class="flex-1 rounded-t rounded-b-none overflow-hidden">
                                <div class="w-full p-8 text-3xl font-bold text-center">Portfolio V2</div>
                                <p>
                                    Refonte complète de mon site internet, avec l'utilisation de nouvelles technologies.
                                </p>
                            </kinesis-element>

                            <kinesis-element :strength="10" type="depth" class=" m-auto">
                                <router-link to='/PortfolioV2' tag="button" class="btn-projet">
                                En savoir plus<i class="fas fa-mouse-pointer"></i></router-link>
                            </kinesis-element>

                        </div>
                    </kinesis-element>
                </kinesis-container>

            </div>
        </section>

        <!-- Séparateur Wave du bas -->
        <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                    <g class="wave" fill="#FFFFFF">
                        <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                    </g>
                    <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <!-- Séparateur Wave du haut -->

        <!-- Contact -->
		<section id="contact" class="bg-red-700">
            <div class="container mx-auto text-white text-center p-5">
                <h1 class="titre-section">MON PROFIL VOUS INTÉRESSE ?</h1>
                <hr class="hr mx-auto bg-white" />

                <p>Je suis actuellement à la recherche d'un emploi en tant que développeur Web. <br>
                Veuillez trouver ci-joints mon CV et mes différents contacts.</p>

                <div class="flex justify-center p-5">
                    <a href="../PDF/CV-LouisGEVAUDAN.pdf" target="_blank" class="btn-contact mr-8">
                    <i class="fas fa-file-pdf" ></i></a>

                    <a href="mailto:gevaudan.pro@gmail.com" class="btn-contact mr-8">
                        <i class="fas fa-at"></i></a>

                    <a href="https://www.linkedin.com/in/louis-gevaudan" target="_blank" class="btn-contact">
                        <i class="fab fa-linkedin"></i></a>
                </div>

                <p>Merci de votre visite et peut-être à bientôt !</p>
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
