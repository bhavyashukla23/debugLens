import { useEffect, useState } from "react";
import axios from "axios";
import LogTable from "../components/LogTable";
import LogDetails from "../components/LogDetails";

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);

  const fetchLogs = async () => {
    const { data } = await axios.get("http://localhost:5000/logs");
    setLogs(data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const replay = async (id) => {
    try {
      await axios.post(`http://localhost:5000/logs/replay/${id}`);

      // refresh table after replay
      await fetchLogs();

      alert("Replay done !!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>API Debug Dashboard</h2>

      <LogTable logs={logs} onReplay={replay} onSelect={setSelectedLog} />

      <LogDetails selectedLog={selectedLog} />
    </div>
  );
};

export default Dashboard;
