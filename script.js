// See Less/More functionality for text section on all screens
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

// Expand/Collapse functionality for FAQ
document.getElementById("faq1").addEventListener("click", function () {
  var answer = document.getElementById("faq1-ans");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
document.getElementById("faq2").addEventListener("click", function () {
  var answer = document.getElementById("faq2-ans");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
document.getElementById("faq3").addEventListener("click", function () {
  var answer = document.getElementById("faq3-ans");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
document.getElementById("faq4").addEventListener("click", function () {
  var answer = document.getElementById("faq4-ans");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
document.getElementById("faq5").addEventListener("click", function () {
  var answer = document.getElementById("faq5-ans");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});

// See Less/More functionality for services on mobile screens
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

function createServiceComponent(title, description, imageURL, index) {
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

for (var i = 0; i < services.length; i++) {
  var service = services[i];
  createServiceComponent(
    service.title,
    service.description,
    service.imageURL,
    i
  );
}

// Add SVG checkmark icon to items in Affordable Energy Section to avoid code redunduncy
document.addEventListener("DOMContentLoaded", function () {
  // Function to return the SVG element
  function createSVG() {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("class", "afford-icon");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");

    const path1 = document.createElementNS(svgNamespace, "path");
    path1.setAttribute("d", "M16.125 9.75L10.625 15L7.875 12.375");
    path1.setAttribute("stroke", "#21BA9E");
    path1.setAttribute("stroke-width", "2");
    path1.setAttribute("stroke-linecap", "round");
    path1.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path1);

    const path2 = document.createElementNS(svgNamespace, "path");
    path2.setAttribute(
      "d",
      "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
    );
    path2.setAttribute("stroke", "#21BA9E");
    path2.setAttribute("stroke-width", "2");
    path2.setAttribute("stroke-linecap", "round");
    path2.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path2);

    return svg;
  }

  document.querySelectorAll(".afford-card-item").forEach((item) => {
    const icon = createSVG();
    item.prepend(icon);
  });
});

// Add SVG circle down icon to items in FAQ Section to avoid code redunduncy
document.addEventListener("DOMContentLoaded", function () {
  // Function to return the SVG element
  function createSVG() {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("class", "faq-icon");
    svg.setAttribute("width", "21");
    svg.setAttribute("height", "20");
    svg.setAttribute("viewBox", "0 0 33 32");
    svg.setAttribute("fill", "none");

    const path1 = document.createElementNS(svgNamespace, "path");
    path1.setAttribute(
      "d",
      "M16.5 28C23.1274 28 28.5 22.6274 28.5 16C28.5 9.37258 23.1274 4 16.5 4C9.87258 4 4.5 9.37258 4.5 16C4.5 22.6274 9.87258 28 16.5 28Z"
    );
    path1.setAttribute("stroke", "#21BA9E");
    path1.setAttribute("stroke-width", "2");
    path1.setAttribute("stroke-miterlimit", "10");
    svg.appendChild(path1);

    const path2 = document.createElementNS(svgNamespace, "path");
    path2.setAttribute("d", "M21 14.5L16.5 19.5L12 14.5");
    path2.setAttribute("stroke", "#21BA9E");
    path2.setAttribute("stroke-width", "2");
    path2.setAttribute("stroke-linecap", "round");
    path2.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path2);

    return svg;
  }

  // Prepend SVG to each afford-card-item
  document.querySelectorAll(".faq-item").forEach((item) => {
    const icon = createSVG();
    item.prepend(icon);
  });
});
