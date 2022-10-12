function requestValidator(obj) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"];
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let specialCHars = [`<`, `>`, `\\`, `&`, `'`, `"`];
    if (!obj.method || !methods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    let pattern = /^[\w.]*$/g;
    if (!obj.uri || (!obj.uri.match(pattern) && obj.uri !== "*")) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!obj.version || !versions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (!obj.message && obj.message !== "") {
        throw new Error("Invalid request header: Invalid Message");
    }
    if (obj.message !== "") {
        for (const char of obj.message) {
            if (specialCHars.includes(char)) {
                throw new Error("Invalid request header: Invalid Message");
            }
        }
    }
    return obj;
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '\hi'
});
console.log("---------------")
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});