document.addEventListener("DOMContentLoaded", function () {
    // Asynchronous function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Data container

        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);
            const users = await response.json(); // Parse response as JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user list
            const userList = document.createElement('ul');

            // Loop through the users and create <li> for each name
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the user's name as the text
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // In case of an error, display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching data:', error); // Log the error for debugging
        }
    }

    // Invoke the function to fetch and display user data when the DOM is loaded
    fetchUserData();
});
