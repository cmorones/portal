
		var essb_postcount_data = {
		'ajax_url': 'http://musica.unam.mx/wp-admin/admin-ajax.php',
		'post_id': '10291'
	};
	jQuery(document).bind('essb_selfpostcount_action', function (e, service, post_id) {		
		post_id = String(post_id);
	jQuery.post(essb_postcount_data.ajax_url, {
	'action': 'essb_self_postcount',
	'post_id': post_id,
	'service': service,
	'nonce': '5e0714c7f1'
	}, function (data) { if (data) {
		//alert(data);
	}},'json');});
	function essb_self_postcount(service, post_id) {

	jQuery(document).trigger('essb_selfpostcount_action',[service, post_id]);
	};
	var wnd;function essb_window_stat(oUrl, oService, oCountID) { var wnd; var w = 800 ; var h = 500;  if (oService == "twitter") { w = 500; h= 300; } var left = (screen.width/2)-(w/2); var top = (screen.height/2)-(h/2); if (oService == "twitter") { wnd = window.open( oUrl, "essb_share_window", "height=300,width=500,resizable=1,scrollbars=yes,top="+top+",left="+left ); }  else { wnd = window.open( oUrl, "essb_share_window", "height=500,width=800,resizable=1,scrollbars=yes,top="+top+",left="+left ); } essb_handle_stats(oService, oCountID); essb_self_postcount(oService, oCountID); var pollTimer = window.setInterval(function() {if (wnd.closed !== false) { window.clearInterval(pollTimer); essb_smart_onclose_events(oService, oCountID);}}, 200);  }; function essb_pinterenst_stat(oCountID) { essb_handle_stats('pinterest', oCountID); var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)};function essb_window(oUrl, oService, oCountID) { var wnd; var w = 800 ; var h = 500;  if (oService == "twitter") { w = 500; h= 300; } var left = (screen.width/2)-(w/2); var top = (screen.height/2)-(h/2);  if (oService == "twitter") { wnd = window.open( oUrl, "essb_share_window", "height=300,width=500,resizable=1,scrollbars=yes,top="+top+",left="+left ); }  else { wnd = window.open( oUrl, "essb_share_window", "height=500,width=800,resizable=1,scrollbars=yes,top="+top+",left="+left ); } essb_self_postcount(oService, oCountID); var pollTimer = window.setInterval(function() {if (wnd.closed !== false) { window.clearInterval(pollTimer); essb_smart_onclose_events(oService, oCountID);}}, 200); };function essb_pinterenst() {var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)};var essb_count_data = {
				'ajax_url': 'http://musica.unam.mx/wp-admin/admin-ajax.php'
		};function essb_smart_onclose_events(oService, oPostID) { if (typeof (essbasc_popup_show) == 'function') {   essbasc_popup_show(); } if (typeof essb_acs_code == 'function') {   essb_acs_code(oService, oPostID); } }function essb_mailer(oTitle, oMessage, oSiteTitle, oUrl, oImage, oPermalink) { vex.defaultOptions.className = 'vex-theme-os'; vex.dialog.open({ message: 'Share this with a friend', input: '' + '<div class="vex-custom-field-wrapper"><strong>Your Email</strong></div>'+ '<input name="emailfrom" type="text" placeholder="Your Email" required />' + '<div class="vex-custom-field-wrapper"><strong>Recipient Email</strong></div>'+ '<input name="emailto" type="text" placeholder="Recipient Email" required />' + '<div class="vex-custom-field-wrapper" style="border-bottom: 1px solid #aaa !important; margin-top: 10px;"><h3></h3></div>'+ '<div class="vex-custom-field-wrapper" style="margin-top: 10px;"><strong>Subject</strong></div>'+ '<input name="emailsubject" type="text" placeholder="Subject" required value="'+oTitle+'" />' + '<div class="vex-custom-field-wrapper" style="margin-top: 10px;"><strong>Message</strong></div>'+ '<textarea name="emailmessage" placeholder="Message" required" rows="6" >'+oMessage+'</textarea>' + '', buttons: [ jQuery.extend({}, vex.dialog.buttons.YES, { text: 'Send' }), jQuery.extend({}, vex.dialog.buttons.NO, { text: 'Cancel' }) ], callback: function (data) { if (data.emailfrom && typeof(data.emailfrom) != "undefined") { var c = typeof(data.captchacode) != "undefined" ? data.captchacode : ""; essb_sendmail_ajax1725256642(data.emailfrom, data.emailto, data.emailsubject, data.emailmessage, c, oSiteTitle, oUrl, oImage, oPermalink); } } }); }; function essb_sendmail_ajax1725256642(emailfrom, emailto, emailsub, emailmessage, c, oSiteTitle, oUrl, oImage, oPermalink) { var get_address = "http://musica.unam.mx/wp-content/plugins/easy-social-share-buttons/public/essb-mail.php?from="+emailfrom+"&to="+emailto+"&sub="+emailsub+"&message="+emailmessage+"&t="+oSiteTitle+"&u="+oUrl+"&img="+oImage+"&p="+oPermalink+"&c="+c+"&salt=1425862365"; jQuery.getJSON(get_address) .done(function(data){ alert(data.message); }); };function essb_mailform_1210289188() { essb_self_postcount('mail', 10291); essb_mailer('Visit this site http://musica.unam.mx', 'Hi, this may be intersting you: \"Orquesta Sinfónica Estanislao Mejía de la Facultad de Música\"! This is the link: http://musica.unam.mx/events/orquesta-sinfonica-estanislao-mejia-de-la-facultad-de-musica-4/', 'Orquesta Sinfónica Estanislao Mejía de la Facultad de Música', 'http://musica.unam.mx', '', 'http://musica.unam.mx/events/orquesta-sinfonica-estanislao-mejia-de-la-facultad-de-musica-4/', ''); };