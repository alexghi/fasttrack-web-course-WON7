function getAttributes(){
    var x = document.querySelector("#w3r");
    
        let href = x.getAttribute('href');
        let hreflang = x.getAttribute('hreflang');
        let target = x.getAttribute('target');
        let type = x.getAttribute('type');

    console.log(href, hreflang, target, type);
}