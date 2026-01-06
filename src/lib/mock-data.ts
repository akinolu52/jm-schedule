
export type Employee = {
    id: string;
    name: string;
    role: string; // 'Manager', 'Team Member', 'Shift Manager', etc.
    primaryJob: string;
};

export type Shift = {
    employeeId: string;
    day: string; // 'Tue', 'Wed', 'Thu', etc. - matching the screenshot column headers
    date: string; // '1/06/2026' etc
    startTime: string; // '07:00' 24hr format for easier sorting/calc
    endTime: string; // '14:00'
    isTimeOff?: boolean; // For 'x' marked days or specific codes
};

// Helper to format time to 12hr AM/PM
export function formatTime(time: string): string {
    if (!time) return "";
    const [hourStr, minuteStr] = time.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${minuteStr} ${ampm}`;
}

// Logic: > 5 hours = 30 min break
export function calculateDuration(start: string, end: string): { hours: number; breakMinutes: number } {
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);

    const startDate = new Date(0, 0, 0, startH, startM);
    const endDate = new Date(0, 0, 0, endH, endM);

    let diffMs = endDate.getTime() - startDate.getTime();
    if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000; // Handle overnight shifts if any

    const hours = diffMs / (1000 * 60 * 60);
    const breakMinutes = hours > 5 ? 30 : 0;

    return { hours, breakMinutes };
}

export const EMPLOYEES: Employee[] = [
    // Page 1
    { id: '1', name: 'Bhattarai, Sanket', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '2', name: 'Buster, Seela', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '3', name: 'Bhavina, Bhavna', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '4', name: 'Martin, Hashmal', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '5', name: 'Philip, Shiji', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '6', name: 'Taniya, Taniya', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '7', name: 'Williams, Keanne', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '8', name: 'Yousufi, Zameer', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '9', name: 'Akinyemi, Olumide', role: 'Team Member', primaryJob: 'Equipier' },

    // Page 2 & 3
    { id: '10', name: 'Bernardo, Jennifer', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '11', name: 'Bhandari, Manish', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '12', name: 'Bhatt, Nishant', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '13', name: 'Biswas, Sohini', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '14', name: 'Chaudhary, Brijesh', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '15', name: 'Dsouza, Evita', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '16', name: 'Dua, Kashika', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '17', name: 'Gomes, Turjoo', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '18', name: 'Kaur, Ananpreet', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '19', name: 'Laxa, Mary Jane P', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '20', name: 'Maswuka, Charles', role: 'Team Member', primaryJob: 'Equipier' },

    // Page 3 Cont.
    { id: '21', name: 'Nashbayli, Shamkhal', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '22', name: 'Omoding, Darwin', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '23', name: 'Pyakurel, Bishwajit', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '24', name: 'Romana, Zeenath', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '25', name: 'Sebastiao, Madalena', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '26', name: 'Singh, Manmeet', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '27', name: 'Solme, Andrew', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '28', name: 'Tabernonco, Celestine E', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '29', name: 'Tamang, Rohan', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '30', name: 'Trascitti, Maria', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '31', name: 'Tsegay, Betel', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '32', name: 'Vipariya, Shiv', role: 'Team Member', primaryJob: 'Equipier' },

    // Page 4
    { id: '33', name: 'Williams, Jason', role: 'Team Member', primaryJob: 'Equipier' },
];

export const DAYS = [
    { label: 'Tue', date: '1/06/2026' },
    { label: 'Wed', date: '1/07/2026' },
    { label: 'Thu', date: '1/08/2026' },
    { label: 'Fri', date: '1/09/2026' },
    { label: 'Sat', date: '1/10/2026' },
    { label: 'Sun', date: '1/11/2026' },
    { label: 'Mon', date: '1/12/2026' },
];

export const SHIFTS: Shift[] = [
    // 1. Bhattarai, Sanket
    { employeeId: '1', day: 'Tue', date: '1/06/2026', startTime: '07:00', endTime: '14:00' },
    { employeeId: '1', day: 'Thu', date: '1/08/2026', startTime: '10:30', endTime: '15:00' },
    { employeeId: '1', day: 'Sat', date: '1/10/2026', startTime: '12:00', endTime: '18:00' },
    { employeeId: '1', day: 'Mon', date: '1/12/2026', startTime: '08:00', endTime: '13:00' },

    // 2. Buster, Seela
    { employeeId: '2', day: 'Wed', date: '1/07/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '2', day: 'Thu', date: '1/08/2026', startTime: '12:00', endTime: '17:00' },
    { employeeId: '2', day: 'Fri', date: '1/09/2026', startTime: '12:00', endTime: '17:00' },
    { employeeId: '2', day: 'Sat', date: '1/10/2026', startTime: '10:00', endTime: '15:00' },

    // 3. Bhavna, Bhavna
    { employeeId: '3', day: 'Tue', date: '1/06/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Sat', date: '1/10/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '3', day: 'Sun', date: '1/11/2026', startTime: '15:00', endTime: '22:30' },
    { employeeId: '3', day: 'Mon', date: '1/12/2026', startTime: '15:00', endTime: '22:30' },

    // 4. Martin, Hashmal
    { employeeId: '4', day: 'Tue', date: '1/06/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '4', day: 'Thu', date: '1/08/2026', startTime: '15:00', endTime: '22:30' },
    { employeeId: '4', day: 'Sat', date: '1/10/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '4', day: 'Mon', date: '1/12/2026', startTime: '07:00', endTime: '15:00' },

    // 5. Philip, Shiji
    { employeeId: '5', day: 'Tue', date: '1/06/2026', startTime: '15:00', endTime: '22:30' },
    { employeeId: '5', day: 'Wed', date: '1/07/2026', startTime: '15:00', endTime: '22:30' },
    { employeeId: '5', day: 'Fri', date: '1/09/2026', startTime: '14:00', endTime: '22:30' },
    { employeeId: '5', day: 'Mon', date: '1/12/2026', startTime: '11:00', endTime: '19:00' },

    // 6. Taniya, Taniya
    { employeeId: '6', day: 'Thu', date: '1/08/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '6', day: 'Sun', date: '1/11/2026', startTime: '14:00', endTime: '22:00' }, // 2pm-10pm
    { employeeId: '6', day: 'Mon', date: '1/12/2026', startTime: '11:30', endTime: '19:30' },

    // 7. Williams, Keanne
    { employeeId: '7', day: 'Tue', date: '1/06/2026', startTime: '14:00', endTime: '22:00' },
    { employeeId: '7', day: 'Wed', date: '1/07/2026', startTime: '14:00', endTime: '22:00' },
    { employeeId: '7', day: 'Thu', date: '1/08/2026', startTime: '14:00', endTime: '22:00' },
    { employeeId: '7', day: 'Fri', date: '1/09/2026', startTime: '14:00', endTime: '22:00' },
    { employeeId: '7', day: 'Sat', date: '1/10/2026', startTime: '11:00', endTime: '19:00' },

    // 8. Yousufi, Zameer
    { employeeId: '8', day: 'Wed', date: '1/07/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '8', day: 'Fri', date: '1/09/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '8', day: 'Sat', date: '1/10/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '8', day: 'Sun', date: '1/11/2026', startTime: '11:30', endTime: '19:30' },

    // 9. Akinyemi, Olumide
    { employeeId: '9', day: 'Fri', date: '1/09/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '9', day: 'Sat', date: '1/10/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '9', day: 'Sun', date: '1/11/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '9', day: 'Mon', date: '1/12/2026', startTime: '17:00', endTime: '22:30' },

    // 10. Bernardo, Jennifer
    { employeeId: '10', day: 'Tue', date: '1/06/2026', startTime: '11:30', endTime: '15:00' },
    { employeeId: '10', day: 'Wed', date: '1/07/2026', startTime: '10:30', endTime: '15:00' },
    { employeeId: '10', day: 'Thu', date: '1/08/2026', startTime: '10:45', endTime: '14:30' },
    { employeeId: '10', day: 'Fri', date: '1/09/2026', startTime: '11:00', endTime: '15:00' },

    // 11. Bhandari, Manish
    { employeeId: '11', day: 'Tue', date: '1/06/2026', startTime: '07:45', endTime: '14:00' },
    { employeeId: '11', day: 'Thu', date: '1/08/2026', startTime: '16:00', endTime: '21:00' },
    { employeeId: '11', day: 'Sat', date: '1/10/2026', startTime: '07:00', endTime: '14:00' },
    { employeeId: '11', day: 'Mon', date: '1/12/2026', startTime: '11:30', endTime: '19:30' },

    // 12. Bhatt, Nishant
    { employeeId: '12', day: 'Wed', date: '1/07/2026', startTime: '16:00', endTime: '21:00' },
    { employeeId: '12', day: 'Thu', date: '1/08/2026', startTime: '11:00', endTime: '16:00' },
    { employeeId: '12', day: 'Fri', date: '1/09/2026', startTime: '07:30', endTime: '14:00' },
    { employeeId: '12', day: 'Sun', date: '1/11/2026', startTime: '11:00', endTime: '19:00' },

    // 13. Biswas, Sohini
    { employeeId: '13', day: 'Tue', date: '1/06/2026', startTime: '09:30', endTime: '13:00' },
    { employeeId: '13', day: 'Thu', date: '1/08/2026', startTime: '08:45', endTime: '13:00' },

    // 14. Chaudhary, Brijesh
    { employeeId: '14', day: 'Tue', date: '1/06/2026', startTime: '10:30', endTime: '15:00' },
    { employeeId: '14', day: 'Wed', date: '1/07/2026', startTime: '07:00', endTime: '14:00' },
    { employeeId: '14', day: 'Thu', date: '1/08/2026', startTime: '07:00', endTime: '14:00' },
    { employeeId: '14', day: 'Fri', date: '1/09/2026', startTime: '10:00', endTime: '14:30' },
    { employeeId: '14', day: 'Mon', date: '1/12/2026', startTime: '09:00', endTime: '14:00' },

    // 15. Dsouza, Evita
    { employeeId: '15', day: 'Tue', date: '1/06/2026', startTime: '08:30', endTime: '13:00' },
    { employeeId: '15', day: 'Wed', date: '1/07/2026', startTime: '08:00', endTime: '13:30' }, // 8:00-1:30
    { employeeId: '15', day: 'Thu', date: '1/08/2026', startTime: '07:30', endTime: '13:00' },
    { employeeId: '15', day: 'Fri', date: '1/09/2026', startTime: '07:00', endTime: '13:00' },

    // 16. Dua, Kashika
    { employeeId: '16', day: 'Wed', date: '1/07/2026', startTime: '09:00', endTime: '13:00' },
    { employeeId: '16', day: 'Fri', date: '1/09/2026', startTime: '08:45', endTime: '13:00' },
    { employeeId: '16', day: 'Mon', date: '1/12/2026', startTime: '10:00', endTime: '13:00' },

    // 17. Gomes, Turjoo
    { employeeId: '17', day: 'Tue', date: '1/06/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '17', day: 'Wed', date: '1/07/2026', startTime: '11:00', endTime: '17:00' },
    { employeeId: '17', day: 'Thu', date: '1/08/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '17', day: 'Sat', date: '1/10/2026', startTime: '12:30', endTime: '19:30' },
    { employeeId: '17', day: 'Mon', date: '1/12/2026', startTime: '09:30', endTime: '14:00' },

    // 18. Kaur, Ananpreet
    { employeeId: '18', day: 'Wed', date: '1/07/2026', startTime: '12:00', endTime: '16:00' },
    { employeeId: '18', day: 'Fri', date: '1/09/2026', startTime: '12:00', endTime: '17:00' },
    { employeeId: '18', day: 'Mon', date: '1/12/2026', startTime: '12:00', endTime: '17:00' },

    // 19. Laxa, Mary jane P
    { employeeId: '19', day: 'Tue', date: '1/06/2026', startTime: '16:00', endTime: '21:00' },
    { employeeId: '19', day: 'Wed', date: '1/07/2026', startTime: '10:30', endTime: '14:00' },
    { employeeId: '19', day: 'Sat', date: '1/10/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '19', day: 'Sun', date: '1/11/2026', startTime: '07:00', endTime: '14:00' },

    // 20. Maswuka, Charles
    { employeeId: '20', day: 'Thu', date: '1/08/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '20', day: 'Fri', date: '1/09/2026', startTime: '17:00', endTime: '22:00' },
    { employeeId: '20', day: 'Sat', date: '1/10/2026', startTime: '06:00', endTime: '08:30' },

    // 21. Nashbayli, Shamkhal
    { employeeId: '21', day: 'Tue', date: '1/06/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '21', day: 'Wed', date: '1/07/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '21', day: 'Thu', date: '1/08/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '21', day: 'Sat', date: '1/10/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '21', day: 'Mon', date: '1/12/2026', startTime: '11:45', endTime: '16:30' },

    // 22. Omoding, Darwin
    { employeeId: '22', day: 'Mon', date: '1/12/2026', startTime: '16:00', endTime: '20:00' },

    // 23. Pyakurel, Bishwajit
    { employeeId: '23', day: 'Tue', date: '1/06/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '23', day: 'Wed', date: '1/07/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '23', day: 'Sat', date: '1/10/2026', startTime: '07:45', endTime: '14:00' },
    { employeeId: '23', day: 'Mon', date: '1/12/2026', startTime: '07:00', endTime: '13:45' },

    // 24. Romana, Zeenath
    { employeeId: '24', day: 'Tue', date: '1/06/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '24', day: 'Fri', date: '1/09/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '24', day: 'Sun', date: '1/11/2026', startTime: '15:00', endTime: '20:00' },
    { employeeId: '24', day: 'Mon', date: '1/12/2026', startTime: '11:00', endTime: '15:00' },

    // 25. Sebastiao, Madalena
    { employeeId: '25', day: 'Tue', date: '1/06/2026', startTime: '12:00', endTime: '16:30' },
    { employeeId: '25', day: 'Wed', date: '1/07/2026', startTime: '11:45', endTime: '17:30' },
    { employeeId: '25', day: 'Thu', date: '1/08/2026', startTime: '17:00', endTime: '22:30' }, // 5-10:30pm
    { employeeId: '25', day: 'Mon', date: '1/12/2026', startTime: '17:00', endTime: '22:30' },

    // 26. Singh, Manmeet
    { employeeId: '26', day: 'Wed', date: '1/07/2026', startTime: '11:30', endTime: '18:00' },
    { employeeId: '26', day: 'Thu', date: '1/08/2026', startTime: '08:00', endTime: '14:00' },
    { employeeId: '26', day: 'Fri', date: '1/09/2026', startTime: '11:30', endTime: '17:30' },
    { employeeId: '26', day: 'Sun', date: '1/11/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '26', day: 'Mon', date: '1/12/2026', startTime: '14:00', endTime: '22:00' },

    // 27. Solmec, Andrew
    { employeeId: '27', day: 'Tue', date: '1/06/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '27', day: 'Wed', date: '1/07/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '27', day: 'Thu', date: '1/08/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '27', day: 'Mon', date: '1/12/2026', startTime: '17:00', endTime: '22:30' },

    // 28. Tabernonco, Celestine E
    { employeeId: '28', day: 'Tue', date: '1/06/2026', startTime: '10:00', endTime: '14:00' },
    { employeeId: '28', day: 'Wed', date: '1/07/2026', startTime: '10:00', endTime: '14:00' },
    { employeeId: '28', day: 'Thu', date: '1/08/2026', startTime: '09:30', endTime: '14:00' },
    { employeeId: '28', day: 'Fri', date: '1/09/2026', startTime: '09:30', endTime: '14:00' },
    { employeeId: '28', day: 'Sun', date: '1/11/2026', startTime: '08:00', endTime: '14:00' },

    // 29. Tamang, Rohan
    { employeeId: '29', day: 'Tue', date: '1/06/2026', startTime: '09:00', endTime: '14:30' },
    { employeeId: '29', day: 'Wed', date: '1/07/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '29', day: 'Thu', date: '1/08/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '29', day: 'Fri', date: '1/09/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '29', day: 'Sun', date: '1/11/2026', startTime: '09:30', endTime: '14:30' },

    // 30. Trascitti, Maria
    { employeeId: '30', day: 'Sat', date: '1/10/2026', startTime: '10:00', endTime: '14:00' },

    // 31. Tsegay, Betel
    { employeeId: '31', day: 'Fri', date: '1/09/2026', startTime: '10:30', endTime: '17:00' },
    { employeeId: '31', day: 'Sat', date: '1/10/2026', startTime: '10:00', endTime: '15:00' },

    // 32. Vipariya, Shiv
    { employeeId: '32', day: 'Thu', date: '1/08/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '32', day: 'Fri', date: '1/09/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '32', day: 'Sun', date: '1/11/2026', startTime: '15:00', endTime: '20:00' },
    { employeeId: '32', day: 'Mon', date: '1/12/2026', startTime: '12:00', endTime: '17:00' },

    // 33. Williams, Jason
    { employeeId: '33', day: 'Fri', date: '1/09/2026', startTime: '16:00', endTime: '20:00' },
    { employeeId: '33', day: 'Sat', date: '1/10/2026', startTime: '17:00', endTime: '22:30' },
];
