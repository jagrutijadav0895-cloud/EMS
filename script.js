const searchInput = document.querySelector('#employeeSearch');
const rows = Array.from(document.querySelectorAll('#employeeTable tr'));

searchInput?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    row.hidden = query !== '' && !rowText.includes(query);
  });
});
