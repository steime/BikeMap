import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Gebiet } from '../types';
import FilterBox from './FilterBox';

interface SidePanelProps {
    gebiete: Gebiet[];
    onSearch: (query: string) => void;
    isOpenFilter: boolean;
    onIsOpenChange: (query: boolean) => void;

}

const SidePanel: React.FC<SidePanelProps> = ({ gebiete, onSearch, isOpenFilter, onIsOpenChange }) => {
    return (
        <div className='SidePanel'>
            <SearchBar onSearch={onSearch} gebiete={gebiete} />
            <FilterBox isOpenFilter={isOpenFilter} onIsOpenChange={onIsOpenChange} />
        </div>
    )
}

export default SidePanel;