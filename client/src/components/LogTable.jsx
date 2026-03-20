import React from "react";

const LogTable = ({ logs, onReplay, onSelect }) => {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Endpoint</th>
          <th>Method</th>
          <th>Status</th>
          <th>Time (ms)</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {logs.map((log) => (
          <tr key={log._id}>
            <td onClick={() => onSelect(log)} style={{ cursor: "pointer" }}>
              {log.endpoint}
            </td>
            <td>{log.method}</td>
            <td>{log.status}</td>
            <td>{log.responseTime}</td>

            <td>
              <button onClick={() => onReplay(log._id)}>
                Replay
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;