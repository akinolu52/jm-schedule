export type Employee = {
    id: string;
    name: string;
    role: string;
    primaryJob?: string;
};

export type Shift = {
    employeeId: string;
    day: string;
    startTime: string;
    endTime: string;
    date?: string;
};

export const EMPLOYEES: Employee[] = [
    // Managers
    { id: '1', name: 'Bhattarai, Sanket', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '2', name: 'Basnet, Seela', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '3', name: 'Bhavna, Bhavna', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '4', name: 'Martin, Hashmal', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '5', name: 'O\'SULLIVAN, ADAM F', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '6', name: 'Philip, Shijil', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '7', name: 'Taniya, Taniya', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '8', name: 'Williams, Keianne', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '9', name: 'Yousufi, Zameer', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '35', name: 'Sarkar, Dipanwita', role: 'RGM in Training', primaryJob: 'RGM in Training' },

    // Team Members
    { id: '10', name: 'Akinyemi, Emmanuel', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '11', name: 'Bernardo, Jennifer', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '12', name: 'Bhandari, Manish', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '13', name: 'Bhatt, Nishant', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '14', name: 'Biswas, Sohini', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '15', name: 'Chaudhary, Brijesh', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '16', name: 'Gomes, Patrick', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '17', name: 'Kaur, Ananpreet', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '18', name: 'Laxa, Mary Jane P', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '19', name: 'Maswaku, Charles', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '20', name: 'Nasibbayli, Max', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '21', name: 'Omoding, Darwin', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '22', name: 'Pyakurel, Bishwajit', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '23', name: 'Romana, Zeenath', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '24', name: 'Sebastiao, Swelly', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '25', name: 'Singh, Manmeet', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '26', name: 'Solmes, Andrew', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '27', name: 'Tabemonso, Celestine E', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '28', name: 'Tamang, Rohan', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '29', name: 'Traccitti, Maria', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '30', name: 'Tsegay, Betel', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '31', name: 'Virpariya, Shiv', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '32', name: 'Williams, Jason', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '33', name: 'Bhatnagar, Vaani', role: 'Team Member', primaryJob: 'Equipier' },
    { id: '34', name: 'Dua, Kashika', role: 'Team Member', primaryJob: 'Equipier' },
];

export const DAYS = [
    { label: 'Tue', date: '2/03/2026' },
    { label: 'Wed', date: '2/04/2026' },
    { label: 'Thu', date: '2/05/2026' },
    { label: 'Fri', date: '2/06/2026' },
    { label: 'Sat', date: '2/07/2026' },
    { label: 'Sun', date: '2/08/2026' },
    { label: 'Mon', date: '2/09/2026' },
];

export const SHIFTS: Shift[] = [
    // 1. Bhattarai, Sanket
    { employeeId: '1', day: 'Wed', date: '2/04/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '1', day: 'Thu', date: '2/05/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '1', day: 'Fri', date: '2/06/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '1', day: 'Mon', date: '2/09/2026', startTime: '12:00', endTime: '20:00' },

    // 2. Basnet, Seela
    { employeeId: '2', day: 'Sat', date: '2/07/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '2', day: 'Sun', date: '2/08/2026', startTime: '12:00', endTime: '20:00' },

    // 3. Bhavna, Bhavna
    { employeeId: '3', day: 'Tue', date: '2/03/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Wed', date: '2/04/2026', startTime: '08:00', endTime: '16:00' },
    { employeeId: '3', day: 'Fri', date: '2/06/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Sat', date: '2/07/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '3', day: 'Mon', date: '2/09/2026', startTime: '10:00', endTime: '16:00' },

    // 4. Martin, Hashmal
    { employeeId: '4', day: 'Tue', date: '2/03/2026', startTime: '15:00', endTime: '22:30' },
    { employeeId: '4', day: 'Fri', date: '2/06/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '4', day: 'Sat', date: '2/07/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '4', day: 'Sun', date: '2/08/2026', startTime: '16:30', endTime: '22:30' },
    { employeeId: '4', day: 'Mon', date: '2/09/2026', startTime: '11:00', endTime: '19:00' },

    // 5. O'SULLIVAN, ADAM F
    { employeeId: '5', day: 'Tue', date: '2/03/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '5', day: 'Wed', date: '2/04/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '5', day: 'Thu', date: '2/05/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '5', day: 'Sat', date: '2/07/2026', startTime: '15:00', endTime: '22:30' },
    { employeeId: '5', day: 'Sun', date: '2/08/2026', startTime: '11:00', endTime: '19:00' },

    // 6. Philip, Shijil
    { employeeId: '6', day: 'Tue', date: '2/03/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '6', day: 'Wed', date: '2/04/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '6', day: 'Thu', date: '2/05/2026', startTime: '11:45', endTime: '16:45' },
    { employeeId: '6', day: 'Fri', date: '2/06/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '6', day: 'Mon', date: '2/09/2026', startTime: '07:00', endTime: '15:00' },

    // 7. Taniya, Taniya
    { employeeId: '7', day: 'Tue', date: '2/03/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '7', day: 'Wed', date: '2/04/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '7', day: 'Thu', date: '2/05/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '7', day: 'Sat', date: '2/07/2026', startTime: '09:00', endTime: '14:30' },
    { employeeId: '7', day: 'Sun', date: '2/08/2026', startTime: '08:00', endTime: '15:00' },

    // 8. Williams, Keianne
    { employeeId: '8', day: 'Tue', date: '2/03/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '8', day: 'Thu', date: '2/05/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '8', day: 'Fri', date: '2/06/2026', startTime: '14:00', endTime: '22:00' },
    { employeeId: '8', day: 'Sun', date: '2/08/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '8', day: 'Mon', date: '2/09/2026', startTime: '15:00', endTime: '22:30' },

    // 9. Yousufi, Zameer
    { employeeId: '9', day: 'Sat', date: '2/07/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '9', day: 'Sun', date: '2/08/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '9', day: 'Mon', date: '2/09/2026', startTime: '07:30', endTime: '14:30' },

    // 35. Sarkar, Dipanwita
    { employeeId: '35', day: 'Wed', date: '2/04/2026', startTime: '11:00', endTime: '19:30' },
    { employeeId: '35', day: 'Thu', date: '2/05/2026', startTime: '11:00', endTime: '19:30' },
    { employeeId: '35', day: 'Fri', date: '2/06/2026', startTime: '11:00', endTime: '19:30' },
    { employeeId: '35', day: 'Sun', date: '2/08/2026', startTime: '10:00', endTime: '18:30' },
    { employeeId: '35', day: 'Mon', date: '2/09/2026', startTime: '09:00', endTime: '17:30' },

    // 10. Akinyemi, Emmanuel
    { employeeId: '10', day: 'Tue', date: '2/03/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '10', day: 'Wed', date: '2/04/2026', startTime: '17:00', endTime: '23:00' },
    { employeeId: '10', day: 'Thu', date: '2/05/2026', startTime: '17:00', endTime: '23:00' },
    { employeeId: '10', day: 'Sat', date: '2/07/2026', startTime: '17:30', endTime: '22:30' },

    // 11. Bernardo, Jennifer
    { employeeId: '11', day: 'Tue', date: '2/03/2026', startTime: '10:00', endTime: '14:00' },
    { employeeId: '11', day: 'Wed', date: '2/04/2026', startTime: '10:00', endTime: '14:00' },
    { employeeId: '11', day: 'Fri', date: '2/06/2026', startTime: '10:00', endTime: '15:30' },
    { employeeId: '11', day: 'Mon', date: '2/09/2026', startTime: '10:00', endTime: '15:00' },

    // 12. Bhandari, Manish
    { employeeId: '12', day: 'Tue', date: '2/03/2026', startTime: '11:30', endTime: '16:30' },
    { employeeId: '12', day: 'Wed', date: '2/04/2026', startTime: '11:30', endTime: '16:00' },
    { employeeId: '12', day: 'Thu', date: '2/05/2026', startTime: '08:00', endTime: '15:00' },
    { employeeId: '12', day: 'Fri', date: '2/06/2026', startTime: '07:30', endTime: '14:30' },

    // 13. Bhatt, Nishant
    { employeeId: '13', day: 'Tue', date: '2/03/2026', startTime: '07:30', endTime: '13:30' },
    { employeeId: '13', day: 'Thu', date: '2/05/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '13', day: 'Sat', date: '2/07/2026', startTime: '11:00', endTime: '17:00' },
    { employeeId: '13', day: 'Mon', date: '2/09/2026', startTime: '07:30', endTime: '13:30' },

    // 14. Biswas, Sohini
    { employeeId: '14', day: 'Tue', date: '2/03/2026', startTime: '09:00', endTime: '14:30' },
    { employeeId: '14', day: 'Wed', date: '2/04/2026', startTime: '10:00', endTime: '15:00' },
    { employeeId: '14', day: 'Fri', date: '2/06/2026', startTime: '11:00', endTime: '15:00' },

    // 15. Chaudhary, Brijesh
    { employeeId: '15', day: 'Wed', date: '2/04/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '15', day: 'Thu', date: '2/05/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '15', day: 'Sat', date: '2/07/2026', startTime: '08:00', endTime: '15:00' },
    { employeeId: '15', day: 'Mon', date: '2/09/2026', startTime: '08:00', endTime: '15:00' },

    // 16. Gomes, Patrick
    { employeeId: '16', day: 'Wed', date: '2/04/2026', startTime: '17:00', endTime: '23:00' },
    { employeeId: '16', day: 'Thu', date: '2/05/2026', startTime: '11:45', endTime: '17:00' },
    { employeeId: '16', day: 'Fri', date: '2/06/2026', startTime: '11:30', endTime: '16:30' },
    { employeeId: '16', day: 'Sun', date: '2/08/2026', startTime: '16:00', endTime: '22:30' },

    // 17. Kaur, Ananpreet
    { employeeId: '17', day: 'Thu', date: '2/05/2026', startTime: '10:00', endTime: '17:00' },
    { employeeId: '17', day: 'Fri', date: '2/06/2026', startTime: '11:45', endTime: '17:00' },
    { employeeId: '17', day: 'Mon', date: '2/09/2026', startTime: '11:45', endTime: '17:00' },

    // 18. Laxa, Mary Jane P
    { employeeId: '18', day: 'Tue', date: '2/03/2026', startTime: '11:30', endTime: '16:30' },
    { employeeId: '18', day: 'Thu', date: '2/05/2026', startTime: '11:30', endTime: '16:30' },
    { employeeId: '18', day: 'Sat', date: '2/07/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '18', day: 'Sun', date: '2/08/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '18', day: 'Mon', date: '2/09/2026', startTime: '11:00', endTime: '19:00' },

    // 19. Maswaku, Charles
    { employeeId: '19', day: 'Thu', date: '2/05/2026', startTime: '17:00', endTime: '23:00' },
    { employeeId: '19', day: 'Sat', date: '2/07/2026', startTime: '17:00', endTime: '22:00' },

    // 20. Nasibbayli, Max
    { employeeId: '20', day: 'Tue', date: '2/03/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '20', day: 'Wed', date: '2/04/2026', startTime: '17:00', endTime: '23:00' },
    { employeeId: '20', day: 'Thu', date: '2/05/2026', startTime: '17:00', endTime: '23:00' },
    { employeeId: '20', day: 'Sat', date: '2/07/2026', startTime: '16:30', endTime: '22:30' },

    // 21. Omoding, Darwin
    { employeeId: '21', day: 'Thu', date: '2/05/2026', startTime: '16:00', endTime: '20:00' },

    // 22. Pyakurel, Bishwajit
    { employeeId: '22', day: 'Tue', date: '2/03/2026', startTime: '08:00', endTime: '15:00' },
    { employeeId: '22', day: 'Wed', date: '2/04/2026', startTime: '09:00', endTime: '14:30' },
    { employeeId: '22', day: 'Fri', date: '2/06/2026', startTime: '08:00', endTime: '15:00' },
    { employeeId: '22', day: 'Sun', date: '2/08/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '22', day: 'Mon', date: '2/09/2026', startTime: '17:00', endTime: '22:30' },

    // 23. Romana, Zeenath
    { employeeId: '23', day: 'Wed', date: '2/04/2026', startTime: '11:45', endTime: '16:30' },
    { employeeId: '23', day: 'Thu', date: '2/05/2026', startTime: '09:00', endTime: '14:30' },
    { employeeId: '23', day: 'Fri', date: '2/06/2026', startTime: '10:00', endTime: '16:00' },
    { employeeId: '23', day: 'Mon', date: '2/09/2026', startTime: '17:00', endTime: '22:00' },

    // 24. Sebastiao, Swelly
    { employeeId: '24', day: 'Tue', date: '2/03/2026', startTime: '10:00', endTime: '16:00' },
    { employeeId: '24', day: 'Wed', date: '2/04/2026', startTime: '11:30', endTime: '17:00' },
    { employeeId: '24', day: 'Fri', date: '2/06/2026', startTime: '09:00', endTime: '14:30' },
    { employeeId: '24', day: 'Mon', date: '2/09/2026', startTime: '10:00', endTime: '16:00' },

    // 25. Singh, Manmeet
    { employeeId: '25', day: 'Tue', date: '2/03/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '25', day: 'Thu', date: '2/05/2026', startTime: '17:00', endTime: '23:00' },
    { employeeId: '25', day: 'Fri', date: '2/06/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '25', day: 'Mon', date: '2/09/2026', startTime: '17:00', endTime: '22:30' },

    // 26. Solmes, Andrew
    { employeeId: '26', day: 'Tue', date: '2/03/2026', startTime: '17:00', endTime: '22:00' },
    { employeeId: '26', day: 'Wed', date: '2/04/2026', startTime: '17:00', endTime: '22:00' },
    { employeeId: '26', day: 'Thu', date: '2/05/2026', startTime: '17:00', endTime: '22:00' },

    // 27. Tabemonso, Celestine E
    { employeeId: '27', day: 'Wed', date: '2/04/2026', startTime: '10:00', endTime: '16:00' },
    { employeeId: '27', day: 'Thu', date: '2/05/2026', startTime: '10:00', endTime: '16:00' },
    { employeeId: '27', day: 'Fri', date: '2/06/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '27', day: 'Sun', date: '2/08/2026', startTime: '16:30', endTime: '21:00' },
    { employeeId: '27', day: 'Mon', date: '2/09/2026', startTime: '09:00', endTime: '14:30' },

    // 28. Tamang, Rohan
    { employeeId: '28', day: 'Wed', date: '2/04/2026', startTime: '17:00', endTime: '22:00' },
    { employeeId: '28', day: 'Sat', date: '2/07/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '28', day: 'Sun', date: '2/08/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '28', day: 'Mon', date: '2/09/2026', startTime: '10:30', endTime: '14:00' },

    // 29. Traccitti, Maria
    { employeeId: '29', day: 'Sun', date: '2/08/2026', startTime: '10:00', endTime: '14:00' },

    // 30. Tsegay, Betel
    { employeeId: '30', day: 'Sun', date: '2/08/2026', startTime: '09:00', endTime: '14:30' },
    { employeeId: '30', day: 'Mon', date: '2/09/2026', startTime: '18:00', endTime: '22:30' },

    // 31. Virpariya, Shiv
    { employeeId: '31', day: 'Wed', date: '2/04/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '31', day: 'Thu', date: '2/05/2026', startTime: '11:30', endTime: '16:30' },
    { employeeId: '31', day: 'Fri', date: '2/06/2026', startTime: '17:00', endTime: '22:30' },
    { employeeId: '31', day: 'Sat', date: '2/07/2026', startTime: '16:00', endTime: '22:30' },
    { employeeId: '31', day: 'Mon', date: '2/09/2026', startTime: '11:45', endTime: '17:00' },

    // 32. Williams, Jason
    { employeeId: '32', day: 'Fri', date: '2/06/2026', startTime: '17:00', endTime: '22:30' },

    // 33. Bhatnagar, Vaani
    { employeeId: '33', day: 'Fri', date: '2/06/2026', startTime: '12:00', endTime: '16:00' },

    // 34. Dua, Kashika
    { employeeId: '34', day: 'Tue', date: '2/03/2026', startTime: '11:45', endTime: '17:00' },
    { employeeId: '34', day: 'Wed', date: '2/04/2026', startTime: '11:45', endTime: '17:00' },
    { employeeId: '34', day: 'Thu', date: '2/05/2026', startTime: '11:45', endTime: '17:00' },
    { employeeId: '34', day: 'Fri', date: '2/06/2026', startTime: '11:45', endTime: '17:00' },
];

export function formatTime(time: string) {
    const [hour, minute] = time.split(':');
    const h = parseInt(hour);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minute} ${ampm}`;
}

export function calculateDuration(start: string, end: string): { hours: number; breakMinutes: number } {
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);

    const startDate = new Date(0, 0, 0, startH, startM);
    const endDate = new Date(0, 0, 0, endH, endM);

    let diffMs = endDate.getTime() - startDate.getTime();
    if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000;

    const hours = diffMs / (1000 * 60 * 60);
    const breakMinutes = hours > 5 ? 30 : 0;

    return { hours, breakMinutes };
}
