// Internship detail page specific JavaScript

let currentInternship = null;

// Initialize internship detail page
document.addEventListener("DOMContentLoaded", function () {
  initializeInternshipDetailPage();
});

function initializeInternshipDetailPage() {
  // Get internship ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const internshipId = urlParams.get("id");

  if (internshipId) {
    loadInternshipDetail(parseInt(internshipId));
  } else {
    // If no ID provided, show error or redirect
    showError("Internship not found");
  }

  // Initialize modal functionality
  initializeModal();
}

// Load internship detail
function loadInternshipDetail(internshipId) {
  // Get internships data from the main script
  const internships = window.internshipsData || [];
  const internship = internships.find((emp) => emp.id === internshipId);

  if (!internship) {
    showError("Internship not found");
    return;
  }

  currentInternship = internship;
  populateInternshipDetail(internship);
  loadSimilarInternships(internship);
}

// Populate internship detail page
function populateInternshipDetail(internship) {
  // Update page title
  document.title = `${internship.title} - ${internship.company} | Bharat Internz`;

  // Update breadcrumb
  const breadcrumbTitle = document.getElementById("breadcrumb-title");
  if (breadcrumbTitle) {
    breadcrumbTitle.textContent = internship.title;
  }

  // Update main content
  updateElement("job-title", internship.title);
  updateElement("company-name", internship.company);
  updateElement("job-location", internship.location);
  updateElement("job-type", internship.type);
  updateElement("job-duration", internship.duration);
  updateElement("job-description", internship.description);

  // Update sidebar
  updateElement("sidebar-stipend", internship.stipend);
  updateElement("sidebar-duration", internship.duration);
  updateElement("sidebar-location", internship.type);
  updateElement("sidebar-posted", getTimeAgo(internship.postedDate));
  updateElement("sidebar-deadline", formatDate(internship.applicationDeadline));
  updateElement("sidebar-company", internship.company);

  // Update responsibilities
  const responsibilitiesList = document.getElementById("responsibilities");
  if (responsibilitiesList) {
    responsibilitiesList.innerHTML = internship.requirements
      .map((req) => `<li>${req}</li>`)
      .join("");
  }

  // Update required skills
  const requiredSkills = document.getElementById("required-skills");
  if (requiredSkills) {
    requiredSkills.innerHTML = internship.skills
      .map((skill) => `<span class="skill-tag">${skill}</span>`)
      .join("");
  }

  // Update preferred qualifications (using requirements as placeholder)
  const preferredQualifications = document.getElementById(
    "preferred-qualifications"
  );
  if (preferredQualifications) {
    const qualifications = [
      `Currently pursuing or completed Bachelor's degree in Computer Science or related field`,
      `Previous experience with ${internship.skills.slice(0, 2).join(" and ")}`,
      "Understanding of modern development practices",
      "Strong problem-solving and communication skills",
      "Ability to work in a team environment",
    ];
    preferredQualifications.innerHTML = qualifications
      .map((qual) => `<li>${qual}</li>`)
      .join("");
  }

  // Update benefits
  const benefits = document.getElementById("benefits");
  if (benefits) {
    const benefitList = [
      `Competitive stipend of ${internship.stipend}`,
      "Mentorship from senior professionals",
      "Flexible working hours",
      "Certificate of completion",
      "Potential full-time employment opportunity",
      "Access to learning resources and courses",
    ];
    benefits.innerHTML = benefitList
      .map((benefit) => `<li>${benefit}</li>`)
      .join("");
  }

  // Update company description
  const companyDescription = document.getElementById("company-description");
  if (companyDescription) {
    companyDescription.textContent = getCompanyDescription(internship.company);
  }
}

// Update element content
function updateElement(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
  }
}

// Load similar internships
function loadSimilarInternships(currentInternship) {
  const similarJobsContainer = document.getElementById("similar-jobs");
  if (!similarJobsContainer) return;

  const internships = window.internshipsData || [];
  const similarInternships = internships
    .filter(
      (emp) =>
        emp.id !== currentInternship.id &&
        emp.category === currentInternship.category
    )
    .slice(0, 3);

  if (similarInternships.length === 0) {
    similarJobsContainer.innerHTML = "<p>No similar internships found.</p>";
    return;
  }

  similarJobsContainer.innerHTML = similarInternships
    .map(
      (internship) => `
        <div class="similar-job" onclick="viewInternshipDetail(${internship.id})">
            <div class="similar-job-header">
                <h4>${internship.title}</h4>
                <span class="similar-company">${internship.company}</span>
            </div>
            <div class="similar-job-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${internship.location}</span>
                <span><i class="fas fa-rupee-sign"></i> ${internship.stipend}</span>
            </div>
        </div>
    `
    )
    .join("");
}

// Initialize modal functionality
function initializeModal() {
  const modal = document.getElementById("application-modal");
  if (!modal) return;

  // Close modal when clicking outside
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeApplicationModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeApplicationModal();
    }
  });
}

// Open application modal
function openApplicationModal() {
  const modal = document.getElementById("application-modal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Add animation
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.transition = "opacity 0.3s ease";
      modal.style.opacity = "1";
    }, 10);
  }
}

// Close application modal
function closeApplicationModal() {
  const modal = document.getElementById("application-modal");
  if (modal) {
    modal.style.transition = "opacity 0.3s ease";
    modal.style.opacity = "0";

    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }
}

// Submit application
function submitApplication() {
  const form = document.getElementById("application-form");
  if (!form) return;

  // Get form data
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
    showError("Please fill in all required fields.");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(applicationData["applicant-email"])) {
    showError("Please enter a valid email address.");
    return;
  }

  // Validate phone number
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(applicationData["applicant-phone"])) {
    showError("Please enter a valid 10-digit phone number.");
    return;
  }

  // Show loading state
  const submitBtn = document.querySelector(".modal-footer .btn-primary");
  const originalText = submitBtn.textContent;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    // In a real application, this would submit to an API
    console.log("Application submitted:", {
      ...applicationData,
      internshipId: currentInternship?.id,
      internshipTitle: currentInternship?.title,
      company: currentInternship?.company,
      appliedAt: new Date().toISOString(),
    });

    // Show success message
    showSuccess(
      "Application submitted successfully! We will get back to you soon."
    );

    // Reset form and close modal
    form.reset();
    closeApplicationModal();

    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// Save internship to favorites
function saveInternship() {
  if (!currentInternship) return;

  let favorites = JSON.parse(
    localStorage.getItem("favoriteInternships") || "[]"
  );

  if (!favorites.includes(currentInternship.id)) {
    favorites.push(currentInternship.id);
    localStorage.setItem("favoriteInternships", JSON.stringify(favorites));
    showSuccess("Internship saved to your favorites!");

    // Update button text
    const saveBtn = document.querySelector(".btn-outline");
    if (saveBtn) {
      saveBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
      saveBtn.style.background = "#10b981";
      saveBtn.style.color = "white";
      saveBtn.style.borderColor = "#10b981";
    }
  } else {
    showInfo("Internship already in your favorites!");
  }
}

// Apply for internship
function applyInternship() {
  if (!currentInternship) return;

  // Check if user is logged in (in a real app)
  // For now, just open the application modal
  openApplicationModal();
}

// Utility functions
function getTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCompanyDescription(companyName) {
  const descriptions = {
    "TechCorp India":
      "A leading technology company specializing in innovative software solutions for businesses worldwide.",
    "DataViz Solutions":
      "A data analytics company that helps organizations make data-driven decisions through advanced analytics.",
    GrowthHackers:
      "A digital marketing agency focused on helping startups and businesses achieve rapid growth.",
    "CloudTech Solutions":
      "A cloud computing company providing scalable infrastructure solutions for modern applications.",
    "DesignStudio Pro":
      "A creative design agency specializing in UI/UX design and brand identity development.",
    FinanceCorp:
      "A financial services company providing comprehensive business analysis and consulting services.",
    "AppTech Solutions":
      "A mobile app development company creating innovative solutions for iOS and Android platforms.",
    ContentCraft:
      "A content marketing agency helping brands create engaging content that drives results.",
  };

  return (
    descriptions[companyName] ||
    "A leading company in their industry, committed to innovation and excellence."
  );
}

// Show success message
function showSuccess(message) {
  showNotification(message, "success");
}

// Show error message
function showError(message) {
  showNotification(message, "error");
}

// Show info message
function showInfo(message) {
  showNotification(message, "info");
}

// Show notification
function showNotification(message, type = "info") {
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
        max-width: 400px;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Check if internship is in favorites
function checkFavoriteStatus() {
  if (!currentInternship) return;

  const favorites = JSON.parse(
    localStorage.getItem("favoriteInternships") || "[]"
  );
  const isFavorite = favorites.includes(currentInternship.id);

  const saveBtn = document.querySelector(".btn-outline");
  if (saveBtn && isFavorite) {
    saveBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    saveBtn.style.background = "#10b981";
    saveBtn.style.color = "white";
    saveBtn.style.borderColor = "#10b981";
  }
}

// Initialize favorite status check
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(checkFavoriteStatus, 100);
});

// Export functions for global access
window.internshipDetail = {
  openApplicationModal,
  closeApplicationModal,
  submitApplication,
  saveInternship,
  applyInternship,
};
