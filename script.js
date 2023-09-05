document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('table-body');
            data.forEach(post => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td data-label="ID">${post.id}</td>
                    <td data-label="Title">${post.title}</td>
                    <td data-label="Body">${post.body}</td>
                    <td data-label="User ID">${post.userId}</td>
                    <td data-label="Post ID">${post.id}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error(error));
});