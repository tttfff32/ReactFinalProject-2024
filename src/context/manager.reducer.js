
export const AppointmentReducer = (AppointmentList, action) => {
    const { type } = action;
    switch (type) {
        case 'load':
            return action.value
        case 'edit':
            return AppointmentList.map(Appointment => {
                if (Appointment.id === action.id) {
                    return {
                        ...Appointment,
                        edit: true,
                    }
                }
                return Appointment;
            });
            case 'delete':
                return AppointmentList.map(Appointment => {
                    if (Appointment.id === action.id) {
                        return {
                            ...Appointment,
                            delete: true,
                        }
                    }
                    return Appointment;
                });
            
        default:
            return AppointmentList;
    }
}