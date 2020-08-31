import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext({
	notes: [],
	folders: [],
	addFolder: () => {},
	addNote: () => {},
	deleteNote: () => {},
});

Context.PropTypes = {
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
	folders: PropTypes.arrayOf(PropTypes.object).isRequired,
	addFolder: PropTypes.arrayOf(PropTypes.object).isRequired,
	addNote: PropTypes.arrayOf(PropTypes.object).isRequired,
	deleteNote: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Context;
