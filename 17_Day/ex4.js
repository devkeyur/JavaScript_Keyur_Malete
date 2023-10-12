function FetchClick() {
    alert("Data Fetched..");
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot;')
        .then(function (res) {
            return res.json();
        })
        .then(function (marsObject) {
            marsObject.photos.map(function (item) {
                var card = document.createElement("div");
                card.className = "card m-2 p-2";
                card.style.width = "200px";
                card.innerHTML = `<a href=${item.img_src} target="_blank"><image src = ${item.img_src} class="card-img-top" height="200"></a>
                <div class = "card-body">
                    <dl>
                        <dt>photo id </td>
                        <dd>${item.id} </td>
                        <dt>Camera</dt>
                        <dd>${item.camera.full_name}</dd>
                        <dt>Rover</dt>
                        <dd>${item.rover.name}</dd>
                    </dl>
                </div>
                `;
                document.getElementById("photosContainer").appendChild(card);
            })
        })
}