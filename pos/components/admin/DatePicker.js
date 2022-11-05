import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { useState } from "react";
import { IconCalendar } from "@tabler/icons";

function DatePicker({ date, setDate }) {
	return (
		<DateRangePicker
			icon={<IconCalendar size={16} />}
			label=''
			placeholder='Pick dates range'
			//value={date}
			onChange={setDate}
			style={{width: "350px"}}
			styles={(theme) => ({
				input: {
					borderRadius: "6px",
					border: "1px solid #e2e8f0",
					padding: "0.5rem 1rem",
					fontSize: "14px",
					lineHeight: "1.5",
					color: "#4a5568",
					backgroundColor: "#fff",
					backgroundClip: "padding-box",
					borderColor: "#e2e8f0",
					transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
						"&:focus": {
							color: "#4a5568",
							backgroundColor: "#fff",
							borderColor: theme.colors.orange[7],
							outline: "0",
						},
				},
				day: {
					"&[data-in-range]": {
						backgroundColor: theme.colors.orange[1],
					},
					"&[data-selected]": {
						backgroundColor: theme.colors.orange[7],
						position: "relative",
					},
				},
				monthPickerControlActive: {
					background: theme.colors.orange[7],
					":hover": {
						background: theme.colors.orange[5]
					}
				},
				monthPickerControl: {
					":hover": {
						background: theme.colors.orange[1]
					}
				},
				yearPickerControl: {
					":hover": {
						background: theme.colors.orange[1]
					}
				},
				yearPickerControlActive: {
					background: theme.colors.orange[7],
					":hover": {
						background: theme.colors.orange[5]
					}
				}
			})}
		/>
	);
}

export default DatePicker;
