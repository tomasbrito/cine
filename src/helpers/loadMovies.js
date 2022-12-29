import { async } from "@firebase/util"
import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from '../firebase/config'

export const loadMovies = async () => {
    const collectionRef = collection(FirebaseDB, 'movies')
    const docs = await getDocs(collectionRef)

    const movies = []
    docs.forEach(doc => {
        movies.push({id: doc.id, ...doc.data()})
    })

    return movies


}

