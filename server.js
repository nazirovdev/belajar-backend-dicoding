const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        hostname: 'localhost'
    });

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
