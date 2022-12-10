async function fetchData() {
    await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then(function (res) {
            return res.json();
        })
        .then(function (objectData) {
            console.log(objectData);
            let tableData = "";
            objectData.map((values) => {
                tableData += ` <tr>
                <td width="25px"><img src="${values.image}"></td>
                <td width="250px">${values.name}</td>
                <td width="200px">${values.symbol}</td>
                <td width="200px">$${values.current_price}</td>
                <td width="200px">$${values.total_volume}</td>
                <td class="${values.market_cap_change_percentage_24h>0?"positive":"negative"}">${values.market_cap_change_percentage_24h}%</td>
                <td>Mkt Cap : $${values.market_cap}</td>
              </tr>`
            })
            document.getElementById("table-body").innerHTML = tableData;
        })
}
fetchData()
