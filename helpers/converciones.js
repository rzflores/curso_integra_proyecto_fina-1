const secondsToString  = (seconds) =>  {
    var day = Math.floor(seconds / 86400);
    day = (day < 10)? '0' + day : day;
    var hour = Math.floor((seconds % 86400)/ 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor(((seconds % 86400) % 3600) / 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = ((seconds % 86400) % 3600) % 60;
    second = (second < 10)? '0' + second : second;
    return day + ' dias '+ ' , ' + hour + ':' + minute + ':' + second;
}
const formatDate = (date) => {
    let fromDate = new Date(date);
    return `${(fromDate.getDate())}`.padStart(2,'0') +"/"+ `${(fromDate.getMonth()+1)}`.padStart(2,'0') + "/"+ fromDate.getFullYear();
}

module.exports = { 
    secondsToString,
    formatDate
}; 