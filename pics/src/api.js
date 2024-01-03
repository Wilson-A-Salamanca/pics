import axios from "axios";

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID W5XeJi9Q07gnuLK-Dp9RQjL9bI17BoAfEVgnJupk_ps'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImage;