import React from "react";

const LogDetails = ({ selectedLog }) => {
  if (!selectedLog) return <p>Select a log to see details</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Log Details</h3>

      <p><strong>Endpoint:</strong> {selectedLog.endpoint}</p>
      <p><strong>Method:</strong> {selectedLog.method}</p>
      <p><strong>Status:</strong> {selectedLog.status}</p>
      <p><strong>Response Time:</strong> {selectedLog.responseTime} ms</p>

      <h4>Request Body</h4>
      <pre>
        {JSON.stringify(selectedLog.requestBody, null, 2)}
      </pre>

      <h4>Timestamp</h4>
      <p>{new Date(selectedLog.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default LogDetails;