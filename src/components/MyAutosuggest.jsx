import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { UserContext } from "../context/UserContext";

const getSuggestionValue = (suggestion) => {
	return suggestion.company_name;
};

const renderSuggestion = (suggestion) => {
	// add css here for suggestions
	return <div>{suggestion.company_name}</div>;
};

function MyAutosuggest({ setCompanyName }) {
	const [value, setValue] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [companies, setCompanies] = useState([]);
	const { setCompanyDomain } = useContext(UserContext);

	const getCompanies = async () => {
		const res = await axios.get("http://localhost:4000/api/v1/getAllCompany");
		console.log(res.data.data);
		setCompanies(res.data.data);
		setCompanyDomain(res?.data?.data?.company_domain);
	};

	useEffect(() => {
		getCompanies();
	}, []);

	const getSuggestions = (value) => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: companies.filter(
					(company) =>
						company.company_name.toLowerCase().slice(0, inputLength) ===
						inputValue
			  );
	};

	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onChange = (event, { newValue }) => {
		setValue(newValue);
		setCompanyName(newValue);
	};

	const inputProps = {
		value,
		onChange: onChange,
		// id: "company_name",
		placeholder: "Company Name",
		onFocus() {
			console.log("hi---------------------");
		},
	};

	return (
		<div className="form-floating">
			<Autosuggest
				disablePortal
				suggestions={suggestions}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
				// value={`${value}`}
				// onChange={onChange}

				theme={{
					// Pass `className` into Autosuggest theme. The `container` is className for root block
					...Autosuggest.defaultProps.theme,
					container: "form-select-autosuggestion",
				}}
			/>
			{/* <label htmlFor="company_name">Company Name</label> */}
		</div>
	);
}

export default MyAutosuggest;
