import { useEffect, useState } from 'react';
import './App.css';
import MachineSelect from './components/MachineSelect';
import MachineCard from './components/MachineCard';
import { getSingleData } from './helpers/apiRequests';

function App() {
  const [singleMachineInfo, setSingleMachineInfo] = useState({ name: '', pk: '' });
  const [singleMachine, setSingleMachine] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const item = e.target;
    setSingleMachineInfo({ name:item.value, pk: item.selectedOptions[0].getAttribute("pk")})
  }

  useEffect(() => {
    if (singleMachineInfo.pk > 0) {
      setLoading(true)
    
      getSingleData(singleMachineInfo.pk).then((res) => {
        setSingleMachine(res.machineStats)
        setLoading(false)
      })
    }
  }, [singleMachineInfo])

  return (
    <div className="container">
      <MachineSelect handleChange={handleChange} />
      <MachineCard loading={loading} item={singleMachine} name={singleMachineInfo.name} />
    </div>
  );
}

export default App;
