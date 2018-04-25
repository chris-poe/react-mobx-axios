import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { pulse } from 'react-animations';
import LoadingIndicator from './LoadingIndicator';
import theme from './theme';

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 50,
		flexDirection: 'row',
		aignItems: 'center',
		backgroundColor: theme.colors.blue,
		border: 0,
		paddingRight: 20,
		paddingLeft: 20,
		borderRadius: 0,
	},
	hover: {
    ':hover': {
        cursor: 'pointer',
    },
  },
  active: {
  	':active': {
    	animationName: pulse,
    	animationDuration: '0.25s',
    },
  },
	rounded: {
		borderRadius: 5,
	},
	disabled: {
		backgroundColor: theme.colors.gray,
	},
	text: {
		color: theme.colors.white,
		fontWeight: 'bold',
	},
})

const Button = ({
	onClick,
	text,
	rounded,
	animate,
	disabled,
	loading,
	...props
}) => {

	return (
		<button 
		onClick={onClick}
		className={css(
			styles.button,
			styles.hover,
			(animate && !disabled && !loading) && styles.active,
			(disabled || loading) && styles.disabled,
			rounded && styles.rounded,
		)}
		disabled={(disabled || loading)}>
			{!loading && (
				<span className={css(styles.text)}>{text}</span>
			)}
			{loading && (
				<LoadingIndicator size={25} />
			)}
		</button>
	)
}

export default Button;
