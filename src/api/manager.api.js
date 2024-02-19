import axios from "axios";


// שליפה של כל הרשימה
export const getAppointments = () => {
    return axios.get('http://localhost:3000/meeting');
}

// מחיקה
export const deleteAppointment = (id) => {
    return axios.delete(`http://localhost:3000/meeting/${id}`);
}

//עדכון
export const updateAppointment = (id, typeOfService, Date, Time, NameOfUser,  PhoneOfUser, Note ) => {
    return axios.put(`http://localhost:3000/meeting/${id}`, {
         typeOfService, Date, Time, NameOfUser,  PhoneOfUser, Note 
    });
}
