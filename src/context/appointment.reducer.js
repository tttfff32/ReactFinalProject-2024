// מקבל את הערך המקורי והאוביקט של הפעולה, וצריך להחזיר את הערך החדש
export const AppointmentReducer = (Appointments, action) => {
    const { type } = action;
    switch (type) {
        case 'load':
            return action.value
        case 'edit':
            return Appointments.map(appointment => {
                if (appointment.id === action.id) {
                    return {
                        ...appointment,
                        edit: true,
                    }
                }
                return appointment;
            });
            case 'add':
                        return {
                            ...action.newAppointment,
                            add: true,
                        }
        default:
            return Appointments;
    }
}