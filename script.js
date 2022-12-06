window.onload = function () {


    document.getElementById('degree_button').onclick = function () {
        console.log("Clicked degree_button")
        fetch('https://6378172d5c477765122c0fb4.mockapi.io/degrees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                var degreeData = document.getElementById("degree_data");
                if (degreeData != null) {
                    var htmlMarkups = '';
                    data.degrees.forEach((element, index) => {
                        const htmlMarkup = '<div class="degree"><h2>Degree '+(index+1)+'</h2><p class="school">School: '+element.school+'</p><p class="major">Major: '+element.major+'</p><p class="type">Type: '+element.type+'</p><p class="year">Year Conferred: '+element.year_conferred+'</p></div>';
                        htmlMarkups+=htmlMarkup;
                    });
                    document.getElementById("degree_button").style.display = "none";
                    document.getElementById("hide_button").style.display = "inline";
                    document.getElementById("degree_data").innerHTML = htmlMarkups;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    document.getElementById('hide_button').onclick = function () {
        document.getElementById("hide_button").style.display = "none";
        document.getElementById("degree_button").style.display = "inline";
        document.getElementById("degree_data").innerHTML = "";
    }
}

