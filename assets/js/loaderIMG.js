let img_arr = [
    "9 Min Language",
    "Adobe Creative Cloud",
    "Adobe Premier Pro",
    "Amazon",
    "Android Studio",
    "AutoCAD",
    "BUSUU",
    "Bing",
    "ChatGPT",
    "Cisco",
    "Clipcharm",
    "Cloudflare",
    "Codewars",
    "Colorhunt",
    "DaVinci Resolve",
    "Datadog",
    "DesignEvo",
    "Discord",
    "Dropbox",
    "Encode",
    "Excel",
    "Filmora",
    "Forest App",
    "Gemini",
    "Github",
    "Inshot",
    "Jetbrains AQUA",
    "Jetbrains CLion",
    "Jetbrains Dataspell",
    "Jetbrains DotCover",
    "Jetbrains Webstorm",
    "Looka",
    "Mcafee",
    "Mendeley",
    "Meta",
    "Mimo",
    "Miro",
    "Notion",
    "NoxOcean",
    "Opera",
    "Otter",
    "Pinterest",
    "Powerpoint",
    "Reddit",
    "Siri",
    "Slack",
    "Sololearn",
    "StackOverflow",
    "Teams",
    "Telegram",
    "TickTick",
    "Trello",
    "Tumblr",
    "VScode",
    "Visual Studio",
    "Wolfram",
    "Word",
    "Xmind",
    "Zalo",
    "Zotero"
];

let url__ = "";
let name__ = "";

const countdown = document.getElementById("countdown");
const play_btn = document.getElementById("play");
const img_truoc = document.getElementById("frame-font__img");
const img_sau = document.getElementById("frame-back__img");
const name__truoc = document.getElementById("frame-font__title");
const name__sau = document.getElementById("frame-back__title");

function random() {
    let random = Math.floor(Math.random() * img_arr.length);
    url__ = `assets/img/logo/${img_arr[random]}.png`;
    name__ = img_arr[random];
    img_arr.splice(random, 1);
}
random();
img_truoc.src = url__;
let can_click_play = false;

setTimeout(() => {
    can_click_play = true;
    play_btn.style.cursor = "pointer";
}, 2000);

// guessed
let guessed = 0;
function guessed_() {
    if (guessed < 3) {
        guessed++;
    }
    document.querySelector('.progress__length').style.width = `${guessed * 100 / 3}%`;
}
let time = 10;

const countdown_ = () => {
    if (time === -1) return;
    if (time === 0 && guessed < 3) {
        document.getElementById("lose").style.display = "initial";
        play_btn.style.display = "none";
        document.querySelector('.menugame').style.top = '0';
        document.querySelector('.menugame').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        return;
    }
    if (guessed == 3) {
        can_click_play = false;
        document.getElementById("win").style.display = "initial";
        play_btn.style.display = "none";
        document.querySelector('.menugame').style.top = '0';
        document.querySelector('.menugame').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        return;
    }
    time;
    setTimeout(countdown_, 1000);
};

play_btn.addEventListener("click", () => {
    if (can_click_play) {
        can_click_play = false;
        time = 11;
        countdown_();
        document.querySelector('.menugame').style.top = '-100vh';
        setTimeout(() => {
            document.querySelector('.container').style.top = '50%';
        }, 100);
        img_sau.src = url__;
        name__sau.innerHTML = name__;
        setTimeout(() => {
            countdown.style.transition = 'all 10s linear';
            countdown.style.backgroundColor = 'rgb(255, 0, 0)';
            countdown.style.width = '0';
        }, 1300);
        setTimeout(() => {
            img_truoc.src = url__;
            can_click_play = true;
        }, 3300);
    }
});


const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
let btn_can_click = false;
btn1.addEventListener("click", () => {
    if(btn_can_click){
        btn_can_click = false;
        can_click_play = true;
        card.click();
    }
});
btn2.addEventListener("click", () => {
    if(btn_can_click){
        btn_can_click = false;
        can_click_play = true;
        card.click();
        guessed_();
    }
});

let rotateY = 0;
let mat = 1;
const card = document.querySelector('.card');
card.addEventListener("click", async () => {
    if (img_arr.length === 0) {
        time = -1;
        can_click_play = false;
    };
    if (can_click_play) {
        can_click_play = false;
        rotateY = rotateY === 0 ? 180 : 360;
        document.querySelector('.frames').style.transform = `rotateY(${rotateY}deg)`;
        if (rotateY === 360) {
            setTimeout(() => {
                rotateY = 0;
                document.querySelector('.frames').style.transition = '0s';
                document.querySelector('.frames').style.transform = `rotateY(${rotateY}deg)`;
            }, 2500);
            setTimeout(() => {
                document.querySelector('.frames').style.transition = '1s';
            }, 2550);
        }
        if (mat === 1) {
            // integral_()
            time = -1;
            mat = 2;
            random();
            document.querySelector(".buttons").style.transition = "0.5s"
            document.querySelector(".buttons").style.opacity = "1"
            countdown.style.transition = 'all 0s linear';
            setTimeout(() => countdown.style.width = '100%', 100);
            setTimeout(() => countdown.style.backgroundColor = 'rgb(225, 255, 0)', 200);
            setTimeout(() => {
                countdown.style.transition = 'all 2s linear';
                countdown.style.width = '0';
            }, 300);
            setTimeout(() => {
                countdown.style.transition = 'all 0s linear';
                countdown.style.backgroundColor = 'rgb(0, 229, 255)';
            }, 3000);
            setTimeout(() => {
                img_truoc.src = url__;
                btn_can_click = true;
            }, 2000);
        } else {
            time = 11;
            document.querySelector(".buttons").style.transition = "0.5s"
            document.querySelector(".buttons").style.opacity = "0"
            countdown_();
            countdown.style.transition = 'all 0s linear';
            setTimeout(() => {
                countdown.style.width = '100%';
                countdown.style.backgroundColor = 'rgb(0, 229, 255)';
            }, 100);
            setTimeout(() => {
                countdown.style.transition = 'all 10s linear';
                countdown.style.backgroundColor = 'rgb(255, 0, 0)';
                countdown.style.width = '0';
            }, 200);
            setTimeout(() => {
                mat = 1;
                img_sau.src = url__;
                name__sau.innerHTML = name__;
            }, 1000);
            setTimeout(() => {
                can_click_play = true;
            }, 3000);
        }
    }
});
