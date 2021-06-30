const routes = [
    {
        method: 'GET',
        path: '/name/{name}',
        handler: (request, h) => {
            const lang = request.query.lang || 'null';
            const {name} = request.params;

            if (lang.toLowerCase() === 'id') {
                return `nama saya ${name}`;
            }
            return `my name is ${name}`;
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
        method: 'GET',
        path: '/university/',
        handler: (request, h) => {
            const {university} = request.query;
            return `saya dari universitas ${university}`
        }
    },
    {
        method: 'GET',
        path: '/age/',
        handler: (request, h) => {
            const {age} = request.query;
            return `Umur saya ${age} tahun`
        }
    }
];

module.exports = routes;