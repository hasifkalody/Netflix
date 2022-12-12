import {api_key} from './Constants/Constants'
const NetflixOriginals=`/discover/tv?api_key=${api_key}&with_networks=213`
const Action=`/discover/movie?api_key=${api_key}&with_genres=28`
const Horror=`/discover/movie?api_key=${api_key}&with_genres=27`
const Documentaries=`/discover/movie?api_key=${api_key}&with_genres=99`
const ComedyMovies=`/discover/movie?api_key=${api_key}&with_genres=35`
export {NetflixOriginals,Action,ComedyMovies,Documentaries,Horror}