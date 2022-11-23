export const initialValues = {
	id: null,
	date_of_entry: "",
	company_id: "",
	description: "",
	part_number: "",
	serial_number: "",
	starting_quantity: "",
	quantity_received: "",
	quantity_issued: "",
	quantity_on_hand: "",
	reorder_level: "",
	part_status: "",
	measure: "",
	location: "",
	date_of_production: "",
	shelf_life: "",
	duration: "",
	expiry_date: "",
	bp_in_usd: "",
	bp_in_local: "",
	sp_in_usd: "",
	created_by: "",
	updated_by: ""
};

export const partStatus = [
	{ value: "New", label: "New" },
	{ value: "Used", label: "Used" },
	{ value: "Serviceable", label: "Serviceable" },
];

export const shelfLife = [
	{ value: 'Days', label: 'Days' },
	{ value: 'Weeks', label: 'Weeks' },
	{ value: 'Months', label: 'Months' },
	{ value: 'Years', label: 'Years' },
	{ value: 'None', label: 'None' },
];
