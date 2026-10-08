const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-category]");
const resultCount = document.querySelector("[data-result-count]");

function applyProjectFilter(category) {
  let visibleCount = 0;

  cards.forEach((card) => {
    const isVisible = category === "all" || card.dataset.category.split(" ").includes(category);
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (resultCount) {
    resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
  }
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.setAttribute("aria-pressed", String(item === filter)));
    applyProjectFilter(filter.dataset.filter);
  });
});

applyProjectFilter("all");
