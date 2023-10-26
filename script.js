const movies = [
    {
        id: 1,
        title: "Total Dhamaal",
        genre: "Comedy",
        description: "Total Dhamaal is an adventure comedy about a hidden stash of money and 8 interesting characters, all in a mad chase to be the first to claim it.",
        price: 20.00,
        image: "./movie1.jpg" 
    },
    {
        id: 2,
        title: "Brahmastra",
        genre: "Adventure",
        description: "Brahmastra Part One: Shiva is a movie that follows the story of Shiva, a young DJ in Mumbai who discovers that he has a special power that makes him immune and akin to fire. The movie is part one of a planned trilogy. Shiva's world is turned upside down when he learns that he has a mysterious connection to the Brahmastra, a weapon of enormous energy, and a great power within him that he doesn't understand just yet",
        price: 25.00,
        image: "./movie2.jpg"
    },
    {
        id: 3,
        title: "Ae Dil Hai Mushkil",
        genre: "Romantic",
        description: "Ae Dil Hai Mushkil is a Hindi phrase that literally translates to This heart is difficult. It is a way of expressing the complications and troubles of love. It is also the title of a song and a film, where the protagonist, a singer, misses his love interest and expresses his feelings through the song.",
        price: 18.00,
        image: "./movie3.jpg"
    },
    {
        id: 4,
        title: "Ram Setu",
        genre: "Adventure",
        description: "Ram Setu is a bridge that connects India and Sri Lanka. It is a series of limestone shoals that stretches for about 30 km across the Gulf of Mannar. It is also known as Adam's Bridge and Rama's Bridge. It has different meanings for Hindu and Muslim mythology. Hindus believe that it is built by Lord Ram, while Muslims believe that it is used by Adam. Scientific facts state that it is a natural feature formed by sedimentation and glaciation processes25. NASA released the images of the bridge in 2001.",
        price: 25.00,
        image: "./movie5.jpg"
    },
    {
        id: 5,
        title: "RRR",
        genre: "Action",
        description: "RRR is a movie that centers around fictional versions of two Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem, their friendship, and their fight against the British Raj. The official synopsis reads: A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s. The movie is an action spectacle that uses CGI to bend the laws of physics and reality itself. RRR is an acronym for Roudram Ranam Rudhiram which can be roughly translated from Telugu as Fierce Death Blood.",
        price: 20.00,
        image: "./movie6.jpg"
    },
    {
        id: 6,
        title: "Fukrey 3",
        genre: "Comedy",
        description: "Fukrey 3 is a movie about good-for-nothing guys entering politics. The story picks up where its precursor left off, with Hunny, Choocha, and Lali gearing up to battle their adversary Bholi Punjaban in the Delhi legislative assembly elections. The movie is about how Choocha and Hunny end up with a gift to create petrol, which lands them in trouble with the water mafia. The plot takes the audience on a whirlwind journey, spanning from coal mines in Africa to an amusement park in Delhi.",
        price: 22.00,
        image: "./movie7.jpg"
    },
    {
        id: 7,
        title: "Cuttputlli",
        genre: "Drama",
        description: "Cuttputlli is a 2022 Indian Hindi-language psychological crime thriller film directed by Ranjit M. Tewari and produced by Vashu Bhagnani, Jackky Bhagnani and Deepshikha Deshmukh under Pooja Entertainment. The movie revolves around a psychotic killer who targets schoolgirls. Arjan Sethi (Akshay Kumar), an aspiring filmmaker, becomes a sub-inspector in the Himachal Pradesh Police and investigates the case himself with the help of a few policemen, including Head Constable Mahinder Guleria.",
        price: 15.00,
        image: "./movie8.jpg"
    },
    {
        id: 8,
        title: "Shershaah",
        genre: "Action",
        description: "Shershaah is a 2021 Indian Hindi-language biographical war film based on the life of Vikram Batra, killed in action in the Kargil War, directed by Vishnuvardhan in his Hindi film debut and written by Sandeep Shrivastava.",
        price: 15.00,
        image: "./movie9.jpg"
    },
    {
        id: 9,
        title: "Sita Ramam",
        genre: "Romantic",
        description: "Sita Ramam is a romantic drama film set in 1964. It follows the story of Lieutenant Ram, an orphaned army officer serving at the Kashmir border, who receives anonymous love letters from Sita Mahalakshmi. Ram sets out to find Sita and propose his love, while facing various challenges and dangers. The film was shot in Hyderabad, Kashmir and Russia. It has a run-time of 163 minutes.",
        price: 13.00,
        image: "./movie10.jpg"
    },
    {
        id: 10,
        title: "Yaariyan",
        genre: "Drama",
        description: "Yaariyan tells the story of 5 friends who has been assigned task by their principal to compete with Australian team to save their college from being sold off by a powerful business man.",
        price: 10.00,
        image: "./movie11.jpg"
    },
    {
        id: 11,
        title: "3 idiots",
        genre: "Comedy",
        description: "3 Idiots is a coming-of-age comedy-drama film that follows the friendship of three engineering students, Farhan, Raju, and Rancho, who meet at an elite college in India. The film is a satire about the social pressures and the education system that force students to conform and compete. The film also shows the adventures and challenges that the three friends face, such as crashing a wedding and a funeral, falling in love, and finding their lost buddy.",
        price: 10.00,
        image: "./movie12.jpg"
    },
    {
        id: 12,
        title: "Kedarnath",
        genre: "Romantic",
        description: "Kedarnath is a movie that tells an inter-faith love story between a wealthy Hindu Brahmin girl and a Muslim boy who is a 'pithoo' (porter) working in the same vicinity. The movie portrays how the Muslim pithoo saves the Hindu tourist from the Uttrakhand floods at the pilgrimage, and the love that eventually develops between them.",
        price: 18.00,
        image: "./movie13.jpg"
    },
    {
        id: 13,
        title: "Chhichhore",
        genre: "Comedy",
        description: "The story is simple — a bunch of engineering students and their journey from being losers to choosers. Sushant Singh Rajput (Annirudh) and Shraddha Kapoor (Maya) play a divorced couple, and they have a reunion of sorts with their college buddies, though in rather unwanted circumstances.",
        price: 20.00,
        image: "./movie14.jpg"
    },
    {
        id: 14,
        title: "Avatar",
        genre: "Action",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        price: 13.00,
        image: "./movie15.jpg"
    },
    {
        id: 15,
        title: "Barbie",
        genre: "Comedy",
        description: "The film begins with The Narrator (Helen Mirren) explaining the societal impact of the Barbie doll on history, accompanied by a clip of the original 1959 Barbie towering over a desert landscape, while little girls playing with baby dolls begin to destroy them.",
        price: 16.00,
        image: "./movie16.jpg"
    },
    {
        id: 16,
        title: "The Nun II",
        genre: "Adventure",
        description: "The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.1956 - France.",
        price: 18.00,
        image: "./movie17.jpg"
    },
    {
        id: 17,
        title: "#Alive",
        genre: "Drama",
        description: "Parents need to know that #Alive is a 2020 Korean horror movie in which a teen must fend for himself in isolation in a Seoul apartment during a zombie apocalypse. Of course, there's constant zombie movie violence: zombies attack humans by clawing, biting, and eating them.",
        price: 10.00,
        image: "./movie18.jpg"
    },
    {
        id: 18,
        title: "Tiger Zinda Hai",
        genre: "Action",
        description: "Inspired by real events, Tiger Zinda Hai is a sequel to the blockbuster Ek Tha Tiger, and an espionage action drama that follows a daring rescue mission in Iraq.",
        price: 12.00,
        image: "./movie19.jpg"
    },
    {
        id: 19,
        title: "Jailer",
        genre: "Action",
        description: "Muthuvel Pandian (Rajinikanth) is a retired police officer who lives in Kodambakkam with his family. Muthuvel's son, ACP Arjun (Vasanth Ravi), is investigating Varman (Vinayakan), an eccentric gangster who smuggles idols of gods and sells them to buyers overseas, operating from his base of operations in Arakkonam.",
        price: 14.00,
        image:"./movie20.jpg"
    },
    {
        id: 20,
        title: "Dream Girl 2",
        genre: "Drama",
        description: "Karam secretly turns his female alter ego into a dancer and woos a millionaire's son in hopes of paying family debts and impressing his fiancée's father.",
        price: 22.00,
        image: "./movie21.jpg"
    },
    
];


const movieList = document.querySelector(".movie-list");
const searchInput = document.getElementById("search");
const genreSelect = document.getElementById("genre-select");
const movieDetails = document.querySelector(".movie-details");
const movieDetailsPopup = document.querySelector(".modal-content");

function filterMoviesByGenre(genre) {
    if (!genre) {
        return movies;
    }
    return movies.filter((movie) => movie.genre === genre);
}

function displayMovies(movieArray) {
    movieList.innerHTML = "";
    movieArray.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>Genre: ${movie.genre}</p>
            <p>Price: $${movie.price.toFixed(2)}</p>
            <button onclick="showMovieDetails(${movie.id})">Details</button>
        `;
        movieList.appendChild(movieCard);
    });
}

function showMovieDetails(movieId) {
    const movie = movies.find((m) => m.id === movieId);

    if (window.innerWidth <= 1024) {
        const modal = document.querySelector(".modal");
        modal.style.display = "flex";
        movieDetailsPopup.innerHTML = `
            <a class="modal-close-button" onclick="closeModal()">Close</a>
            <img src="${movie.image}" alt="${movie.title} Poster" style="max-width: 100%; height: auto; width: 200px; height: 300px;">
            <h2>${movie.title}</h2>
            <p>Genre: ${movie.genre}</p>
            <p>Description: ${movie.description}</p>
            <p>Price: $${movie.price.toFixed(2)}</p>
            <div class="ticket-input">
                <label for="ticketQuantity">No. Of Tickets:</label>
                <input type="number" id="ticketQuantity" value="1" min="1">
            </div>
            <a href="./checkout.html">
                <button class="modal-button">Book Now</button>
            </a>
        `;
    } else {
        movieDetails.innerHTML = `
            <img src="${movie.image}" alt "${movie.title} Poster" style="max-width: 100%; height: auto; width: 200px; height: 300px;">
            <h2>${movie.title}</h2>
            <p>Genre: ${movie.genre}</p>
            <p>Description: ${movie.description}</p>
            <p>Price: $${movie.price.toFixed(2)}</p>
            <div class="ticket-input">
                <label for="ticketQuantity">No. Of Tickets:</label>
                <input type="number" id="ticketQuantity" value="1" min="1">
            </div>
            <a href="./checkout.html">
                <button>Book Now</button>
            </a>
        `;
    }
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}


function handleSearch() {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery)
    );
    const selectedGenre = genreSelect.value;
    const genreFilteredMovies = filterMoviesByGenre(selectedGenre);
    const finalFilteredMovies = filteredMovies.filter((movie) =>
        genreFilteredMovies.includes(movie)
    );
    displayMovies(finalFilteredMovies);
}

function handleGenreFilter() {
    const selectedGenre = genreSelect.value;
    const filteredMovies = filterMoviesByGenre(selectedGenre);
    const searchQuery = searchInput.value.toLowerCase();
    const finalFilteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery)
    );
    displayMovies(finalFilteredMovies);
}

// Function to show the checkout page
function showCheckoutPage(movieId) {
    const movie = movies.find((m) => m.id === movieId);

    // Replace the movie details with checkout details
    movieDetails.innerHTML = `
        <h2>Checkout: ${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Price: $${movie.price.toFixed(2)}</p>
        <a href="./checkout.html">
           <button>Book Now</button>
        </a>
    `;
}


searchInput.addEventListener("input", handleSearch);
genreSelect.addEventListener("change", handleGenreFilter);

displayMovies(movies);

// Close the movie details when "Book Now" button is clicked
document.querySelector(".modal-button").addEventListener("click", closeModal);