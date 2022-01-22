const particlesConfig: any = {
  background: {
    color: {
      value: ''
    },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1
  },
  backgroundMask: {
    cover: {
      color: {
        value: '#fff'
      },
      opacity: 1
    },
    enable: false
  },
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: []
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onDiv: {
        ids: [],
        enable: false,
        mode: [],
        type: 'circle'
      },
      onHover: {
        enable: true,
        mode: 'connect',
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      bubble: {
        distance: 150,
        duration: 2,
        opacity: 0.8,
        size: 7
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        quantity: 1
      }
    }
  },
  particles: {
    collisions: {
      enable: true,
      mode: 'bounce'
    },
    color: {
      value: '#fff',
      animation: {
        enable: false,
        speed: 1,
        sync: true
      }
    },
    line_linked: {
      color: {
        value: '#eee'
      },
      enable: true,
      distance: 100,
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 100
    },
    opacity: {
      animation: {
        enable: false,
        opacity_min: 0.1,
        speed: 1,
        sync: false
      },
      random: {
        enable: false
      },
      value: 0.5
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false
      },
      direction: 'clockwise',
      path: false,
      random: false,
      value: 0
    },
    shadow: {
      blur: 5,
      color: {
        value: '#000000'
      },
      enable: true,
      offset: {
        x: 3,
        y: 3
      }
    },
    shape: {
      options: {
        polygon: {
          nb_sides: 5
        },
        stroke: {
          width: 0,
          color: '#ff0000'
        }
      },
      type: 'circle'
    },
    size: {
      animation: {
        enable: false,
        size_min: 0.1,
        speed: 40,
        sync: false
      },
      random: {
        enable: true,
        minimumValue: 1
      },
      value: 3
    },
    stroke: {
      width: 0,
      color: {
        value: '#000000',
        animation: {
          enable: false,
          speed: 1,
          sync: true
        }
      }
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    }
  },
  pauseOnBlur: true
}

export default particlesConfig
