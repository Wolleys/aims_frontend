export const initialValues = {
	id: null,
	date_of_issue: "",
	part_id: "",
	description: "",
	serial_number: "",
	part_status: "",
	quantity_on_hand: "",
	qty_issued: "",
	qty_remaining: "",
	usp_usd: "",
	total_price: "",
	issued_to: "",
	issued_by: "",
	updated_by: ""
};

export const partStatus = [
	{ value: "New", label: "New" },
	{ value: "Used", label: "Used" },
	{ value: "Serviceable", label: "Serviceable" },
];
