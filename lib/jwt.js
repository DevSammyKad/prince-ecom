import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    secret,
    { expiresIn: "1h" } // Token expires in 1 hour
  );
}

// In the login function, after validating the password:
const token = generateToken(user);
return NextResponse.json(
  { user, token, message: "Login successful" },
  { status: 200 }
);
