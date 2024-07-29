<?php
$host = 'localhost'; // أو عنوان الخادم الذي تستضيف عليه قاعدة البيانات
$db = 'login_system';
$user = 'root'; // اسم المستخدم لقاعدة البيانات
$pass = ''; // كلمة المرور لقاعدة البيانات

// إنشاء اتصال بقاعدة البيانات
$conn = new mysqli($host, $user, $pass, $db);

// التحقق من وجود أخطاء في الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}
?>
