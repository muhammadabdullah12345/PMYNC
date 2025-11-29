import "../components/faq.css";

export async function toggleItem(id) {
  const content = document.getElementById(`content-${id}`);
  const iconPlus = document.getElementById(`icon-plus-${id}`);
  const iconMinus = document.getElementById(`icon-minus-${id}`);
  content.classList.toggle("hidden");
  iconPlus.classList.toggle("hidden");
  iconMinus.classList.toggle("hidden");
}

export async function loadFAQ() {
  const res = await fetch("/components/faq.html");
  const html = await res.text();
  target.innerHTML = html;
}
