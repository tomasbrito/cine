import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const getUnavailableSeats = async (actualMovie) => {
    try {

        const id = actualMovie.id
        const docRef = await doc(FirebaseDB, 'movies', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const unavailableSeats = docSnap.data().unavailableSeats
            if(unavailableSeats === undefined) return { ok: true, unavailableSeats : [] }
            return { ok: true, unavailableSeats }
        } else {
            throw new Error('No se encontro pelicula con ese titulo ')
        }

    } catch (error) {
        console.log(error)
        return { ok: false, error: error.message }
    }

}