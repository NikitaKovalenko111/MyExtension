if (localStorage.getItem('dark-theme') == 'true') {
    darkthemeCheckbox.checked = true;
    darkTheme();
}

if (localStorage.getItem('author') == 'false') {
    removeauthorCheckbox.checked = true;
}

if (submitButton) {
    submitButton.addEventListener('click', function() {
        if (darkthemeCheckbox) {
            if (darkthemeCheckbox.checked) {
                darkTheme(); 
            }
            if (!darkthemeCheckbox.checked) {
                lightTheme();
            }
        }
        if (removeauthorCheckbox) {
            if (removeauthorCheckbox.checked) {
                localStorage.setItem('author', false);
            }
            if (!removeauthorCheckbox.checked) {
                localStorage.removeItem('author');
            }
        }
        document.location.href = '/assets/index.html';
    });
};