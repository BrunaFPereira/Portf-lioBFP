function retrieveRepos() {
    const user = 'BrunaFPereira'
    const container = document.getElementById("main");

    axios.get(`https://api.github.com/users/${user}/repos`).then((result) => {
        let { data } = result;

        data.forEach(element => {
            container.insertAdjacentHTML("beforeend", `
            <div class="post">
                <img class="postImage" src="public/capa.png" />
                <a class="postLink" href="${element.html_url}">${element.full_name}</a>
            </div>
            `)
        });


    })
}

function showHome() {
    document.getElementById("main").style.display = 'grid';
    document.getElementById("profile").style.display = 'none';
}
function showProfile() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("profile").style.display = 'grid';
}
