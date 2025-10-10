import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true, // nome obrigatorio
  },

  telefone: {
    type: Number,
    required: false, //Telefone para contato não obrigatorio
  },
  endereco: {
    type: String,
    required: false,
  },
  criadoEm: {
    type: Date,
    default: Date.now, // data em que o cliente foi cadastrado
  },
  ativo: {
    type: Boolean,
    default: true, //Para controlar clientes inativos sem pagar
  },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;
