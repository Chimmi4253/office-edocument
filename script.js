document.getElementById("bgcolor").addEventListener("input", function () {
  document.body.style.backgroundColor = this.value;
});

function uploadDocument() {
  const name = document.getElementById("docName").value;
  const category = document.getElementById("docCategory").value;

  if (name === "") {
    alert("Please enter a document name.");
    return;
  }

  const list = document.querySelector(`#${category} ul`);
  const item = document.createElement("li");
  const now = new Date().toLocaleString();
  item.textContent = `${name} (Uploaded on: ${now})`;
  list.appendChild(item);

  // Simulate storage (Optional: add real backend later)
  let docs = JSON.parse(localStorage.getItem(category) || "[]");
  docs.push({ name, date: now });
  localStorage.setItem(category, JSON.stringify(docs));

  document.getElementById("docName").value = "";
}

window.onload = () => {
  const categories = ["Handing Taking", "Budgeting", "Technical", "Administration"];
  categories.forEach(category => {
    const docs = JSON.parse(localStorage.getItem(category) || "[]");
    const list = document.querySelector(`#${category} ul`);
    docs.forEach(doc => {
      const item = document.createElement("li");
      item.textContent = `${doc.name} (Uploaded on: ${doc.date})`;
      list.appendChild(item);
    });
  });
};
