document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll("section.job-posting h2");

  if(headings.length > 0) {
    const aside = document.createElement("aside");
    aside.setAttribute("class", "in-page-nav")

    const inPageNav = document.createElement("nav");
    inPageNav.setAttribute("role", "navigation");
    aside.append(inPageNav);

    const h = document.createElement("h1");
    h.innerText = "On this page:";
    inPageNav.append(h);

    const list = document.createElement("ul");
    inPageNav.append(list);

    for(const heading of headings) {
      const id = heading.getAttribute("id");
      const title = heading.innerText;

      const item = document.createElement("li");
      const link = document.createElement("a");
      item.append(link);
      link.setAttribute("href", `#${id}`);
      link.innerText=title;

      list.append(item);
    }

    document.querySelector("section.job-posting .sidebar").append(aside)
  }
})