$(document).ready(async () => {
    // console.log('La página ha cargado');
    const data = await fetch('http://localhost:8000/api/owners/', {
        headers: {
            Authorization : 'Token 3f51592dbbd7382dbc72056741b9e1201ad92404'
        },
    })
    const json = await data.json()
    const owners = json.map((owner) => (
        `
        <tr>
            <th scope="row">${owner.id}</th>
            <td>${owner.first_name}</td>
            <td>${owner.last_name}</td>
        </tr>
        `
    ))
    $('#owners-list').append(owners)

    console.log(data, json)

    // fetch('http://localhost:8000/api/owners/').then(data => {
    //     return data.json()
    // })
})