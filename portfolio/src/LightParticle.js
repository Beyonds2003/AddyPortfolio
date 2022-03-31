const LightParticle = 
{
   background: {
     color: {
       value: "#000000"            /*main  #000000*/
     },
     position: "50% 50%",
     repeat: "no-repeat",
     size: "cover"
   },
   fullScreen: {
     zIndex: 1
   },
   interactivity: {
     events: {
       onClick: {
         enable: true,
         mode: "push"
       },
       onHover: {
         enable: true,
         mode: "bubble",
         parallax: {
           force: 60
         }
       }
     },
     modes: {
       bubble: {
         distance: 400,
         duration: 2,
         opacity: 0.8,
         size: 10
       },
       grab: {
         distance: 400
       },
       push: {
         quantity: 1
       },
       repulse: {
         maxSpeed: 20
       }
     }
   },
   particles: {
     color: {
       value: "#ffffff"         /*main  #000000*/
     },
     links: {
       color: {
         value: "#ffffff"         /*main  #000000*/
       },
       distance: 150,
       enable: true,
       opacity: 0.4
     },
     move: {
       attract: {
         rotate: {
           x: 600,
           y: 1200
         }
       },
       enable: true,
       path: {},
       outModes: {
         bottom: "out",
         left: "out",
         right: "out",
         top: "out"
       },
       spin: {}
     },
     number: {
       density: {
         enable: true
       },
       value: 20
     },
     opacity: {
       value: 0.5,
       animation: {
         speed: 1,
         minimumValue: 0.1
       }
     },
     orbit: {
       rotation: {
         value: 30
       }
     },
     roll: {
       speed: 10
     },
     shape: {
       options: {
         polygon: [
           {
             nb_sides: 2,
             particles: {
               opacity: {
                 value: 0.8,
                 random: {
                   enable: true,
                   minimumValue: 0.5
                 }
               },
               size: {
                 value: 8,
                 random: {
                   enable: true,
                   minimumValue: 10
                 }
               },
               color: {
                 value: "#fafafaff"
               }
             }
           },
           {
             nb_sides: 2,
             particles: {
               opacity: {
                 value: 0.5
               },
               size: {
                 value: 8,
                 random: {
                   enable: false
                 }
               },
               color: {
                 value: "#f9f9f9ff"
               }
             }
           },
           {
             nb_sides: 2,
             particles: {
               opacity: {
                 value: 1,
                 random: false
               },
               size: {
                 value: 10,
                 random: {
                   enable: true,
                   minimumValue: 10
                 }
               },
               color: {
                 value: "#f9f9f9ff"
               }
             }
           }
         ],
         star: []
       }
     },
     size: {
       random: {
         enable: true
       },
       value: {
         min: 1,
         max: 5
       },
       animation: {
         speed: 20,
         minimumValue: 0.1
       }
     },
     stroke: {
       color: {
         value: "#ffffff",
         animation: {
           h: {
             count: 0,
             enable: false,
             offset: 0,
             speed: 1,
             sync: true
           },
           s: {
             count: 0,
             enable: false,
             offset: 0,
             speed: 1,
             sync: true
           },
           l: {
             count: 0,
             enable: false,
             offset: 0,
             speed: 1,
             sync: true
           }
         }
       }
     }
   }
 }


     export default LightParticle