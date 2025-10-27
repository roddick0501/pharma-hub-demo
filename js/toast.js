// ✅ Create toast container if not already present
if (!document.getElementById("toast-container")) {
  const container = document.createElement("div");
  container.id = "toast-container";
  container.className = "fixed top-5 right-5 z-50 space-y-2";
  document.body.appendChild(container);
}

// ✅ Toast display function
window.showToast = function (msg, type = "error") {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");

  // Base styles
  toast.className = `toast px-4 py-3 rounded-lg shadow transition-all transform opacity-0 translate-y-[-10px]`;

  // Color depending on type
  if (type === "error") {
    toast.style.backgroundColor = "#fef2f2";
    toast.style.color = "#b91c1c";
    toast.style.borderLeft = "4px solid #b91c1c";
  } else if (type === "success") {
    toast.style.backgroundColor = "#ecfdf5";
    toast.style.color = "#065f46";
    toast.style.borderLeft = "4px solid #10b981";
  }

  toast.textContent = msg;
  toastContainer.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 100);

  // Remove after 4s
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};
