fetch('./rust_intro.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(result => {
        const { instance } = result;

        // Call the add function from Rust
        const sum = instance.exports.add(5, 3);
        console.log('Result of add(5, 3):', sum);

        // Display the result on the page
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Result of add(5, 3): ${sum}`;
    })
    .catch(console.error);
