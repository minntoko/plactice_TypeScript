const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log("Clicked!" + message);
}

// コメント
if( button ) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

const map = new Map();