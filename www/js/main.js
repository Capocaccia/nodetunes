$('.btn_search').on('click', function() {
    var artistName = $('input[name="name"]').val();
    var nameObj = {name: artistName}
    $.get('search/results', nameObj, function(artists) {
      appendArtists(artists)
    })
    event.preventDefault();
})

function appendArtists(artists) {
  console.log(artists)
  //html for each artist
  artists.forEach(function(artist) {
    var html = '<option value=' + artist._id + ' >' + artist.name + '</option>';
  })
};
