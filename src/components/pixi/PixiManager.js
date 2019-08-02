import 'pixi.js'
function PixiManager () {
  // console.log(PIXI)
  // var PIXI = require('pixi.js')
  this.PIXI = require('pixi.js')
  this.app = {}
  this.renderer = {}
  this.resolution = 1
  var self = this
  function getDefaultProperties () {
    return {
      color: 0x000000,
      opacity: 1,
      x: 0,
      y: 0,
      radius: 72,
      strokeColor: 0x000000,
      strokeOpacity: 0,
      strokeWidth: 1,
      width: 72,
      height: 72
    }
  }
  this.init = function (el, _width, _height, backgroundColor) {
    var width = _width !== undefined && _width !== null ? _width : 800
    var height = _height !== undefined && _height !== null ? _height : 600
    self.PIXI = require('pixi.js')
    self.app = new this.PIXI.Application(width, height, {antialias: true, backgroundColor: backgroundColor, resolution: self.resolution, transparent: true})
    el.appendChild(self.app.view)
    self.renderer = self.PIXI.autoDetectRenderer(width, height)
    // self.renderer = self.PIXI.autoDetectRenderer({width: width, height: height, resolution: .1})
    // console.log(self.renderer)
    // renderer.backgroundColor = 0xCCCCCC
    // el.appendChild(renderer.view)
    // self.app = new PIXI.Container()
    // renderer.render(self.app)
    return self
  }
  this.createImage = function (src) {
    var texture = src.textureCacheIds !== undefined && src.textureCacheIds !== null ? src : self.PIXI.Texture.from(src)
    return new self.PIXI.Sprite(texture)
  }
  /*
  this.createImage2s = function (src) {
    // console.log(self.PIXI.projection)
    var texture = src.textureCacheIds !== undefined && src.textureCacheIds !== null ? src : self.PIXI.Texture.from(src)
    var spt = new self.PIXI.projection.Sprite2s(texture)
    // spt.anchor.set(0.5)
    return spt
  }
  // */
  this.createCircle = function (props) {
    var properties = getDefaultProperties()
    if (props !== undefined && props !== null) {
      for (var p in properties) {
        properties[p] = props[p]
      }
    }
    var g = new self.PIXI.Graphics()
    g.lineStyle(properties.strokeWidth, properties.strokeColor, properties.strokeOpacity)
    g.beginFill(properties.color, properties.opacity)
    g.drawCircle(properties.x, properties.y, properties.radius)
    g.endFill()
    // console.log(g)
    return g
  }
  this.createRect = function (props) {
    var properties = getDefaultProperties()
    if (props !== undefined && props !== null) {
      for (var p in properties) {
        properties[p] = props[p]
      }
    }
    var g = new self.PIXI.Graphics()
    g.beginFill(props.color)
    g.drawRect(properties.x, properties.y, properties.width, properties.height)
    g.endFill()
    return g
  }
  this.createPolygon = function (points, graphics, props) {
    var properties = getDefaultProperties()
    if (props !== undefined && props !== null) {
      for (var p in properties) {
        properties[p] = props[p]
      }
    }
    var noGraphics = graphics === undefined || graphics === null
    var g = noGraphics ? new self.PIXI.Graphics() : graphics
    if (noGraphics) {
      g.clear()
    }
    g.lineStyle(properties.strokeWidth, properties.strokeColor, properties.strokeOpacity)
    g.beginFill(properties.color, properties.opacity)
    g.moveTo(points[0].x, points[0].y)
    for (var i = 1; i < points.length; i++) {
      g.lineTo(points[i].x, points[i].y)
    }
    g.lineTo(points[0].x, points[0].y)
    g.endFill()
    return g
  }
  this.createTextureGrid = function (src, columns, rows, width, height) {
    var fullTexture = self.PIXI.Texture.from(src)
    var matrix = []
    var cellSize = {width: width / columns, height: height / rows}
    var left = 0
    var top = 0
    for (var i = 0; i < rows; i++) {
      var subMatrix = []
      for (var j = 0; j < columns; j++) {
        var cellLeft = left * cellSize.width
        var cellTop = top * cellSize.height
        var subTexture = new self.PIXI.Texture(fullTexture, new self.PIXI.Rectangle(cellLeft, cellTop, cellSize.width, cellSize.height))
        subMatrix.push(subTexture)
        left++
      }
      top++
      left = 0
      matrix.push(subMatrix)
    }
    // console.log('MATRIX')
    // console.log(matrix)
    return matrix
  }
  this.createRenderer = function () {
    var renderer = self.PIXI.autoDetectRenderer(90, 120)
    renderer.backgroundColor = 0xCCCCCC
    // console.log(renderer)
    return renderer
  }
  this.removeChildren = function (d) {
    for (var i = d.children.length - 1; i >= 0; i--) {
      d.removeChild(d.children[i])
    }
  }
  this.getChildByName = function (container, name) {
    var child = null
    for (var i = 0; i < container.children.length; i++) {
      if (container.children[i].name === name) {
        child = container.children[i]
      }
    }
    return child
  }
  this.createTextureFromGraphics = function (g) {
    var tx = g.generateTexture()
    return tx
  }
  this.createText = function (content, style, width) {
    var props = {fontFamily: style.fontFamily, fontSize: style.fontSize, fill: style.fill, align: style.align, fontWeight: style.fontWeight}
    if (width !== undefined && width !== null) {
      props.wordWrap = true
      props.wordWrapWidth = width
    }
    var text = new self.PIXI.Text(content, props)
    // text.interactive = true
    return text
  }
  this.getDescendants = function (_scope, _list) {
    if (!_list) {
      _list = []
    }
    for (var i = 0; i < _scope.children.length; i++) {
      _list.push(_scope.children[i])
      self.getDescendants(_scope.children[i], _list)
    }
    return _list
  }
  this.destroy = function () {
    var _list = self.getDescendants(self.app.stage)
    console.log(_list)
    _list = _list.reverse()
    for (var i = 0; i < _list.length; i++) {
      _list[i].parent.removeChild(_list[i])
      // _list[i].destroy(true);
    }
  }
}
export default PixiManager
