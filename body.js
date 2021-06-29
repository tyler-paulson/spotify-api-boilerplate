function connectToSpotify(access_token, token_type) {

    let artists = ['3sva1UjOJOx6cGISZOpItl', '3CjlHNtplJyTf9npxaPl5w'];

    $.ajax({
        url: 'https://api.spotify.com/v1/artists',
        data: {
            ids: artists.join()
        },
        headers: {
            'Authorization': token_type + ' ' + access_token
        },
        success: function(response) {
            console.log(response);
        }
    });

}

if(window.location.hash) {

    let hash = window.location.hash.substring(1);
    let access_token = new URLSearchParams(hash).get('access_token');
    let token_type = new URLSearchParams(hash).get('token_type');

    localStorage.setItem('spotify_access_token', access_token);
    localStorage.setItem('spotify_token_type', token_type);

    connectToSpotify(access_token, token_type);

} else if(localStorage.getItem('spotify_access_token')) {

    connectToSpotify(localStorage.getItem('spotify_access_token'), localStorage.getItem('spotify_token_type'));

} else {

    console.log('No Spotify connection');

}