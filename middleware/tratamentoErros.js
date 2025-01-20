const tratamentoErros = (err, req, res, next) => {
    console.error(err.stack); // Log do erro no console
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Se o status code não foi definido, use 500
    res.status(statusCode).json({
    mensagem: err.message || 'Erro interno do servidor', // Envia a mensagem do erro, ou uma mensagem padrão
    });
 };

module.exports = tratamentoErros;