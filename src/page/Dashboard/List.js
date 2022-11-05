import React from 'react'

function List({employees,handleEdit,handleDelete}) {

  const formatter = new Intl.NumberFormat('en-US',{
     style:'currency',
     currency:'USD',
     minimunFractionDigits:null
  });

  return (
    <div className='conatiner-table'>
          <table className='stripped-table'>
      <thead>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th colSpan={2} className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length>0?(
          employees.map((employees,i)=>(
            <tr key={employees.id}>
              <td>{i+1}</td>
              <td>{employees.firstName}</td>
              <td>{employees.lastName}</td>
              <td>{employees.email}</td>
              <td>{formatter.format(employees.salary)}
              </td>
              <td>{employees.date}</td>
              <td className="text-right">
                <button
                 onClick={()=> handleEdit(employees.id)}
                 className="button muted-button"
                 >
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button
                 onClick={()=> handleDelete
                  (employees.id)}
                 className="button muted-button"
                 >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}>No Employees</td>
          </tr>
        )

        }
      </tbody>
    </table>
    </div>
  )
}

export default List
