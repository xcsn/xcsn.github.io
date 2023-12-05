// fetch('./rust_intro.wasm')
//     .then(response => response.arrayBuffer())
//     .then(bytes => WebAssembly.instantiate(bytes, {}))
//     .then(result => {
//         const { instance } = result;

//         // Call the add function from Rust
//         const sum = instance.exports.add(5, 3);
//         console.log('Result of add(5, 3):', sum);

//         // Display the result on the page
//         const resultElement = document.getElementById('result');
//         resultElement.textContent = `Result of add(5, 3): ${sum}`;
//     })
//     .catch(console.error);
const importObj = {};
const response = await fetch("./rust_intro.wasm");
const {instance} =  await WebAssembly.instantiateStreaming(response, importObj);

const resultElement = document.getElementById('result');
const inputButtonElement = document.getElementById('input-button');
const inputLeftElement = document.getElementById('input-left');
const inputRightElement = document.getElementById('input-right');

inputButtonElement.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(inputLeftElement.value);
    console.log(inputRightElement.value);
    // instance.exports.add(40, 2)
    // resultElement.textContent = `${sum}`;
})