let isExplorer = true
function changeCard(event) {
  const card = event.currentTarget
  const backgroundImage = isExplorer
    ? 'url(./assets/bg-ignite.svg)'
    : 'url(./assets/bg-explorer.svg)'
  isExplorer = !isExplorer
  card.style.backgroundImage = backgroundImage
}

const btn = document.querySelector('#send')

btn.addEventListener('click', function () {
  const inputNome = document.querySelector('#inputNome')
  console.log(inputNome.value)

  const inputDesc = document.querySelector('#inputDesc')
  console.log(inputDesc.value)

  const inputImg = document.querySelector('#inputImg')
  console.log(inputImg.value)

  const title = document.querySelector('#title')
  title.innerHTML = inputNome.value

  const desc = document.querySelector('#desc')
  desc.innerHTML = inputDesc.value

  const img = document.querySelector('#img')
  img.src = inputImg.value
})
