var globalValue
exports.setGlobal = function(v) {
    globalValue = v
}
exports.returnGlobal = function() {
    console.log(global)
    return globalValue
}
