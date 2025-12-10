    const filterButtons = document.querySelectorAll(".section span");
    const categories = document.querySelectorAll(".category");
    const images = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const closeBtn = document.querySelector(".lightbox .close");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            categories.forEach(category => {
                if (filter === "all") {
                    category.style.display = "block";
                } else {
                    if (category.id === filter) {
                        category.style.display = "block";
                    } else {
                        category.style.display = "none";
                    }
                }
            });

            // ---- optional: make active button red ----
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
    images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        lightboxTitle.textContent = img.dataset.title;
        lightboxDesc.textContent = img.dataset.desc;
    });
    });

    closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
        lightbox.classList.remove("active");
        }
    });