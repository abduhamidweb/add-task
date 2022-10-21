import React from 'react';

const Tablerow = ({deletfunction, index,data:{title,desc,time,id}}) => {
    
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>{title}</td>
          <td>{desc}</td>
          <td>{time}</td>
          <td>
                    <button className="btn btn-danger" onClick={() => {
                        deletfunction(id)
            }}>Dalete</button>
          </td>
        </tr>
      </>
    );
};

export default Tablerow;