function shout(string) {
  return string.toUppercase();
}

function whisper(string) {
  return string.toLowercase();
}

function logShout(string) {
  console.log(string.toUppercase())
}

function logWhisper(string) {
  console.log(string.toLowercase())
}

function sayHiToGrandma(string) {
  if (string === string.toUppercase()) {
    return 'YES INDEED!'
  }
  else if (string === string.toLowercase()) {
    return "I can't hear you!"
  }
  else {
    return 'I love you, too.'
  }
}