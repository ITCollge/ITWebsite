<?php
include 'db.php';

session_start();

// تسجيل الدخول
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            header("Location: dashboard.php");
        } else {
            echo "اسم المستخدم أو كلمة المرور غير صحيحة.";
        }
    } else {
        echo "اسم المستخدم غير موجود.";
    }
}

// تغيير كلمة المرور
if (isset($_POST['change_password'])) {
    $user_id = $_SESSION['user_id'];
    $new_password = password_hash($_POST['new_password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
    $stmt->bind_param("si", $new_password, $user_id);
    if ($stmt->execute()) {
        echo "تم تغيير كلمة المرور بنجاح.";
    } else {
        echo "حدث خطأ أثناء تغيير كلمة المرور.";
    }
}
?>
