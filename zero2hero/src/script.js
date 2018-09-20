let I18N = {
    'zh-tw': require('./lang-zh-tw.js'),
    en: require('./lang-en.js')
};

let client_id = 'wznkeywgniy15h924izu4uhwuz2s2u';
let requestState = new Object();
requestState.offset = 0;
requestState.enableRequest = false;
let currentLanguage = "zh-tw";
let limit = 21;
let url = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&client_id='+client_id+'&limit='+limit+'&offset='+requestState.offset+'&language='+currentLanguage;


document.addEventListener('DOMContentLoaded', () => {   
    
    appendData();    

    let lan = document.querySelectorAll(".language > li");

    lan[0].addEventListener("click", () => {  //lan[0]: zh-tw
        changeLan('zh-tw');
    })

    lan[1].addEventListener("click", ()=>{    //lan[1]: en
        changeLan('en');
    })
    
    document.addEventListener('scroll', () => {
        let _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
        let _windwoHeight = window.innerHeight;
        let _scrollTOP = (document.scrollingElement !== undefined) ? document.scrollingElement.scrollTop : document.documentElement.scrollTop ;
        
        if (_windwoHeight + _scrollTOP > _docHeight - 300 && requestState.enableRequest === true) {
            requestState.enableRequest = false;
            appendData();
        }

    })

});


// change language
const changeLan = function(lan){
    let title = document.querySelector(".language > p").innerText;
    //console.log(title);
    if(title !== I18N[lan].TITLE){
        currentLanguage = lan;
        document.querySelector(".language > p").innerText = I18N[lan].TITLE;
        refreshFrame();
        
    }
}

const refreshFrame = function() {
    let container = document.querySelector(".container");

    let frame = document.querySelector(".frame");
    let clone = frame.cloneNode(true);   
    
    (() => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    })();
        container.appendChild(clone);
        requestState.offset = 0;
        appendData(); 
    
}


// append Data
const appendData = function(){
    url = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&client_id='+client_id+'&limit='+limit+'&offset='+requestState.offset+'&language='+currentLanguage;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.setRequestHeader('client-id',client_id);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status ===200) {
            
            let data = JSON.parse(this.responseText).streams;
 
            
            
            
            const Render = function(){
                var frame = document.querySelector(".frame");
                renderFrame(frame,0);
                for (var i = 1 ; i <  data.length ; i++){
                    let clone = frame.cloneNode(true);
                    renderFrame(clone,i);
                    document.querySelector(".container").appendChild(clone);
                }

                function renderFrame(frame,i){
                    frame.setAttribute("href",data[i].channel.url);
                    frame.querySelector(".preview > img").setAttribute("src",data[i].preview.medium);
                    frame.querySelector(".logo > img").setAttribute("src",data[i].channel.logo);
                    frame.querySelector(".content").getElementsByTagName("ul")[0].innerText = data[i].channel.status;
                    frame.querySelector(".content").getElementsByTagName("ul")[1].innerText = data[i].channel.display_name;
                
                }
                requestState.enableRequest = true;
                requestState.offset += 21;
            }

            if (data.length !== 0){
                Render();
            }
            
            

            

        }
    }
}