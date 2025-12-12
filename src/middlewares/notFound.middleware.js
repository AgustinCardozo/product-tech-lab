export const notFoundMiddleware = (req, res, next) => {
    res.status(404).send({
        status: 404,
        message: 'No se encontró la ruta. Por favor, revisa la documentación.' 
    });
};