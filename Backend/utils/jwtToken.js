export const generateToken = (user, message, statusCode, res) => {
    const token = user.generateJsonWebToken();
    const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

    // Ensure COOKIE_EXPIRE is a valid number, default to 7 days if invalid
    const cookieExpire = parseInt(process.env.COOKIE_EXPIRE, 10) || 7;
    const expiresDate = new Date(Date.now() + cookieExpire * 24 * 60 * 60 * 1000);

    console.log("COOKIE_EXPIRE:", process.env.COOKIE_EXPIRE);
    console.log("Calculated expires:", expiresDate);

    res.status(statusCode).cookie(cookieName, token, {
        expires: expiresDate,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Optional: secure in production
        sameSite: "strict", // Optional: enhance security
    }).json({
        success: true,
        message,
        user,
        token
    });
};