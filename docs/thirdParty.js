var request = require('request');

let zohoUrl = "https://books.zoho.com/api/v3/contacts?organization_id="

let getContacts = ((organizationId, token) => {
    return new Promise((resolve, reject) => {
        request({
            headers: {
                Authorization: token
            },
            uri: zohoUrl + organizationId,
            method: 'get',
        }, function (error, response, body) {
            if (error) {
                reject(error);
            }
            else {
                if (response.statusCode == 200) {
                    let result = JSON.parse(body)
                    resolve({ data: result.contacts, msg: "Success" })
                }
                else {
                    resolve({ data: [], msg: JSON.parse(body).message })
                }

            }
        }
        )
    })
})


module.exports.getContacts = getContacts