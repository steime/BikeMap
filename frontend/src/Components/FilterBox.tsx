interface FilterBoxProps {
    isOpenFilter: boolean;
    onIsOpenChange: (query: boolean) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({ isOpenFilter, onIsOpenChange }) => {


    return (
        <div className="FilterBox">
            <label>
                <input
                    type="checkbox"
                    checked={isOpenFilter}
                    onChange={(e) => onIsOpenChange(e.target.checked)}
                />
                Show Open Areas Only
            </label></div>
    )
}

export default FilterBox