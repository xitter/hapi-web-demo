const rmsHost = require('../../../../config').hostname;
const Uri = require('urijs');

module.exports = (asset) => {
    var uri = new Uri(rmsHost);
    uri.segment(['resource', asset]);
    return uri.toString();
};
