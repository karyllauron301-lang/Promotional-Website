// Function to open the description modal
function openModal(title, description, image) {
    const modal = document.getElementById('descModal');
    document.getElementById('modalImg').src = image;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = description;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('descModal').style.display = "none";
}

// LOGIN SYSTEM LOGIC
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('userEmail').value;
    const pass = document.getElementById('userPass').value;

    // Credentials defined in your prompt
    if (email === "turtle@gmail.com" && pass === "cat12345") {
        // Switch views: Hide login, Show dashboard
        document.getElementById('login-box').style.display = "none";
        document.getElementById('dashboard-box').style.display = "block";
        alert("Success! Welcome to the Dapitan Employee Portal.");
    } else {
        alert("Access Denied. Please check your credentials.");
    }
});

// Close modal if user clicks the dark background
window.onclick = function(event) {
    const modal = document.getElementById('descModal');
    if (event.target == modal) {
        closeModal();
    }
}