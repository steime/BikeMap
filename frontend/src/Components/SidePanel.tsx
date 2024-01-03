import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Gebiet } from '../types';
import FilterBox from './FilterBox';

interface SidePanelProps {
    gebiete: Gebiet[];
    onSearchChange: (query: string) => void;
    isOpenFilter: boolean;
    onIsOpenChange: (checked: boolean) => void;

}

const SidePanel: React.FC<SidePanelProps> = ({ gebiete, onSearchChange, isOpenFilter, onIsOpenChange }) => {
    return (
        <div className='SidePanel'>
            <SearchBar onSearchChange={onSearchChange} gebiete={gebiete} />
            <FilterBox isOpenFilter={isOpenFilter} onIsOpenChange={onIsOpenChange} />
        </div>
    )
}

export default SidePanel;