const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim(){
    var tl =gsap .timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        ease:Expo,
        duration:1.5
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-.1,
        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-.1,
        ease:Expo.easeInOut
    })
}
var timeout;
function circleMouseFollower(){
    //define defalut scale value
    var xscale = 1;
    var yscale =1;
    var xprev =0;
    var yprev =0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout)
        
        xscale = gsap .utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap .utils.clamp(.8,1.2,dets.clientY - yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;

        circlemouse(xscale,yscale);
        
        timeout = setTimeout(function (){
            document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100);
    });
}
function circlemouse(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

circleMouseFollower();
circlemouse();
firstPageAnim();


document.querySelectorAll(".elem")
.forEach(function(elem){
    var rotate =0;
    var gape =0;
    
    elem.addEventListener("mouseleave",function(details){
        // var diffe =(details.clientY - elem.getBoundingClientRect().top);
        // gap = details.clientX -rotate;
        // rotate =details.clientX;
        
        
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,
            // top:diffe,
            // left:details.clientX,
            // rotate:gsap .utils .clamp(-20,20,gap * 0.5)
        });
    });
    elem.addEventListener("mousemove",function(details){
        var diffe =(details.clientY - elem.getBoundingClientRect().top);
        gape = details.clientX -rotate;
        rotate =details.clientX;
        
        
        gsap .to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diffe,
            left:details.clientX,
            rotate:gsap .utils .clamp(-20,20,gape * 0.5)
        });
    });
});
