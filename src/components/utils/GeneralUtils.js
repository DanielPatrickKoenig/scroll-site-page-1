import {Power0, Power2, Power3, Power4, Back, Bounce, Circ, Elastic, Expo, Linear, RoughEase, Sine, SlowMo, SteppedEase} from 'gsap'
function isTablet () {
  return document.querySelector('#is_tablet_value_container').innerHTML.toString() === 'true'
}
function isMobile () {
  return document.querySelector('#is_mobile_value_container').innerHTML.toString() === 'true'
}
function getWindowSize () {
  var size = isMobile() ? {width: window.innerWidth, height: getMinHeight()} : {width: window.innerWidth, height: window.innerHeight}
  return size
}
function getMinHeight () {
  return 600
}
function getMinWidth () {
  return 1200
}
function getHeight () {
  var actualHeight = isMobile() ? getMinHeight() : window.innerHeight
  return actualHeight
  // return actualHeight < getMinHeight() ? getMinHeight() : actualHeight
}
function getWidth () {
  var actualWidth = window.innerWidth
  return actualWidth
  // return actualWidth < getMinWidth() ? getMinWidth() : actualWidth
}
function getMainScrollElement () {
  var userAgent = window.navigator.userAgent
  return navigator.appVersion.indexOf('Edge') !== -1 || userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) ? document.getElementsByTagName('body')[0] : document.getElementsByTagName('html')[0]
}
function getEasing (option, direction) {
  var ease = Sine
  switch (option) {
    case EasingOptions.LINEAR:
    {
      ease = Linear
      break
    }
    case EasingOptions.SINE:
    {
      ease = Sine
      break
    }
    case EasingOptions.BACK:
    {
      ease = Back
      break
    }
    case EasingOptions.POWER0:
    {
      ease = Power0
      break
    }
    case EasingOptions.POWER2:
    {
      ease = Power2
      break
    }
    case EasingOptions.POWER3:
    {
      ease = Power3
      break
    }
    case EasingOptions.POWER4:
    {
      ease = Power4
      break
    }
    case EasingOptions.CIRC:
    {
      ease = Circ
      break
    }
    case EasingOptions.EXPO:
    {
      ease = Expo
      break
    }
    case EasingOptions.ROUGHEASE:
    {
      ease = RoughEase
      break
    }
    case EasingOptions.SLOWMO:
    {
      ease = SlowMo
      break
    }
    case EasingOptions.STEPPEDEASE:
    {
      ease = SteppedEase
      break
    }
    case EasingOptions.BOUNCE:
    {
      ease = Bounce
      break
    }
    case EasingOptions.ELASTIC:
    {
      ease = Elastic
      break
    }
  }
  var formula = ease.easeInOut
  switch (direction) {
    case EasingDirections.IN:
    {
      formula = ease.easeIn
      break
    }
    case EasingDirections.OUT:
    {
      formula = ease.easeOut
      break
    }
    case EasingDirections.INOUT:
    {
      formula = ease.easeInOut
      break
    }
  }
  return formula
}
const EasingOptions = {
  LINEAR: 0,
  SINE: 16,
  BACK: 8,
  BOUNCE: 2,
  ELASTIC: 1,
  POWER0: 3,
  POWER1: 4,
  POWER2: 5,
  POWER3: 6,
  POWER4: 7,
  CIRC: 9,
  EXPO: 11,
  ROUGHEASE: 15,
  SLOWMO: 18,
  STEPPEDEASE: 19
}
const EasingDirections = {
  IN: 0,
  OUT: 1,
  INOUT: 2
}
const BackgroundRevealOptions = {
  LEFT: -50,
  RIGHT: 50
}
const GeneralUtils = {
  getHeight: getHeight,
  getWidth: getWidth,
  getMinHeight: getMinHeight,
  getMinWidth: getMinWidth,
  getWindowSize: getWindowSize,
  getMainScrollElement: getMainScrollElement,
  EasingOptions: EasingOptions,
  BackgroundRevealOptions: BackgroundRevealOptions,
  EasingDirections: EasingDirections,
  getEasing: getEasing,
  isTablet: isTablet,
  isMobile: isMobile
}
export default GeneralUtils
