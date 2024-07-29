// script.js

document.getElementById('change-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('change-password-modal').style.display = 'flex';
});

document.getElementById('change-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // هنا يتم إضافة كود التحديث لقاعدة البيانات
    alert('تم تغيير كلمة المرور');
    document.getElementById('change-password-modal').style.display = 'none';
    // هنا يمكنك إضافة كود لتحويل المستخدم إلى صفحة أخرى
    window.location.href = 'other-page.html';
});

function closeModal() {
    document.getElementById('change-password-modal').style.display = 'none';
}

// مثال لكود التعامل مع تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // هنا يتم إضافة كود التحقق من بيانات تسجيل الدخول
    alert('تسجيل الدخول ناجح');
    // هنا يمكنك إضافة كود لتحويل المستخدم إلى صفحة أخرى
    window.location.href = '../html/new.html';
});
