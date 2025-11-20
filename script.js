const navbar = document.querySelector(".navbar");
const heroSection = document.getElementById("heroSection");
const heroLogo = document.getElementById("heroLogo");
const heroTagline = document.getElementById("heroTagline");
const heroDesc = document.getElementById("heroDesc");
const heroMetaPrimary = document.getElementById("heroMetaPrimary");
const heroMetaSecondary = document.getElementById("heroMetaSecondary");
const playBtn = document.getElementById("playBtn");
const detailBtn = document.getElementById("detailBtn");
const trailerBtn = document.getElementById("trailerBtn");
const shareBtn = document.getElementById("shareBtn");
const filmTriggers = document.querySelectorAll(".js-film-trigger");
const homeLinks = document.querySelectorAll("[data-home-link]");
const searchLinks = document.querySelectorAll("[data-search-link]");
const logo = document.querySelector(".logo");
const introOverlay = document.getElementById("introOverlay");
const introCanvas = document.getElementById("introCanvas");
const introSnow = document.getElementById("introSnow");
const introClose = document.getElementById("introClose");

const detailModal = document.getElementById("detailModal");
const detailModalClose = document.getElementById("detailModalClose");
const modalLogo = document.getElementById("modalLogo");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalImdb = document.getElementById("modalImdb");
const modalRuntime = document.getElementById("modalRuntime");
const modalYear = document.getElementById("modalYear");
const modalStudios = document.getElementById("modalStudios");
const modalCast = document.getElementById("modalCast");

const HOME_FILM_ID = "spider-man-homecoming";
let currentFilmId = HOME_FILM_ID;
let isDetailView = false;

const filmData = {
    "spider-man-homecoming": {
        id: "spider-man-homecoming",
        title: "Örümcek-Adam: Eve Dönüş",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A714B8636C7DC3C08550955BE2B47C7565AA22A33E479D7991F6B0ECF2E42207/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "IMAX Enhanced Formatıyla Yayında",
        description: "Yenilmezler ile yaşadığı maceranın büyüsüne kapılan genç Peter Parker kendini kanıtlama isteğiyle dolup taşar. Akbaba yepyeni bir düşmanı olarak ortaya çıktığında ise Peter'ın kendini gösterme fırsatı çıkacak, ancak en değerli gördüğü herkes tehdit altında olacaktır.",
        year: "2017",
        duration: "2s 13dk",
        genres: ["Aksiyon", "Macera", "Bilim Kurgu"],
        imdb: "7.4",
        studios: ["Marvel Studios", "Pascal Pictures", "Columbia Pictures"],
        cast: ["Tom Holland", "Michael Keaton", "Robert Downey Jr.", "Zendaya"],
        trailer: "https://www.youtube.com/watch?v=U0D3AOldjMU"
    },
    "toy-story-4": {
        id: "toy-story-4",
        title: "Toy Story 4",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/150BDAF862CADDA1A82C9BC646418CACFDB2D3E90E637B17F3ACA037CC352865/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Oyuncak kutusunda yeni sürprizler",
        description: "Woody ve Buzz, Forky adındaki yeni bir oyuncakla birlikte maceraya atılırken eski dost Bo Peep ile tekrar karşılaşırlar. Woody, liderlik ettiği grubun geleceğini sorgularken yeni arkadaşının da kendine olan güvenini bulmasına yardım eder.",
        year: "2019",
        duration: "1s 40dk",
        genres: ["Animasyon", "Aile", "Komedi"],
        imdb: "7.7",
        studios: ["Pixar Animation Studios", "Walt Disney Pictures"],
        cast: ["Tom Hanks", "Tim Allen", "Annie Potts", "Tony Hale"],
        trailer: "https://www.youtube.com/watch?v=wmiIUN-7qhE"
    },
    "cars-2": {
        id: "cars-2",
        title: "Cars 2",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/4BS8tgBNWg2jPiDlBwM2iJe1xB7.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3BA1F4153A345B7E4E867FC5E8ECD9D400DF2753C1D1D76E47F8ECFBAB10681C/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Uluslararası pistlerde turbo hız",
        description: "Şimşek McQueen, Dünya Grand Prix'sinde yarışmak üzere Mater ile birlikte dünyayı dolaşırken kendilerini bir casusluk operasyonunun merkezinde bulur. Yarış, tehlikeli ajanların oyun alanına dönüşür.",
        year: "2011",
        duration: "1s 46dk",
        genres: ["Animasyon", "Macera", "Komedi"],
        imdb: "6.2",
        studios: ["Pixar Animation Studios", "Walt Disney Pictures"],
        cast: ["Owen Wilson", "Larry the Cable Guy", "Emily Mortimer", "Michael Caine"],
        trailer: "https://www.youtube.com/watch?v=V5OQpFbSvx4"
    },
    "frozen": {
        id: "frozen",
        title: "Frozen",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/u2bZhH3nTf0So0UIC1QxAqBvC07.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/587C29C7C837D4331BAECE3B0643E60AD465E11A66DF74528996D6F6210BC526/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Kışın kalbinde kardeşlik",
        description: "Kraliçe Elsa'nın güçleri Arendelle'i sonsuz bir kışa mahkum ettiğinde, Anna buz gibi dağlara tırmanmak ve kız kardeşini eve geri getirmek için Kristoff ve Olaf ile güçlerini birleştirir.",
        year: "2013",
        duration: "1s 42dk",
        genres: ["Animasyon", "Aile", "Fantastik"],
        imdb: "7.4",
        studios: ["Walt Disney Animation Studios"],
        cast: ["Idina Menzel", "Kristen Bell", "Jonathan Groff", "Josh Gad"],
        trailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc"
    },
    "finding-nemo": {
        id: "finding-nemo",
        title: "Kayıp Balık Nemo",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/eCynaAOgYYiw5yN5lBwz3IxqvaW.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EE05007BF1E1D036F563C4A9774E769D07955947ECD7CAAC78B92EA6DF54B16/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Denizin altında kayıp bir yolculuk",
        description: "Korkak ama sevgi dolu palyaço balığı Marlin, kaybolan oğlu Nemo'yu bulmak için okyanusu aşar. Unutkan ama cesur Dory ile birlikte insan dünyasına kadar uzanan bir maceraya atılır.",
        year: "2003",
        duration: "1s 40dk",
        genres: ["Animasyon", "Macera", "Aile"],
        imdb: "8.2",
        studios: ["Pixar Animation Studios", "Walt Disney Pictures"],
        cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould", "Willem Dafoe"],
        trailer: "https://www.youtube.com/watch?v=wZdpNglLbt8"
    },
    "ice-age": {
        id: "ice-age",
        title: "Ice Age",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/o1jr0UqVjxIZ1JnFzuVLN4ulWey.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ECB08F32387E65489807A4D73A4F27F5C2847AA2C4C83B6498D82424EB9405DC/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Buzul çağında sıcak dostluklar",
        description: "Manny, Sid ve Diego kayıp bir bebeği ailesine ulaştırmak için buzullarla kaplı diyarlarda ilerlerken birbirleriyle gerçek bir aile olmanın anlamını keşfeder.",
        year: "2002",
        duration: "1s 21dk",
        genres: ["Animasyon", "Macera", "Komedi"],
        imdb: "7.5",
        studios: ["Blue Sky Studios", "20th Century Fox"],
        cast: ["Ray Romano", "John Leguizamo", "Denis Leary", "Jack Black"],
        trailer: "https://www.youtube.com/watch?v=cMfeWyVBidk"
    },
    "frozen-2": {
        id: "frozen-2",
        title: "Frozen II",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/AoSZyb37ljMAxw0RdeQEBHKtgcc.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FF2CD5E0E527EE20561EA50DECEA298193F7823FFFF836274B5D86AB27126036/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Geçmişin çağrısına kulak ver",
        description: "Elsa, sihirli güçlerinin kaynağını bulmak için Arendelle'in ötesindeki büyülü ormanlara çağrılır. Anna, Kristoff, Olaf ve Sven ile birlikte tarihin sırlarını çözmeye çalışırlar.",
        year: "2019",
        duration: "1s 43dk",
        genres: ["Animasyon", "Macera", "Fantastik"],
        imdb: "6.8",
        studios: ["Walt Disney Animation Studios"],
        cast: ["Idina Menzel", "Kristen Bell", "Josh Gad", "Jonathan Groff"],
        trailer: "https://www.youtube.com/watch?v=bwzLiQZDw2I"
    },
    "maleficent": {
        id: "maleficent",
        title: "Maleficent",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/43FF5B9CB5FE7DE638019A43D4FCB72332BF96DFED485939BDCA1BFB98174C3D/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Masalların karanlık tarafı",
        description: "İhanete uğrayan güçlü peri Maleficent, krallığını korumak için savaşır. Aurora ile kurduğu bağ, iyi ile kötünün çizgilerini bulanıklaştırır.",
        year: "2014",
        duration: "1s 37dk",
        genres: ["Fantastik", "Macera", "Aile"],
        imdb: "6.9",
        studios: ["Walt Disney Pictures", "Roth Films"],
        cast: ["Angelina Jolie", "Elle Fanning", "Sharlto Copley", "Sam Riley"],
        trailer: "https://www.youtube.com/watch?v=w-XO4XiRop0"
    },
    "up": {
        id: "up",
        title: "Up",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/hGGC9gKo7CFE3fW07RA587e5kol.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/996C294DCE25D5EDF6FC623C03CE2F7A4231ABC82CE0E3B070C74546A67FC83C/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Gökyüzünde yeni başlangıçlar",
        description: "Emekli kaşif Carl, evine binlerce balon bağlayarak Güney Amerika'ya uçmayı planlar. Plansız yolcu Russell ve konuşan köpek Dug ile yolculuk unutulmaz bir serüvene dönüşür.",
        year: "2009",
        duration: "1s 36dk",
        genres: ["Animasyon", "Macera", "Komedi"],
        imdb: "8.3",
        studios: ["Pixar Animation Studios", "Walt Disney Pictures"],
        cast: ["Ed Asner", "Jordan Nagai", "Christopher Plummer", "Bob Peterson"],
        trailer: "https://www.youtube.com/watch?v=ORFWdXl_zJ4"
    },
    "wall-e": {
        id: "wall-e",
        title: "WALL·E",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/ai2FicMUxLCurVkjtYdSvVDWRmS.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD1EE2251A08DC27A9140045C251FB61FB355B3C75B49B2813AF5CAB7BFA0FA9/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Gezegenini arayan küçük robot",
        description: "Yalnız robot WALL·E, Dünya’yı temizlerken EVA isimli modern bir robotla tanışır ve insanlığın kaderini değiştirecek uzay yolculuğuna çıkar.",
        year: "2008",
        duration: "1s 38dk",
        genres: ["Animasyon", "Bilim Kurgu", "Aile"],
        imdb: "8.4",
        studios: ["Pixar Animation Studios", "Walt Disney Pictures"],
        cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin", "Sigourney Weaver"],
        trailer: "https://www.youtube.com/watch?v=alIq_wG9FNk"
    },
    "lion-king": {
        id: "lion-king",
        title: "Aslan Kral",
        background: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
        logo: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8062A2B3BF025645AAB96D88141881188457E99A5FF2B1FC9FD1F68B03D83580/scale?width=1440&aspectRatio=1.78&format=png",
        tagline: "Afrika'nın sonsuz döngüsü",
        description: "Genç Simba, babası Mufasa'nın ölümünün ardından sürgün edilse de kaderiyle yüzleşip Hakuna Matata ruhuyla krallığını geri almaya hazırlanır.",
        year: "2019",
        duration: "1s 58dk",
        genres: ["Macera", "Dram", "Aile"],
        imdb: "6.9",
        studios: ["Walt Disney Pictures", "Fairview Entertainment"],
        cast: ["Donald Glover", "Beyoncé", "Chiwetel Ejiofor", "James Earl Jones"],
        trailer: "https://www.youtube.com/watch?v=7TavVZMewpY"
    }
};

function applyFilmToHero(film) {
    if (!film) return;
    if (heroSection) {
        heroSection.style.backgroundImage = `url('${film.background}')`;
    }
    if (heroLogo) {
        heroLogo.src = film.logo;
        heroLogo.alt = `${film.title} logosu`;
    }
    if (heroTagline) heroTagline.textContent = film.tagline;
    if (heroDesc) heroDesc.textContent = film.description;
    if (heroMetaPrimary) heroMetaPrimary.textContent = `${film.year} • ${film.duration}`;
    if (heroMetaSecondary) heroMetaSecondary.textContent = film.genres.join(", ");
    document.title = `${film.title} | Sinema Evreni`;
}

function setDetailView(isDetail) {
    isDetailView = isDetail;
    document.body.classList.toggle("detail-view", isDetailView);
}

function showHome() {
    currentFilmId = HOME_FILM_ID;
    setDetailView(false);
    document.body.classList.remove("search-view");
    applyFilmToHero(filmData[currentFilmId]);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openFilmDetail(id) {
    const film = filmData[id];
    if (!film) return;

    currentFilmId = id;
    applyFilmToHero(film);
    setDetailView(true);
    document.body.classList.remove("search-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSearch() {
    setDetailView(false);
    document.body.classList.add("search-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function initIntroCanvas() {
    if (!introCanvas) return;
    const ctx = introCanvas.getContext("2d");
    const stars = [];
    const STAR_COUNT = 120;

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        introCanvas.width = window.innerWidth * dpr;
        introCanvas.height = window.innerHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        stars.length = 0;
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 1.8 + 0.2,
                speed: Math.random() * 0.5 + 0.2,
                hue: 200 + Math.random() * 80,
                alpha: Math.random() * 0.6 + 0.2,
                shift: Math.random() * 2 * Math.PI
            });
        }
    }

    function draw(time) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.fillStyle = `hsla(${star.hue}, 80%, 70%, ${star.alpha})`;
            ctx.shadowColor = `hsla(${star.hue}, 80%, 70%, ${star.alpha})`;
            ctx.shadowBlur = 6;
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            star.y += star.speed;
            star.x += Math.sin(time * 0.0003 + star.shift) * 0.3;
            if (star.y > window.innerHeight + star.size) {
                star.y = -star.size;
                star.x = Math.random() * window.innerWidth;
            }
        });
        requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
}

function initIntroSnow() {
    if (!introSnow) return;
    const ctx = introSnow.getContext("2d");
    const flakes = [];
    const FLAKE_COUNT = 80;

    function resize() {
        const rect = introSnow.parentElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        introSnow.width = rect.width * dpr;
        introSnow.height = rect.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        flakes.length = 0;
        for (let i = 0; i < FLAKE_COUNT; i++) {
            flakes.push({
                x: Math.random() * rect.width,
                y: Math.random() * rect.height,
                r: Math.random() * 2 + 0.5,
                speed: Math.random() * 0.5 + 0.4,
                drift: Math.random() * 0.8 - 0.4
            });
        }
    }

    function draw() {
        const rect = introSnow.parentElement.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        flakes.forEach(flake => {
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,255,0.8)";
            ctx.shadowColor = "rgba(255,255,255,0.6)";
            ctx.shadowBlur = 4;
            ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
            ctx.fill();

            flake.y += flake.speed;
            flake.x += flake.drift;

            if (flake.y > rect.height + flake.r) {
                flake.y = -flake.r;
                flake.x = Math.random() * rect.width;
            }
        });
        requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
}

filmTriggers.forEach(trigger => {
    trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const filmId = trigger.dataset.film;
        openFilmDetail(filmId);
    });
});

homeLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        showHome();
    });
});

searchLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        showSearch();
    });
});

if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", (event) => {
        event.preventDefault();
        showHome();
    });
}

function openDetailModal() {
    const film = filmData[currentFilmId];
    if (!film) return;

    modalLogo.src = film.logo;
    modalLogo.alt = `${film.title} logosu`;
    modalTitle.textContent = film.title;
    modalMeta.textContent = film.genres.join(" • ");
    modalDescription.textContent = film.description;
    modalImdb.textContent = `IMDb ${film.imdb}`;
    modalRuntime.textContent = film.duration;
    modalYear.textContent = film.year;

    modalStudios.innerHTML = "";
    film.studios.forEach(studio => {
        const li = document.createElement("li");
        li.textContent = studio;
        modalStudios.appendChild(li);
    });

    modalCast.innerHTML = "";
    film.cast.forEach(actor => {
        const li = document.createElement("li");
        li.textContent = actor;
        modalCast.appendChild(li);
    });

    detailModal.classList.add("active");
    detailModal.setAttribute("aria-hidden", "false");
}

function closeDetailModal() {
    detailModal.classList.remove("active");
    detailModal.setAttribute("aria-hidden", "true");
}

if (detailBtn) {
    detailBtn.addEventListener("click", openDetailModal);
}
if (detailModalClose) {
    detailModalClose.addEventListener("click", closeDetailModal);
}
if (detailModal) {
    detailModal.addEventListener("click", (event) => {
        if (event.target === detailModal) {
            closeDetailModal();
        }
    });
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && detailModal.classList.contains("active")) {
        closeDetailModal();
    }
});

if (trailerBtn) {
    trailerBtn.addEventListener("click", () => {
        const film = filmData[currentFilmId];
        if (film?.trailer) {
            window.open(film.trailer, "_blank");
        }
    });
}

if (playBtn) {
    playBtn.addEventListener("click", () => {
        openFilmDetail(currentFilmId);
        alert("Bu içerik yakında Sinema Evreni'nde yayında olacak!");
    });
}

if (shareBtn) {
    shareBtn.addEventListener("click", () => {
        alert("Film izleme listene kaydedildi!");
    });
}

function initSlider(trackSelector, visibleCount = 5, interval = 3000) {
    const track = document.querySelector(trackSelector);
    if (!track) return;

    const items = Array.from(track.children);
    if (items.length === 0) return;

    const maxIndex = Math.max(items.length - visibleCount, 0);
    if (maxIndex === 0) return;

let index = 0;

    setInterval(() => {
        const styles = window.getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || 0);
        const itemWidth = items[0].getBoundingClientRect().width;
        if (itemWidth === 0) return;

        index = index >= maxIndex ? 0 : index + 1;
        const offset = index * (itemWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;
    }, interval);
}

initSlider("#recommendedTrack", 5, 3000);
initSlider(".more-fun-track", 5, 2000);

function handleNavbarBackground() {
    if (!navbar) return;
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

function dismissIntroOverlay() {
    if (!introOverlay) return;
    introOverlay.classList.add("hide");
    document.body.classList.remove("intro-active");
    setTimeout(() => {
        introOverlay.remove();
    }, 800);
}

window.addEventListener("load", () => {
    if (!introOverlay) return;
    initIntroCanvas();
    initIntroSnow();
    setTimeout(dismissIntroOverlay, 6000);
});

if (introClose) {
    introClose.addEventListener("click", dismissIntroOverlay);
}

applyFilmToHero(filmData[HOME_FILM_ID]);
handleNavbarBackground();
window.addEventListener("scroll", handleNavbarBackground);
