document.getElementById("toggleButton").addEventListener("click", function () {
  var extraContent = document.getElementById("extraContent");
  var button = document.getElementById("toggleButton");
  if (extraContent.classList.contains("hidden")) {
    extraContent.classList.remove("hidden");
    button.textContent = "See Less";
  } else {
    extraContent.classList.add("hidden");
    button.textContent = "See More";
  }
});

document
  .getElementById("servicesToggleButton")
  .addEventListener("click", function () {
    var moreServices = document.getElementById("moreServices");
    var button = document.getElementById("servicesToggleButton");
    if (moreServices.classList.contains("hidden")) {
      moreServices.classList.remove("hidden");
      moreServices.style.display = "block";
      button.textContent = "See Less";
    } else {
      moreServices.classList.add("hidden");
      moreServices.style.display = "none";
      button.textContent = "See More";
    }
  });

// Services added as components to html to avoid redundancy
const services = [
  {
    title: "Repair and Maintenance",
    description: "We provide repair and help maintain existing solar systems.",
    imageURL: "img-repair-and-maintenance.jpg",
  },
  {
    title: "Electrician Service Upgrades",
    description:
      "As reputable and licensed master electricians, we provide a variety of electrical services.",
    imageURL: "img-electrician-service-upgrades.jpg",
  },
  {
    title: "Solar Panel",
    description:
      "We install a variety of solar products like PV and Photovoltaic panels.",
    imageURL: "img-solar-panel.jpg",
  },
  {
    title: "Generator and Battery Backup",
    description: "We can help with your generator and solar battery banks.",
    imageURL: "img-generator-and-battery-backup.jpg",
  },
  {
    title: "Lighting Fixtures",
    description:
      "Sparrow Electric installs lighting fixtures and takes care of fittings and fans.",
    imageURL: "img-lighting-fixtures.jpg",
  },
  {
    title: "Outside and Landscape Lighting",
    description:
      "Our outdoor lighting services can highlight the architecture of your property and the landscape of your yard.",
    imageURL: "img-outside-and-landscape-lighting.jpg",
  },
  {
    title: "Violations and Inspection Repairs",
    description:
      "Our master electricians can correct code violations and home inspection electrical repairs.",
    imageURL: "img-violations-and-inspection-repairs.jpg",
  },
  {
    title: "Rewiring",
    description:
      "We can wire for and install chandeliers and fixtures throughout your property.",
    imageURL: "img-rewiring.jpg",
  },
  {
    title: "Electrical Car Ports",
    description:
      "We handle the installation and repair of electric vehicle charging systems.",
    imageURL: "img-electrical-car-ports.jpg",
  },
  {
    title: "Replacement Emergency Lighting",
    description:
      "You can count on Sparrow Electric to ensure your emergency lighting never goes unaddressed.",
    imageURL: "img-replacement-emergency-lighting.jpg",
  },
];

function createComponent(title, description, imageURL, index) {
  const component = document.createElement("div");
  component.className = "service-item";
  component.innerHTML = `<div
  class="service-image"
  style="background-image: url('images/${imageURL}')"
></div>
<h4 class="service-title">${title}</h4>
<p class="service-p">${description}</p>`;
  const servicesParent = document.getElementById("services");
  const moreServicesParent = document.getElementById("moreServices");
  if (index < 3) {
    servicesParent.appendChild(component);
  } else {
    moreServicesParent.appendChild(component);
  }
}

// var i = 0;
// services.forEach((service) => {
//   createComponent(service.title, service.description, service.imageURL, i);
//   i += 1;
// });

for (var i = 0; i < services.length; i++) {
  var service = services[i];
  createComponent(service.title, service.description, service.imageURL, i);
}
