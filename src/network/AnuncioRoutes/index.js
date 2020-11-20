import api from './../api';

export default {
    async getAll () {
        const data = await fetch(`${api}/anuncios`);

        const dataJson = await data.json();

        return dataJson;
    }
}