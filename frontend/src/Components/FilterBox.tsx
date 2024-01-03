interface FilterBoxProps {
    isOpenFilter: boolean;
    onIsOpenChange: (checked: boolean) => void;
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
                Nur geöffnete Anlagen anzeigen
            </label></div>
    )
}

export default FilterBox