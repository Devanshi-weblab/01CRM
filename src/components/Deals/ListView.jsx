import React from 'react'

function ListView() {
  return (
    <div class="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Deal Name</th>
            <th>Amount</th>
            <th>Stage</th>
            <th>Closing Date</th>
            <th>Account Name</th>
            <th>Contact Name</th>
            <th>Deal Owner</th>
          </tr>
        </thead>
        <tr>
           <td>King</td>
            <td>1000000</td>
            <td>Identify Decision Makers</td>
            <td>14/09/23</td>
            <td>King</td>
            <td>Cris Married</td>
            </tr>
      </table>
    </div>
  )
}

export default ListView

