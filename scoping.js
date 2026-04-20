const browserVersion = "Chrome"

function getBrowserVersion(){
    if(browserVersion == "Chrome"){
        let browserVersion = "Edge"
console.log("inside block ,function = "  +browserVersion);
    }
    console.log("outside block, inside function = "  +browserVersion);
}

console.log("outside func, block = "  +browserVersion);

getBrowserVersion();