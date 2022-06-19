const functions = require('../../lib/function')
const myfunctions = require('../../lib/defunc')
const https = require('https')
const got = require("got");
const { xnxx_dl } = require('..');

// const { fetchUrl, isUrl } = require("../../lib/Function")

// module.exports = {
//     name: "xnxx",
//     alias: ["xnxx"],
//     use: "<url>",
//     desc: "Download Media From https://xnxx.com",
//     type: "downloader",
//     example: "%prefix%command <url>",
//     start: async(killua, m, { prefix, command, text }) => {
//         let fetch = await fetchUrl(global.api("zenz", "/downloader/xnxx", { url: isUrl(text)[0] }, "apikey"))
//         let teks = `⭔ Title : ${fetch.result.title}\n⭔ Duration : ${fetch.result.duration}s`
//         killua.sendFile(m.from, fetch.result.files.low, "", m, { caption: teks })
//     },
//     isQuery: true
// }
// console.log(xnxx_dl('https://www.xnxx.com/video-15qwz1d8/18_year_old_sister_lost_her_virginity_with_her_step_brother_s_big_cock'))
// 
