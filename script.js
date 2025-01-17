function submitForm() {
    const form = document.getElementById('registrationForm');
    const data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbxCMDndrbpcYGYcIcVR06LcnKZ6DVQiPrxrDUlUxgWraJBhZvsvAKNyRA-bYRrozQgT/exec', {
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(result => {
        alert('تم تسجيل الطالب بنجاح!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء التسجيل.');
    });
}
