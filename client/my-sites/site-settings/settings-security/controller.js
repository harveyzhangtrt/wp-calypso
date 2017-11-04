/**
 * External dependencies
 *
 * @format
 */

import React from 'react';
import SecurityMain from 'my-sites/site-settings/settings-security/main';

export default {
	security( context, next ) {
		context.primary = React.createElement( SecurityMain );
		next();
	},
};
