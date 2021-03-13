import { offWhite } from 'style/colors';
import PropTypes from 'prop-types';
import { midGray, lightGray, velaGreen, white } from '../../style/colors';

const Control = ({ item, type, selected, onSelect }) => {
	const setValue = () => onSelect(type, item.option);
	const { icon, label, option, delivery } = item;

	return (
		<div
			key={`${icon}${label}${option}`}
			onClick={() => setValue(option)}
			onKeyDown={() => setValue(option)}
		>
			{icon && <img src={icon} />}
			{label}
			<style jsx>{`
				div img {
					width: auto;
					height: 22px;
					margin: 0.7em;
				}
				p {
					font-size: 0.8em;
					color: ${velaGreen};
					margin: 4px 0 0 0;
				}
				
				div {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					font-weight: 600;
					border-radius: 0.6em;
					transition: 0.5s;
					font-size: 0.8em;
					min-width: 12em;
					margin: 0.3em 0.6em 0.3em 0;
					cursor: pointer;
					color: ${midGray};
					background-color: ${offWhite};
					border: 1px solid ${lightGray};
					padding: 0.7em;
					${selected &&
						`
					color: ${velaGreen};
					background-color: ${white};
					cursor: default;
					border: 1px solid ${velaGreen};
					`}
				}
			`}</style>
		</div>
	);
};

Control.propTypes = {
	item: PropTypes.object,
	type: PropTypes.string,
	selected: PropTypes.bool,
	onSelect: PropTypes.func,
};

export default Control;