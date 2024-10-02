console.log("connect index.js to index.html success");

// Import các hàm cần thiết từ SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// Cấu hình Firebase của ứng dụng web
const firebaseConfig = {
    apiKey: "AIzaSyDjds91lHLZ0x2KI71oHc0rZgbxhE2JBn4",
    authDomain: "logo-b3804.firebaseapp.com",
    projectId: "logo-b3804",
    storageBucket: "logo-b3804.appspot.com",
    messagingSenderId: "640346822474",
    appId: "1:640346822474:web:d5f14b57bb18afd55613b3",
    measurementId: "G-HNKT0PE0QQ"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const imagesRef = ref(storage, 'images/');

const logo__name = document.getElementById("logo__name");
const logo__img = document.getElementById("logo__img");
const logo = document.getElementById("logo");

if (!logo__name || !logo__img || !logo) {
    console.error("One or more elements with the specified IDs were not found.");
    throw new Error("One or more elements with the specified IDs were not found.");
}

let name = "";
let url = "";
let check = 1;
let index = 0;
let CanClick = true;
logo.addEventListener("click", () => {
    console.log("check =", check);
    if(CanClick){
        CanClick = false;
        if (check === 1) {
            listAll(imagesRef)
                .then((res) => {
                    const promises = res.items.map((itemRef) => {
                        return getDownloadURL(itemRef).then((url) => {
                            const name_img = itemRef.name;
                            const nameWithoutExtension = name_img.replace(/\.[^/.]+$/, "");
                            return { name: nameWithoutExtension, url: url };
                        });
                    });
    
                    return Promise.all(promises);
                })
                .then((items) => {
                    // Sắp xếp các mục theo tên
                    items.sort((a, b) => a.name.localeCompare(b.name));
    
                    // Lấy một chỉ số ngẫu nhiên khác với chỉ số trước đó
                    let random;
                    do {
                        random = Math.floor(Math.random() * 4) + 1;
                    } while (random === index);
                    index = random;
    
                    console.log("index =", index);
                    if (index < items.length) {
                        const item = items[index];
                        name = item.name;
                        url = item.url;
                        logo__img.src = url;
                        logo__name.innerHTML = "________";
                        check = 2;
                    }
                })
                .catch((error) => {
                    console.error("Error listing images:", error);
                });
        } else if (check === 2) {
            logo__name.innerHTML = name;
            check = 1;
        }
        setTimeout(function() {
            CanClick = true; // Sau 2 giây cho phép click lại
        }, 4000);
    }
});
