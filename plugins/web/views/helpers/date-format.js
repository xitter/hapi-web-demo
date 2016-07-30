const Moment = require('moment');
const defaultFormat = 'DD MM YYYY HH:mm:ss';

module.exports = (timestamp, format) => {
    const time = new Moment(timestamp).utcOffset("+05:30");
    return format ? time.format(format).toString() : time.format(defaultFormat).toString();
};
