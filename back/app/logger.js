const log = (message) => {
    let date = new Date();
    let day = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
    let time =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log("[LOG] " + day + " - " + time + " " + message);
};

module.exports.log = log;
