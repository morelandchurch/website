jQuery(document).ready(function() {
	jQuery('#remove-user-delete,#wp-ffpc.active, #infinitewp-client.active,#united-methodist-content-aggregator.active,#better-wp-security.active,input#upgrade.button,form.upgrade a.button, ul.core-updates p,#flexicache,#plugin-lock,#advanced-access-manager').remove();
	//remove stuff on the admin page that we dont want noobs to see
	jQuery('th:contains(Membership)').parent().hide();
	jQuery('th:contains(Address)').parent().hide();
	jQuery('th:contains(Role)').parent().hide();
});
