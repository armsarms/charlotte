/*
    PV UV 统计
    id                          --  活动ID(必填)
    location                    --  渠道号(没有则传空)
    debug                       -- true:测试环境,false:现网
*/
let url1 = "http://120.197.230.65:40081/mssp_pps/ela/collect.do?";
let url2 = "http://h5.mmarket.com/mssp_ppsh5/ela/collect.do?";

function pvAnalysis(id, location, debug) {
    let params = {
        "index": "actrecord"
        , "type": "visit"
        , "activityId": id
        , "event": "pagein"
        , "location": location
        , "userAgent": navigator.userAgent
    }
    let script = document.createElement("script");
    let args = "";
    for (let i in params) {
        if (args != "") {
            args += "&";
        }
        args += i + "=" + encodeURIComponent(params[i]);
    }
    debug ? script.src = url1 + args : script.src = url2 + args;
    document.getElementsByTagName("head")[0].appendChild(script);
}


/*
    我的定制内 按钮类的统计
    activityId          --  活动ID
    event               --  key
    location            --  渠道号(没有则传空)
    debug               -- true:测试环境,false:现网
*/
function customAnalysis(id, key, location, debug) {
    let codeMapping = {
        "60001":"c0ec5b335c3c4f69b74846d19116e83d",
        "60002":"bbc8a19a8b834e459ad270c9bd9c31e7",
        "60003":"0e1ef5fe87cb468fb422bdf52028f45b",
        "60004":"8702f0fc4f884523b74f0f9a2437c047",
        "60005":"b09a57557ca34035b164c9b4ca4eac22",
        "60006":"519f043e6e28482a9c886497d53d5de6",
        "60007":"ca3829e134f14a2f985a522dccae4aff",
        "60008":"32e8223ac3b2409a8d702d5057f93c40",
        "60009":"1faf4ad282cc442f8613358f9df7e3c5",
        "60010":"1b007ac5584b4839bd7fecf97830b2ce",
        "60011":"f73fd48102fe434aa7b2c253876b9a81",
    }
    let event = codeMapping[key]; //key
    console.log('event',event);
    let params = {
        "index": "yxb_common"
        , "type": "common"
        , "activityId": id
        , "event": event
        , "location": location
    }
    let script = document.createElement("script");
    let args = "";
    for (let i in params) {
        if (args != "") {
            args += "&";
        }
        args += i + "=" + encodeURIComponent(params[i]);
    }
    debug ? script.src = url1 + args : script.src = url2 + args;
    document.getElementsByTagName("head")[0].appendChild(script);
}
console.log('fileLoad')