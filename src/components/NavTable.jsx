import React ,{useState} from 'react';
import EnhancedTable from './EnhancedTable';
import Card1 from './Card1';
import Navbar from './Navbar';
import Card from './Card';

const NavTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [exportData,setExportData]=useState([]);
    const [postid,setPostid]=useState();
    const [selectedDateRange,setSelectedDateRange]=useState([]);
  return (
    <div>
      <Navbar/>
      <Card/>
      <Card1  setSearchTerm={setSearchTerm} searchTerm={searchTerm} exportData={exportData} setExportData={setExportData} postid={postid} setPostid={setPostid} setSelectedDateRange={setSelectedDateRange}  selectedDateRang={selectedDateRange}/>
      <EnhancedTable searchTerm={searchTerm} setExportData={setExportData} exportData={exportData}  postid={postid} setPostid={setPostid}  selectedDateRange={selectedDateRange}/>

    </div>
  );
}

export default NavTable;
