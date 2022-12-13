const number_phone= "+212 8 08 51 23 87";

export function print_bill(order, profile) {
    var windowToPrint=window.open('','','width=200,height=400');
    const d = new Date();
    let total_qte = 0;
    let all_plats = order?.attributes?.plats?.map((plat) => {
        total_qte += plat.qte;
        return `
            <tr>
                <td style="padding: 5px; text-align: left;">
                    ${plat?.name}</br>
                    <div style="text-align: left; margin-left: 10px">
                    ${plat?.choix_accompagnements?.data.map((choix) => {
                        return `->${choix?.attributes.name}</br>`;
                    }).join("")}
                    ${plat?.sauces?.data.map((sauces) => {
                        return `->${sauces?.attributes.name}</br>`;
                    }).join("")}
                    ${plat?.juses?.data?.map((sauces) => {
                        return `->Jus: ${sauces?.attributes.name}</br>`;
                    }).join("")}
                    </div>
                </td>
                <td style="padding: 5px">${plat?.qte}</td>
                <td style="padding: 5px">${plat?.price} DH</td>
            </tr>
        `;
    }).join("")

    windowToPrint.document.write(`
        <style>
            th {
                border-bottom: 4px solid black;
                text-align: center;
            }
            td {
                border-bottom: 2px solid black;
                text-align: center;
            }
        </style>
        <div style='text-align: center;'>
            <div style="font-size: 13px; display: flex; justify-content: center; align-items: center;">
                <h1 style="font-size: 18px; padding-left: 6px;">L'PasSage</h1>
                </div>
            <p style="font-size: 15px; margin-top: 1px">
                </br>
                ${number_phone}
                </br>
                LOT 792, lotissement al karaouiyine
                </br>
                route Ain chkef Fes
                </br>
		${d.toLocaleDateString() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()}
		</br>
		${profile?.Username}
                ${order.attributes.place_de_consomation[0].name == "Sur table" ? `
                <div style="margin-top: 5px; font-size: 12px; font-weight: 800;">
                    <p style="margin-bottom: 5px;">Num Table: ${order.attributes.place_de_consomation[0].tableId}</p>
                </div>
            ` : ""}
                </p>
        </div>
        <div style="padding: 10px; border-radius: 10px; padding-top: 2px;">
            <table style="width: 100%;">
                <tr>
                    <th style="padding: 5px">Article</th>
                    <th style="padding: 5px">Qte</th>
                    <th style="padding: 5px">Prix</th>
                </tr>
                ${all_plats}
                <tfoot style="font-size: 16px; font-weight: 800; border-bottom: 0;">
                    <tr>
                        <th style="padding: 5px">Total: </th>
                        <th style="padding: 5px">${total_qte}</th>
                        <th style="padding: 5px">${order?.attributes?.total_price.toFixed(2)} DH</th>
                    </tr>
                </tfoot>
            </table>

            

            ${order.attributes.place_de_consomation[0].name == "Livrasion" ? `
                <div style="margin-top: 5px; font-size: 16px; font-weight: 800; border: 2px solid black; padding: 10px; border-radius: 15px">
                    <p style="margin-bottom: 5px;">Address: ${order.attributes.place_de_consomation[0].address}</p>
                    <p style="margin-bottom: 5px;">Numéro: ${order.attributes.place_de_consomation[0].phoneNumber}</p>
                    <p style="margin-bottom: 5px;">Nom et prénom: ${order.attributes.place_de_consomation[0].fname}</p>
                </div>
            ` : ""}
            
            <div style="font-size: 10px; font-weight: 800; width: 100%; text-align: center;">
                <p style="margin-bottom: 5px;"> MERCI DE VOTRE VISITE </p>
            </div>
        </div>
    `);
    
    windowToPrint.document.close();
    windowToPrint.focus();
    windowToPrint.print();
    windowToPrint.close();
}
