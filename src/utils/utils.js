import CryptoJS from 'crypto-js'


const AesKey = '4f3d5e90d5a6fbf5'; // AES 秘钥
const AesVi  = '0fd09fa03ec122f7'; // AES 秘钥偏移量

/**
 * CryptoJS加密
 */
var Encrypt = function(data){ //加密

    let encrypted = CryptoJS.AES.encrypt(data,  CryptoJS.enc.Utf8.parse(AesKey), { 
        iv:  CryptoJS.enc.Utf8.parse(AesVi), 
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    
    return encrypted.toString();
}

/**
 * CryptoJS解密
 */
var Decrypt = function(data){//解密

    let decrypt = CryptoJS.AES.decrypt(data,  CryptoJS.enc.Utf8.parse(AesKey), { 
        iv:  CryptoJS.enc.Utf8.parse(AesVi), 
        mode: CryptoJS.mode.CBC, 
        padding: CryptoJS.pad.Pkcs7
    });
    
    return decrypt.toString(CryptoJS.enc.Utf8);

}

var getSign= function(domain,timeStr){//解密

    let sign = Encrypt(domain+'-'+timeStr);
    
    return sign;

}


/**
 * 存储localStorage
 */
var setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
var getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
var removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}
export default {
    Encrypt,
    Decrypt,
    getSign,
    setStore,
    getStore,
    removeStore
}