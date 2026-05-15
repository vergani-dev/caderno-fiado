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
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ erro: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(password, user.password);

    if (!senhaValida) {
      return res.status(400).json({ erro: 'Senha inválida' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login realizado com sucesso',
      token,
    });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro no login' });
  }
};
