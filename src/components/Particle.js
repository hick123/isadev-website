import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      height="97vh"
      width="97vw"
      style={{ zIndex: -1 }}
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.1,
          },
          move: {
            direction: "right",
            speed: 0.1,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
export default Particle;
