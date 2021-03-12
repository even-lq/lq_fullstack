// PreLoadImage要做dom操作也要负责加载图片

// class PreLoadImage {
//   // 图片加载前的占位图
//   static LOADING_URL = 'XXX'

//   constructor(imgNode) {
//     this.imgNode = imgNode
//   }

//   setSrc(targetUrl) {
//     this.imgNode.src = PreLoadImage.LOADING_URL

//     const image = new Image()
//     根据targetUrl去加载图片
//     image.src = targetUrl

//     image.onload = () => {
//     // targetUrl已缓存
//       this.imgNode.src = targetUrl
//     }
//   }
// }

// // 'image' 是img标签
// // new PreLoadImage('image')


// 虚拟代理模式
// 一个类只做一件事
// 预加载类
class PreLoadImage {
  constructor(imgNode) {
    this.imgNode = imgNode
  }

  setSrc(imgUrl) {
    this.imgNode.src = imgUrl

  }
}

// dom操作类
class ProxyImage {
  // 图片加载前的占位图
  static LOADING_URL = 'XXX'

  constructor(targetImage) {
    this.targetImage = targetImage
  }

  setSrc(targetUrl) {
    // this.targetImage.setSrc(ProxyImage.LOADING_URL)
    let preLoadImage = new PreLoadImage(this.targetImage)
    preLoadImage.setSrc(ProxyImage.LOADING_URL)

    const virtualImage = new Image()
    virtualImage.src = targetUrl
    virtualImage.onload = () => {
      // this.targetImage.setSrc(targetUrl)
      preLoadImage.setSrc(targetUrl)
    }
  }
}
// 'image' 是img标签
// new PreLoadImage('image')


