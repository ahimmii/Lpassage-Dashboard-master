module.exports = ({ env }) => ({
    //"io": {
    //    "enabled": true,
    //    "config": {
    //    "IOServerOptions" :{
    //        "cors": { "origin": "*", "methods": ["GET", "POST"] },
    //    },
    //    "contentTypes": {
    //        "message": "*",
    //        "chat":["create"]
    //    },
    //    "events":[
    //        {
    //            "name": "connection",
    //            "handler": ({ strapi }, socket) => {

    //                strapi.log.info(`[io] new connection with id ${socket.id}`);
                    

    //                socket.on("NewOrders", (data) => {
    //                    strapi.$io.raw("orders", data);
    //                })


    //            },
    //        },
    //    ]
    //    },
    //},
});