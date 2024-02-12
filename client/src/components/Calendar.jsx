const Calendar = () => {
    const currentDay = function () {
        const date = new Date(Date.now);
        console.log(date);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const newdate = date.toLocaleDateString(undefined, options);
        console.log(newdate);
        return newdate;
    }
}

export default Calendar;