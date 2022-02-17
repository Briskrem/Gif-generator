$('form').on('submit', function(e){
    e.preventDefault()
    getGif($('input').val())
    
})

function clearButton(){
    $('#clear').on('click', function(){
        $("#container").empty()
    })
}




async function getGif(input){
    const apiKey = 'CxjaKHKylEvGUlLWAW2qbY8PWHgNIgm7'
    const request = await axios.get(`https://api.giphy.com/v1/gifs/search?limit=25&offset=0&rating=g&lang=en`, {params: {q : input,api_key: apiKey}})
    console.log(request)
    createImg(request)
}

function createImg(req){
    let selector = Math.floor(Math.random()*(req.data.data.length))
    let cardDiv = $('<div></div>').addClass('cardContainer').appendTo('#container')
    let mainCardContainer = $('<div></div>').addClass('item').appendTo(cardDiv)
    $('<img></img>').attr('src', `${req.data.data[selector].images.original.url}`).appendTo(mainCardContainer)
   
}