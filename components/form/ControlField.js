import PropTypes from 'prop-types';
import { offBlack } from '../../style/colors';
import Control from './Control';

const ControlField = ({ label, note, name, options, onSelectOption, selected }) => {
	return (
		<div>
			<h4 className="label">{label}</h4>
			{note && <p className="notes">{note}</p>}
			<div className="options">
				{options.map((option) => {
					return (
						<Control
							key={`${option.option}${option.label}`}
							item={option}
							type={name}
							selected={option.option === selected}
							onSelect={onSelectOption}
						/>
					);
				})}
			</div>
			<style jsx>{`
				.notes {
					margin-top: 1em;
				}
				.options {
					display: flex;
					margin: 0.7em 0;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
	);
};
ControlField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	options: PropTypes.array,
	onSelectOption: PropTypes.func,
	selected: PropTypes.string,
};

export default ControlField;