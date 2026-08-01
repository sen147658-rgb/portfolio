import gsap from "gsap";


export function initHeroAnimation(){


    const timeline = gsap.timeline();



    timeline
    .from(".hero-badge",{

        opacity:0,

        y:30,

        duration:0.8

    })


    .from(".hero-title",{

        opacity:0,

        y:50,

        duration:1

    },"-=0.4")


    .from(".hero-description",{

        opacity:0,

        y:40,

        duration:0.8

    },"-=0.5")


    .from(".hero-actions",{

        opacity:0,

        y:30,

        duration:0.8

    },"-=0.4")


    .from(".profile-ring",{

        opacity:0,

        scale:0.7,

        rotation:180,

        duration:1.2,

        ease:"power3.out"

    },"-=0.8");


}