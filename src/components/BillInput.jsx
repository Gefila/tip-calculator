export default function BillInput({children, value, onSetBill}) {
    function handleChange(event) {
        onSetBill(Number(event.target.value));
    }

    return(
        <div className="input">
            <label htmlFor="bill">{children}</label>
            <input type="number" id="bill" placeholder="" value={value} onChange={handleChange}/>
        </div>
    )
}