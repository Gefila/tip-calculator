import { useState } from "react";
import BillInput from "./BillInput";
import BillPercentage from "./TipPercentage";
import BillResult from "./BillResult";
import Button from "./Button";

export default function TipCalculator() {
	const [bill, setBill] = useState(0);
	const [myTip, setMyTip] = useState(0);
	const [friendTip, setFriendTip] = useState(0);

	const totalPercentage =
		((parseInt(myTip) + parseInt(friendTip)) / 2 / 100) * bill;
	const totalBill = totalPercentage + bill;

	function resetBills(event) {
		event.preventDefault();
		setBill(0);
		setMyTip(0);
		setFriendTip(0);
	}

	return (
		<form className="tip-calculator" onSubmit={resetBills}>
			<h1>TIP CALCULATOR</h1>
			<BillInput value={bill} onSetBill={setBill}>
				Insert the bill
			</BillInput>
			<BillPercentage percentage={myTip} onSelect={setMyTip}>
				How did you like the service?
			</BillPercentage>
			<BillPercentage percentage={friendTip} onSelect={setFriendTip}>
				How did your friend like the service?
			</BillPercentage>
			{bill > 0 && (
				<>
					<BillResult>{`You pay ${totalBill}$ (${bill}$ + ${totalPercentage}$ tip)`}</BillResult>
					<Button>Reset</Button>
				</>
			)}
		</form>
	);
}
