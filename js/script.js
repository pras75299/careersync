// Main JavaScript file for Bharat Internz website

// Sample internship data
const internshipsData = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp India",
    location: "Bangalore, India",
    type: "Remote",
    duration: "3 months",
    stipend: "₹15,000/month",
    description:
      "Join our dynamic frontend team and work on cutting-edge web applications using React, TypeScript, and modern CSS frameworks. You'll collaborate with experienced developers to build user-friendly interfaces.",
    requirements: ["React.js", "JavaScript", "HTML/CSS", "Git"],
    skills: ["React", "TypeScript", "CSS3", "Git", "Responsive Design"],
    postedDate: "2024-01-15",
    applicationDeadline: "2024-02-15",
    category: "technology",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "DataViz Solutions",
    location: "Mumbai, India",
    type: "Hybrid",
    duration: "6 months",
    stipend: "₹20,000/month",
    description:
      "Work with our data science team to analyze large datasets and build predictive models using Python and machine learning libraries. Gain hands-on experience with real-world data problems.",
    requirements: ["Python", "Machine Learning", "Statistics", "SQL"],
    skills: ["Python", "Pandas", "Scikit-learn", "SQL", "Jupyter"],
    postedDate: "2024-01-10",
    applicationDeadline: "2024-02-10",
    category: "data-science",
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "GrowthHackers",
    location: "Delhi, India",
    type: "On-site",
    duration: "2 months",
    stipend: "₹10,000/month",
    description:
      "Assist in digital marketing campaigns, social media management, and content creation for our growing client base. Learn from industry experts and work on real campaigns.",
    requirements: ["Social Media Marketing", "Content Writing", "Analytics"],
    skills: ["Social Media", "Content Creation", "Google Analytics", "SEO"],
    postedDate: "2024-01-20",
    applicationDeadline: "2024-02-20",
    category: "marketing",
  },
  {
    id: 4,
    title: "Backend Developer Intern",
    company: "CloudTech Solutions",
    location: "Pune, India",
    type: "Remote",
    duration: "4 months",
    stipend: "₹18,000/month",
    description:
      "Develop scalable backend services using Node.js, Express, and cloud technologies like AWS. Work on microservices architecture and database optimization.",
    requirements: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    skills: ["Node.js", "Express", "MongoDB", "AWS", "REST APIs"],
    postedDate: "2024-01-12",
    applicationDeadline: "2024-02-12",
    category: "technology",
  },
  {
    id: 5,
    title: "UI/UX Design Intern",
    company: "DesignStudio Pro",
    location: "Chennai, India",
    type: "Hybrid",
    duration: "3 months",
    stipend: "₹12,000/month",
    description:
      "Create beautiful and intuitive user interfaces for web and mobile applications using Figma and Adobe Creative Suite. Work on real client projects.",
    requirements: [
      "Figma",
      "Adobe Creative Suite",
      "User Research",
      "Prototyping",
    ],
    skills: ["Figma", "Adobe XD", "Photoshop", "User Research", "Prototyping"],
    postedDate: "2024-01-18",
    applicationDeadline: "2024-02-18",
    category: "design",
  },
  {
    id: 6,
    title: "Business Analyst Intern",
    company: "FinanceCorp",
    location: "Hyderabad, India",
    type: "On-site",
    duration: "3 months",
    stipend: "₹14,000/month",
    description:
      "Analyze business processes and help improve operational efficiency. Work with cross-functional teams to identify opportunities for growth and optimization.",
    requirements: ["Business Analysis", "Excel", "PowerPoint", "Communication"],
    skills: ["Business Analysis", "Excel", "PowerPoint", "SQL", "Tableau"],
    postedDate: "2024-01-22",
    applicationDeadline: "2024-02-22",
    category: "business",
  },
  {
    id: 7,
    title: "Mobile App Developer Intern",
    company: "AppTech Solutions",
    location: "Remote",
    type: "Remote",
    duration: "4 months",
    stipend: "₹16,000/month",
    description:
      "Develop mobile applications for iOS and Android using React Native. Work on user interface design and backend integration.",
    requirements: [
      "React Native",
      "JavaScript",
      "Mobile Development",
      "API Integration",
    ],
    skills: ["React Native", "JavaScript", "iOS", "Android", "Firebase"],
    postedDate: "2024-01-14",
    applicationDeadline: "2024-02-14",
    category: "technology",
  },
  {
    id: 8,
    title: "Content Writer Intern",
    company: "ContentCraft",
    location: "Remote",
    type: "Remote",
    duration: "2 months",
    stipend: "₹8,000/month",
    description:
      "Create engaging content for blogs, social media, and marketing materials. Work with the marketing team to develop content strategies.",
    requirements: ["Content Writing", "SEO", "Social Media", "Research"],
    skills: ["Content Writing", "SEO", "WordPress", "Social Media", "Research"],
    postedDate: "2024-01-25",
    applicationDeadline: "2024-02-25",
    category: "marketing",
  },
];

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
  initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Category card click handlers
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      if (category) {
        window.location.href = `internships.html?category=${category}`;
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.background = "#fff";
      navbar.style.backdropFilter = "none";
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".category-card, .step, .testimonial-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Search functionality
function searchInternships() {
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";

  if (window.location.pathname.includes("internships.html")) {
    filterInternships();
  } else {
    // Redirect to internships page with search term
    window.location.href = `internships.html?search=${encodeURIComponent(
      searchTerm
    )}`;
  }
}

// Filter internships based on search and filters
function filterInternships() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const locationFilter = document.getElementById("location-filter");
  const typeFilter = document.getElementById("type-filter");
  const durationFilter = document.getElementById("duration-filter");
  const stipendFilter = document.getElementById("stipend-filter");

  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
  const category = categoryFilter ? categoryFilter.value : "";
  const location = locationFilter ? locationFilter.value : "";
  const type = typeFilter ? typeFilter.value : "";
  const duration = durationFilter ? durationFilter.value : "";
  const stipend = stipendFilter ? stipendFilter.value : "";

  let filteredInternships = internshipsData.filter((internship) => {
    const matchesSearch =
      !searchTerm ||
      internship.title.toLowerCase().includes(searchTerm) ||
      internship.company.toLowerCase().includes(searchTerm) ||
      internship.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm)
      );

    const matchesCategory = !category || internship.category === category;
    const matchesLocation =
      !location ||
      internship.location.toLowerCase().includes(location) ||
      (location === "remote" && internship.type.toLowerCase() === "remote");
    const matchesType =
      !type || internship.type.toLowerCase() === type.toLowerCase();
    const matchesDuration = !duration || internship.duration === duration;

    let matchesStipend = true;
    if (stipend) {
      const stipendValue = parseInt(internship.stipend.replace(/[^\d]/g, ""));
      switch (stipend) {
        case "0-10000":
          matchesStipend = stipendValue >= 0 && stipendValue <= 10000;
          break;
        case "10000-20000":
          matchesStipend = stipendValue > 10000 && stipendValue <= 20000;
          break;
        case "20000-30000":
          matchesStipend = stipendValue > 20000 && stipendValue <= 30000;
          break;
        case "30000+":
          matchesStipend = stipendValue > 30000;
          break;
      }
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation &&
      matchesType &&
      matchesDuration &&
      matchesStipend
    );
  });

  displayInternships(filteredInternships);
  updateResultsCount(filteredInternships.length);
}

// Display internships in the results grid
function displayInternships(internships) {
  const resultsGrid = document.getElementById("results-grid");
  const noResults = document.getElementById("no-results");

  if (!resultsGrid) return;

  if (internships.length === 0) {
    resultsGrid.innerHTML = "";
    if (noResults) {
      noResults.style.display = "block";
    }
    return;
  }

  if (noResults) {
    noResults.style.display = "none";
  }

  resultsGrid.innerHTML = internships
    .map(
      (internship) => `
        <div class="internship-card" onclick="viewInternshipDetail(${
          internship.id
        })">
            <div class="card-header">
                <div class="company-logo">
                    <i class="fas fa-building"></i>
                </div>
                <div class="job-info">
                    <h3>${internship.title}</h3>
                    <div class="company">${internship.company}</div>
                    <div class="job-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${
                          internship.location
                        }</span>
                        <span><i class="fas fa-laptop"></i> ${
                          internship.type
                        }</span>
                        <span><i class="fas fa-clock"></i> ${
                          internship.duration
                        }</span>
                    </div>
                </div>
            </div>
            <div class="job-description">
                ${internship.description}
            </div>
            <div class="skills-container">
                ${internship.skills
                  .slice(0, 4)
                  .map((skill) => `<span class="skill-tag">${skill}</span>`)
                  .join("")}
            </div>
            <div class="card-footer">
                <span class="stipend">${internship.stipend}</span>
                <button class="apply-btn" onclick="event.stopPropagation(); applyInternship(${
                  internship.id
                })">
                    Apply Now
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Update results count
function updateResultsCount(count) {
  const resultsCount = document.getElementById("results-count");
  if (resultsCount) {
    resultsCount.textContent = `Showing ${count} internship${
      count !== 1 ? "s" : ""
    }`;
  }
}

// Clear all filters
function clearFilters() {
  const filters = [
    "search-input",
    "category-filter",
    "location-filter",
    "type-filter",
    "duration-filter",
    "stipend-filter",
  ];

  filters.forEach((filterId) => {
    const element = document.getElementById(filterId);
    if (element) {
      element.value = "";
    }
  });

  filterInternships();
}

// Sort internships
function sortInternships() {
  const sortSelect = document.getElementById("sort-select");
  if (!sortSelect) return;

  const sortBy = sortSelect.value;
  const resultsGrid = document.getElementById("results-grid");
  if (!resultsGrid) return;

  const cards = Array.from(resultsGrid.children);

  cards.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        // Sort by posted date (assuming newer dates are higher)
        return 0; // For now, keep original order
      case "deadline":
        // Sort by application deadline
        return 0; // For now, keep original order
      case "stipend":
        // Sort by stipend (high to low)
        const stipendA = parseInt(
          a.querySelector(".stipend").textContent.replace(/[^\d]/g, "")
        );
        const stipendB = parseInt(
          b.querySelector(".stipend").textContent.replace(/[^\d]/g, "")
        );
        return stipendB - stipendA;
      default:
        return 0; // Keep original order for relevance
    }
  });

  // Re-append sorted cards
  cards.forEach((card) => resultsGrid.appendChild(card));
}

// Load more internships (placeholder)
function loadMoreInternships() {
  // This would typically load more internships from an API
  console.log("Loading more internships...");
}

// View internship detail
function viewInternshipDetail(internshipId) {
  window.location.href = `internship-detail.html?id=${internshipId}`;
}

// Apply for internship
function applyInternship(internshipId) {
  if (window.location.pathname.includes("internship-detail.html")) {
    openApplicationModal();
  } else {
    window.location.href = `internship-detail.html?id=${internshipId}`;
  }
}

// Save internship (placeholder)
function saveInternship() {
  // This would typically save to user's saved internships
  alert("Internship saved to your favorites!");
}

// Open application modal
function openApplicationModal() {
  const modal = document.getElementById("application-modal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

// Close application modal
function closeApplicationModal() {
  const modal = document.getElementById("application-modal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Submit application
function submitApplication() {
  const form = document.getElementById("application-form");
  if (!form) return;

  const formData = new FormData(form);
  const applicationData = {};

  for (let [key, value] of formData.entries()) {
    applicationData[key] = value;
  }

  // Validate required fields
  const requiredFields = [
    "applicant-name",
    "applicant-email",
    "applicant-phone",
    "applicant-university",
    "applicant-course",
    "applicant-year",
    "applicant-resume",
  ];
  const missingFields = requiredFields.filter(
    (field) => !applicationData[field]
  );

  if (missingFields.length > 0) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simulate application submission
  console.log("Application submitted:", applicationData);
  alert("Application submitted successfully! We will get back to you soon.");
  closeApplicationModal();
  form.reset();
}

// Handle URL parameters
function handleURLParameters() {
  const urlParams = new URLSearchParams(window.location.search);

  // Handle search parameter
  const searchParam = urlParams.get("search");
  if (searchParam) {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.value = searchParam;
    }
  }

  // Handle category parameter
  const categoryParam = urlParams.get("category");
  if (categoryParam) {
    const categoryFilter = document.getElementById("category-filter");
    if (categoryFilter) {
      categoryFilter.value = categoryParam;
    }
  }

  // Apply filters if on internships page
  if (window.location.pathname.includes("internships.html")) {
    filterInternships();
  }
}

// Initialize URL parameters handling
document.addEventListener("DOMContentLoaded", function () {
  handleURLParameters();
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  const modal = document.getElementById("application-modal");
  if (event.target === modal) {
    closeApplicationModal();
  }
});

// Handle form submission with Enter key
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const searchInput = document.getElementById("search-input");
    if (searchInput && document.activeElement === searchInput) {
      searchInternships();
    }
  }
});
