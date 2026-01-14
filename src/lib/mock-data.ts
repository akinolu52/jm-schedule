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
    date?: string; // Optional, can be derived
};

export const EMPLOYEES: Employee[] = [
    // Managers (Page 1)
    { id: '1', name: 'Bhattarai, Sanket', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '2', name: 'Basnet, Seela', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '3', name: 'Bhavna, Bhavna', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '4', name: 'Martin, Hashmal', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '5', name: 'O\'SULLIVAN, ADAM F', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '6', name: 'Philip, Shijil', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '7', name: 'Taniya, Taniya', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '8', name: 'Williams, Keianne', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '9', name: 'Yousufi, Zameer', role: 'Shift Manager', primaryJob: 'Shift Manager' },

    // Team Members (Page 2 & 3)
    { id: '10', name: 'Akinyemi, Emmanuel', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '11', name: 'Bernardo, Jennifer', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '12', name: 'Bhandari, Manish', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '13', name: 'Bhatt, Nishant', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '14', name: 'Biswas, Sohini', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '15', name: 'Chaudhary, Brijesh', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '16', name: 'Dsouza, Evita', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '17', name: 'Gomes, Patrick', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '18', name: 'Kaur, Ananpreet', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '19', name: 'Laxa, Mary jane P', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '20', name: 'Maswaku, Charles', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '21', name: 'Nasibbayli, Max', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '22', name: 'Omoding, Darwin', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '23', name: 'Pyakurel, Bishwajit', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '24', name: 'Romana, Zeenath', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '25', name: 'Sebastiao, Swelly', role: 'Team Member - Équipier', primaryJob: 'Team Member' }, // Note: Name changed from Madalena to Swelly in image? Or different person. strict text matching image.
    { id: '26', name: 'Singh, Manmeet', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '27', name: 'Solmes, Andrew', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '28', name: 'Tabemonso, Celestine E', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '29', name: 'Tamang, Rohan', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '30', name: 'Traccitti, Maria', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '31', name: 'Tsegay, Betel', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
    { id: '32', name: 'Virpariya, Shiv', role: 'Team Member - Équipier', primaryJob: 'Team Member' },
];

export const DAYS = [
    { label: 'Tue', date: '1/13/2026' },
    { label: 'Wed', date: '1/14/2026' },
    { label: 'Thu', date: '1/15/2026' },
    { label: 'Fri', date: '1/16/2026' },
    { label: 'Sat', date: '1/17/2026' },
    { label: 'Sun', date: '1/18/2026' },
    { label: 'Mon', date: '1/19/2026' },
];

export const SHIFTS: Shift[] = [
    // 1. Bhattarai, Sanket
    { employeeId: '1', day: 'Wed', date: '1/14/2026', startTime: '11:15', endTime: '18:15' },
    { employeeId: '1', day: 'Thu', date: '1/15/2026', startTime: '11:00', endTime: '17:00' },
    { employeeId: '1', day: 'Fri', date: '1/16/2026', startTime: '11:00', endTime: '16:00' },
    { employeeId: '1', day: 'Sat', date: '1/17/2026', startTime: '12:00', endTime: '19:00' },
    { employeeId: '1', day: 'Mon', date: '1/19/2026', startTime: '16:30', endTime: '22:30' },

    // 2. Basnet, Seela
    { employeeId: '2', day: 'Thu', startTime: '12:00', endTime: '20:00' },
    { employeeId: '2', day: 'Fri', startTime: '11:00', endTime: '15:00' },

    // 3. Bhavna, Bhavna
    { employeeId: '3', day: 'Tue', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Fri', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Sun', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Mon', startTime: '11:00', endTime: '19:00' },

    // 4. Martin, Hashmal
    { employeeId: '4', day: 'Tue', startTime: '15:00', endTime: '22:30' },
    { employeeId: '4', day: 'Wed', startTime: '11:00', endTime: '19:00' },
    { employeeId: '4', day: 'Sat', startTime: '11:00', endTime: '19:00' },
    { employeeId: '4', day: 'Sun', startTime: '11:00', endTime: '19:00' },
    { employeeId: '4', day: 'Mon', startTime: '17:00', endTime: '22:00' },

    // 5. O'SULLIVAN, ADAM F
    { employeeId: '5', day: 'Tue', startTime: '11:00', endTime: '19:00' },
    { employeeId: '5', day: 'Wed', startTime: '14:00', endTime: '22:00' },
    { employeeId: '5', day: 'Thu', startTime: '15:00', endTime: '22:30' },
    { employeeId: '5', day: 'Fri', startTime: '15:00', endTime: '23:00' },
    { employeeId: '5', day: 'Sat', startTime: '15:00', endTime: '22:00' },

    // 6. Philip, Shijil
    { employeeId: '6', day: 'Wed', startTime: '15:00', endTime: '22:30' },
    { employeeId: '6', day: 'Thu', startTime: '16:00', endTime: '22:00' },
    { employeeId: '6', day: 'Fri', startTime: '14:00', endTime: '21:00' },
    { employeeId: '6', day: 'Sat', startTime: '15:00', endTime: '22:30' },
    { employeeId: '6', day: 'Mon', startTime: '11:30', endTime: '16:30' },

    // 7. Taniya, Taniya
    { employeeId: '7', day: 'Tue', startTime: '11:15', endTime: '18:15' },
    { employeeId: '7', day: 'Wed', startTime: '11:30', endTime: '16:30' },
    { employeeId: '7', day: 'Thu', startTime: '11:30', endTime: '16:30' },
    { employeeId: '7', day: 'Fri', startTime: '07:00', endTime: '13:30' },
    { employeeId: '7', day: 'Mon', startTime: '07:00', endTime: '15:00' },

    // 8. Williams, Keianne
    { employeeId: '8', day: 'Thu', startTime: '11:00', endTime: '19:00' },
    { employeeId: '8', day: 'Fri', startTime: '11:30', endTime: '16:00' },
    { employeeId: '8', day: 'Sun', startTime: '15:00', endTime: '22:30' },
    { employeeId: '8', day: 'Mon', startTime: '15:00', endTime: '22:30' },

    // 9. Yousufi, Zameer
    { employeeId: '9', day: 'Wed', startTime: '07:00', endTime: '15:00' },
    { employeeId: '9', day: 'Thu', startTime: '09:00', endTime: '17:00' },
    { employeeId: '9', day: 'Fri', startTime: '09:00', endTime: '14:00' },
    { employeeId: '9', day: 'Sat', startTime: '07:00', endTime: '15:00' },
    { employeeId: '9', day: 'Mon', startTime: '07:00', endTime: '15:00' },

    // 10. Akinyemi, Emmanuel
    { employeeId: '10', day: 'Tue', startTime: '12:00', endTime: '17:00' },
    { employeeId: '10', day: 'Wed', startTime: '17:00', endTime: '22:30' },
    { employeeId: '10', day: 'Thu', startTime: '17:00', endTime: '22:30' },
    { employeeId: '10', day: 'Fri', startTime: '17:00', endTime: '23:00' },

    // 11. Bernardo, Jennifer
    { employeeId: '11', day: 'Tue', startTime: '10:00', endTime: '14:30' },
    { employeeId: '11', day: 'Wed', startTime: '10:00', endTime: '14:30' },
    { employeeId: '11', day: 'Thu', startTime: '10:00', endTime: '14:30' },

    // 12. Bhandari, Manish
    { employeeId: '12', day: 'Tue', startTime: '07:30', endTime: '14:30' },
    { employeeId: '12', day: 'Wed', startTime: '12:00', endTime: '20:00' },
    { employeeId: '12', day: 'Fri', startTime: '12:00', endTime: '17:00' },
    { employeeId: '12', day: 'Sun', startTime: '08:00', endTime: '13:00' },

    // 13. Bhatt, Nishant
    { employeeId: '13', day: 'Wed', startTime: '12:00', endTime: '17:00' },
    { employeeId: '13', day: 'Thu', startTime: '12:00', endTime: '17:00' },
    { employeeId: '13', day: 'Fri', startTime: '11:30', endTime: '16:30' },
    { employeeId: '13', day: 'Sat', startTime: '07:30', endTime: '14:30' },
    { employeeId: '13', day: 'Sun', startTime: '12:00', endTime: '20:00' },

    // 14. Biswas, Sohini
    { employeeId: '14', day: 'Tue', startTime: '08:00', endTime: '15:00' },
    { employeeId: '14', day: 'Thu', startTime: '08:00', endTime: '15:00' },

    // 15. Chaudhary, Brijesh
    { employeeId: '15', day: 'Wed', startTime: '07:30', endTime: '14:30' },
    { employeeId: '15', day: 'Thu', startTime: '07:30', endTime: '14:30' },
    { employeeId: '15', day: 'Fri', startTime: '07:30', endTime: '14:30' },
    { employeeId: '15', day: 'Mon', startTime: '07:30', endTime: '14:30' },

    // 16. Dsouza, Evita
    { employeeId: '16', day: 'Tue', startTime: '07:30', endTime: '14:30' },
    { employeeId: '16', day: 'Wed', startTime: '07:30', endTime: '14:30' },
    { employeeId: '16', day: 'Thu', startTime: '07:30', endTime: '14:30' },

    // 17. Gomes, Patrick
    { employeeId: '17', day: 'Tue', startTime: '11:15', endTime: '18:15' },
    { employeeId: '17', day: 'Wed', startTime: '12:00', endTime: '20:00' },
    { employeeId: '17', day: 'Sat', startTime: '07:30', endTime: '13:30' },
    { employeeId: '17', day: 'Sat', startTime: '08:30', endTime: '13:30' }, // Split shift? Or merged?
    { employeeId: '17', day: 'Mon', startTime: '08:00', endTime: '13:00' },

    // 18. Kaur, Ananpreet
    { employeeId: '18', day: 'Tue', startTime: '17:30', endTime: '22:30' },
    { employeeId: '18', day: 'Wed', startTime: '11:45', endTime: '18:45' },
    { employeeId: '18', day: 'Thu', startTime: '10:30', endTime: '15:00' },
    { employeeId: '18', day: 'Sat', startTime: '12:00', endTime: '17:00' },

    // 19. Laxa, Mary jane P
    { employeeId: '19', day: 'Tue', startTime: '07:00', endTime: '15:00' },
    { employeeId: '19', day: 'Thu', startTime: '15:00', endTime: '22:30' },
    { employeeId: '19', day: 'Fri', startTime: '15:00', endTime: '23:00' },
    { employeeId: '19', day: 'Sun', startTime: '15:00', endTime: '22:30' },
    { employeeId: '19', day: 'Mon', startTime: '11:00', endTime: '19:00' },

    // 20. Maswaku, Charles
    { employeeId: '20', day: 'Tue', startTime: '17:00', endTime: '22:30' },
    { employeeId: '20', day: 'Sat', startTime: '17:00', endTime: '22:30' },
    { employeeId: '20', day: 'Sun', startTime: '17:00', endTime: '21:00' },

    // 21. Nasibbayli, Max
    { employeeId: '21', day: 'Wed', startTime: '16:30', endTime: '22:30' },
    { employeeId: '21', day: 'Thu', startTime: '16:30', endTime: '22:30' },
    { employeeId: '21', day: 'Fri', startTime: '16:30', endTime: '22:30' },
    { employeeId: '21', day: 'Sat', startTime: '16:30', endTime: '22:30' },
    { employeeId: '21', day: 'Sun', startTime: '16:30', endTime: '22:30' },

    // 22. Omoding, Darwin (Image 2)
    { employeeId: '22', day: 'Fri', startTime: '16:00', endTime: '20:00' },

    // 23. Pyakurel, Bishwajit
    { employeeId: '23', day: 'Tue', startTime: '07:30', endTime: '13:30' },
    { employeeId: '23', day: 'Tue', startTime: '08:30', endTime: '13:30' },
    { employeeId: '23', day: 'Fri', startTime: '07:30', endTime: '13:30' },
    { employeeId: '23', day: 'Sat', startTime: '07:30', endTime: '14:30' },
    { employeeId: '23', day: 'Sun', startTime: '07:30', endTime: '14:30' },
    { employeeId: '23', day: 'Mon', startTime: '11:00', endTime: '19:00' },

    // 24. Romana, Zeenath
    { employeeId: '24', day: 'Wed', startTime: '09:00', endTime: '14:00' },
    { employeeId: '24', day: 'Sat', startTime: '14:30', endTime: '22:30' },
    { employeeId: '24', day: 'Sun', startTime: '11:00', endTime: '19:00' },

    // 25. Sebastiao, Swelly
    { employeeId: '25', day: 'Wed', startTime: '08:00', endTime: '13:00' },
    { employeeId: '25', day: 'Thu', startTime: '11:45', endTime: '17:00' },
    { employeeId: '25', day: 'Fri', startTime: '16:00', endTime: '23:00' },
    { employeeId: '25', day: 'Mon', startTime: '10:30', endTime: '16:00' },

    // 26. Singh, Manmeet
    { employeeId: '26', day: 'Tue', startTime: '14:00', endTime: '22:00' }, // Image says 2:00 PM - 10:00 PM
    { employeeId: '26', day: 'Thu', startTime: '07:00', endTime: '15:00' },
    { employeeId: '26', day: 'Mon', startTime: '15:00', endTime: '23:00' },

    // 27. Solmes, Andrew
    { employeeId: '27', day: 'Wed', startTime: '17:00', endTime: '22:30' },
    { employeeId: '27', day: 'Thu', startTime: '17:00', endTime: '22:30' },
    { employeeId: '27', day: 'Fri', startTime: '17:00', endTime: '22:00' },
    { employeeId: '27', day: 'Mon', startTime: '17:00', endTime: '22:30' },

    // 28. Tabemonso, Celestine E
    { employeeId: '28', day: 'Tue', startTime: '11:00', endTime: '19:00' },
    { employeeId: '28', day: 'Thu', startTime: '08:00', endTime: '13:00' },
    { employeeId: '28', day: 'Sat', startTime: '08:00', endTime: '13:00' },
    { employeeId: '28', day: 'Sun', startTime: '09:00', endTime: '15:00' },
    { employeeId: '28', day: 'Mon', startTime: '07:30', endTime: '14:30' },

    // 29. Tamang, Rohan
    { employeeId: '29', day: 'Tue', startTime: '08:00', endTime: '13:00' },
    { employeeId: '29', day: 'Wed', startTime: '17:00', endTime: '22:00' },
    { employeeId: '29', day: 'Fri', startTime: '11:30', endTime: '16:00' },
    { employeeId: '29', day: 'Sun', startTime: '12:00', endTime: '17:00' },

    // 30. Traccitti, Maria
    { employeeId: '30', day: 'Sat', startTime: '09:30', endTime: '13:30' },

    // 31. Tsegay, Betel
    { employeeId: '31', day: 'Tue', startTime: '18:00', endTime: '22:30' },
    { employeeId: '31', day: 'Sun', startTime: '08:00', endTime: '13:00' },
    { employeeId: '31', day: 'Mon', startTime: '12:00', endTime: '16:30' },

    // 32. Virpariya, Shiv
    { employeeId: '32', day: 'Wed', startTime: '11:00', endTime: '19:00' },
    { employeeId: '32', day: 'Thu', startTime: '17:00', endTime: '21:00' },
    { employeeId: '32', day: 'Fri', startTime: '10:00', endTime: '14:00' },
    { employeeId: '32', day: 'Mon', startTime: '12:00', endTime: '19:30' },
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
