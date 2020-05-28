// c.crickety.com writepost script
// 
// CHNG-ALL-MRKD ::WEBSITE:: !
///////// VARS ::WEBSITE:: ////////////
var siteRoot = "https://www.crickety.com/";
var siteUsrDir = "member/"; // with trailing slash!
var siteName = "Crickety.com";
var writepost_frmGood_dest = "https://www.crickety.com/";
var writepostURL = "https://a.crickety.com/writepost/"; // if index.html then dir-trailslash must!
var gRedirURL = 'https://a.crickety.com/signin/auth/';
var staticDir = "/a_common/";
var signinHTML = '<h1>Please Log-In...</h1>';
var submitWarn = ''; /// msg before Submit btn
var submitMsgOK = 'Thank you! Your post will now be submitted and should be published soon!';
// 
var goApCI = '\x35\x32\x35\x32\x35\x38\x30\x31\x37\x31\x33\x37\x2D\x64\x67\x64\x72\x69\x34\x70\x33\x72\x6D\x6E\x69\x68\x30\x62\x62\x62\x6B\x70\x30\x62\x6D\x36\x65\x31\x6E\x6C\x66\x36\x69\x6A\x6A\x2E\x61\x70\x70\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D';
var scGoAdd = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x31\x62\x76\x68\x47\x6E\x42\x75\x64\x38\x32\x68\x70\x4E\x37\x4F\x56\x63\x6B\x62\x45\x77\x77\x61\x62\x42\x6F\x74\x64\x72\x74\x7A\x73\x65\x49\x4B\x5A\x4A\x31\x66\x73\x6C\x37\x79\x44\x2D\x68\x61\x5F\x2F\x65\x78\x65\x63";
var doGoAdd = '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x63\x6D\x43\x48\x6F\x6B\x6E\x67\x32\x75\x77\x58\x4C\x68\x38\x6B\x6E\x67\x52\x68\x74\x43\x6B\x7A\x55\x7A\x6E\x65\x6F\x2D\x47\x4C\x6D\x68\x71\x48\x48\x41\x4E\x69\x37\x5A\x49\x4C\x61\x32\x4E\x51\x2F\x66\x6F\x72\x6D\x52\x65\x73\x70\x6F\x6E\x73\x65';
var frmElms = {
	"post_subject": "1086184618",
	"post_text": "1261143776",
	"post_id": "1229444498",
	"post_time": "15022060",
	"post_gUserNickName": "787973752",
	"post_gUserEmail": "350910522",
	"post_gUserId": "818193932",
	"post_forumId": "1765174204",
	"user_level": "737832861",
	"user_banned": "425750218",
	"user_from": "467679806",
	"user_aim": "577644196",
	"user_id": "2053925393",
};
////////
///////////// REST SAME IN ALL ///////////////
// 
///////// FUNCS ///////////
function loadingBar() {
	$('#content').prepend('<div id="loadingDoneBar"><hr/><div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> Working... </div> <hr/> </div>');
}

function loadingDone() {
	$('#loadingDoneBar').remove();
}

function writepost_frmValidate() {
	/// v2
	var formErrors = false;
	var title = document.getElementById('entry_' + frmElms.post_subject).value;
	var img = document.getElementById('nonForm_img').value;
	var bodytext = document.getElementById('entry_' + frmElms.post_text).value;
	///
	var lng2tst = bodytext.replace(/\s/gm, " ").length;
	// console.log(bodytext);
	// console.log(lng2tst);
	if (lng2tst < 200) {
		// formErrors = " Very short body text! Please write some more!   ";
	}
	var emlch = document.getElementById('entry_' + frmElms.post_gUserEmail).value;
	if (emlch.match(/@/)) {} else {
		return false;
	}
	if (formErrors) {
		// alert(formErrors);
		$('#formErrorAlert').remove();
		$('#postSubmit').before('<div id="formErrorAlert" class="alert alert-danger" role="alert"> <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span class="sr-only">Error:</span>' + formErrors + '</div>');
		return false;
	} else {
		/// join img with bodytext
		document.getElementById('entry_' + frmElms.post_text).value += '[' + img + ']';
		/// push update-profile into user_from
		var user_from = "";
		try {
			user_from =
				document.getElementById('updateProfile_0').value.trim().replace(/\|/igm, "") + '|' +
				document.getElementById('updateProfile_1').value.trim().replace(/\|/igm, "") + '|' +
				document.getElementById('updateProfile_2').value.trim().replace(/\|/igm, "") + '|' +
				document.getElementById('updateProfile_3').value.trim().replace(/\|/igm, "") + '|' +
				document.getElementById('updateProfile_4').value.trim().replace(/\|/igm, "") + '|' +
				document.getElementById('updateProfile_5').value.trim().replace(/\|/igm, "") +
				'';
		} catch (e) {}
		document.getElementById('entry_' + frmElms.user_from).value = user_from;
		///  
		loadingBar();
		writepost_frmGood();
	}
};

function writepost_frmGood() {
	document.getElementById('writepost').style.display = "none"; // must be hidden, not removed!
	document.getElementById('footer').style.display = "none";
	$('#submitMsgOK').remove();
	$('#content').append('<div id="submitMsgOK" class="well"><div class="alert alert-success" role="alert">' + submitMsgOK + ' <p><a class="btn btn-success btn-lg" role="button" href="' + writepost_frmGood_dest + '">OK</a></p></div></div>');
	loadingDone();
	// alert(submitMsgOK);
	// window.location.href = writepost_frmGood_dest;
};

function twAuthFailed() {
	loadingDone();
	window.location.href = writepostURL;
}

function twAuth_login() {
	$('#signinWrap').hide();
	loadingBar();
	setTimeout(function() {
		twAuthFailed();
	}, 5000);
}

function fbAuthFailed() {
	loadingDone();
	window.location.href = writepostURL;
}

function fbAuth_login() {
	$('#signinWrap').hide();
	loadingBar();
	setTimeout(function() {
		fbAuthFailed();
	}, 5000);
}
/**
 *
 * gAuth
 *
 */
function gAuth_login() {
	// If there's an access token, try an API request.
	// Otherwise, start OAuth 2.0 flow.
	var params = JSON.parse(localStorage.getItem('oauth2-params'));
	if (params && params['access_token']) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET',
			'https://www.googleapis.com/oauth2/v3/userinfo?' +
			'access_token=' + params['access_token']);
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState === 4 && xhr.status === 200) {
				//// AUTH SUCCESS, store userinfo
				// 
				///// we're back to gRedirURL, hide signinbutton and display progress bar while subq fetches...
				$('#signinWrap').hide();
				loadingBar();
				// 
				localStorage.setItem('userLoggedIn', xhr.response);
				var userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
				///////////////////
				//// abort if no email available
				if (userLoggedIn.hasOwnProperty('email')) {} else {
					window.location.href = gRedirURL;
				}
				///// NAME ///////
				//////// v2 algo /////////
				var email = (userLoggedIn.hasOwnProperty('email')) ? userLoggedIn.email : "a" + "no" + "nymo" + "us" + "@" + "g" + "ma" + "il." + "co" + "m";
				var name = "";
				//// c-wht-nms-v-hv-avlble
				var ga_name = (userLoggedIn.hasOwnProperty('name') && userLoggedIn.name.match(/.{2,}/)) ? userLoggedIn.name : "";
				var ga_given_name = (userLoggedIn.hasOwnProperty('given_name') && userLoggedIn.given_name.match(/.{1,}/)) ? userLoggedIn.given_name : "";
				var ga_family_name = (userLoggedIn.hasOwnProperty('family_name') && userLoggedIn.family_name.match(/.{1,}/)) ? userLoggedIn.family_name : "";
				//// do-v-hv-good-gvn-or-full?
				var fullname = ga_given_name + ' ' + ga_family_name;
				// console.log(fullname);
				if (fullname.match(/.{3,}/)) {
					//// v-hv-good-fullnme,then-tk-it
					name = fullname;
				} else {
					//// fllnm-faild-see-if-nm-good
					if (ga_name.match(/.{2,}/)) {
						name = ga_name;
					} else {
						/// all-faild-mk-emailid-the-name-or-Anonymous
						name = email.match(/^([^@]*)@/)[1];
					}
				}
				//////// /v2 algo /////////
				//// v1 disable ////
				// var email = userLoggedIn.email;
				//// if no name key, get from email (which should always exist because userinfo.email is endpoint)
				// var name = (userLoggedIn.hasOwnProperty('name')) ? userLoggedIn.name : email.match(/^([^@]*)@/)[1];
				//// /v1 disable ////
				///// /NAME ///////
				var sub = userLoggedIn.sub;
				var picture = userLoggedIn.picture;
				var qrstr = '?user_gUserNickName=' + name + '&user_gUserId=' + sub + '&user_gUserEmail=' + email + '&user_aim=' + picture + '&callback=?'; //// <--- this MUST for CORS (see app's source)
				// alert(qrstr);
				localStorage.setItem('temp', qrstr); // test
				//// use app to see user is member or make it if not
				var subq = scGoAdd + qrstr;
				// 
				$.ajax({
					method: "GET",
					dataType: "json",
					cache: true,
					url: subq
				})
					.done(function(json_file) {
						localStorage.setItem('memberInfo', JSON.stringify(json_file));
						// console.log(json_file);
						window.location.href = writepostURL;
					});
				//  
				// var a = JSON.parse(localStorage.getItem('userLoggedIn'));
				// var a = JSON.parse(xhr.response);
				// console.log(a);
				// console.log("this" + JSON.stringify(a));
				// console.log(a['picture']);
			} else if (xhr.readyState === 4 && xhr.status === 401) {
				// Token invalid, so prompt for user permission.
				gAuth_oauth2SignIn();
			}
		};
		xhr.send(null);
	} else {
		gAuth_oauth2SignIn();
	}
}

function gAuth_oauth2SignIn() {
	/*
	 * Create form to request access token from Google's OAuth 2.0 server.
	 */
	// Google's OAuth 2.0 endpoint for requesting an access token
	var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
	// Create element to open OAuth 2.0 endpoint in new window.
	var form = document.createElement('form');
	form.setAttribute('method', 'GET'); // Send as a GET request.
	form.setAttribute('action', oauth2Endpoint);
	// Parameters to pass to OAuth 2.0 endpoint.
	var params = {
		'client_id': goApCI,
		'redirect_uri': gRedirURL,
		'scope': 'https://www.googleapis.com/auth/userinfo.email',
		'state': 'auth_request_done',
		'include_granted_scopes': 'true',
		'response_type': 'token'
	};
	// Add form parameters as hidden input values.
	for (var p in params) {
		var input = document.createElement('input');
		input.setAttribute('type', 'hidden');
		input.setAttribute('name', p);
		input.setAttribute('value', params[p]);
		form.appendChild(input);
	}
	// Add form to page and submit it to open the OAuth 2.0 endpoint.
	document.body.appendChild(form);
	form.submit();
}
/**
 *
 * /gAuth
 *
 */
function htmlLogin() {
	return '' +
		'<div class="page-header"> ' +
		'<div id="signinWrap">' + ///// used to hide button upon auth success
		signinHTML +
		// '<h3>Simple &amp; Easy One-Click Sign-In!<br/>  Use your existing account on</h3>' +
		'<style>.signin img {width:100%;max-width:300px;margin:5px 0;}</style>' +
		// go
		'<a id="signinbutton" onclick="gAuth_login();" class="signin"><img alt="Sign In with Google" role="button" src="' + staticDir + 'go_si.png"  /></a>' +
		// fb
		// '<br/>' +
		// '<a id="signinbutton_2" onclick="fbAuth_login();" class="signin"><img alt="Sign In with Facebook" role="button" src="' + staticDir + 'fb_si.png"  /></a>' +
		// tw
		// '<br/>' +
		// '<a id="signinbutton_3" onclick="twAuth_login();" class="signin"><img alt="Sign In with Twitter" role="button" src="' + staticDir + 'tw_si.png"  /></a>' +
		'</div>' +
		'</div>' +
		'';
};

function htmlUpdateForm(values) {
	loadingDone();
	var a =
		'<div style="display:none;" id="updateProfileFormContainer" class="panel panel-success">' +
		'<div class="panel-heading"><h4>Info to be shown on your ' + siteName + ' profile page</h4></div>' +
		'<div class="panel-body">' +
		'<form onSubmit="document.getElementById(\'updateProfileFormContainer\').style=\'display:none\';return false;" id="updateProfileForm">' +
		// user_from +
		'<label>Your city, country</label><input class="form-control" id="updateProfile_0" value="' + (values[0] || "") + '" type="text"/>' +
		'<label>Your occupation</label><input class="form-control" id="updateProfile_1" value="' + (values[1] || "") + '" type="text"/>' +
		'<label>Your interests</label><input class="form-control" id="updateProfile_2" value="' + (values[2] || "") + '" type="text"/>' +
		// 
		'<label>Upto 3 links (e.g. your Blog, Twitter, Facebook, etc)</label>' +
		'<input placeholder="https://" class="form-control" id="updateProfile_3" value="' + (values[3] || "") + '" type="text"/>' +
		'<input placeholder="https://" class="form-control" id="updateProfile_4" value="' + (values[4] || "") + '" type="text"/>' +
		'<input placeholder="https://" class="form-control" id="updateProfile_5" value="' + (values[5] || "") + '" type="text"/>' +
		// 
		'<input class="btn btn-success" type="submit" name="submit" value="Done"/> <small>Will be updated when you Submit your post below.</small>' +
		'</form>' +
		'</div>' +
		'</div>' +
		'';
	$("#updateProfile").html(a);
	document.getElementById('updateProfileFormContainer').style = 'display:block';
}

function updateClick(user_id, user_from) {
	var b = "";
	//// EXSTNG USER, GET USRDATA FRM THR PG 
	if (user_id.match(/[0-9]+/)) {
		loadingBar();
		$.ajax({
			url: siteRoot + siteUsrDir + user_id.trim() + '.html',
			success: function(html) {
				var user_from_existing = $(html).filter('[data-usrinf]').attr('data-usrinf'); //// FROM <meta data-usrinf=""/>
				var values = user_from_existing.split('|');
				htmlUpdateForm(values);
			},
			error: function(xhr, status, error) {
				//// GET FRM USERS SNC AJAX FAILED... IF ANY THERE
				var values = user_from.split('|');
				htmlUpdateForm(values);
			}
		});
	};
}

function htmlUpdateProfile(user_from, user_id) {
	var a = '' +
		'<style>.panel {border-width:4px;}</style>' +
		'<a role="button" class="btn btn-default" onclick="updateClick(\'' + user_id + '\',\'' + user_from + '\');return false;">Update Profile</a>' +
		'<div id="updateProfile"></div>' +
		'';
	return a;
}

function htmlGreeter(newUser, siteName, user_aim, user_gUserNickName) {
	var a = '' +
		'<h3>Welcome  ' +
		(newUser == "yes" ? ' to ' + siteName + ', ' : 'back, ') + ///// 
		'<span>' +
		(user_aim.match(/http/) ? '<img style="height:1em;display:inline-block;vertical-align:middle;" src="' + user_aim + '"/> ' : '') +
		user_gUserNickName + '</span>!</h3>' +
		' <h1>Write a Post</h1>' +
		'';
	return a;
}

function htmlWritePost(post_id, post_time, post_gUserNickName, post_gUserEmail, post_gUserId, post_forumId, user_level, user_banned, user_from, user_aim, user_id) {
	var a = '' +
		'<iframe name="OUR_hidden_iframe" id="OUR_hidden_iframe" style="display:none;" onload=""></iframe>' +
		'<form onSubmit="return writepost_frmValidate()" action="' + doGoAdd + '" name="unique_frm_name" id="htmlWritePostForm" target="OUR_hidden_iframe">' +
		'<!-- VISIBLE -->' +
		'<div class="form-group">' +
		'<label>Title</label>' +
		'<input class="form-control" name="entry.' + frmElms.post_subject + '" id="entry_' + frmElms.post_subject + '" data-comment="post_subject" value="" type="text"/>' +
		'</div>' +
		///// CUSTOM NON-FORM ADDITIONAL (joined with body in writepost_frmValidate() )
		'<div class="form-group">' +
		'<label>Image (URL)</label>' +
		'<input class="form-control" name="nonForm_img" id="nonForm_img" data-comment="nonForm_img" value="" type="text"/>' +
		'</div>' +
		/////
		'<div class="form-group">' +
		'<label>Body</label>' +
		'<textarea class="form-control" name="entry.' + frmElms.post_text + '" id="entry_' + frmElms.post_text + '" data-comment="post_text" autocomplete="off" rows="13" cols="40" class=""></textarea>' +
		'</div>' +
		'<!-- HIDDEN -->' +
		'<input name="entry.' + frmElms.post_id + '" id="entry_' + frmElms.post_id + '" data-comment="post_id" value="' + post_id + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.post_time + '" id="entry_' + frmElms.post_time + '" data-comment="post_time" value="' + post_time + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.post_gUserNickName + '" id="entry_' + frmElms.post_gUserNickName + '" data-comment="post_gUserNickName" value="' + post_gUserNickName + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.post_gUserEmail + '" id="entry_' + frmElms.post_gUserEmail + '" data-comment="post_gUserEmail" value="' + post_gUserEmail + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.post_gUserId + '" id="entry_' + frmElms.post_gUserId + '" data-comment="post_gUserId" value="' + post_gUserId + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.post_forumId + '" id="entry_' + frmElms.post_forumId + '" data-comment="post_forumId" value="' + post_forumId + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.user_level + '" id="entry_' + frmElms.user_level + '" data-comment="user_level" value="' + user_level + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.user_banned + '" id="entry_' + frmElms.user_banned + '" data-comment="user_banned" value="' + user_banned + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.user_from + '" id="entry_' + frmElms.user_from + '" data-comment="user_from" value="' + user_from + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.user_aim + '" id="entry_' + frmElms.user_aim + '" data-comment="user_aim" value="' + user_aim + '" type="hidden"/>' +
		'<input name="entry.' + frmElms.user_id + '" id="entry_' + frmElms.user_id + '" data-comment="user_id" value="' + user_id + '" type="hidden"/>' +
		'<!-- SUBMIT -->' +
		'<input id="postSubmit" class="btn btn-primary" type="submit" name="submit" value="Submit"/>' +
		'<p>' + submitWarn + '</p>' +
		'</form>' +
		'';
	return a;
};
/////
///////// /FUNCS ///////////
/////
////////////////////////////////////
///////////////// EXEC /////////////
////////////////////////////////////
/////
////////// JQ EXEC //////////
/////
$(document).ready(function() {
	// v2
	/////// auth/index.html 
	if (ThsBlg_pg == 'auth') {
		$('#gAuth_login').html('' +
			htmlLogin() +
			'');
		// setTimeout(function() {
		// }, 1000);
		// 
	}
	if (ThsBlg_pg == 'writepost') {
		///// show write form if Member else take to auth page
		try {
			if (localStorage.getItem('userLoggedIn') && localStorage.getItem('memberInfo')) {
				var userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
				// console.log(userLoggedIn);
				var memberInfo = JSON.parse(localStorage.getItem('memberInfo'));
				// console.log(memberInfo);
				// 
				// 
				// 
				// if (userLoggedIn.hasOwnProperty('name')) {
				// 	console.log('SUCCESS');
				// } else {
				// 	console.log('FAILURE');
				// }
				// user_id: 91
				// 
				var post_id = ""; /// todo: auto? how to determine this?
				var post_time = JSON.parse(JSON.stringify(new Date())).replace(/T/, " ").replace(/\..*/, "") || ""; // format 2007-07-01 1:01:01
				var post_gUserNickName = memberInfo.user_gUserNickName;
				var post_gUserEmail = userLoggedIn.email; // email is NOT in memberInfo returned by app
				var post_gUserId = memberInfo.user_gUserId; //memberInfo.user_id;
				var post_forumId = "99"; // todo
				var user_level = memberInfo.user_level;
				var user_banned = memberInfo.user_banned;
				var user_from = memberInfo.user_from || "";
				var user_aim = memberInfo.user_aim || "";
				var user_from = memberInfo.user_from || "";
				var user_id = memberInfo.user_id || "";
				// console.log(post_id + ' ' + post_time + ' ' + post_gUserNickName, post_gUserEmail + ' ' + post_gUserId + ' ' + post_forumId, user_level + ' ' + user_banned + ' ' + user_from + ' ' + user_aim)
				$('#writepost').html('' +
					// htmlLogin() +
					htmlUpdateProfile(user_from, user_id) +
					htmlGreeter(
						memberInfo.newUser,
						siteName,
						user_aim,
						memberInfo.user_gUserNickName
					) +
					// 					'<h3>Welcome  ' +
					// 					(memberInfo.newUser == "yes" ? ' to ' + siteName + ', ' : 'back, ') + 
					// 					'<span>' +
					// 					(memberInfo.user_aim.match(/http/) ? '<img style="height:1em;display:inline-block;vertical-align:middle;" src="' + memberInfo.user_aim + '"/> ' : '') +
					// memberInfo.user_from
					// 					+
					// 					memberInfo.user_gUserNickName + '</span>!<h3> <h1>Write a Post</h1>' +
					htmlWritePost(post_id, post_time, post_gUserNickName, post_gUserEmail, post_gUserId, post_forumId, user_level, user_banned, user_from, user_aim, user_id) +
					'');
				////////////////////
				var textarea = document.getElementById('entry_' + frmElms.post_text);
				sceditor.create(textarea, {
					emoticonsEnabled: false,
					toolbar: 'bold,italic|bulletlist,orderedlist,quote|image,youtube|link,unlink|removeformat,maximize',
					format: 'xhtml',
					style: 'https://cdnjs.cloudflare.com/ajax/libs/sceditor/2.1.3/themes/default.min.css'
				});
				//////////////////////
			} else {
				window.location.href = gRedirURL;
			}
		} catch (e) {
			window.location.href = gRedirURL;
		}
		////////
	}
	////
});
/////
////////// /JQ EXEC //////////
/////