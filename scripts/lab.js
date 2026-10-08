const accentInput = document.querySelector("#accent-color");
const surfaceInput = document.querySelector("#surface-color");
const demoCard = document.querySelector("[data-demo-card]");
const tokenOutput = document.querySelector("[data-token-output]");
const labStatus = document.querySelector("[data-lab-status]");
const copyButton = document.querySelector("[data-copy-css]");
const resetButton = document.querySelector("[data-reset-colors]");
const initialColors = { accent: "#c7f36a", surface: "#d9e4cc" };

function updatePalette() {
  if (!(accentInput instanceof HTMLInputElement) ||
      !(surfaceInput instanceof HTMLInputElement) ||
      !(demoCard instanceof HTMLElement) ||
      !tokenOutput) return;

  const accent = accentInput.value.toLowerCase();
  const surface = surfaceInput.value.toLowerCase();
  demoCard.style.setProperty("--demo-accent", accent);
  demoCard.style.setProperty("--demo-surface", surface);
  tokenOutput.textContent = `:root {\n  --accent: ${accent};\n  --surface: ${surface};\n}`;
}

accentInput?.addEventListener("input", updatePalette);
surfaceInput?.addEventListener("input", updatePalette);

resetButton?.addEventListener("click", () => {
  if (!(accentInput instanceof HTMLInputElement) ||
      !(surfaceInput instanceof HTMLInputElement) ||
      !labStatus) return;

  accentInput.value = initialColors.accent;
  surfaceInput.value = initialColors.surface;
  updatePalette();
  labStatus.textContent = "Colors reset to the original palette.";
});

copyButton?.addEventListener("click", async () => {
  if (!tokenOutput || !labStatus) return;

  if (!navigator.clipboard?.writeText) {
    labStatus.textContent = "Clipboard access is unavailable here. Select the CSS above and copy it manually.";
    return;
  }

  try {
    await navigator.clipboard.writeText(tokenOutput.textContent ?? "");
    labStatus.textContent = "CSS tokens copied to your clipboard.";
  } catch (error) {
    labStatus.textContent = "Could not access the clipboard. Select the CSS above and copy it manually.";
  }
});

updatePalette();
