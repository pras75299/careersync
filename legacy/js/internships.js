// Internships page specific JavaScript

// Initialize internships page
document.addEventListener("DOMContentLoaded", function () {
  initializeInternshipsPage();
});

function initializeInternshipsPage() {
  // Add event listeners to all filter elements
  const filterElements = [
    "search-input",
    "category-filter",
    "location-filter",
    "type-filter",
    "duration-filter",
    "stipend-filter",
  ];

  filterElements.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (elementId === "search-input") {
        element.addEventListener("input", debounce(filterInternships, 300));
      } else {
        element.addEventListener("change", filterInternships);
      }
    }
  });

  // Initial load of internships
  filterInternships();
}

// Debounce function to limit search input calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced filter function for internships page
function filterInternships() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const locationFilter = document.getElementById("location-filter");
  const typeFilter = document.getElementById("type-filter");
  const durationFilter = document.getElementById("duration-filter");
  const stipendFilter = document.getElementById("stipend-filter");

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const category = categoryFilter ? categoryFilter.value : "";
  const location = locationFilter ? locationFilter.value : "";
  const type = typeFilter ? typeFilter.value : "";
  const duration = durationFilter ? durationFilter.value : "";
  const stipend = stipendFilter ? stipendFilter.value : "";

  // Get internships data from the main script
  let filteredInternships = window.internshipsData
    ? [...window.internshipsData]
    : [];

  // Apply filters
  filteredInternships = filteredInternships.filter((internship) => {
    // Search filter
    const matchesSearch =
      !searchTerm ||
      internship.title.toLowerCase().includes(searchTerm) ||
      internship.company.toLowerCase().includes(searchTerm) ||
      internship.description.toLowerCase().includes(searchTerm) ||
      internship.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm)
      ) ||
      internship.requirements.some((req) =>
        req.toLowerCase().includes(searchTerm)
      );

    // Category filter
    const matchesCategory = !category || internship.category === category;

    // Location filter
    const matchesLocation =
      !location ||
      internship.location.toLowerCase().includes(location) ||
      (location === "remote" && internship.type.toLowerCase() === "remote");

    // Type filter
    const matchesType =
      !type || internship.type.toLowerCase() === type.toLowerCase();

    // Duration filter
    const matchesDuration = !duration || internship.duration === duration;

    // Stipend filter
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

  // Sort internships
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    const sortBy = sortSelect.value;
    filteredInternships = sortInternshipsBy(filteredInternships, sortBy);
  }

  displayInternships(filteredInternships);
  updateResultsCount(filteredInternships.length);
  updateLoadMoreButton(filteredInternships.length);
}

// Sort internships by different criteria
function sortInternshipsBy(internships, sortBy) {
  switch (sortBy) {
    case "newest":
      return internships.sort(
        (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
      );
    case "deadline":
      return internships.sort(
        (a, b) =>
          new Date(a.applicationDeadline) - new Date(b.applicationDeadline)
      );
    case "stipend":
      return internships.sort((a, b) => {
        const stipendA = parseInt(a.stipend.replace(/[^\d]/g, ""));
        const stipendB = parseInt(b.stipend.replace(/[^\d]/g, ""));
        return stipendB - stipendA;
      });
    default:
      return internships; // Keep original order for relevance
  }
}

// Enhanced display function with animations
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

  // Clear existing content
  resultsGrid.innerHTML = "";

  // Add internships with staggered animation
  internships.forEach((internship, index) => {
    const card = createInternshipCard(internship);
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    resultsGrid.appendChild(card);

    // Animate card appearance
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Create internship card element
function createInternshipCard(internship) {
  const card = document.createElement("div");
  card.className = "internship-card";
  card.onclick = () => viewInternshipDetail(internship.id);

  card.innerHTML = `
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
            ${
              internship.skills.length > 4
                ? `<span class="skill-tag">+${
                    internship.skills.length - 4
                  } more</span>`
                : ""
            }
        </div>
        <div class="card-footer">
            <span class="stipend">${internship.stipend}</span>
            <button class="apply-btn" onclick="event.stopPropagation(); applyInternship(${
              internship.id
            })">
                Apply Now
            </button>
        </div>
    `;

  return card;
}

// Update load more button visibility
function updateLoadMoreButton(resultCount) {
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    // Hide load more button if we have fewer than 10 results
    loadMoreBtn.style.display = resultCount >= 10 ? "block" : "none";
  }
}

// Enhanced search function
function searchInternships() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    filterInternships();
  }
}

// Clear all filters with animation
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
      element.style.transition = "all 0.3s ease";
      element.value = "";
    }
  });

  // Reset sort to relevance
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.value = "relevance";
  }

  // Apply filters after a short delay for smooth animation
  setTimeout(() => {
    filterInternships();
  }, 100);
}

// Enhanced sort function
function sortInternships() {
  const sortSelect = document.getElementById("sort-select");
  if (!sortSelect) return;

  const sortBy = sortSelect.value;
  const resultsGrid = document.getElementById("results-grid");
  if (!resultsGrid) return;

  // Get current filtered internships and sort them
  filterInternships();
}

// Load more internships (simulated)
function loadMoreInternships() {
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    loadMoreBtn.disabled = true;
  }

  // Simulate API call
  setTimeout(() => {
    // In a real application, this would fetch more internships from an API
    console.log("Loading more internships...");

    if (loadMoreBtn) {
      loadMoreBtn.innerHTML =
        '<i class="fas fa-plus"></i> Load More Internships';
      loadMoreBtn.disabled = false;
    }

    // Show a message that no more internships are available
    alert("No more internships available at the moment. Check back later!");
  }, 1500);
}

// Add to favorites functionality
function addToFavorites(internshipId) {
  // Get existing favorites from localStorage
  let favorites = JSON.parse(
    localStorage.getItem("favoriteInternships") || "[]"
  );

  if (!favorites.includes(internshipId)) {
    favorites.push(internshipId);
    localStorage.setItem("favoriteInternships", JSON.stringify(favorites));

    // Show success message
    showNotification("Internship added to favorites!", "success");
  } else {
    showNotification("Internship already in favorites!", "info");
  }
}

// Remove from favorites
function removeFromFavorites(internshipId) {
  let favorites = JSON.parse(
    localStorage.getItem("favoriteInternships") || "[]"
  );
  favorites = favorites.filter((id) => id !== internshipId);
  localStorage.setItem("favoriteInternships", JSON.stringify(favorites));

  showNotification("Internship removed from favorites!", "success");
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${
              type === "success"
                ? "check-circle"
                : type === "error"
                ? "exclamation-circle"
                : "info-circle"
            }"></i>
            <span>${message}</span>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#3b82f6"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Export functions for use in other scripts
window.internshipsPage = {
  filterInternships,
  clearFilters,
  sortInternships,
  loadMoreInternships,
  addToFavorites,
  removeFromFavorites,
};
