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
    { id: '36', name: 'Johnson, Kenneth', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '37', name: 'Tamang, Nikita', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '38', name: 'Benoit, Nour', role: 'Shift Manager', primaryJob: 'Shift Manager' },
    { id: '39', name: 'Brown, Caleb', role: 'Shift Manager', primaryJob: 'Shift Manager' },

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
    { label: 'Tue', date: '4/7/2026' },
    { label: 'Wed', date: '4/8/2026' },
    { label: 'Thu', date: '4/9/2026' },
    { label: 'Fri', date: '4/10/2026' },
    { label: 'Sat', date: '4/11/2026' },
    { label: 'Sun', date: '4/12/2026' },
    { label: 'Mon', date: '4/13/2026' },
];

export const SHIFTS: Shift[] = [
    // PAGE 1 - Managers

    // 35. Sarkar, Dipanwita
    { employeeId: '35', day: 'Tue', date: '4/7/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '35', day: 'Wed', date: '4/8/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '35', day: 'Thu', date: '4/9/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '35', day: 'Sun', date: '4/12/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '35', day: 'Mon', date: '4/13/2026', startTime: '09:00', endTime: '17:30' },

    // 38. Benoit, Nour
    { employeeId: '38', day: 'Tue', date: '4/7/2026', startTime: '08:00', endTime: '16:00' },
    { employeeId: '38', day: 'Wed', date: '4/8/2026', startTime: '07:30', endTime: '15:30' },
    { employeeId: '38', day: 'Thu', date: '4/9/2026', startTime: '15:30', endTime: '23:00' },
    { employeeId: '38', day: 'Fri', date: '4/10/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '38', day: 'Sun', date: '4/12/2026', startTime: '15:00', endTime: '22:30' },

    // 3. Bhavna, Bhavna
    { employeeId: '3', day: 'Tue', date: '4/7/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Wed', date: '4/8/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '3', day: 'Fri', date: '4/10/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Sun', date: '4/12/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '3', day: 'Mon', date: '4/13/2026', startTime: '07:00', endTime: '15:00' },

    // 39. Brown, Caleb
    { employeeId: '39', day: 'Tue', date: '4/7/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '39', day: 'Wed', date: '4/8/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '39', day: 'Fri', date: '4/10/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '39', day: 'Sat', date: '4/11/2026', startTime: '12:30', endTime: '20:30' },
    { employeeId: '39', day: 'Mon', date: '4/13/2026', startTime: '07:30', endTime: '15:30' },

    // 4. Martin, Hashmal
    { employeeId: '4', day: 'Tue', date: '4/7/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '4', day: 'Thu', date: '4/9/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '4', day: 'Fri', date: '4/10/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '4', day: 'Sun', date: '4/12/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '4', day: 'Mon', date: '4/13/2026', startTime: '11:00', endTime: '19:00' },

    // 5. O'SULLIVAN, ADAM F
    { employeeId: '5', day: 'Tue', date: '4/7/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '5', day: 'Wed', date: '4/8/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '5', day: 'Fri', date: '4/10/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '5', day: 'Sat', date: '4/11/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '5', day: 'Mon', date: '4/13/2026', startTime: '15:00', endTime: '23:00' },

    // 6. Philip, Shijil
    { employeeId: '6', day: 'Tue', date: '4/7/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '6', day: 'Wed', date: '4/8/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '6', day: 'Thu', date: '4/9/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '6', day: 'Sat', date: '4/11/2026', startTime: '11:00', endTime: '19:00' },

    // 37. Tamang, Nikita
    { employeeId: '37', day: 'Tue', date: '4/7/2026', startTime: '07:30', endTime: '15:30' },
    { employeeId: '37', day: 'Thu', date: '4/9/2026', startTime: '15:30', endTime: '23:00' },
    { employeeId: '37', day: 'Sat', date: '4/11/2026', startTime: '07:30', endTime: '15:30' },
    { employeeId: '37', day: 'Sun', date: '4/12/2026', startTime: '12:30', endTime: '21:00' },
    { employeeId: '37', day: 'Mon', date: '4/13/2026', startTime: '16:00', endTime: '23:00' },

    // 7. Taniya, Taniya
    { employeeId: '7', day: 'Thu', date: '4/9/2026', startTime: '07:30', endTime: '15:00' },
    { employeeId: '7', day: 'Fri', date: '4/10/2026', startTime: '10:15', endTime: '16:00' },
    { employeeId: '7', day: 'Sat', date: '4/11/2026', startTime: '12:00', endTime: '20:00' },
    { employeeId: '7', day: 'Sun', date: '4/12/2026', startTime: '08:30', endTime: '16:30' },
    { employeeId: '7', day: 'Mon', date: '4/13/2026', startTime: '11:45', endTime: '19:30' },

    // PAGE 2

    // 36. Johnson, Kenneth
    { employeeId: '36', day: 'Tue', date: '4/7/2026', startTime: '15:30', endTime: '23:00' },
    { employeeId: '36', day: 'Wed', date: '4/8/2026', startTime: '15:30', endTime: '23:00' },
    { employeeId: '36', day: 'Fri', date: '4/10/2026', startTime: '15:30', endTime: '23:00' },
    { employeeId: '36', day: 'Sat', date: '4/11/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '36', day: 'Mon', date: '4/13/2026', startTime: '11:30', endTime: '20:00' },

    // 8. Williams, Keianne
    { employeeId: '8', day: 'Wed', date: '4/8/2026', startTime: '11:30', endTime: '19:30' },
    { employeeId: '8', day: 'Thu', date: '4/9/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '8', day: 'Fri', date: '4/10/2026', startTime: '15:00', endTime: '23:00' },
    { employeeId: '8', day: 'Sat', date: '4/11/2026', startTime: '15:00', endTime: '22:00' },
    { employeeId: '8', day: 'Mon', date: '4/13/2026', startTime: '15:00', endTime: '22:00' },

    // 9. Yousufi, Zameer
    { employeeId: '9', day: 'Sat', date: '4/11/2026', startTime: '07:00', endTime: '15:00' },
    { employeeId: '9', day: 'Sun', date: '4/12/2026', startTime: '10:30', endTime: '18:30' },
    { employeeId: '9', day: 'Mon', date: '4/13/2026', startTime: '08:00', endTime: '15:00' },

    // 10. Akinyemi, Emmanuel
    { employeeId: '24', day: 'Tue', date: '4/7/2026', startTime: '15:15', endTime: '23:00' },
    { employeeId: '10', day: 'Wed', date: '4/8/2026', startTime: '16:00', endTime: '23:00' },
    { employeeId: '10', day: 'Sat', date: '4/11/2026', startTime: '16:00', endTime: '23:00' },
    { employeeId: '10', day: 'Sun', date: '4/12/2026', startTime: '12:30', endTime: '19:45' },
    { employeeId: '10', day: 'Mon', date: '4/13/2026', startTime: '16:15', endTime: '23:00' },

    // 11. Bernardo, Jennifer
    { employeeId: '11', day: 'Wed', date: '4/8/2026', startTime: '10:15', endTime: '15:00' },
    { employeeId: '11', day: 'Thu', date: '4/9/2026', startTime: '10:00', endTime: '15:00' },
    { employeeId: '11', day: 'Fri', date: '4/10/2026', startTime: '10:00', endTime: '16:00' },

    // 12. Bhandari, Manish
    { employeeId: '12', day: 'Tue', date: '4/7/2026', startTime: '07:30', endTime: '14:30' },
    { employeeId: '12', day: 'Wed', date: '4/8/2026', startTime: '16:00', endTime: '22:00' },
    { employeeId: '12', day: 'Thu', date: '4/9/2026', startTime: '11:30', endTime: '16:30' },
    { employeeId: '12', day: 'Fri', date: '4/10/2026', startTime: '08:00', endTime: '15:00' },
    { employeeId: '12', day: 'Mon', date: '4/13/2026', startTime: '07:30', endTime: '15:30' },

    // 33. Bhatnagar, Vaani
    { employeeId: '33', day: 'Mon', date: '4/13/2026', startTime: '16:00', endTime: '22:00' },

    // 13. Bhatt, Nishant
    { employeeId: '13', day: 'Wed', date: '4/8/2026', startTime: '07:30', endTime: '15:00' },
    { employeeId: '13', day: 'Thu', date: '4/9/2026', startTime: '07:45', endTime: '13:30' },
    { employeeId: '13', day: 'Sun', date: '4/12/2026', startTime: '07:30', endTime: '14:30' },

    // 14. Biswas, Sohini
    { employeeId: '14', day: 'Tue', date: '4/7/2026', startTime: '10:00', endTime: '15:00' },
    { employeeId: '14', day: 'Wed', date: '4/8/2026', startTime: '10:30', endTime: '15:30' },
    { employeeId: '14', day: 'Thu', date: '4/9/2026', startTime: '09:30', endTime: '15:30' },
    { employeeId: '14', day: 'Mon', date: '4/13/2026', startTime: '09:30', endTime: '15:30' },

    // 15. Chaudhary, Brijesh
    { employeeId: '15', day: 'Tue', date: '4/7/2026', startTime: '07:30', endTime: '15:30' },
    { employeeId: '15', day: 'Wed', date: '4/8/2026', startTime: '08:00', endTime: '16:00' },
    { employeeId: '15', day: 'Thu', date: '4/9/2026', startTime: '08:00', endTime: '14:30' },
    { employeeId: '15', day: 'Fri', date: '4/10/2026', startTime: '07:30', endTime: '15:00' },
    { employeeId: '15', day: 'Sat', date: '4/11/2026', startTime: '07:30', endTime: '15:00' },

    // 34. Dua, Kashika
    { employeeId: '34', day: 'Tue', date: '4/7/2026', startTime: '11:50', endTime: '16:45' },
    { employeeId: '34', day: 'Wed', date: '4/8/2026', startTime: '11:50', endTime: '16:45' },
    { employeeId: '34', day: 'Thu', date: '4/9/2026', startTime: '11:50', endTime: '19:30' },
    { employeeId: '34', day: 'Fri', date: '4/10/2026', startTime: '11:50', endTime: '19:00' },
    { employeeId: '34', day: 'Mon', date: '4/13/2026', startTime: '15:00', endTime: '21:00' },

    // PAGE 3

    // 16. Gomes, Patrick
    { employeeId: '16', day: 'Tue', date: '4/7/2026', startTime: '11:00', endTime: '20:00' },
    { employeeId: '16', day: 'Wed', date: '4/8/2026', startTime: '11:00', endTime: '16:00' },
    { employeeId: '16', day: 'Thu', date: '4/9/2026', startTime: '11:30', endTime: '16:30' },
    { employeeId: '16', day: 'Fri', date: '4/10/2026', startTime: '11:00', endTime: '19:00' },
    { employeeId: '16', day: 'Sat', date: '4/11/2026', startTime: '16:00', endTime: '23:00' },

    // 20. Nasibbayli, Max
    { employeeId: '20', day: 'Tue', date: '4/7/2026', startTime: '16:30', endTime: '23:00' },
    { employeeId: '20', day: 'Thu', date: '4/9/2026', startTime: '10:00', endTime: '16:30' },
    { employeeId: '20', day: 'Fri', date: '4/10/2026', startTime: '10:15', endTime: '15:00' },
    { employeeId: '20', day: 'Sat', date: '4/11/2026', startTime: '15:30', endTime: '23:00' },
    { employeeId: '20', day: 'Sun', date: '4/12/2026', startTime: '15:00', endTime: '22:30' },

    // 21. Omoding, Darwin
    { employeeId: '21', day: 'Tue', date: '4/7/2026', startTime: '16:00', endTime: '20:00' },
    { employeeId: '21', day: 'Wed', date: '4/8/2026', startTime: '16:00', endTime: '20:00' },

    // 22. Pyakurel, Bishwajit
    { employeeId: '22', day: 'Tue', date: '4/7/2026', startTime: '11:45', endTime: '20:00' },
    { employeeId: '22', day: 'Wed', date: '4/8/2026', startTime: '11:45', endTime: '19:30' },
    { employeeId: '22', day: 'Fri', date: '4/10/2026', startTime: '11:45', endTime: '20:00' },
    { employeeId: '22', day: 'Sat', date: '4/11/2026', startTime: '07:45', endTime: '16:30' },
    { employeeId: '22', day: 'Mon', date: '4/13/2026', startTime: '11:45', endTime: '20:00' },

    // 23. Romana, Zeenath
    { employeeId: '23', day: 'Wed', date: '4/8/2026', startTime: '16:00', endTime: '23:00' },
    { employeeId: '23', day: 'Fri', date: '4/10/2026', startTime: '09:30', endTime: '16:30' },
    { employeeId: '23', day: 'Sat', date: '4/11/2026', startTime: '08:00', endTime: '16:00' },
    { employeeId: '23', day: 'Sun', date: '4/12/2026', startTime: '11:00', endTime: '17:00' },
    { employeeId: '23', day: 'Mon', date: '4/13/2026', startTime: '10:00', endTime: '15:00' },

    // 24. Sebastiao, Swelly
    { employeeId: '24', day: 'Tue', date: '4/7/2026', startTime: '09:30', endTime: '15:30' },
    { employeeId: '24', day: 'Wed', date: '4/8/2026', startTime: '09:30', endTime: '15:30' },
    { employeeId: '24', day: 'Thu', date: '4/9/2026', startTime: '15:30', endTime: '22:30' },
    { employeeId: '24', day: 'Fri', date: '4/10/2026', startTime: '16:00', endTime: '23:00' },
    { employeeId: '24', day: 'Mon', date: '4/13/2026', startTime: '10:15', endTime: '17:00' },

    // 26. Solmes, Andrew
    { employeeId: '26', day: 'Tue', date: '4/7/2026', startTime: '17:00', endTime: '22:00' },
    { employeeId: '26', day: 'Wed', date: '4/8/2026', startTime: '17:00', endTime: '22:00' },
    { employeeId: '26', day: 'Thu', date: '4/9/2026', startTime: '17:00', endTime: '22:00' },

    // 27. Tabemonso, Celestine E
    { employeeId: '27', day: 'Tue', date: '4/7/2026', startTime: '16:30', endTime: '23:00' },
    { employeeId: '27', day: 'Thu', date: '4/9/2026', startTime: '16:30', endTime: '23:00' },
    { employeeId: '27', day: 'Sat', date: '4/11/2026', startTime: '07:30', endTime: '15:00' },
    { employeeId: '27', day: 'Sun', date: '4/12/2026', startTime: '11:00', endTime: '17:00' },
    { employeeId: '27', day: 'Mon', date: '4/13/2026', startTime: '10:00', endTime: '15:00' },

    // 28. Tamang, Rohan
    { employeeId: '10', day: 'Tue', date: '4/7/2026', startTime: '07:30', endTime: '14:20' },
    { employeeId: '28', day: 'Wed', date: '4/8/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '28', day: 'Fri', date: '4/10/2026', startTime: '17:30', endTime: '22:30' },
    { employeeId: '28', day: 'Sun', date: '4/12/2026', startTime: '12:30', endTime: '19:45' },
    { employeeId: '28', day: 'Mon', date: '4/13/2026', startTime: '07:30', endTime: '14:20' },

    // 30. Tsegay, Betel
    { employeeId: '30', day: 'Thu', date: '4/9/2026', startTime: '11:30', endTime: '22:30' },
    { employeeId: '10', day: 'Fri', date: '4/10/2026', startTime: '11:30', endTime: '22:00' },

    // 32. Williams, Jason
    { employeeId: '32', day: 'Sun', date: '4/12/2026', startTime: '11:00', endTime: '16:00' },
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
