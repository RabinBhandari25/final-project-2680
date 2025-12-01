const filterButtons = document.querySelectorAll(".section span");
    const categories = document.querySelectorAll(".category");

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