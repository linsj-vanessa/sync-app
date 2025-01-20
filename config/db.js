const mongoose = require('mongoose');

const conectarBancoDados = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB');
    } catch (erro) {
        console.error('Erro ao conectar ao MongoDB:', erro);
        process.exit(1); // Finaliza o processo caso haja falha na conexão
    }
};

module.exports = conectarBancoDados;