// script.js - generated from TypeScript-like source
const workers = [
  {
    "id": 1,
    "name": "Fatou Diallo",
    "phone": "+221 77100007",
    "email": "fatou.diallo1@example.com",
    "domain": "Électricien",
    "locality": "Centre Ville",
    "description": "Expert en Électricien — basé à Centre Ville"
  },
  {
    "id": 2,
    "name": "Adama Diop",
    "phone": "+221 77100015",
    "email": "adama.diop2@example.com",
    "domain": "Électricien",
    "locality": "Centre Ville",
    "description": "Expert en Électricien — basé à Centre Ville"
  },
  {
    "id": 3,
    "name": "Awa Gueye",
    "phone": "+221 77100023",
    "email": "awa.gueye3@example.com",
    "domain": "Électricien",
    "locality": "Centre Ville",
    "description": "Expert en Électricien — basé à Centre Ville"
  },
  {
    "id": 4,
    "name": "Cheikh Ndiaye",
    "phone": "+221 77100028",
    "email": "cheikh.ndiaye4@example.com",
    "domain": "Électricien",
    "locality": "Grand Yoff",
    "description": "Expert en Électricien — basé à Grand Yoff"
  },
  {
    "id": 5,
    "name": "Ibrahima Lo",
    "phone": "+221 77100036",
    "email": "ibrahima.lo5@example.com",
    "domain": "Électricien",
    "locality": "Grand Yoff",
    "description": "Expert en Électricien — basé à Grand Yoff"
  },
  {
    "id": 6,
    "name": "Mamadou Ba",
    "phone": "+221 77100044",
    "email": "mamadou.ba6@example.com",
    "domain": "Électricien",
    "locality": "Grand Yoff",
    "description": "Expert en Électricien — basé à Grand Yoff"
  },
  {
    "id": 7,
    "name": "Awa Diallo",
    "phone": "+221 77100049",
    "email": "awa.diallo7@example.com",
    "domain": "Électricien",
    "locality": "Guediawaye",
    "description": "Expert en Électricien — basé à Guediawaye"
  },
  {
    "id": 8,
    "name": "Ndeye Diop",
    "phone": "+221 77100057",
    "email": "ndeye.diop8@example.com",
    "domain": "Électricien",
    "locality": "Guediawaye",
    "description": "Expert en Électricien — basé à Guediawaye"
  },
  {
    "id": 9,
    "name": "Alioune Gueye",
    "phone": "+221 77100065",
    "email": "alioune.gueye9@example.com",
    "domain": "Électricien",
    "locality": "Guediawaye",
    "description": "Expert en Électricien — basé à Guediawaye"
  },
  {
    "id": 10,
    "name": "Mamadou Ndiaye",
    "phone": "+221 77100070",
    "email": "mamadou.ndiaye10@example.com",
    "domain": "Plomberie",
    "locality": "Centre Ville",
    "description": "Expert en Plomberie — basé à Centre Ville"
  },
  {
    "id": 11,
    "name": "Ousmane Lo",
    "phone": "+221 77100078",
    "email": "ousmane.lo11@example.com",
    "domain": "Plomberie",
    "locality": "Centre Ville",
    "description": "Expert en Plomberie — basé à Centre Ville"
  },
  {
    "id": 12,
    "name": "Khady Ba",
    "phone": "+221 77100086",
    "email": "khady.ba12@example.com",
    "domain": "Plomberie",
    "locality": "Centre Ville",
    "description": "Expert en Plomberie — basé à Centre Ville"
  },
  {
    "id": 13,
    "name": "Alioune Diallo",
    "phone": "+221 77100091",
    "email": "alioune.diallo13@example.com",
    "domain": "Plomberie",
    "locality": "Grand Yoff",
    "description": "Expert en Plomberie — basé à Grand Yoff"
  },
  {
    "id": 14,
    "name": "Fatou Diop",
    "phone": "+221 77100099",
    "email": "fatou.diop14@example.com",
    "domain": "Plomberie",
    "locality": "Grand Yoff",
    "description": "Expert en Plomberie — basé à Grand Yoff"
  },
  {
    "id": 15,
    "name": "Adama Gueye",
    "phone": "+221 77100107",
    "email": "adama.gueye15@example.com",
    "domain": "Plomberie",
    "locality": "Grand Yoff",
    "description": "Expert en Plomberie — basé à Grand Yoff"
  },
  {
    "id": 16,
    "name": "Khady Ndiaye",
    "phone": "+221 77100112",
    "email": "khady.ndiaye16@example.com",
    "domain": "Plomberie",
    "locality": "Guediawaye",
    "description": "Expert en Plomberie — basé à Guediawaye"
  },
  {
    "id": 17,
    "name": "Cheikh Lo",
    "phone": "+221 77100120",
    "email": "cheikh.lo17@example.com",
    "domain": "Plomberie",
    "locality": "Guediawaye",
    "description": "Expert en Plomberie — basé à Guediawaye"
  },
  {
    "id": 18,
    "name": "Ibrahima Ba",
    "phone": "+221 77100128",
    "email": "ibrahima.ba18@example.com",
    "domain": "Plomberie",
    "locality": "Guediawaye",
    "description": "Expert en Plomberie — basé à Guediawaye"
  },
  {
    "id": 19,
    "name": "Adama Diallo",
    "phone": "+221 77100133",
    "email": "adama.diallo19@example.com",
    "domain": "Maçonnerie",
    "locality": "Centre Ville",
    "description": "Expert en Maçonnerie — basé à Centre Ville"
  },
  {
    "id": 20,
    "name": "Awa Diop",
    "phone": "+221 77100141",
    "email": "awa.diop20@example.com",
    "domain": "Maçonnerie",
    "locality": "Centre Ville",
    "description": "Expert en Maçonnerie — basé à Centre Ville"
  },
  {
    "id": 21,
    "name": "Ndeye Gueye",
    "phone": "+221 77100149",
    "email": "ndeye.gueye21@example.com",
    "domain": "Maçonnerie",
    "locality": "Centre Ville",
    "description": "Expert en Maçonnerie — basé à Centre Ville"
  },
  {
    "id": 22,
    "name": "Ibrahima Ndiaye",
    "phone": "+221 77100154",
    "email": "ibrahima.ndiaye22@example.com",
    "domain": "Maçonnerie",
    "locality": "Grand Yoff",
    "description": "Expert en Maçonnerie — basé à Grand Yoff"
  },
  {
    "id": 23,
    "name": "Mamadou Lo",
    "phone": "+221 77100162",
    "email": "mamadou.lo23@example.com",
    "domain": "Maçonnerie",
    "locality": "Grand Yoff",
    "description": "Expert en Maçonnerie — basé à Grand Yoff"
  },
  {
    "id": 24,
    "name": "Ousmane Ba",
    "phone": "+221 77100170",
    "email": "ousmane.ba24@example.com",
    "domain": "Maçonnerie",
    "locality": "Grand Yoff",
    "description": "Expert en Maçonnerie — basé à Grand Yoff"
  },
  {
    "id": 25,
    "name": "Ndeye Diallo",
    "phone": "+221 77100175",
    "email": "ndeye.diallo25@example.com",
    "domain": "Maçonnerie",
    "locality": "Guediawaye",
    "description": "Expert en Maçonnerie — basé à Guediawaye"
  },
  {
    "id": 26,
    "name": "Alioune Diop",
    "phone": "+221 77100183",
    "email": "alioune.diop26@example.com",
    "domain": "Maçonnerie",
    "locality": "Guediawaye",
    "description": "Expert en Maçonnerie — basé à Guediawaye"
  },
  {
    "id": 27,
    "name": "Fatou Gueye",
    "phone": "+221 77100191",
    "email": "fatou.gueye27@example.com",
    "domain": "Maçonnerie",
    "locality": "Guediawaye",
    "description": "Expert en Maçonnerie — basé à Guediawaye"
  },
  {
    "id": 28,
    "name": "Ousmane Ndiaye",
    "phone": "+221 77100196",
    "email": "ousmane.ndiaye28@example.com",
    "domain": "Médecin",
    "locality": "Centre Ville",
    "description": "Expert en Médecin — basé à Centre Ville"
  },
  {
    "id": 29,
    "name": "Khady Lo",
    "phone": "+221 77100204",
    "email": "khady.lo29@example.com",
    "domain": "Médecin",
    "locality": "Centre Ville",
    "description": "Expert en Médecin — basé à Centre Ville"
  },
  {
    "id": 30,
    "name": "Cheikh Ba",
    "phone": "+221 77100212",
    "email": "cheikh.ba30@example.com",
    "domain": "Médecin",
    "locality": "Centre Ville",
    "description": "Expert en Médecin — basé à Centre Ville"
  },
  {
    "id": 31,
    "name": "Fatou Diallo",
    "phone": "+221 77100217",
    "email": "fatou.diallo31@example.com",
    "domain": "Médecin",
    "locality": "Grand Yoff",
    "description": "Expert en Médecin — basé à Grand Yoff"
  },
  {
    "id": 32,
    "name": "Adama Diop",
    "phone": "+221 77100225",
    "email": "adama.diop32@example.com",
    "domain": "Médecin",
    "locality": "Grand Yoff",
    "description": "Expert en Médecin — basé à Grand Yoff"
  },
  {
    "id": 33,
    "name": "Awa Gueye",
    "phone": "+221 77100233",
    "email": "awa.gueye33@example.com",
    "domain": "Médecin",
    "locality": "Grand Yoff",
    "description": "Expert en Médecin — basé à Grand Yoff"
  },
  {
    "id": 34,
    "name": "Cheikh Ndiaye",
    "phone": "+221 77100238",
    "email": "cheikh.ndiaye34@example.com",
    "domain": "Médecin",
    "locality": "Guediawaye",
    "description": "Expert en Médecin — basé à Guediawaye"
  },
  {
    "id": 35,
    "name": "Ibrahima Lo",
    "phone": "+221 77100246",
    "email": "ibrahima.lo35@example.com",
    "domain": "Médecin",
    "locality": "Guediawaye",
    "description": "Expert en Médecin — basé à Guediawaye"
  },
  {
    "id": 36,
    "name": "Mamadou Ba",
    "phone": "+221 77100254",
    "email": "mamadou.ba36@example.com",
    "domain": "Médecin",
    "locality": "Guediawaye",
    "description": "Expert en Médecin — basé à Guediawaye"
  },
  {
    "id": 37,
    "name": "Awa Diallo",
    "phone": "+221 77100259",
    "email": "awa.diallo37@example.com",
    "domain": "Informaticien",
    "locality": "Centre Ville",
    "description": "Expert en Informaticien — basé à Centre Ville"
  },
  {
    "id": 38,
    "name": "Ndeye Diop",
    "phone": "+221 77100267",
    "email": "ndeye.diop38@example.com",
    "domain": "Informaticien",
    "locality": "Centre Ville",
    "description": "Expert en Informaticien — basé à Centre Ville"
  },
  {
    "id": 39,
    "name": "Alioune Gueye",
    "phone": "+221 77100275",
    "email": "alioune.gueye39@example.com",
    "domain": "Informaticien",
    "locality": "Centre Ville",
    "description": "Expert en Informaticien — basé à Centre Ville"
  },
  {
    "id": 40,
    "name": "Mamadou Ndiaye",
    "phone": "+221 77100280",
    "email": "mamadou.ndiaye40@example.com",
    "domain": "Informaticien",
    "locality": "Grand Yoff",
    "description": "Expert en Informaticien — basé à Grand Yoff"
  },
  {
    "id": 41,
    "name": "Ousmane Lo",
    "phone": "+221 77100288",
    "email": "ousmane.lo41@example.com",
    "domain": "Informaticien",
    "locality": "Grand Yoff",
    "description": "Expert en Informaticien — basé à Grand Yoff"
  },
  {
    "id": 42,
    "name": "Khady Ba",
    "phone": "+221 77100296",
    "email": "khady.ba42@example.com",
    "domain": "Informaticien",
    "locality": "Grand Yoff",
    "description": "Expert en Informaticien — basé à Grand Yoff"
  },
  {
    "id": 43,
    "name": "Alioune Diallo",
    "phone": "+221 77100301",
    "email": "alioune.diallo43@example.com",
    "domain": "Informaticien",
    "locality": "Guediawaye",
    "description": "Expert en Informaticien — basé à Guediawaye"
  },
  {
    "id": 44,
    "name": "Fatou Diop",
    "phone": "+221 77100309",
    "email": "fatou.diop44@example.com",
    "domain": "Informaticien",
    "locality": "Guediawaye",
    "description": "Expert en Informaticien — basé à Guediawaye"
  },
  {
    "id": 45,
    "name": "Adama Gueye",
    "phone": "+221 77100317",
    "email": "adama.gueye45@example.com",
    "domain": "Informaticien",
    "locality": "Guediawaye",
    "description": "Expert en Informaticien — basé à Guediawaye"
  },
  {
    "id": 46,
    "name": "Khady Ndiaye",
    "phone": "+221 77100322",
    "email": "khady.ndiaye46@example.com",
    "domain": "Instituteur",
    "locality": "Centre Ville",
    "description": "Expert en Instituteur — basé à Centre Ville"
  },
  {
    "id": 47,
    "name": "Cheikh Lo",
    "phone": "+221 77100330",
    "email": "cheikh.lo47@example.com",
    "domain": "Instituteur",
    "locality": "Centre Ville",
    "description": "Expert en Instituteur — basé à Centre Ville"
  },
  {
    "id": 48,
    "name": "Ibrahima Ba",
    "phone": "+221 77100338",
    "email": "ibrahima.ba48@example.com",
    "domain": "Instituteur",
    "locality": "Centre Ville",
    "description": "Expert en Instituteur — basé à Centre Ville"
  },
  {
    "id": 49,
    "name": "Adama Diallo",
    "phone": "+221 77100343",
    "email": "adama.diallo49@example.com",
    "domain": "Instituteur",
    "locality": "Grand Yoff",
    "description": "Expert en Instituteur — basé à Grand Yoff"
  },
  {
    "id": 50,
    "name": "Awa Diop",
    "phone": "+221 77100351",
    "email": "awa.diop50@example.com",
    "domain": "Instituteur",
    "locality": "Grand Yoff",
    "description": "Expert en Instituteur — basé à Grand Yoff"
  },
  {
    "id": 51,
    "name": "Ndeye Gueye",
    "phone": "+221 77100359",
    "email": "ndeye.gueye51@example.com",
    "domain": "Instituteur",
    "locality": "Grand Yoff",
    "description": "Expert en Instituteur — basé à Grand Yoff"
  },
  {
    "id": 52,
    "name": "Ibrahima Ndiaye",
    "phone": "+221 77100364",
    "email": "ibrahima.ndiaye52@example.com",
    "domain": "Instituteur",
    "locality": "Guediawaye",
    "description": "Expert en Instituteur — basé à Guediawaye"
  },
  {
    "id": 53,
    "name": "Mamadou Lo",
    "phone": "+221 77100372",
    "email": "mamadou.lo53@example.com",
    "domain": "Instituteur",
    "locality": "Guediawaye",
    "description": "Expert en Instituteur — basé à Guediawaye"
  },
  {
    "id": 54,
    "name": "Ousmane Ba",
    "phone": "+221 77100380",
    "email": "ousmane.ba54@example.com",
    "domain": "Instituteur",
    "locality": "Guediawaye",
    "description": "Expert en Instituteur — basé à Guediawaye"
  },
  {
    "id": 55,
    "name": "Ndeye Diallo",
    "phone": "+221 77100385",
    "email": "ndeye.diallo55@example.com",
    "domain": "Peinture",
    "locality": "Centre Ville",
    "description": "Expert en Peinture — basé à Centre Ville"
  },
  {
    "id": 56,
    "name": "Alioune Diop",
    "phone": "+221 77100393",
    "email": "alioune.diop56@example.com",
    "domain": "Peinture",
    "locality": "Centre Ville",
    "description": "Expert en Peinture — basé à Centre Ville"
  },
  {
    "id": 57,
    "name": "Fatou Gueye",
    "phone": "+221 77100401",
    "email": "fatou.gueye57@example.com",
    "domain": "Peinture",
    "locality": "Centre Ville",
    "description": "Expert en Peinture — basé à Centre Ville"
  },
  {
    "id": 58,
    "name": "Ousmane Ndiaye",
    "phone": "+221 77100406",
    "email": "ousmane.ndiaye58@example.com",
    "domain": "Peinture",
    "locality": "Grand Yoff",
    "description": "Expert en Peinture — basé à Grand Yoff"
  },
  {
    "id": 59,
    "name": "Khady Lo",
    "phone": "+221 77100414",
    "email": "khady.lo59@example.com",
    "domain": "Peinture",
    "locality": "Grand Yoff",
    "description": "Expert en Peinture — basé à Grand Yoff"
  },
  {
    "id": 60,
    "name": "Cheikh Ba",
    "phone": "+221 77100422",
    "email": "cheikh.ba60@example.com",
    "domain": "Peinture",
    "locality": "Grand Yoff",
    "description": "Expert en Peinture — basé à Grand Yoff"
  },
  {
    "id": 61,
    "name": "Fatou Diallo",
    "phone": "+221 77100427",
    "email": "fatou.diallo61@example.com",
    "domain": "Peinture",
    "locality": "Guediawaye",
    "description": "Expert en Peinture — basé à Guediawaye"
  },
  {
    "id": 62,
    "name": "Adama Diop",
    "phone": "+221 77100435",
    "email": "adama.diop62@example.com",
    "domain": "Peinture",
    "locality": "Guediawaye",
    "description": "Expert en Peinture — basé à Guediawaye"
  },
  {
    "id": 63,
    "name": "Awa Gueye",
    "phone": "+221 77100443",
    "email": "awa.gueye63@example.com",
    "domain": "Peinture",
    "locality": "Guediawaye",
    "description": "Expert en Peinture — basé à Guediawaye"
  },
  {
    "id": 64,
    "name": "Cheikh Ndiaye",
    "phone": "+221 77100448",
    "email": "cheikh.ndiaye64@example.com",
    "domain": "Maçonnerie",
    "locality": "Centre Ville",
    "description": "Expert en Maçonnerie — basé à Centre Ville"
  },
  {
    "id": 65,
    "name": "Ibrahima Lo",
    "phone": "+221 77100456",
    "email": "ibrahima.lo65@example.com",
    "domain": "Maçonnerie",
    "locality": "Centre Ville",
    "description": "Expert en Maçonnerie — basé à Centre Ville"
  },
  {
    "id": 66,
    "name": "Mamadou Ba",
    "phone": "+221 77100464",
    "email": "mamadou.ba66@example.com",
    "domain": "Maçonnerie",
    "locality": "Centre Ville",
    "description": "Expert en Maçonnerie — basé à Centre Ville"
  },
  {
    "id": 67,
    "name": "Awa Diallo",
    "phone": "+221 77100469",
    "email": "awa.diallo67@example.com",
    "domain": "Maçonnerie",
    "locality": "Grand Yoff",
    "description": "Expert en Maçonnerie — basé à Grand Yoff"
  },
  {
    "id": 68,
    "name": "Ndeye Diop",
    "phone": "+221 77100477",
    "email": "ndeye.diop68@example.com",
    "domain": "Maçonnerie",
    "locality": "Grand Yoff",
    "description": "Expert en Maçonnerie — basé à Grand Yoff"
  },
  {
    "id": 69,
    "name": "Alioune Gueye",
    "phone": "+221 77100485",
    "email": "alioune.gueye69@example.com",
    "domain": "Maçonnerie",
    "locality": "Grand Yoff",
    "description": "Expert en Maçonnerie — basé à Grand Yoff"
  },
  {
    "id": 70,
    "name": "Mamadou Ndiaye",
    "phone": "+221 77100490",
    "email": "mamadou.ndiaye70@example.com",
    "domain": "Maçonnerie",
    "locality": "Guediawaye",
    "description": "Expert en Maçonnerie — basé à Guediawaye"
  },
  {
    "id": 71,
    "name": "Ousmane Lo",
    "phone": "+221 77100498",
    "email": "ousmane.lo71@example.com",
    "domain": "Maçonnerie",
    "locality": "Guediawaye",
    "description": "Expert en Maçonnerie — basé à Guediawaye"
  },
  {
    "id": 72,
    "name": "Khady Ba",
    "phone": "+221 77100506",
    "email": "khady.ba72@example.com",
    "domain": "Maçonnerie",
    "locality": "Guediawaye",
    "description": "Expert en Maçonnerie — basé à Guediawaye"
  }
];


function createCardHTML(w) {
  return `
  <div class="col-md-6 col-lg-4">
    <div class="card p-3 card-worker">
      <h5>${w.domain} - ${w.name}</h5>
      <p class="text-muted small">${w.description || ""}</p>
      <div class="mb-2">
        <span class="tag bg-secondary text-white">${w.domain}</span>
        <span class="tag bg-info text-white">${w.locality}</span>
      </div>
      <div class="d-flex gap-2">
        <a class="btn btn-success btn-call" href="tel:${w.phone}">Appeler</a>
        <button class="btn btn-outline-primary btn-detail" data-id="${w.id}">Voir</button>
      </div>
    </div>
  </div>`;
}

function renderList(filtered) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = filtered.map(createCardHTML).join("");
  document.querySelectorAll(".btn-detail").forEach(btn => {
    btn.addEventListener("click", (ev) => {
      const id = parseInt(ev.currentTarget.getAttribute("data-id") || "0", 10);
      const w = workers.find(x => x.id === id);
      if (w) showDetail(w);
    });
  });
}

function showDetail(w) {
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalList = document.getElementById("modalList");
  modalTitle.textContent = w.domain + " — " + w.name;
  modalBody.textContent = w.description || "";
  modalList.innerHTML = `
    <li><strong>Téléphone:</strong> <a href="tel:${w.phone}">${w.phone}</a></li>
    <li><strong>Email:</strong> <a href="mailto:${w.email}">${w.email}</a></li>
    <li><strong>Localité:</strong> ${w.locality}</li>
  `;
  const modalEl = document.getElementById('detailModal');
  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}

function applyFilters() {
  const domainActiveBtn = document.querySelector(".domain-btn.btn-primary");
  const domainActive = domainActiveBtn ? domainActiveBtn.getAttribute("data-domain") : "Tous";
  const locality = document.getElementById("localiteSelect").value;
  const search = document.getElementById("searchInput").value.toLowerCase().trim();

  let result = workers.slice();
  if (domainActive && domainActive !== "Tous") result = result.filter(r => r.domain === domainActive);
  if (locality && locality !== "Toutes") result = result.filter(r => r.locality === locality);
  if (search) result = result.filter(r =>
    r.name.toLowerCase().includes(search) ||
    r.phone.toLowerCase().includes(search) ||
    r.email.toLowerCase().includes(search)
  );
  renderList(result);
}

window.addEventListener("DOMContentLoaded", () => {
  // Navbar toggle for mobile
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  document.querySelectorAll(".domain-btn").forEach(btn => {
    btn.addEventListener("click", (ev) => {
      document.querySelectorAll(".domain-btn").forEach(b => b.classList.remove("btn-primary"));
      document.querySelectorAll(".domain-btn").forEach(b => b.classList.add("btn-outline-primary"));
      const target = ev.currentTarget;
      target.classList.remove("btn-outline-primary");
      target.classList.add("btn-primary");
      applyFilters();
    });
  });

  document.getElementById("localiteSelect").addEventListener("change", applyFilters);
  document.getElementById("searchInput").addEventListener("input", applyFilters);

  renderList(workers);
});
