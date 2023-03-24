const menuList =document.getElementById("menu_list");
const menu =document.getElementById("menu");

menuList.addEventListener("click", () => {
    if (menu.className === "hidden") {
         menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
  });
