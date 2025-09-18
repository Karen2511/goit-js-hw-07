const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

categories.forEach(item => {
  const title = item.querySelector(':scope > h2').textContent.trim();
  const elementsCount = item.querySelector(':scope > ul').children.length;

  console.log('Category:', title);
  console.log('Elements:', elementsCount);
});
