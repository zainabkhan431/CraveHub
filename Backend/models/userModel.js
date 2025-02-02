const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Create User Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: function () { return this.role !== 'guest'; } // Required if not a guest
    },
    email: {
      type: String,
      required: function () { return this.role !== 'guest'; }, // Required if not a guest
      unique: true,  // Each registered user must have a unique email
    },
    password: {
      type: String,
      required: function () { return this.role !== 'guest'; } // Required if not a guest
    },
    role: {
      type: String,
      enum: ['user', 'guest', 'admin'],
      default: 'user',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Password hashing before saving a user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to match entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
