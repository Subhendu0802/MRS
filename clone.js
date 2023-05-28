const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query !== '') {
    window.location.href = `/search?q=${query}`;
  }
});
 
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query !== '') {
      window.location.href = `/search?q=${query}`;
    }
  }
});

//navigation button

$('card').owlCarousel({
loop:true,
margin:10,
nav:false,
dots:true,
responsive:{
  1000:{
    items:3
  }
}



});

