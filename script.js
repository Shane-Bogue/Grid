const main = document.querySelector('main')

for (let i = 0; i < 12; i++) {
    const div = document.createElement('div')
    div.textContent = String.fromCharCode(i+65)
    main.append(div)
}
