module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/object-detector-webcam/'
        : '/'
}