const spots = [
  {name:"Meghauli", cat:"wildlife", kicker:"Wildlife and Nature", img:"assets/megauli.jpeg", blurb:"The western gateway to Chitwan National Park — community forest, a crocodile breeding pond, Tharu homestays, and a sunset view over the Narayani–Rapti confluence at Golaghat."},
  {name:"Devghat Dam", cat:"religious", kicker:"Religious and Historic", img:"assets/devghat.jpeg", blurb:"A sacred river confluence and pilgrimage town — temples, ashrams, and quiet ghats where two rivers meet to form the Narayani."},
  {name:"Beeshazari Tal", cat:"lake", kicker:"Seven lakes", img:"assets/Beeshazari.jpg", blurb:"A cluster of small, interconnected lakes on the edge of the valley — calm water, birdlife, and easy boating away from the crowds."},
  {name:"Chaukidanda", cat:"adventure", kicker:"Adventure & Hiking", img:"assets/chauki.jpeg", blurb:"A hillside climb above the valley floor, rewarding the walk up with sweeping views over Bharatpur and the plains — a favourite for sunrise hikers."},
  {name:"Sitamai", cat:"park", kicker:"Picnic-sports and park", img:"assets/picnic.jpeg", blurb:"Open green grounds around Bharatpur for picnics, football, and evening walks — where locals actually spend their weekends."},
  {name:"Kabilas Resort", cat:"funpark", kicker:"Fun Park and Hotels", img:"assets/funpark.jpeg", blurb:"A handful of amusement parks around the city with rides, water play, and food stalls — built for a family day out."}
];

const cardsEl = document.getElementById('cards');
 cardsEl.innerHTML = spots.map(s => `<a href="${s.cat}.html" class="type-card ${s.cat}"/a>
    <img src="${s.img}" alt="${s.name}" class="dest-img">
    <div class="kicker">${s.kicker}</div>
    <h3>${s.name}</h3>
    <p>${s.blurb}</p>
  </div>`).join('');

const mapPoints = [
  {
    name: "Bharatpur",
    cat: "destination",
    lat: 27.6833,
    lng: 84.4333,
    desc: "The main urban centre of Chitwan."
  },
  {
    name: "Sauraha",
    cat: "destination",
    lat: 27.5747,
    lng: 84.4936,
    desc: "A major gateway to Chitwan National Park."
  },
  {
    name: "Chitwan National Park",
    cat: "destination",
    lat: 27.5000,
    lng: 84.3333,
    desc: "Nepal's famous wildlife destination."
  },
  {
    name: "Devghat",
    cat: "destination",
    lat: 27.7250,
    lng: 84.3900,
    desc: "A famous pilgrimage destination."
  },
  {
    name: "Meghauli",
    cat: "destination",
    lat: 27.5790,
    lng: 84.2580,
    desc: "Western gateway to Chitwan National Park."
  },
  {
    name: "Beeshazari Tal",
    cat: "destination",
    lat: 27.6080,
    lng: 84.4730,
    desc: "Beautiful wetland area known for birds."
  },
  {
    name: "Kasara",
    cat: "destination",
    lat: 27.5240,
    lng: 84.3420,
    desc: "An important area inside Chitwan National Park."
  },
  {
    name: "Patihani",
    cat: "destination",
    lat: 27.6320,
    lng: 84.3830,
    desc: "Riverside tourism area near Chitwan National Park."
  },
  {
    name: "Bharatpur Hospital",
    cat: "emergency",
    lat: 27.6825,
    lng: 84.4315,
    desc: "Major hospital serving Bharatpur and Chitwan."
  },
  {
    name: "Tourist Police, Sauraha",
    cat: "emergency",
    lat: 27.5750,
    lng: 84.4940,
    desc: "Tourist police assistance in Sauraha."
  },
  {
    name: "Nepal Police, Bharatpur",
    cat: "emergency",
    lat: 27.6830,
    lng: 84.4280,
    desc: "General police assistance in Bharatpur."
  }
];

const map = L.map("leaflet-map").setView(
  [27.62, 84.40],
  11
);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
).addTo(map);

const mapPanel = document.getElementById("map-panel");

mapPoints.forEach(point => {

  const marker = L.marker([
    point.lat,
    point.lng
  ]).addTo(map);

  marker.bindPopup(`
    <b>${point.name}</b>
    <p>${point.desc}</p>
  `);

  marker.on("click", () => {
    mapPanel.innerHTML = `
      <div class="panel-kicker">
        ${point.cat === "emergency"
          ? "Emergency"
          : "Destination"}
      </div>

      <h3>${point.name}</h3>

      <p>${point.desc}</p>
    `;
  });

});

/* =========================================================
   GAINDĀ
   ========================================================= */

const gaindaPlaces = {

  sauraha: {
    name: "Sauraha",
    type: "Jungle & Wildlife",
    description:
      "Sauraha is one of the main gateways to Chitwan National Park. It is popular for jungle activities, wildlife, the Rapti River and Tharu culture.",
    activities: [
      "Jungle safari",
      "Canoe ride",
      "Jungle walk",
      "Bird watching",
      "Tharu cultural experience"
    ],
    nearby: [
      "Chitwan National Park",
      "Rapti River",
      "Tharu Cultural Museum"
    ],
    cost:
      "Your total cost depends on accommodation, food, transport and activities."
  },

  meghauli: {
    name: "Meghauli",
    type: "Nature & Jungle",
    description:
      "Meghauli is a quieter area of Chitwan, suitable for nature, riverside scenery and jungle experiences.",
    activities: [
      "Wildlife viewing",
      "Bird watching",
      "Nature photography",
      "Riverside views",
      "Sunset viewing"
    ],
    nearby: [
      "Chitwan National Park",
      "Narayani River",
      "Rapti River"
    ],
    cost:
      "Cost depends on transport, accommodation, food and activities."
  },

  devghat: {
    name: "Devghat",
    type: "Religious & Riverside",
    description:
      "Devghat is a famous religious and cultural destination near Bharatpur.",
    activities: [
      "Visit temples",
      "Explore the river area",
      "Photography",
      "Riverside walk"
    ],
    nearby: [
      "Bharatpur",
      "Narayani River"
    ],
    cost:
      "Transport and optional activities may cost extra."
  },

  beeshazari: {
    name: "Beeshazari Tal",
    type: "Lake & Nature",
    description:
      "Beeshazari Tal is a wetland area known for nature and bird watching.",
    activities: [
      "Bird watching",
      "Nature photography",
      "Explore wetlands",
      "Relax in nature"
    ],
    nearby: [
      "Bharatpur",
      "Chitwan forests"
    ],
    cost:
      "Transport and local fees may apply."
  },

  kasara: {
    name: "Kasara",
    type: "National Park Area",
    description:
      "Kasara is the headquarters area of Chitwan National Park.",
    activities: [
      "Wildlife viewing",
      "Jungle activities",
      "Nature photography"
    ],
    nearby: [
      "Chitwan National Park",
      "Meghauli"
    ],
    cost:
      "National Park entry fees apply."
  },

  patihani: {
    name: "Patihani",
    type: "Riverside & Nature",
    description:
      "Patihani is a tourism area near Chitwan National Park with riverside scenery and access to nature.",
    activities: [
      "Nature walks",
      "Bird watching",
      "Riverside views",
      "Wildlife experiences"
    ],
    nearby: [
      "Chitwan National Park",
      "Rapti River"
    ],
    cost:
      "Cost depends on transport, food, accommodation and activities."
  }

};


/* FIND PLACE */

function findGaindaPlace(question) {

  const q = question.toLowerCase();

  if (q.includes("sauraha")) {
    return gaindaPlaces.sauraha;
  }

  if (q.includes("meghauli") || q.includes("meghouli")) {
    return gaindaPlaces.meghauli;
  }

  if (q.includes("devghat") || q.includes("dev ghat")) {
    return gaindaPlaces.devghat;
  }

  if (
    q.includes("beeshazari") ||
    q.includes("bishazari")
  ) {
    return gaindaPlaces.beeshazari;
  }

  if (q.includes("kasara")) {
    return gaindaPlaces.kasara;
  }

  if (q.includes("patihani")) {
    return gaindaPlaces.patihani;
  }

  return null;
}


/* PLACE RESPONSE */

function showGaindaPlace(place) {

  return `
    <div class="gainda-result">

      <h3>📍 ${place.name}</h3>

      <span class="gainda-tag">
        ${place.type}
      </span>

      <p>${place.description}</p>

      <h4>🎯 Things to do</h4>

      <ul>
        ${place.activities
          .map(item => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h4>📍 Nearby</h4>

      <p>
        ${place.nearby.join(" • ")}
      </p>

      <h4>💰 Cost</h4>

      <p>${place.cost}</p>

    </div>
  `;
}


/* GENERAL PLACES */

function showGaindaPlaces() {

  return `
    <div class="gainda-result">

      <h3>📍 Places to visit in Chitwan</h3>

      <div class="gainda-place-grid">

        <div>
          <strong>🦏 Sauraha</strong>
          <span>Jungle & wildlife</span>
        </div>

        <div>
          <strong>🌳 Meghauli</strong>
          <span>Nature & jungle</span>
        </div>

        <div>
          <strong>🙏 Devghat</strong>
          <span>Religious & riverside</span>
        </div>

        <div>
          <strong>🌊 Beeshazari Tal</strong>
          <span>Lake & nature</span>
        </div>

        <div>
          <strong>🌿 Kasara</strong>
          <span>National Park</span>
        </div>

        <div>
          <strong>🏞️ Patihani</strong>
          <span>Riverside & nature</span>
        </div>

      </div>

      <p class="gainda-tip">
        💡 Ask me about any place to learn more.
      </p>

    </div>
  `;
}


/* JUNGLE PLACES */

function showJunglePlaces() {

  return `
    <div class="gainda-result">

      <h3>🌳 Places near the jungle</h3>

      <div class="gainda-place-list">

        <div>
          <strong>🦏 Sauraha</strong>
          <p>
            A major gateway for jungle activities and wildlife experiences.
          </p>
        </div>

        <div>
          <strong>🌿 Meghauli</strong>
          <p>
            A quieter nature and jungle destination.
          </p>
        </div>

        <div>
          <strong>🌳 Kasara</strong>
          <p>
            Located in the Chitwan National Park area.
          </p>
        </div>

        <div>
          <strong>🏞️ Patihani</strong>
          <p>
            Riverside tourism area near the national park.
          </p>
        </div>

      </div>

    </div>
  `;
}


/* ACTIVITIES */

function showGaindaActivities() {

  return `
    <div class="gainda-result">

      <h3>🎯 Things to do in Chitwan</h3>

      <ul>
        <li>🦏 Jungle safari</li>
        <li>🚙 Jeep drive</li>
        <li>🛶 Canoe ride</li>
        <li>🌳 Jungle walk</li>
        <li>🐦 Bird watching</li>
        <li>🪘 Tharu cultural experience</li>
        <li>🌅 Riverside sunset</li>
        <li>📸 Nature photography</li>
      </ul>

    </div>
  `;
}


/* GAINDĀ BRAIN */

function askGainda(question) {

  const q = question.toLowerCase().trim();

  if (!q) {
    return `<p>🦏 Ask me something about Chitwan!</p>`;
  }

  if (
    q.includes("near jungle") ||
    q.includes("near the jungle") ||
    q.includes("jungle place") ||
    q.includes("jungle area")
  ) {
    return showJunglePlaces();
  }

  if (
    q.includes("things to do") ||
    q.includes("what can i do") ||
    q.includes("activities") ||
    q.includes("what to do")
  ) {
    return showGaindaActivities();
  }

  const place = findGaindaPlace(q);

  if (place) {

    if (
      q.includes("cost") ||
      q.includes("price") ||
      q.includes("how much")
    ) {

      return `
        <div class="gainda-result">

          <h3>💰 Cost of ${place.name}</h3>

          <p>${place.cost}</p>

          <p>
            The final amount depends on transport,
            food, accommodation and activities.
          </p>

        </div>
      `;

    }

    return showGaindaPlace(place);
  }

  if (
    q.includes("visit") ||
    q.includes("where should i go") ||
    q.includes("places to visit") ||
    q.includes("place to visit")
  ) {
    return showGaindaPlaces();
  }

  if (
    q.includes("peaceful") ||
    q.includes("quiet") ||
    q.includes("calm") ||
    q.includes("relax")
  ) {

    return `
      <div class="gainda-result">

        <h3>🌿 Looking for a peaceful place?</h3>

        <p>
          <strong>Meghauli</strong> is a quieter nature destination.
        </p>

        <p>
          You can also consider <strong>Beeshazari Tal</strong>
          for wetlands and bird watching.
        </p>

      </div>
    `;
  }

  if (
    q.includes("wildlife") ||
    q.includes("rhino") ||
    q.includes("animal") ||
    q.includes("safari")
  ) {

    return `
      <div class="gainda-result">

        <h3>🦏 Wildlife in Chitwan</h3>

        <p>
          Chitwan is famous for wildlife experiences,
          including the one-horned rhinoceros.
        </p>

        <p>
          Try <strong>Sauraha</strong>,
          <strong>Kasara</strong> or
          <strong>Meghauli</strong>.
        </p>

      </div>
    `;
  }

  return `
    <div class="gainda-result">

      <h3>🦏 Gaindā can help!</h3>

      <p>Try asking:</p>

      <ul>
        <li>How is Sauraha?</li>
        <li>How much does Sauraha cost?</li>
        <li>What places are near the jungle?</li>
        <li>What can I do in Chitwan?</li>
        <li>I want a peaceful place</li>
        <li>Tell me about Devghat</li>
      </ul>

    </div>
  `;
}


/* GAINDĀ INPUT */

const gaindaInput =
  document.getElementById("gainda-input");

const gaindaAsk =
  document.getElementById("gainda-ask");

const gaindaAnswer =
  document.getElementById("answer");


function runGainda() {

  const question = gaindaInput.value;

  if (!question.trim()) {
    gaindaAnswer.innerHTML =
      "<p>🦏 Ask me something first!</p>";
    return;
  }

  gaindaAnswer.innerHTML =
    "<p>🦏 Gaindā is thinking...</p>";

  setTimeout(() => {

    gaindaAnswer.innerHTML =
      askGainda(question);

  }, 300);
}


if (gaindaAsk) {

  gaindaAsk.addEventListener(
    "click",
    runGainda
  );

}


if (gaindaInput) {

  gaindaInput.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {
        runGainda();
      }

    }
  );

}


document
  .querySelectorAll(".gainda-suggestions button")
  .forEach(button => {

    button.addEventListener("click", function() {

      gaindaInput.value =
        this.dataset.question;

      runGainda();

    });

  });



  /* =========================================================
   DAY PLANNER
   ========================================================= */

const dayPlans = {

  wildlife: {
    morning: "Start with a jungle experience around Chitwan National Park.",
    afternoon: "Enjoy a canoe ride or continue exploring the park area.",
    evening: "Relax beside the Rapti River and enjoy the sunset."
  },

  religious: {
    morning: "Visit Devghat and explore the temples and riverside area.",
    afternoon: "Explore Bharatpur and nearby cultural places.",
    evening: "Enjoy a peaceful evening by the river."
  },

  lake: {
    morning: "Visit Beeshazari Tal and explore the wetland area.",
    afternoon: "Spend time birdwatching and enjoying the surrounding nature.",
    evening: "Return toward Bharatpur and relax."
  },

  adventure: {
    morning: "Start early with a nature walk or jungle activity.",
    afternoon: "Try a canoe ride or another outdoor adventure.",
    evening: "Relax and enjoy a riverside sunset."
  },

  family: {
    morning: "Start with a relaxed nature outing suitable for the family.",
    afternoon: "Visit a park or family-friendly attraction.",
    evening: "Finish the day with dinner and a relaxed evening."
  },

  food: {
    morning: "Start with a local breakfast in Bharatpur.",
    afternoon: "Try local Nepali or Tharu food while exploring the area.",
    evening: "Enjoy dinner at a local restaurant or café."
  }

};


document.getElementById("build-plan").addEventListener("click", function () {

  const selected =
    Array.from(
      document.querySelectorAll("#interests input:checked")
    ).map(input => input.value);

  const output =
    document.getElementById("plan-output");


  if (selected.length === 0) {

    output.innerHTML = `
      <div class="plan-message">
        🦏 Choose at least one interest
        and I'll build your day.
      </div>
    `;

    return;
  }


  let morning =
    dayPlans[selected[0]].morning;

  let afternoon =
    dayPlans[selected[0]].afternoon;

  let evening =
    dayPlans[selected[0]].evening;


  if (selected.includes("wildlife")) {
    morning = dayPlans.wildlife.morning;
  }


  if (selected.includes("adventure")) {
    afternoon = dayPlans.adventure.afternoon;
  }
  else if (selected.includes("lake")) {
    afternoon = dayPlans.lake.afternoon;
  }


  if (selected.includes("food")) {
    evening = dayPlans.food.evening;
  }


  output.innerHTML = `

    <div class="day-plan">

      <div class="plan-header">

        <span>🦏 Gaindā's plan</span>

        <h3>Your Chitwan Day</h3>

        <p>
          Based on your interests:
          ${selected.join(" • ")}
        </p>

      </div>


      <div class="plan-timeline">

        <div class="plan-item">

          <div class="plan-time">
            🌅 Morning
          </div>

          <p>${morning}</p>

        </div>


        <div class="plan-item">

          <div class="plan-time">
            ☀️ Afternoon
          </div>

          <p>${afternoon}</p>

        </div>


        <div class="plan-item">

          <div class="plan-time">
            🌇 Evening
          </div>

          <p>${evening}</p>

        </div>

      </div>


      <div class="plan-tip">
        💡 Tip: Keep some extra time for travel between places.
      </div>

    </div>

  `;

});