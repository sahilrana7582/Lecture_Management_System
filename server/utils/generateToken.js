import jwt from 'jsonwebtoken';

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: '1d',
  });

  return res
    .status(200)
    .cookie('token', token, {
      httpOnly: true, // Prevent access to the token via JavaScript (security measure)
      sameSite: 'None', // Allow cross-origin requests (important for cross-site cookies)
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    })
    .json({
      success: true,
      message,
      user,
    });
};
