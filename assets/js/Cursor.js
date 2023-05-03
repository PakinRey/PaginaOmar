const cursor = document.querySelectorAll(".cursor")[0];
const cursor2 = document.querySelectorAll(".cursor")[1];

function moveCursor(e) {
  requestAnimationFrame(() => {
    const x = e.clientX;
    const y = e.clientY;

    // Verificar si el cursor está dentro de la ventana
    if (x < cursor.offsetWidth / 2) {
      cursor.style.left = "0";
      cursor2.style.left = "0";
    } else if (x > window.innerWidth - cursor.offsetWidth / 2) {
      cursor.style.left = window.innerWidth - cursor.offsetWidth + "px";
      cursor2.style.left = window.innerWidth - cursor.offsetWidth + "px";
    } else {
      cursor.style.left = x - cursor.offsetWidth / 2 + "px";
      cursor2.style.left = x - cursor2.offsetWidth / 2 + "px";
    }

    if (y < cursor.offsetHeight / 2) {
      cursor.style.top = "0";
      cursor2.style.top = "0";
    } else if (y > window.innerHeight - cursor.offsetHeight / 2) {
      cursor.style.top = window.innerHeight - cursor.offsetHeight + "px";
      cursor2.style.top = window.innerHeight - cursor2.offsetHeight + "px";
    } else {
      cursor.style.top = y - cursor.offsetHeight / 2 + "px";
      cursor2.style.top = y - cursor2.offsetHeight / 2 + "px";
    }
  });
}

document.addEventListener("mousemove", moveCursor);

const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
    cursor2.classList.add("hover");
    link.classList.add("link-hover");
  });
  link.addEventListener("mouseout", () => {
    cursor.classList.remove("hover");
    cursor2.classList.remove("hover");
    link.classList.remove("link-hover");
  });
});

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
    cursor2.classList.add("hover");
    button.classList.add("link-hover");
  });
  button.addEventListener("mouseout", () => {
    cursor.classList.remove("hover");
    cursor2.classList.remove("hover");
    button.classList.remove("link-hover");
  });
  
  button.addEventListener("click", () => {
    cursor.classList.add("cursor-hover");
    cursor2.classList.add("cursor-hover");
    setTimeout(() => {
      cursor.classList.remove("cursor-hover");
      cursor2.classList.remove("cursor-hover");
    }, 500);
  });
});

