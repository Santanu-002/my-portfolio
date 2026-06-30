/**
 * Projects module: Handles the dynamic details modal for portfolio projects.
 */
export function initProjects() {
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal || !projectCards.length) return;

  // Project details dataset
  const projectsData = {
    trackyond: {
      title: "Trackyond",
      subtitle: "Workforce Management Platform",
      tech: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
      features: [
        "Authentication: Phone OTP verification with rate limits and active cooldown tracking.",
        "Role Management: Distinct workflows tailored for Employers/Owners and Employees/Workers.",
        "Attendance tracking: Check-in/check-out events paired with geo-location coordinates.",
        "Job Chat: Rich media sharing (image, video, and document uploads) in job-specific rooms.",
        "Custom camera utility: Dynamic media capture with trimmed video support.",
        "System-wide notifications with deep link capabilities to inline details pages."
      ],
      developed: "Developed as a decoupled client-server architecture. The mobile client follows a Clean Architecture layered model powered by GetX for state and routing, Dio for requests (with automatic token refreshes), and fpdart for functional error boundary controls. The backend mock server is written in FastAPI with PostgreSQL/SQLAlchemy DB models, Redis session caching, Alembic database migrations, and complete Docker Compose configurations.",
      links: {
        apk: "https://github.com/Santanu-002/trackyond/releases",
        github: "https://github.com/Santanu-002/trackyond"
      },
      screens: {
        dashboard: `
          <div class="phone-status-bar">
            <span>9:41 AM</span>
            <span>📶 🔋 100%</span>
          </div>
          <div class="phone-app-bar">
            <span style="font-size:12pt;cursor:pointer;">☰</span>
            <h4 style="margin:0;">Dashboard</h4>
            <span style="position:relative;cursor:pointer;">🔔<span style="position:absolute;top:-2px;right:-2px;width:5px;height:5px;background:#ef4444;border-radius:50%;"></span></span>
          </div>
          
          <p class="mock-section-title">Team Status</p>
          <div class="team-status-scroll">
            <div class="team-status-card">
              <div class="status-avatar-circle blue">R</div>
              <span class="status-card-name">Ravi</span>
              <span class="status-card-indicator working">
                <span class="status-card-dot"></span>Working
              </span>
              <span class="status-card-time">9:45 AM</span>
            </div>
            <div class="team-status-card">
              <div class="status-avatar-circle orange">A</div>
              <span class="status-card-name">Amit</span>
              <span class="status-card-indicator working">
                <span class="status-card-dot"></span>Working
              </span>
              <span class="status-card-time">10:15 AM</span>
            </div>
            <div class="team-status-card">
              <div class="status-avatar-circle purple">S</div>
              <span class="status-card-name">Suresh</span>
              <span class="status-card-indicator not-started">
                <span class="status-card-dot"></span>Not Started
              </span>
              <span class="status-card-time">-</span>
            </div>
          </div>

          <div class="mock-stats-grid">
            <div class="mock-stat-card">
              <div class="mock-stat-num">5 <span class="mock-stat-dot orange"></span></div>
              <div class="mock-stat-label">Pending</div>
            </div>
            <div class="mock-stat-card">
              <div class="mock-stat-num">3 <span class="mock-stat-dot blue"></span></div>
              <div class="mock-stat-label">In Progress</div>
            </div>
            <div class="mock-stat-card">
              <div class="mock-stat-num">8 <span class="mock-stat-dot green"></span></div>
              <div class="mock-stat-label">Completed</div>
            </div>
          </div>

          <p class="mock-section-title">Jobs</p>
          <div class="mock-job-list">
            <div class="mock-job-card">
              <div class="mock-job-header">
                <h5 class="mock-job-title">AC Repair – Sharma Villa</h5>
                <span class="mock-job-badge in-progress">In Progress</span>
              </div>
              <div class="mock-job-assignee">
                <div class="mock-job-avatar-circle blue">R</div>
                <span class="mock-job-assignee-name">Ravi</span>
              </div>
              <div class="mock-job-status-line">
                <span style="color:#16a34a;margin-right:2px;">●</span> Started · 10:25 AM
              </div>
            </div>
            <div class="mock-job-card">
              <div class="mock-job-header">
                <h5 class="mock-job-title">Plumbing Work – Mehta House</h5>
                <span class="mock-job-badge pending">Pending</span>
              </div>
              <div class="mock-job-assignee">
                <div class="mock-job-avatar-circle orange">A</div>
                <span class="mock-job-assignee-name">Amit</span>
              </div>
              <div class="mock-job-status-line">
                🕒 No updates yet
              </div>
            </div>
          </div>
        `,
        jobs: `
          <div class="phone-status-bar">
            <span>10:02 AM</span>
            <span>📶 🔋 98%</span>
          </div>
          <div class="phone-app-bar">
            <div class="phone-avatar" style="background:#ec4899;">S</div>
            <h4 style="margin:0;">Jobs</h4>
            <span style="cursor:pointer;">🔔</span>
          </div>
          
          <div class="reached-banner">
            📍 Reached · 10:02 AM
          </div>

          <div class="mock-job-list" style="margin-top: 6px;">
            <div class="mock-job-card">
              <div class="mock-job-header">
                <h5 class="mock-job-title">Plumbing Work – Verma House</h5>
                <span class="mock-job-badge pending">Pending</span>
              </div>
              <div class="mock-job-assignee">
                <div class="mock-job-avatar-circle orange">A</div>
                <span class="mock-job-assignee-name">Amit Singh</span>
              </div>
              <div class="mock-job-status-line">
                🕒 No updates yet
              </div>
            </div>
            <div class="mock-job-card">
              <div class="mock-job-header">
                <h5 class="mock-job-title">Electrical Repair – Gupta Apartment</h5>
                <span class="mock-job-badge completed">Completed</span>
              </div>
              <div class="mock-job-assignee">
                <div class="mock-job-avatar-circle grey">R</div>
                <span class="mock-job-assignee-name">Rajesh Patel</span>
              </div>
              <div class="mock-job-status-line" style="color:#16a34a;font-weight:600;">
                ✓ Completed
              </div>
            </div>
            <div class="mock-job-card">
              <div class="mock-job-header">
                <h5 class="mock-job-title">Fan Installation – Singh Residence</h5>
                <span class="mock-job-badge in-progress">In Progress</span>
              </div>
              <div class="mock-job-assignee">
                <div class="mock-job-avatar-circle blue">R</div>
                <span class="mock-job-assignee-name">Ravi Kumar</span>
              </div>
              <div class="mock-job-status-line">
                ▶ Started · 10:25 AM
              </div>
            </div>
          </div>
          <div class="phone-fab">+</div>
        `
      },
      isMobile: true
    },
    spendsum: {
      title: "SpendSum",
      subtitle: "Personal Finance Tracker",
      tech: ["Flutter", "BLoC", "Drift SQLite", "fpdart", "GoRouter"],
      features: [
        "Monthly Spend Header Card with % change versus last month.",
        "Horizontal Category Scroll (Food, Travel, Shopping, Groceries, Bills, etc.).",
        "Recent Transactions List with swipe-to-delete & undo toast triggers.",
        "57 pre-seeded mock transactions on the very first application run.",
        "Full Light & Dark theme support with Outfit and Inter font pairings."
      ],
      developed: "Developed using a collaborative human-AI process (using STICH design systems, gemini.md engineering constraints, Antigravity AI coding agent, and skills.sh). The stack uses Flutter BLoC/Cubit for state management, Drift (SQLite) for high-performance reactive local persistence, GoRouter for declarative routing, and fpdart's Either/Option types for functional programming error handling.",
      links: {
        apk: "https://drive.google.com/drive/folders/1WixPnjVGL1q4yiB0pUpNz9QLtPEZ8B0P?usp=sharing",
        github: "https://github.com/Santanu-002/spend_sum"
      },
      imageLayout: `
        <div class="mockup-header">
          <span>SpendSum Analytics</span>
          <span style="color:#6366f1;">$1,420.50</span>
        </div>
        <div class="mockup-chart-box">
          <div class="chart-doughnut">
            <div class="chart-center" style="color:#818cf8;">$420</div>
          </div>
        </div>
        <div class="mockup-list">
          <div class="mockup-item">
            <span style="font-size:10pt;">🍔</span>
            <div class="mockup-line"></div>
            <span style="color:#ef4444;font-size:7pt;font-weight:600;margin-left:auto;">-$12.50</span>
          </div>
          <div class="mockup-item">
            <span style="font-size:10pt;">🚗</span>
            <div class="mockup-line short"></div>
            <span style="color:#ef4444;font-size:7pt;font-weight:600;margin-left:auto;">-$45.00</span>
          </div>
        </div>
      `,
      isMobile: true
    },
    xoom: {
      title: "Xoom",
      subtitle: "Video Meeting Platform",
      tech: ["Next.js", "Clerk Auth", "Stream Video SDK"],
      features: [
        "Built a video conferencing platform using Next.js, Clerk Authentication, and Stream Video SDK.",
        "Implemented meeting scheduling, cloud recordings, and secure room-based communication.",
        "Developed responsive interfaces optimized for desktop and mobile devices."
      ],
      developed: "Developed using Next.js 14 App Router, utilizing Clerk for authentication/session state and Stream Video SDK for real-time low-latency video and audio transmission.",
      links: {
        apk: null, // No APK for web app
        github: "https://github.com/Santanu-002/xoom"
      },
      imageLayout: `
        <div class="mockup-video-grid">
          <div class="video-cell active">🧑‍💻 <span class="video-name">You (Host)</span></div>
          <div class="video-cell">👨‍💼 <span class="video-name">Client</span></div>
          <div class="video-cell">👩‍🎨 <span class="video-name">Designer</span></div>
          <div class="video-cell">👨‍🔧 <span class="video-name">Dev Team</span></div>
        </div>
        <div class="mockup-controls">
          <div class="ctrl-btn">🎤</div>
          <div class="ctrl-btn">📷</div>
          <div class="ctrl-btn">🖥️</div>
          <div class="ctrl-btn red">📞</div>
        </div>
      `,
      isMobile: false
    }
  };

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Reset scroll position of modal content
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
      modalContent.scrollTop = 0;
    }

    // Populate Title, Subtitle, Dev info
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-subtitle").textContent = data.subtitle;
    document.getElementById("modal-dev-info").textContent = data.developed;

    // Populate Tech pills
    const techContainer = document.getElementById("modal-tech");
    techContainer.innerHTML = "";

    // Icon mapper for tech stack tags
    const getTechIconHTML = (tech) => {
      const lower = tech.toLowerCase();
      if (lower.includes("flutter")) {
        return `<img src="assets/flutter.png" alt="Flutter" class="tech-icon" />`;
      } else if (lower.includes("fastapi")) {
        return `<img src="assets/FastAPI.png" alt="FastAPI" class="tech-icon" />`;
      } else if (lower.includes("postgresql")) {
        return `<img src="assets/postgresql.png" alt="PostgreSQL" class="tech-icon" />`;
      } else if (lower.includes("redis")) {
        return `
          <svg viewBox="0 0 24 24" class="tech-icon svg-icon" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        `;
      } else if (lower.includes("bloc")) {
        return `<img src="assets/bloc.png" alt="BLoC" class="tech-icon" />`;
      } else if (lower.includes("drift") || lower.includes("sqlite")) {
        return `<img src="assets/sqlite.png" alt="SQLite" class="tech-icon" />`;
      } else if (lower.includes("fpdart") || lower.includes("dart")) {
        return `<img src="assets/dart.png" alt="Dart" class="tech-icon" />`;
      } else if (lower.includes("next.js") || lower.includes("nextjs")) {
        return `<img src="assets/next-js.png" alt="Next.js" class="tech-icon" />`;
      } else if (lower.includes("clerk")) {
        return `
          <svg viewBox="0 0 24 24" class="tech-icon svg-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        `;
      } else if (lower.includes("stream")) {
        return `
          <svg viewBox="0 0 24 24" class="tech-icon svg-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        `;
      } else if (lower.includes("websocket")) {
        return `
          <svg viewBox="0 0 24 24" class="tech-icon svg-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
          </svg>
        `;
      } else if (lower.includes("gorouter")) {
        return `
          <svg viewBox="0 0 24 24" class="tech-icon svg-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
      }
      return "";
    };

    data.tech.forEach((t) => {
      const span = document.createElement("span");
      span.innerHTML = `${getTechIconHTML(t)}${t}`;
      techContainer.appendChild(span);
    });

    // Populate Features
    const featuresContainer = document.getElementById("modal-features");
    featuresContainer.innerHTML = "";
    data.features.forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f;
      featuresContainer.appendChild(li);
    });

    // Populate Image Layout depending on whether it's mobile or desktop
    const visualsContainer = document.querySelector(".project-image-showcase");
    visualsContainer.innerHTML = "";

    if (projectId === "trackyond") {
      // Build tabbed showcase wrapper
      const wrapper = document.createElement("div");
      wrapper.className = "showcase-wrapper";

      const tabs = document.createElement("div");
      tabs.className = "mockup-tabs";
      tabs.innerHTML = `
        <button class="mockup-tab-btn active" data-screen="dashboard">Dashboard</button>
        <button class="mockup-tab-btn" data-screen="jobs">Jobs Screen</button>
      `;

      const device = document.createElement("div");
      device.className = "device-mockup";

      const screen = document.createElement("div");
      screen.className = "screen-content light-theme";
      screen.innerHTML = data.screens.dashboard;

      device.appendChild(screen);
      wrapper.appendChild(tabs);
      wrapper.appendChild(device);
      visualsContainer.appendChild(wrapper);

      // Add event listeners to tab buttons
      const tabBtns = tabs.querySelectorAll(".mockup-tab-btn");
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          tabBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const targetScreen = btn.getAttribute("data-screen");
          screen.innerHTML = data.screens[targetScreen];
        });
      });
    } else if (data.isMobile) {
      // Build phone shell
      const device = document.createElement("div");
      device.className = "device-mockup";
      
      const screen = document.createElement("div");
      screen.className = "screen-content";
      screen.innerHTML = data.imageLayout;
      
      device.appendChild(screen);
      visualsContainer.appendChild(device);
    } else {
      // Build browser shell
      const browser = document.createElement("div");
      browser.className = "desktop-mockup";
      
      const browserHeader = document.createElement("div");
      browserHeader.className = "desktop-header";
      browserHeader.innerHTML = `
        <div class="dot-btn dot-red"></div>
        <div class="dot-btn dot-yellow"></div>
        <div class="dot-btn dot-green"></div>
      `;
      
      const screen = document.createElement("div");
      screen.className = "desktop-screen-content";
      screen.innerHTML = data.imageLayout;
      
      browser.appendChild(browserHeader);
      browser.appendChild(screen);
      visualsContainer.appendChild(browser);
    }

    // Populate buttons
    const apkBtn = document.getElementById("modal-apk-btn");
    const githubBtn = document.getElementById("modal-github-btn");

    if (data.links.apk) {
      apkBtn.href = data.links.apk;
      apkBtn.style.display = "flex";
      apkBtn.querySelector("span").textContent = "Download APK";
    } else {
      apkBtn.style.display = "none";
    }

    githubBtn.href = data.links.github;

    // Show modal
    modal.classList.add("active");
    document.documentElement.style.overflow = "hidden"; // lock page scroll (HTML)
    document.body.style.overflow = "hidden"; // lock page scroll (Body)
  }

  function closeModal() {
    modal.classList.remove("active");
    document.documentElement.style.overflow = ""; // restore page scroll (HTML)
    document.body.style.overflow = ""; // restore page scroll (Body)
  }

  // Bind clicks to cards
  projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Ignore click if it's on the repository icon anchor directly
      if (e.target.closest(".repo-link")) return;

      const projectId = card.getAttribute("data-project-id");
      if (projectId) {
        openModal(projectId);
      }
    });
  });

  // Bind close actions
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}
