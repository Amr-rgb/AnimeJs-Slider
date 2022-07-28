const imgs = [
  "../imgs/image1.jpg",
  "../imgs/image2.jpg",
  "../imgs/image3.jpg",
  "../imgs/image4.jpg",
];
const artists = ["Johny Goerend", "Casey Horner", "John Fowler", "NASA"];
const links = document.querySelectorAll(".slider-nav ul li");

links.forEach((link, idx) => {
  link.addEventListener("click", () => {
    anime
      .timeline({})
      .add({
        targets: ".slider .image",
        translateY: "-100%",
        opacity: 0,
        easing: "easeInExpo",
        duration: 1500,
        complete: () =>
          (document.getElementById(
            "image"
          ).style.background = `url(${imgs[idx]})`),
      })
      .add(
        {
          targets: ".slider .text p",
          translateY: "-100px",
          opacity: 0,
          delay: (item, idx) => idx * 100,
          easing: "easeInExpo",
          duration: 1500,
          complete: () =>
            (document.getElementById("name").innerHTML = artists[idx]),
        },
        "-=1300"
      )
      .add({
        targets: ".image",
        translateY: ["100%", 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
      })
      .add(
        {
          targets: ".slider .text p",
          translateY: ["100px", 0],
          opacity: [0, 1],
          delay: (item, idx) => idx * 100,
          easing: "easeOutExpo",
          duration: 1500,
        },
        "-=1300"
      );
  });
});
