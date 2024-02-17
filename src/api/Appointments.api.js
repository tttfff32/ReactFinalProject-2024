import axios from 'axios';

// שליפה של כל הרשימה
export const getAppointments = () => {
    return axios.get('http://localhost:3000/meeting');
}

// מחיקה
export const deleteAppointment = (id) => {
    return axios.delete(`http://localhost:3000/meeting/${id}`);
}

// עדכון
export const updateAppointment = (id, Date, Time, PhoneOfUser) => {
    return axios.put(`http://localhost:3000/meeting/${id}`, {
        Date,
        Time,
        PhoneOfUser,
    });
}

// יצירה
export const createAppointment = (typeOfService, Date, Time, NameOfUser, PhoneOfUser, Note) => {
    return axios.post(`http://localhost:3000/meeting`, {
        typeOfService,
        Date,
        Time,
        NameOfUser,
        PhoneOfUser,
        Note,
        
    });
}
