export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach(task => {
        //console.log(task.dateFormat);
        if (!unique.includes(task.dateFormat)) {
            unique.push(task.dateFormat);
        }
    });

    //console.log(unique);
    return unique;
};

export const orderDates = (dates)=>{
    return dates.sort((a,b) => {
        const firstDate = moment(a,"DD/MM/YYYY");
        const secondDate = moment(b,"DD/MM/YYYY");
        //console.log(a);
        //console.log(b);
        return firstDate - secondDate;
    });
};
