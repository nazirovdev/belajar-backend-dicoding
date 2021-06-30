const routes = [
    {
        method: 'GET',
        path: '/name/{name}',
        handler: (request, h) => {
            const {name} = request.params;
            return `Nama saya ${name}`
        }
    },
    {
        method: 'GET',
        path: '/address/{address}',
        handler: (request, h) => {
            const {address} = request.params;
            return `Saya tinggal di ${address}`
        }
    },
    {
        method: 'GET',
        path: '/majority/{majority}',
        handler: (request, h) => {
            const {majority} = request.params;
            return `Saya dari jurusan ${majority}`
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan'
        }
    }
];

module.exports = routes;