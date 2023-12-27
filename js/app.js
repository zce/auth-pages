// https://toddmotto.com/what-function-window-document-undefined-iife-really-means/
(function (window, document, undefined) {
  var containerElement = document.querySelector('.container')
  var openElement = document.querySelector('.toggle')
  var closeElement = document.querySelector('.toggle')

  var isRegister = containerElement.classList.contains('active')
  var titleSuffix = document.title.substr(document.title.indexOf(' « '))

  var toggleHandle = function () {
    isRegister = !isRegister
    containerElement.classList.toggle('active')
    var target = isRegister ? 'Register' : 'Login'
    document.title = target + titleSuffix
    window.history.pushState(null, null, target.toLowerCase())
  }

  openElement.addEventListener('click', toggleHandle)
  closeElement.addEventListener('click', toggleHandle)
  window.addEventListener('popstate', toggleHandle)
})(window, document)
