var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


/* swiper */

var swiper1 = new Swiper('.swiper', {
    loop: true,

    speed: 1000,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* like button */
function myFunction(x) {
    x.classList.toggle("fa-heart-o");
}


/* swiper_2 */
var swiper2 = new Swiper('.swiper_own', {
    loop: true,
    autoplay: {
        enabled: true,
        delay: 1500,
    },
    speed: 1500,
    pagination: {
        el: '.pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    }
});

/* swiper_3 */
var swiper3 = new Swiper('.swiper_own2', {
    loop: true,
    // autoplay: {
    //     enabled: true,
    //     delay: 1500,
    // },
    speed: 1500,
    pagination: {
        el: '.pagination_2',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.button-next2',
        prevEl: '.button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});

// menu_icon
// function myFunction(b) {
//     b.classList.toggle("change");
// }

$(".navbar__burger").on("click", function () {
    $('.media_nav').toggleClass('show');
});

$(".navbar__burger").on("click", function () {
    $(".navbar__burger_line").toggleClass('_active');
})

// collapse