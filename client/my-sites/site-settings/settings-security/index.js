/**
 * External dependencies
 *
 * @format
 */

import page from 'page';

/**
 * Internal dependencies
 */
import controller from './controller';
import settingsController from 'my-sites/site-settings/settings-controller';
import mySitesController from 'my-sites/controller';
import { makeLayout, render as clientRender } from 'controller';

export default function() {
	page(
		'/settings/security/:site_id',
		mySitesController.siteSelection,
		mySitesController.navigation,
		settingsController.setScroll,
		settingsController.siteSettings,
		controller.security,
		makeLayout,
		clientRender
	);
}
