const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || ".",
    ownerName: process.env.OWNER_NAME || "Toxxic-Boy",
    ownerNumber: process.env.OWNER_NUMBER || "2349123727607",
    mode: process.env.MODE || "public",
    region: process.env.REGION || "Nigeria",
    botName: process.env.BOT_NAME || "Rias Gremory V3",
    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES",
    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ === "true",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true",
    autoReact: process.env.AUTO_REACT === "true",
    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0E5NFR0V3E1eWIzVGF4dVFxTmRPazAxaFdMeWlIQ1NER0MwVFQyVXEyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWER3L0JRZEwwemR0SHRNN25NcjF3cGc3TFBVY0tnQVJHbnQ5YXFQYVBVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSWo3RDlMS1VMdkxrZms4Qy9COXpYR1BlMTBpL1VTNDdza2x0MGhyNm1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4Y0hHdEZ1eWtvUUlnV3hUeWlUdDk4bkZidFl1WGdZWFNURnBlclo0VEZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBMk9nZlJXWE1lOE1kOWhwMUpFL2pVcXdJL0NsV2NIaVBZakFReWkzVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIvM3VjQlJxRXRqN2cwUlJUNTlZNTFLWGFKWjhwM2d2UGxjMEtNeVU1UWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Q3b2lyUHhGVE1kQTVqODAxenVQS1JwdytZMHJEUTYxY3EwQ3F2bHpYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYndGdEU1NzJjWWQ5Lzc3UnBvOVhhRUN4ZjBvT1RScEtxdjE2S3FsRXpSYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc0T0w1WXA2aDgzT21HcHUzQ1oxZ2VYVTlFV01TeTZMOHZWeWJzaUdTbUNWVG5XQ2c3SGljVE1uTFZhOE5HV0RISm9iNW9JL0VPQ0dYNEg4Vm1GVmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IjZFQmVIRTNHZVlVblBJdzR2djRPdjdNdjd2SVlld3NiL3BIWDRua0IyMzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBHQ2xwTnZKVGoyUExFOEJvd0R2TVEiLCJwaG9uZUlkIjoiMWFkNWMxODQtNjFlZC00MWNkLWE4NDEtNThmN2ZmNDE1OTY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt5ZkJ3WmdMS2RsMDA0QzNpQmlWSjFBeHlPVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBNjMyK1QxWmI0eXQrdjFaQnFGQlJRZlAyUjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTk3TlpLVlYiLCJtZSI6eyJpZCI6IjIzNDkxMjM3Mjc2MDc6MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHIzNE8wRUVNMmJ6TDBHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUnRmeDJrWVkrRVJPS2RVZFdmUEppRGlmbDU1QlV0QjBxamVlQkV2RStqYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSTNCWHlQSS80TkNOREhQK2pmNndzTCsvamczQWIwNzg5YUJ0NDNlVHlVY2JUVHFLYW4wRjZNOEFXdUJzVXpvZlF4Y0R4anRXaTI1bGpPMFhHMzhOQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkdNWHNNR1YwMlI0akd2cjFUT2RCaS9UWTFTTVUzSmdoM0tGZkVwdmdNeEV2RXh0b2h4ZE9PWU5GVGtTNDM2Rlh3UktoT0xOWlZWTTU3L01lalF0Y2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMzcyNzYwNzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlViWDhkcEdHUGhFVGluVkhWbnp5WWc0bjVlZVFWTFFkS28zbmdSTHhQbzMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzk3ODc3NDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkdTIn0=",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});
