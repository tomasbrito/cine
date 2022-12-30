import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const buyTickets = async (actualMovie, nTickets) => {
    try {

        const id = actualMovie.id
        const docRef = await doc(FirebaseDB, 'movies', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const ticketsNow = docSnap.data().tickets
            console.log({ ticketsNow, nTickets })

            if (ticketsNow < nTickets) { throw new Error('No quedan entradas suficientes') }

            const tickets = ticketsNow - nTickets
            await setDoc(docRef, { tickets: tickets }, { merge: true });
            return { ok: true, actualMovie, nTickets }
        } else {
            throw new Error('No se encontro pelicula con ese titulo ')
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }



}