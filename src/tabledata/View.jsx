import React from "react";

const View = ({ jobinfo, deleteuserinfo, edituserinfo }) => {
  return jobinfo.map((jobinformation) => (
    <tr key={jobinformation.id}>
      <td>{jobinformation.jobtitle}</td>
      <td>{jobinformation.salery}</td>

      <td>
        <button
          className="edit"
          onClick={() => edituserinfo(jobinformation.jobtitle)}
          type="button"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="delete"
          onClick={() => deleteuserinfo(jobinformation.jobtitle)}
          type="button"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
};
export default View;
