function toggleContent() {
    let authorEl = document.getElementById("author");
    let authorDet = document.getElementById("author-details");
    let authorDetAlt = document.getElementById("author-details-alt");
    if (window.innerWidth < 601) {
        authorDet.classList.toggle("hidden");
        authorDetAlt.classList.toggle("hidden");
        authorEl.classList.toggle("author-alt");
    } else {
        authorDetAlt.classList.toggle("hidden");
    }
}