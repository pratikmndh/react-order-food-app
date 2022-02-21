import React, { Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<Fragment>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Delicious Meals
					</Typography>
					<HeaderCartButton />
				</Toolbar>
			</AppBar>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='Delicious food' />
			</div>
		</Fragment>
	);
};

export default Header;
