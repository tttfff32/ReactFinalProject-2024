import axios from "axios";


// שליפה של כל הרשימה
export const getAppointments = () => {
    return axios.get('http://localhost:3000/meeting');
}

// מחיקה
export const deleteAppointment = (name) => {
    return axios.delete(`http://localhost:3000/meeting/${name}`);
}

//עדכון
export const updateAppointment = (id, NameOfUser, PhoneOfUser) => {
    return axios.put(`http://localhost:3000/meeting/${id}`, {
        NameOfUser,
        PhoneOfUser,
    });
}
