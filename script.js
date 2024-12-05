// Ambil elemen-elemen berdasarkan ID
const inputField = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

// Menambahkan event listener untuk tombol "Add Item"
addItemButton.addEventListener('click', function() {
    // Ambil nilai dari input field
    const newItemText = inputField.value.trim();

    // Cek apakah input field tidak kosong
    if (newItemText) {
        // Buat elemen <li> baru
        const newItem = document.createElement('li');
        // Set teks dari elemen <li> dengan nilai input field
        newItem.textContent = newItemText;

        // Tambahkan elemen <li> ke dalam daftar (ul)
        itemList.appendChild(newItem);

        // Kosongkan input field setelah item ditambahkan
        inputField.value = '';
    } else {
        alert('Harap masukkan item!');
    }
});
