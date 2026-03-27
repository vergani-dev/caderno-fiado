import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }

    const rolesPermitidas = ['admin', 'client'];

    if (role && !rolesPermitidas.includes(role)) {
      return res.status(400).json({ erro: 'Role inválida' });
    }

    const senhaCriptografada = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: senhaCriptografada,
      role: role || 'client',
    });

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    return res.status(500).json({ erro: 'Erro ao criar usuário' });
  }
};
