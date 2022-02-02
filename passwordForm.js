function isPasswordValid(password) {
    console.log(password)
    password = password.trim()
    if (password.length >= 10) {
        return true
    } else {
        return false
    }

}
