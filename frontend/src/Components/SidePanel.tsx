import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Gebiet } from '../types';

interface SidePanelProps {
    gebiete: Gebiet[];
    onSearch: (query: string) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ gebiete, onSearch }) => {
    return (
        <div className='SidePanel'>
            <SearchBar onSearch={onSearch} gebiete={gebiete} />
        </div>
    )
}

export default SidePanel;