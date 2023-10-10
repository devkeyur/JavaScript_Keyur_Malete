function FetchClick() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot')
        .then(function (res) {
            return res.json();
        })
        .then(function (marsObject) {
            marsObject.photos.map(function (item) {
                var tr = document.createElement("tr");
                var tdId = document.createElement("td");
                var tdImage = document.createElement("td");
                var tdCamera = document.createElement("td");
                var tdRover = document.createElement("td");

                tdId.innerHTML = item.id;
                tdImage.innerHTML = `<a href="${item.img_src}" target="_blank">
                                    <img width="200" height="200" src="${item.img_src}">
                                    </a>`;
                tdCamera.innerHTML = item.camera.full_name;
                tdRover.innerHTML = item.camera.name;

                tr.appendChild(tdId);
                tr.appendChild(tdImage);
                tr.appendChild(tdCamera);
                tr.appendChild(tdRover);

                document.querySelector("tbody").appendChild(tr);
            });
        })
};