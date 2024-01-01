const animeData = [
  {
    image: "images/Naruto.jpg",
    name: "Naruto Shippuden",
    rating: {
      stars: 4.5,
      count: 1800,
    }
  },
  {
    image: "images/Death Note.jpg",
    name: "Death Note",
    rating: {
      stars: 4.5,
      count: 2000,
    }
  },
  {
    image: "images/Demon Slayer.jpg",
    name: "Demon Slayer",
    rating: {
      stars: 4.5,
      count: 1500
    }
  },
  {
    image: "images/AOT.jpg",
    name: "Attack on Titan",
    rating: {
      stars: 4.5,
      count: 1500
    }
  },
  {
    image: "images/One Piece.jpg",
    name: "One Piece",
    rating: {
      stars: 4,
      count: 1200
    }
  },
  {
    image: "images/One punch man.jpg",
    name: "One Punch Man",
    rating: {
      stars: 4,
      count: 580
    }
  },
  {
    image: "images/SpyXFamily.jpg",
    name: "SPYxFAMILY",
    rating: {
      stars: 4.5,
      count: 1274
    }
  }, 
  {
    image: "images/Hunter X Hunter.jpg",
    name: "HunterxHunter",
    rating: {
      stars: 4,
      count: 873
    }
  }, 
  {
  
    image: "images/jjk.jpg",
    name: "Jujutsu Kaisen",
    rating: {
      stars: 4.5,
      count: 8700
    }
  
  }, {
    
    image: "images/dragonballz.jpg",
    name: "Dragon Ball Z",
    rating: {
      stars: 4,
      count: 6023
    }
  
  }

]

let animeHTML = "";
animeData.forEach((anime)=>{
  animeHTML += `
  <div class="animes-data">
        <div class="sub-anime-img-file">
          <img src = "${anime.image}" alt = "anime-pic">
        </div>
        <div class="sub-anime-data-file">
          <p> ${anime.name} </p>
          <div class="anime-buttons"> 
            <button> Watch here </button>
            <button> Add to Cart </button>
          </div>
        </div>
        <div class="sub-anime-ratings-file">
          <p> Ratings: </p>
          <img src = "ratings/rating-${anime.rating.stars*10}.png" alt = "rating">
          <p> ${anime.rating.count} </p>
        </div>
      </div>
  `;

})

document.querySelector(".all-anime-info").innerHTML = animeHTML;