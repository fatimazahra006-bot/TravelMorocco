// pour tous les pages 
document.addEventListener('DOMContentLoaded', () => { // Attendre que tout le contenu HTML soit chargé avant d'exécuter le script
    const user = localStorage.getItem('moroccoTravel_User') || 'Explorer';
    // Récupérer le nom de l'utilisateur depuis le localStorage
    // Si aucune valeur n'est trouvée, utiliser "Explorer" par défaut
    const navName = document.getElementById('nav-user-name');
    // Sélectionner les éléments de la barre de navigation
    const navInitial = document.getElementById('user-initial');
    // Si les éléments existent, mettre à jour leur contenu
    if (navName && navInitial) {
        navName.innerText = user;
        navInitial.innerText = user.charAt(0).toUpperCase();
    }

    // Sélectionner la section principale du contenu
    const targetSection = document.querySelector('.content');
    if (targetSection) {
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 2000);
    }
    // Gestion du menu mobile/tablette
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-tablet");
    // Si le bouton et le menu existent, ajouter un événement au clic
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });
    }
});
function logout() {// Supprime l'utilisateur du localStorage et redirige vers Inscription.html
    localStorage.removeItem('moroccoTravel_User');
    window.location.href = 'Inscription.html';
}
const handleReveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    const isAboutPage = document.getElementById('about-page');
    // Fonction qui active l'animation des éléments .reveal
// Quand un élément entre dans la zone visible de la fenêtre,
// on lui ajoute la classe "active". 
// Si on est sur la page "about-page", la classe est retirée
// quand l'élément sort de la zone visible.
    reveals.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        let elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        } else {
            if (isAboutPage) {
                el.classList.remove("active");
            } else {
            }
        }
    });
};
window.addEventListener("scroll", handleReveal);// Déclenche l'effet de révélation quand on scroll
document.addEventListener('DOMContentLoaded', handleReveal);// Exécute une première fois dès que le DOM est prêt

// script home page
if (document.getElementById('dynamic-desc')) { // Code à exécuter seulement si l'élément existe dans le DOM
    const descriptions = [
        "Discover the true essence of Morocco-from Tangier to Lagouira-where every city tells a story and every tradition holds a secret.",
        "Step into the magic of Moroccan architecture, where intricate tiles and delicate carvings whisper stories of a thousand years.",
        "Dive into the modern side of Morocco, where trendy spots meet traditions in perfect harmony."
    ];

    const cards = document.querySelectorAll(".carousel-card");
    const descElement = document.getElementById("dynamic-desc");
    let currentIdx = 0;
    if (cards.length > 0 && descElement) {
        // Fonction qui gère la rotation du carrousel
        function rotateContent() {
            cards[currentIdx].classList.remove("opacity-100", "z-10", "scale-100");
            cards[currentIdx].classList.add("opacity-0", "z-0", "scale-95");

            descElement.style.opacity = "0";
            descElement.style.transform = "translateY(-10px)";

            setTimeout(() => {
                currentIdx = (currentIdx + 1) % cards.length;
                // Mettre à jour le texte de la description
                descElement.innerText = descriptions[currentIdx];
                cards[currentIdx].classList.remove("opacity-0", "z-0", "scale-95");
                cards[currentIdx].classList.add("opacity-100", "z-10", "scale-100");

                descElement.style.opacity = "1";
                descElement.style.transform = "translateY(0)";
            }, 800);
        }
        setInterval(rotateContent, 5000); // Lancer la rotation toutes les 5 secondes
    }
}

// destinations script 
if (document.getElementById('places-grid')) { // Script de gestion des destinations et réservations
    const destinations={
            "Tanger" : [
                {name:'Kasbah Museum of Mediterranean Cultures',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/70/ee/e7/70eee7227366639edbc7f19e02f84f35.jpg',desc:'Located in the former Sultan’s palace, this museum showcases artifacts, maps, and art from Tangier’s rich history. Entry tickets give access to the palace and gardens.'},
                {name:'Dar el Makhzen (Royal Palace)',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/70/ee/e7/70eee7227366639edbc7f19e02f84f35.jpg',desc:'A historic palace within the Kasbah, featuring stunning courtyards and traditional Moroccan architecture. Visitors pay for guided tours to explore its cultural significance.'},
                {name:'Gran Teatro Cervantes',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/70/ee/e7/70eee7227366639edbc7f19e02f84f35.jpg',desc:'Built in 1913, this Spanish‑style theater is a cultural landmark. Though partially restored, guided visits and performances require tickets.'},
                {name:'Tangier American Legation Museum',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/70/ee/e7/70eee7227366639edbc7f19e02f84f35.jpg',desc:'The first American public property outside the U.S., now a museum. Entry includes exhibits on Moroccan‑American relations, art collections, and historic documents.'},
                {name:'Cap Spartel & Caves of Hercules Guided Tour',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/70/ee/e7/70eee7227366639edbc7f19e02f84f35.jpg',desc:'Organized excursions to the famous caves and lighthouse at Cap Spartel. Includes transport, guided storytelling, and entry fees.'},
                {name:'Tangier Marina Bay Dining & Yacht Experience',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/70/ee/e7/70eee7227366639edbc7f19e02f84f35.jpg',desc:'A premium leisure activity offering fine dining by the marina, with optional yacht tours along the coast.'}
            ],
            "Chefchaouen" : [
                {name:'Kasbah Museum (Ethnographic Museum)',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/85/e1/02/85e1027accc27f28278a84bc18ae9d72.jpg',desc:'Located in the heart of the medina, this restored fortress houses artifacts, traditional crafts, and Andalusian gardens. Entry tickets support preservation of local heritage.'},
                {name:'Spanish Mosque Sunset Tour',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/85/e1/02/85e1027accc27f28278a84bc18ae9d72.jpg',desc:'Guided hike to the Spanish Mosque overlooking the blue city. Visitors pay for guided access and enjoy panoramic views at sunset.'},
                {name:'Local Artisan Workshop (Weaving & Pottery)',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/85/e1/02/85e1027accc27f28278a84bc18ae9d72.jpg',desc:'Hands on experience with Chefchaouen s artisans. Guests learn traditional weaving or pottery techniques and take home their creations.'},
                {name:'Dar Echchaouen Spa & Hammam',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/85/e1/02/85e1027accc27f28278a84bc18ae9d72.jpg',desc:'A boutique riad offering traditional hammam treatments, massages, and wellness packages. Perfect for relaxation after exploring the medina.'},
                {name:'Cooking Class at Lina Riad & Spa',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/85/e1/02/85e1027accc27f28278a84bc18ae9d72.jpg',desc:'Culinary workshop where visitors prepare Moroccan dishes with local chefs, followed by a shared meal.'},
                {name:'Eco‑Tour to Akchour Waterfalls',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/85/e1/02/85e1027accc27f28278a84bc18ae9d72.jpg',desc:'Organized excursion to the famous waterfalls near Chefchaouen. Includes transport, guided hike, and picnic lunch.'}
            ],
            "Fes" : [
                {name:'Bou Inania Madrasa',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/4e/39/e0/4e39e00608308d013983a6df0f22095d.jpg',desc:'A 14th‑century Quranic school, one of the few religious sites in Morocco open to non Muslims. Visitors pay a small fee to admire its intricate zellij tiles, carved wood, and marble courtyard.'},
                {name:'Dar Batha Museum',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/4e/39/e0/4e39e00608308d013983a6df0f22095d.jpg',desc:'Former royal palace turned museum, showcasing traditional Moroccan arts, ceramics, and crafts. Entry tickets give access to both exhibits and the Andalusian garden.'},
                {name:'Al‑Attarine Madrasa',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/4e/39/e0/4e39e00608308d013983a6df0f22095d.jpg',desc:'Another historic madrasa near the Qarawiyyin Mosque, famous for its exquisite stucco and cedar woodwork. Entrance fees support preservation.'},
                {name:'Riad Fes Spa & Hammam',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/4e/39/e0/4e39e00608308d013983a6df0f22095d.jpg',desc:'A luxury riad offering traditional hammam treatments, massages, and wellness packages. Perfect for relaxation after exploring the medina.'},
                {name:'Palais Amani Cooking Class',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/4e/39/e0/4e39e00608308d013983a6df0f22095d.jpg',desc:'Hands‑on culinary experience where visitors learn to prepare Moroccan dishes, followed by a rooftop meal.'},
                {name:'Fez Cultural Tours (Music & Crafts)',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/4e/39/e0/4e39e00608308d013983a6df0f22095d.jpg',desc:'Guided experiences including live Andalusian music, artisan workshops, and storytelling evenings. Tickets include performances and refreshments.'}
                ],
            "Ifran" : [
                {name:'Ifrane Lion',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/78/04/ec/7804ec80922089820561bbea7b5a38c0.jpg',desc:'A monumental stone statue carved in the 1930s, symbolizing the heritage of city. It is one of the most photographed landmarks in Ifrane and a must-see spot for visitors.'},
                {name:'Source Vittel',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/78/04/ec/7804ec80922089820561bbea7b5a38c0.jpg',desc:'A charming natural site with waterfalls and streams surrounded by cedar forests. Perfect for picnics, leisurely walks, and enjoying the refreshing atmosphere of flowing water.'},
                {name:'Ifrane National Park',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/78/04/ec/7804ec80922089820561bbea7b5a38c0.jpg',desc:'A vast protected area rich in biodiversity, home to centuries-old cedar trees and the famous Barbary macaques. Ideal for hiking, wildlife observation, and connecting with nature.'},
                {name:'Michlifen Ski Resort',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/78/04/ec/7804ec80922089820561bbea7b5a38c0.jpg',desc:'A modern ski station known for its snowy slopes and luxury hotels. It is the highlight of winter tourism in Morocco, offering skiing, snowboarding, and cozy mountain retreats.'},
                {name:'Dayet Aoua',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/78/04/ec/7804ec80922089820561bbea7b5a38c0.jpg',desc:'A picturesque lake surrounded by green hills, serving as a sanctuary for migratory birds. A peaceful destination for walking, birdwatching, and family outings.'},
                {name:'Jbel Hebri',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/78/04/ec/7804ec80922089820561bbea7b5a38c0.jpg',desc:'An impressive mountain with volcanic landscapes, popular for wild skiing in winter and hiking in summer. It offers breathtaking panoramic views of the region.'}
                ],
            "Marrakech" : [
                {name:'Bahia Palace',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/a8/41/28/a8412881bb6a5fbba4818002f4e51829.jpg',desc:'A stunning 19th century palace showcasing intricate Moroccan architecture, colorful mosaics, and lush gardens. It was built for the grand vizier and remains one of Marrakech s most visited historical sites.'},
                {name:'Le Jardin Secret',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/a8/41/28/a8412881bb6a5fbba4818002f4e51829.jpg',desc:'A hidden gem in the heart of the medina, this restored garden combines Islamic art, fountains, and exotic plants. It offers a peaceful escape from the bustling souks.'},
                {name:'Maison de la Photographie',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/a8/41/28/a8412881bb6a5fbba4818002f4e51829.jpg',desc:'A cultural museum dedicated to photographic heritage of Morocco. It features a rich collection of vintage photos and exhibitions that capture the history of the country and its traditions.'},
                {name:'Le Bistro Arabe',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/a8/41/28/a8412881bb6a5fbba4818002f4e51829.jpg',desc:'A modern restaurant blending Moroccan and international cuisine. Known for its stylish décor and lively atmosphere, it is a great spot for fine dining in the medina.'},
                {name:'Jardin Majorelle',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/a8/41/28/a8412881bb6a5fbba4818002f4e51829.jpg',desc:'An iconic botanical garden designed by French painter Jacques Majorelle and later restored by Yves Saint Laurent. Famous for its cobalt blue buildings, exotic plants, and artistic flair.'},
                {name:'Comptoir Darna',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/a8/41/28/a8412881bb6a5fbba4818002f4e51829.jpg',desc:'A trendy restaurant and lounge offering Moroccan fusion cuisine with live music and belly dance performances. It is a nightlife hotspot that combines dining with entertainment.'}
                ],
            "Dakhla" : [
                {name:'Ranch des',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/bf/93/02/bf930221893bb62ebf952200433714c9.jpg',desc:'A desert ranch offering camel rides, horseback excursions, and cultural immersion. Visitors can explore dunes and enjoy authentic Saharan experiences guided by locals.'},
                {name:'Imlili Desert & Oyster Tasting Tour',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/bf/93/02/bf930221893bb62ebf952200433714c9.jpg',desc:'A guided 4x4 excursion to the Imlili desert pools combined with oyster farm visits. Includes tasting fresh Dakhla oysters, a regional delicacy.'},
                {name:'White Dune Excursion',type:'Traditional',price:'$$',img:'https://i.pinimg.com/736x/bf/93/02/bf930221893bb62ebf952200433714c9.jpg',desc:'A half day guided trip to the famous White Dune, a natural sand formation in the lagoon. Activities include sandboarding, photography, and cultural storytelling.'},
                {name:'Luxury Beachfront Camp',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/bf/93/02/bf930221893bb62ebf952200433714c9.jpg',desc:'Premium ecolodges directly on the lagoon, offering kitesurf lessons, yoga, and fine dining. Perfect for travelers seeking comfort with adventure'},
                {name:'Dakhla Club Hotel & Spa',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/bf/93/02/bf930221893bb62ebf952200433714c9.jpg',desc:'A luxury resort with spa treatments, pools, and kite surf stations. Guests can enjoy wellness packages, massages, and water sports.'},
                {name:'La Crique Nature & Spa',type:'Modern',price:'$$',img:'https://i.pinimg.com/736x/bf/93/02/bf930221893bb62ebf952200433714c9.jpg',desc:'Boutique resort blending nature and luxury. Offers private bungalows, spa services, and guided excursions to nearby dunes and lagoons.'}
                ]
        };
    let currentCity = 'Tanger';
    let currentType = 'Traditional';

    window.renderCity = function(city) { // - renderCity(city): affiche les détails d'une ville et active le filtre
        currentCity = city;
        document.getElementById('details-section').classList.remove('hidden');
        document.getElementById('city-title').innerText = city + ' Highlight';
        filterType(currentType);
        window.scrollTo({ top: document.getElementById('details-section').offsetTop - 80, behavior: "smooth" });
    };

    window.filterType = function(type) {// - filterType(type): filtre les activités par type (Traditional/Modern)
        currentType = type;
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.innerText.includes(type));
        });
        const grid = document.getElementById('places-grid');
        grid.innerHTML = '';
        destinations[currentCity].filter(item => item.type === type).forEach(item => {
            grid.innerHTML += `
                <div class="place-card rounded-3xl overflow-hidden shadow-2xl fade-in relative group transition-all duration-300">
                    <img src="${item.img}" class="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="text-xl font-bold text-white">${item.name}</h4>
                            <span class="bg-red-900/30 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase border border-red-500/20">${item.price}</span>
                        </div>
                        <p class="text-gray-400 text-sm mb-6">${item.desc}</p>
                        <button onclick="openModal('${item.name}')" class="w-full py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-semibold">Reserve Experience</button>
                    </div>
                </div>`;
        });
    };
    window.openModal = (name) => {// - openModal(name)/closeModal(): gèrent l'ouverture/fermeture du modal de réservation
        document.getElementById('modal-item-name').innerText = name;
        document.getElementById('reserveModal').classList.replace('hidden', 'flex');
    };
    window.closeModal = () => {
        document.getElementById('reserveModal').classList.replace('flex', 'hidden');
    };
    const form = document.getElementById("reservationForm");
    if (form) { // - Formulaire: enregistre la réservation dans localStorage (évite doublons)
        form.onsubmit = function(e) {
            e.preventDefault();

            const myTrip = JSON.parse(localStorage.getItem('myTrip')) || [];
            const newItem = {
                name: document.getElementById("modal-item-name").innerText,
                city: currentCity,
                date: document.getElementById("resDate").value,
                guests: document.getElementById("guests").value
            };

            const alreadyExists = myTrip.some(item => item.name === newItem.name && item.city === newItem.city);

            if (alreadyExists) {
                showToast("Oops!", "Already reserved this place ⚠️");
                closeModal();
                return;
            }

            myTrip.push(newItem);
            localStorage.setItem('myTrip', JSON.stringify(myTrip));

            showToast("Success!", "Reservation confirmed 🎉");
            closeModal();
            form.reset();
        };
    }

    window.showToast = function(title, message) { // - showToast(title, message): affiche une notification temporaire
        const toast = document.getElementById('toast');
        const tTitle = document.getElementById('toast-title');
        const tMsg = document.getElementById('toast-msg');

        if (toast && tTitle && tMsg) {
            tTitle.innerText = title;
            tMsg.innerText = message;
            toast.classList.remove('hidden');
            toast.classList.add('flex');

            setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('flex');
            }, 3000);
        }
    };
}
// script about
if (document.getElementById('about-page')) { // - Section "about-page": ajoute effet de révélation au scroll
    const revealAbout = () => {
        const reveals = document.querySelectorAll(".reveal");
        
        reveals.forEach((el) => {
            let windowHeight = window.innerHeight;
            let elementTop = el.getBoundingClientRect().top;
            let elementVisible = 200;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", revealAbout);
    document.addEventListener('DOMContentLoaded', revealAbout);
}


// plan trip script 
if (document.getElementById('itinerary-days')) { // Script de gestion de l’itinéraire
    const welcomeTag = document.getElementById('user-welcome');
    if (welcomeTag) welcomeTag.innerText = (localStorage.getItem('moroccoTravel_User') || 'Your') + "'s Trip";

    let tripDuration = 3;

    window.loadReservedPlaces = function() { // - loadReservedPlaces(): charge les réservations depuis localStorage
        const myTrip = JSON.parse(localStorage.getItem('myTrip')) || [];
        const listContainer = document.getElementById('reserved-list');
        if (!listContainer) return;
        listContainer.innerHTML = myTrip.map(item => `
            <div class="group flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                <div><p class="font-bold text-sm">${item.name}</p><p class="text-[10px] text-red-500 uppercase">${item.city}</p></div>
                <input type="checkbox" class="place-checkbox w-5 h-5 accent-red-600" checked data-name="${item.name}" data-city="${item.city}">
            </div>`).join('');
        renderDays();
    };

    window.updateDays = function(num) { // - updateDays(num): met à jour le nombre de jours du voyage
        tripDuration = num;
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.classList.toggle('bg-red-accent', btn.innerText.includes(num));
        });
        renderDays();
    };

    window.renderDays = function() {  // - renderDays(): répartit les lieux réservés par jour avec slots horaires
        const container = document.getElementById('itinerary-days');
        const selectedPlaces = Array.from(document.querySelectorAll('.place-checkbox:checked'));
        container.innerHTML = "";
        const placesPerDay = Math.ceil(selectedPlaces.length / tripDuration);
        for (let i = 1; i <= tripDuration; i++) {
            const dayPlaces = selectedPlaces.slice((i - 1) * placesPerDay, i * placesPerDay);
            let placesHtml = dayPlaces.length > 0  
            ? dayPlaces.map(p => `
                <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-center justify-between group hover:border-red-500/50 transition">
                    <div class="flex items-center gap-4">
                        <div class="w-2 h-8 rounded-full bg-red-600"></div>
                        <div>
                            <span class="text-sm font-bold block">${p.dataset.name}</span>
                            <span class="text-[10px] text-gray-500 uppercase">${p.dataset.city}</span>
                        </div>
                    </div>
                    <span class="text-xs text-red-500 font-mono">Slot ${Math.floor(Math.random()*12)+1}PM</span>
                </div>
            `).join('')
            : `<p class="text-gray-600 text-sm italic py-4">Free time for walking or relaxing...</p>`;
            container.innerHTML += `
            <div class="day-block pl-10 fade-in mb-8">
                <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
                    Day <span class="text-red-600">0${i}</span>
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${placesHtml}
                </div>
            </div>
        `;
        } 
    };
    window.clearPlan = function() { // - clearPlan(): vide le plan et réinitialise l’affichage
    localStorage.removeItem('myTrip');
    const listContainer = document.getElementById('reserved-list');
    const itineraryContainer = document.getElementById('itinerary-days');
    
    if (listContainer) listContainer.innerHTML = '<p class="text-gray-500 text-sm italic p-4">Plan cleared.</p>';
    if (itineraryContainer) itineraryContainer.innerHTML = "";
    console.log("Trip plan cleared successfully.");
};

window.downloadPDF = function() { // - downloadPDF(): génère un PDF stylisé de l’itinéraire avec jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // 1. Background Dark Theme
    doc.setFillColor(15, 23, 42); 
    doc.rect(0, 0, 210, 297, 'F');

    // 2. Header Branding
    doc.setFillColor(220, 38, 38); 
    doc.rect(20, 20, 2, 15, 'F'); 
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text("MOROCCO", 25, 30);
    doc.setTextColor(220, 38, 38); 
    doc.text("TRAVEL", 75, 30);
    doc.setDrawColor(51, 65, 85); 
    doc.line(20, 45, 190, 45);

    let y = 65;
    const selectedPlaces = Array.from(document.querySelectorAll('.place-checkbox:checked'));
    const placesPerDay = Math.ceil(selectedPlaces.length / tripDuration);
    for (let i = 1; i <= tripDuration; i++) {
        const dayPlaces = selectedPlaces.slice((i - 1) * placesPerDay, i * placesPerDay);
        doc.setDrawColor(220, 38, 38);
        doc.setLineWidth(0.5);
        doc.rect(20, y - 7, 170, 12, 'S');
        
        doc.setTextColor(220, 38, 38);
        doc.setFontSize(14);
        doc.text(`DAY 0${i}`, 25, y + 2);
        y += 20;

        doc.setTextColor(248, 250, 252); 
        doc.setFontSize(11);

        if (dayPlaces.length > 0) {
            dayPlaces.forEach(p => {
                doc.setFillColor(220, 38, 38);
                doc.circle(27, y - 1.5, 1, 'F');
                
                const name = p.dataset.name;
                const city = p.dataset.city;
                
                doc.setTextColor(255, 255, 255);
                doc.text(`${name}`, 32, y);
                
                doc.setTextColor(148, 163, 184);
                doc.text(` (${city})`, 32 + doc.getTextWidth(name), y);
                
                y += 10;
                if (y > 270) {
                    doc.addPage();
                    doc.setFillColor(15, 23, 42);
                    doc.rect(0, 0, 210, 297, 'F');
                    y = 25;
                }
            });
        } else {
            doc.setTextColor(100, 116, 139);
            doc.text("- Time for local exploration and relaxing.", 32, y);
            y += 10;
        }
        y += 10;
    }
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text("Generated by MoroccoTravel App - Your Adventure Awaits", 105, 288, null, null, "center");

    doc.save("My_Morocco_Itinerary.pdf"); // => Permet de créer, visualiser, modifier et exporter un plan de voyage personnalisé
};
        loadReservedPlaces();
}
 // inscription page 
const regForm = document.getElementById('registerForm');

if (regForm) { // => Gère la validation du formulaire d'inscription (nom, email, mot de passe)
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Récupère la valeur du champ "userName" et supprime les espaces inutiles
        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim(); 
        const password = document.getElementById('userPassword').value;

        // VALIDATIONS
        if(name.length < 4 || name.length > 30) {
            alert('Name must be between 4 and 30 characters.');
            return;
        }

        if(!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
            alert('Please enter a valid Gmail address.');
            return;
        }

        if(password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        // STOCKAGE ET ANIMATION
        localStorage.setItem('moroccoTravel_User', name);
        
        const btn = e.target.querySelector('button');
        btn.disabled = true; // Empêche de cliquer plusieurs fois
        btn.innerHTML = 'Initializing...';

        // REDIRECTION
        setTimeout(() => { 
            window.location.href = 'Destinations.html'; 
        }, 1200);
    });
}
// logout
function logout() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "Inscription.html";
}
