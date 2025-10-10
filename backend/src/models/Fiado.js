import mongoose from 'mongoose';

const fiadoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId, // Nome do cliente
    ref: 'Cliente', //Relaciona o fiado ao cliente
    required: true, // Campo Obrigatório
  },
  valor: {
    type: Number, //Valor do débito
    required: true,
  },
  data: {
    type: Date, // Data do registro do fiado
    default: Date.now, //Padrão é a data atual
  },
  pago: {
    type: Boolean, //Se a dívida já foi paga
    default: false,
  },
});

const Fiado = mongoose.model('Fiado', fiadoSchema);

export default Fiado;
