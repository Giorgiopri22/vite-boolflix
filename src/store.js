import {reactive} from "vue";

export const store = reactive ( {
    arrayFilm : [],
    arraySeries : [],
} )

const {api} = {
    key : "7e771f638ed6bd90275aea721a944b28",
    basecall: "https://developers.themoviedb.org/3",
    urlImage: "https://image.tmdb.org/t/p/w500/"
}
export {api}