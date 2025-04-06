document.querySelectorAll('.work_archive_button').forEach(button => {
  button.addEventListener('click', () => {
    // Get the year from the button's data attribute
    const year = button.getAttribute('data-year');
    // Build the target id from the year (e.g., "year2022")
    const targetElement = document.getElementById('year' + year);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
