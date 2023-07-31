/**
 * @param {string} label
 * @param {string} value
 */
export function renderTableRow(label, value) {
    console.log(label, value);
    return `<tr>
    <td>${label}</td>
    <td>${value}</td>
    </tr>`;

}