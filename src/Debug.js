let isDebugMode = localStorage.getItem('debugMode') === 'enable'

function enableDebugMode() {
  console.log('enableDebugMode')
  isDebugMode = true
  localStorage.setItem('debugMode', 'enable');
}

function disableDebugMode() {
  console.log('disableDebugMode')
  isDebugMode = false
  localStorage.setItem('debugMode', 'disable');
}

function toggleDebugMode() {
  if(isDebugMode) {
    disableDebugMode()
  } else {
    enableDebugMode()
  }
}

export { isDebugMode, enableDebugMode, disableDebugMode, toggleDebugMode }