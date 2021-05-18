const about = document.getElementById("about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "500px",
    height: "600px",
    top: 50,
    right: 50,
    max: false,
    bottom: 50,

    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "500px",
    height: "600px",
    top: 150,
    right: 50,
    bottom: 50,

    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
