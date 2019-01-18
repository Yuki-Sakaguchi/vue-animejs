const elScene = document.querySelectorAll('.scene')


const data = {
  currentIndex: 0,
  sceneMaxIndex: elScene.length,
  sceneAnime: [
    {
      animation (cb) {
        anime({
          targets: document.querySelector('.scene--1'),
          opacity: 1,
          easing: 'easeInSine'
        })
        anime({
          targets: '.el--1',
          translateX: [-20, 0],
          direction: 'alternate',
          loop: true,
          easing: 'easeInSine'
        })
        anime({
          targets: '.el--2',
          translateX: [20, 0],
          direction: 'alternate',
          loop: true,
          easing: 'easeInSine'
        })
        setTimeout(() => {
          document.querySelector('.scene--1').remove()
          cb()
        }, 5000)
      }
    },
    {
      animation (cb) {
        anime({
          targets: document.querySelector('.scene--2'),
          opacity: 1,
          easing: 'easeInSine'
        })
        anime({
          targets: '.el--3',
          translateY: [-20, 0],
          direction: 'alternate',
          loop: true,
          easing: 'easeInSine'
        })
        anime({
          targets: '.el--4',
          translateY: [20, 0],
          direction: 'alternate',
          loop: true,
          easing: 'easeInSine'
        })
        setTimeout(() => {
          cb()
        }, 5000)
      }
    }
  ]
}

const methods = {
  showApp () {
    console.log(this)
    anime({
      targets: this.$el,
      easing: 'easeInSine',
      opacity: 1,
      complete: () => {
        this.animation(this.currentIndex)
      }
    })
  },
  hideApp () {
    anime({
      targets: this.$el,
      easing: 'easeInSine',
      opacity: 0,
      complete: () => {
        this.$el.remove()
      }
    })
  },
  animation (index) {
    if (index === this.sceneMaxIndex) {
      this.hideApp()
    } else {
      this.sceneAnime[index].animation(() => {
        index++
        this.currentIndex = index
        this.animation(this.currentIndex)
      })
    }
  },
}

const app = new Vue({
  el: '#app',
  data: data,
  methods: methods,
  mounted () {
    this.showApp()
  }
})