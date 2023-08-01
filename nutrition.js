/**
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
    console.log(rows);
    let tableRows = ``;

    rows.forEach(function(row){
        tableRows += `<tr>
        <td>${row[0]}</td>
        <td>${row[1]}</td>
        </tr>`;
    })

    return tableRows;
}