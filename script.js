window.onload = function () {

    // fetch data.json from github pages and return promise
    document.getElementById('degree_button').onclick = function () {
        fetch('https://brookeclaroni.github.io/CS601_HW5_Claroni/data.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

            // resolve fetch promise using the response class
            .then(response => response.json())

            // resolve response promise as data 
            .then(data => {

                // data successfuly retrieved
                console.log('Success:', data);

                // build degrees html based on returned json data
                var htmlMarkups = '';
                data.degrees.forEach((element, index) => {
                    const htmlMarkup = `<div class="degree"><h2>Degree ${(index + 1)}</h2><p class="school">School: ${element.school}</p><p class="major">Major: ${element.major}</p><p class="type">Type: ${element.type}</p><p class="year">Year Conferred: ${element.year_conferred}</p></div>`;
                    htmlMarkups += htmlMarkup;
                });

                // switch button from hide to show
                document.getElementById("degree_button").style.display = "none";
                document.getElementById("hide_button").style.display = "inline";

                // display formatted degrees
                document.getElementById("degree_data").innerHTML = htmlMarkups;
            })

            // catch any errors
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // when hide is clicked, switch button from hide to show and hide degrees
    document.getElementById('hide_button').onclick = function () {
        document.getElementById("hide_button").style.display = "none";
        document.getElementById("degree_button").style.display = "inline";
        document.getElementById("degree_data").innerHTML = "";
    }
}
