if ("assets/" in window.location.href) {
    if (document.cookie = "admin=true") {
        document.write("Flag: " + flag);
        const git = document.createElement("input");
        git.type = "text";
        git.value = "https://github.com/user14923929/MicroOS.git";
        git.disabled = true;
        const p = document.createElement("p");
        p.innerHTML = "copy the link above and clone the repository";
        document.body.appendChild(git);
        document.body.appendChild(p);
    } else {
        document.createElement("h1").innerHTML = "You are in the assets folder";
        document.createElement("p").innerHTML = "Only the admin can access this folder";
        const buttonBack = document.createElement("button");
        buttonBack.innerHTML = "Go back";
        buttonBack.onclick = function() {
            window.location.replace('https://user14923929.github.io/MicroOS/')
        }
        const buttonCheckAdmin = document.createElement("button");
        buttonCheckAdmin.innerHTML = "Check admin";
        buttonCheckAdmin.onclick = function() {
            window.location.replace('https://user14923929.github.io/MicroOS/assets/checkAdmin.html')
        }
        const body = document.querySelector("body");
        body.appendChild(h1);
        body.appendChild(p);
        body.appendChild(buttonBack);
        body.appendChild(buttonCheckAdmin);
        }
}