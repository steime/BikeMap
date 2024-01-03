import React, { useEffect, useState } from 'react'
import { Gebiet } from '../types';
import SidePanel from './SidePanel';
import MapComponent from './MapComponent';

const BodyContainer: React.FC = () => {
    const [gebiete, setGebiete] = useState<Gebiet[]>([]);
    const [filteredGebiete, setFilteredGebiete] = useState<Gebiet[]>([]);
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const currentDate = new Date();

        fetch('http://localhost:3000/api/gebiet')
            .then(response => response.json())
            .then(data => {
                const updatedData = data.map((gebiet: Gebiet) => {
                    gebiet.isOpen = isGebietOpen(currentDate, gebiet); // Set isOpen based on some condition
                    return gebiet;
                });
                setGebiete(updatedData);
                setFilteredGebiete(updatedData);
            })
            .catch(error => {
                console.error('Error fetching gebiete:', error);
            });
    }, []);

    const handleSearch = (query: string) => {

        const filtered = gebiete.filter(gebiet =>
            gebiet.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchQuery(query);
        setFilteredGebiete(filtered);
    };


    //TODO: implement function, only set to open, when actually open or move to the backend
    const isGebietOpen = (currentDate: Date, gebiet: Gebiet): boolean => {
        // Add your logic here to check if the Gebiet should be open or not
        // This is a placeholder logic, replace it with your actual conditions
        // Example:
        // return currentDate >= gebiet.openDate && currentDate <= gebiet.closeDate;

        // For now, returning false as a placeholder
        const currentDateTest = new Date();
        return currentDate === currentDateTest;
    };

    const handleIsOpenChange = (checked: boolean) => {
        setIsOpenFilter(checked);
        handleSearch(searchQuery);
    };

    return (
        <div className='BodyContainer'>
            <SidePanel
                onSearchChange={handleSearch}
                gebiete={gebiete}
                isOpenFilter={isOpenFilter}
                onIsOpenChange={handleIsOpenChange} />
            <MapComponent gebiete={filteredGebiete} />
        </div>
    )
}

export default BodyContainer