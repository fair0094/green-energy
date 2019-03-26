//step 1- create resources
//THIS IS NOT A WAY TO STORE YOUR RESSOURCES 
//YOU WOULD STORE THEM IN A DATABASE 
//you can use the javascript to communicate with the serverside script 

function preloader() {
    const imagesPaths = [
        ".images/alfur.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

console.log(`Preloaded images:\n\t${images[0].scr}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);


const resources = [
    {
        heading: "Solar Energy",
        img: "./images/sun2.jpg", 
        path: "https://via.placeholder.com/300/ffff00/000000",
        body: "Solar energy is a renewable energy source that has become far more accessible in recent years. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum ante dolor. Ut a condimentum ligula. Nulla quis enim aliquam, tempor lectus sit amet, porttitor lorem. Aenean ut facilisis risus, sagittis sollicitudin nisi. Donec at nisl ut felis convallis tincidunt sit amet eget sem. Vestibulum vitae odio et lectus efficitur imperdiet. Nullam porta, sem venenatis bibendum hendrerit, orci diam bibendum ante, ut molestie sem felis sed magna."
    },
    {
        heading: "Wind Energy",
        img: "./images/wind2.jpg",
        path: "https://via.placeholder.com/300/ff00ff/000000",
        body: "Wind energy is highly effective in areas where it can be properly ultilized. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum ante dolor. Ut a condimentum ligula. Nulla quis enim aliquam, tempor lectus sit amet, porttitor lorem. Aenean ut facilisis risus, sagittis sollicitudin nisi. Donec at nisl ut felis convallis tincidunt sit amet eget sem. Vestibulum vitae odio et lectus efficitur imperdiet. Nullam porta, sem venenatis bibendum hendrerit, orci diam bibendum ante, ut molestie sem felis sed magna."
    },
    {
        heading: "Mystical Energy",
        img: "./images/magic2.jpg",
        path: "https://via.placeholder.com/300/00ffff/000000",
        body: "Soul or Mystical energy is the very culmination of your being and cannot normally be utilized effectively by the average person. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum ante dolor. Ut a condimentum ligula. Nulla quis enim aliquam, tempor lectus sit amet, porttitor lorem. Aenean ut facilisis risus, sagittis sollicitudin nisi. Donec at nisl ut felis convallis tincidunt sit amet eget sem. Vestibulum vitae odio et lectus efficitur imperdiet. Nullam porta, sem venenatis bibendum hendrerit, orci diam bibendum ante, ut molestie sem felis sed magna."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
//finding buttons and putting them into some sort of array 
const currentContent = document.querySelector(".current-content");
//a div from the html page named "current-content" 

currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].img}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.currentTarget.textContent;
    /*console.log(eventTarget.textContent);
*/
    
   
//current.Content.innerHTML pushing content into the div in the HTML     
    
    if (eventTarget === "Solar Power") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].img}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;
    } else if (eventTarget === " Wind Energy ") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].img}">
                                    <p>${resources[1].body}</p>
                                    </article>` ;
    } else {
        currentContent.innerHTML = `<h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].img}">
                                    <p>${resources[2].body}</p>
                                    </article>` ;
    }

    /*move id to the current button*/

    
    //this turns the current button clicked to a different colour
    
    //ressource on Element.removeAttribute : https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
    
    //second ressource: https://developer.mozilla.org/en-US/docs/Web/API/Element/id
    
    //removing if the element that was previously clicked  
    for (let btn of btns) {
        if (btn.id) {
            btn.removeAttribute("id");
        }
    }
    
    //adding id to the current target 
    ev.currentTarget.id = "active";
    
}

/* REGISTERING EVENT CONTENT */
//the function runs everytime these are clicked 
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);