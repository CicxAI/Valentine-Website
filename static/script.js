document.addEventListener('DOMContentLoaded', function() {
    var themeSwitch = document.getElementById('theme-switch');
    var body = document.body;
    var noButton = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');
    var counter = 0;

    themeSwitch.addEventListener('change', function() {
        if(this.checked) {
            body.classList.add("alternative-theme");
        } else {
            body.classList.remove("alternative-theme");
        }
    });

    noButton.addEventListener('click', function() {
        counter++;
        var currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentFontSize * (1 + 1/3)) + 'px';

        var currentPaddingTop = parseFloat(window.getComputedStyle(yesButton).paddingTop);
        var currentPaddingRight = parseFloat(window.getComputedStyle(yesButton).paddingRight);
        var currentPaddingBottom = parseFloat(window.getComputedStyle(yesButton).paddingBottom);
        var currentPaddingLeft = parseFloat(window.getComputedStyle(yesButton).paddingLeft);
        yesButton.style.padding = (currentPaddingTop * (1 + 1/3)) + 'px ' + 
                                  (currentPaddingRight * (1 + 1/3)) + 'px ' +
                                  (currentPaddingBottom * (1 + 1/3)) + 'px ' +
                                  (currentPaddingLeft * (1 + 1/3)) + 'px';
        switch (counter) {
            case 1:
                this.textContent = "Really?";
                break;
            case 2:
                this.textContent = "Are you sure?";
                break;
            case 3:
                this.textContent = "Last chance!";
                break;
            case 4:
                this.textContent = "Think it through!";
                break;
            case 5:
                this.textContent = "Okay :(";
                break;
            case 6:
                this.textContent = "You're really breaking my heart!";
                break;
            default:
                this.textContent = ":(";
                break;
        }
        if (counter >= 7) {
            noButton.remove();
            yesButton.style.margin = "0 auto";
            yesButton.style.display = "block";
            yesButton.style.zIndex = "100";
        }
    });
    yesButton.addEventListener('click', function() {
        document.body.style.backgroundColor = '#b8e994';
        document.querySelectorAll('#moving-lualana-shadow, #moving-lualana, .switch-container, .center-container, #bisasam-container, #grass').forEach(function(element) {
            element.style.display = 'none';
        });
        var container = document.getElementById('content-container');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.innerHTML = '';

        var heading = document.createElement('h1');
        heading.textContent = 'Thank you for choosing me!';
        heading.style.color = '#e53090';
        heading.style.fontSize = '60px';

        var gif = document.createElement('img');
        gif.src = 'static/img/cute-pokemon.gif';
        gif.alt = 'Valentine\'s Day Celebration';
        gif.style.width = '200px';
        gif.style.marginTop = '20px';

        container.appendChild(heading);
        container.appendChild(gif);
    });
    
    
});

document.addEventListener('DOMContentLoaded', function() {
    var themeSwitch = document.getElementById('theme-switch');
    var body = document.body;
    var noButton = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');
    var bisasam = document.getElementById('running-bisasam'); 
    var movingRight = true;

    function toggleAnimation() {
        if (movingRight) {
            bisasam.style.animation = 'moveRight 5s linear infinite';
        } else {
            bisasam.style.animation = 'moveLeft 5s linear infinite';
        }
        movingRight = !movingRight;
    }
    bisasam.addEventListener('animationiteration', toggleAnimation);

    toggleAnimation();
});
